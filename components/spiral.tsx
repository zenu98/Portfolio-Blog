// components/spiral-gallery.tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "@/lib/shader";

const CONFIG = {
  totalImages: 10, // 사용할 이미지 총 개수
  tilesPerRevolution: 15, // 한 바퀴(360도)에 배치되는 타일 수 (많을수록 촘촘)
  revolutions: 3, // 나선 총 회전 수 (높을수록 나선이 길어짐)
  startRadius: 4.5, // 나선 시작 반지름 (클수록 넓게 시작)
  endRadius: 3.5, // 나선 끝 반지름 (작을수록 안쪽으로 좁아짐)
  tileHeightRatio: 1.0, // 타일 세로 비율 (클수록 이미지가 세로로 길어짐)
  tileSegments: 24, // 타일 곡면 분할 수 (높을수록 곡면이 부드러워짐)
  spiralGap: 0.5, // 타일 사이 간격 (클수록 이미지 간격 넓어짐)
  tileOverlap: 0.005, // 타일 가로 겹침 정도 (클수록 옆 타일과 겹침)
  cameraZ: 9, // 카메라 거리 (클수록 멀어져 이미지가 작게 보임)
  cameraSmoothing: 0.075, // 카메라 이동 부드러움 (작을수록 더 부드럽게 따라옴)
  baseRotationSpeed: 0.002, // 기본 자동 회전 속도
  scrollRotationMultiplier: 0.0035, // 스크롤 시 회전 속도 배율
  rotationDecay: 0.9, // 회전 감속 비율 (1에 가까울수록 천천히 멈춤)
  scrollMultiplier: 1.25, // 스크롤 이동량 배율 (클수록 카메라가 빠르게 이동)
  cameraYMultiplier: 0.2, // 스크롤 시 카메라 Y축 이동 비율
  parallaxStrength: 0.1, // 마우스 시차 효과 강도 (클수록 마우스 따라 많이 움직임)
};

const SpiralGallery = ({ images }: { images: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || images.length === 0) return;

    const totalTiles = Math.floor(
      CONFIG.tilesPerRevolution * CONFIG.revolutions,
    );
    const angleStep = (Math.PI * 2) / CONFIG.tilesPerRevolution;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      90,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.z = CONFIG.cameraZ;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const textures = images.map((src) =>
      textureLoader.load(src, (t) => {
        t.minFilter = THREE.LinearMipmapLinearFilter;
        t.anisotropy = renderer.capabilities.getMaxAnisotropy();
      }),
    );

    const cameraPositionUniform = {
      value: new THREE.Vector3(0, 0, CONFIG.cameraZ),
    };

    const tileEdgesY = [0];
    for (let i = 0; i < totalTiles; i++) {
      const progress = i / totalTiles;
      const radius =
        CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * progress;
      const arcWidth = (2 * Math.PI * radius) / CONFIG.tilesPerRevolution;
      const tileHeight = arcWidth * CONFIG.tileHeightRatio;
      tileEdgesY.push(
        tileEdgesY[i] -
          (tileHeight + CONFIG.spiralGap) / CONFIG.tilesPerRevolution,
      );
    }

    const spiral = new THREE.Group();
    // spiral.rotation.x = 0.3;
    spiral.rotation.z = 0.2;
    scene.add(spiral);

    for (let i = 0; i < totalTiles; i++) {
      const progress = i / totalTiles;
      const radius =
        CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * progress;
      const arcWidth = (2 * Math.PI * radius) / CONFIG.tilesPerRevolution;
      const tileHeight = arcWidth * CONFIG.tileHeightRatio;
      const tileAngle = arcWidth / radius + CONFIG.tileOverlap;

      const centerY = (tileEdgesY[i] + tileEdgesY[i + 1]) / 2;
      const slope = tileEdgesY[i + 1] - tileEdgesY[i];

      const positions: number[] = [];
      const uvCoords: number[] = [];
      const indices: number[] = [];
      const segments = CONFIG.tileSegments;

      for (let row = 0; row <= 1; row++) {
        for (let col = 0; col <= segments; col++) {
          const angle = (col / segments - 0.5) * tileAngle;
          positions.push(
            Math.sin(angle) * radius,
            (row - 0.5) * tileHeight + (col / segments - 0.5) * slope,
            Math.cos(angle) * radius,
          );
          uvCoords.push(col / segments, row);
        }
      }

      for (let col = 0; col < segments; col++) {
        const current = col;
        const below = current + segments + 1;
        indices.push(
          current,
          below,
          current + 1,
          below,
          below + 1,
          current + 1,
        );
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3),
      );
      geometry.setAttribute(
        "uv",
        new THREE.Float32BufferAttribute(uvCoords, 2),
      );
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uMap: { value: textures[i % images.length] },
          uCameraPosition: cameraPositionUniform,
        },
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = centerY;

      const tile = new THREE.Group();
      tile.rotation.y = i * angleStep;
      tile.add(mesh);
      spiral.add(tile);
    }

    const spiralHeight = Math.abs(tileEdgesY[totalTiles]);

    let scrollY = 0;
    let spinVelocity = 0;
    let mouseX = 0,
      mouseY = 0,
      smoothX = 0,
      smoothY = 0;
    let isMobile = window.innerWidth < 1000;

    const handleScroll = () => {
      scrollY = window.pageYOffset;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      isMobile = window.innerWidth < 1000;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.position.z = isMobile ? 15 : CONFIG.cameraZ;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const progress = Math.min(
        scrollY / (window.innerHeight * CONFIG.scrollMultiplier),
        1,
      );
      camera.position.y +=
        (-(progress * spiralHeight * CONFIG.cameraYMultiplier) -
          camera.position.y) *
        CONFIG.cameraSmoothing;

      if (!isMobile) {
        smoothX += (mouseX - smoothX) * 0.02;
        smoothY += (mouseY - smoothY) * 0.02;
        spiral.rotation.x = smoothY * CONFIG.parallaxStrength; // 초기값 유지
        spiral.rotation.z = 0.2 + -smoothX * CONFIG.parallaxStrength * 0.3; // 초기값 유지
      }

      cameraPositionUniform.value.copy(camera.position);
      spiral.rotation.y += CONFIG.baseRotationSpeed + spinVelocity;
      spinVelocity *= CONFIG.rotationDecay;

      renderer.render(scene, camera);
    };

    animate();

    // 클린업
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default SpiralGallery;
