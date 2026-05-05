"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const HomeClient = ({ children }: { children: React.ReactNode[] }) => {
  const lenisRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // 페이지 완전 로드 후 refresh
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    // 약간의 딜레이 추가
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(
    () => {
      const sections = document.querySelectorAll("section");
      const sectionClasses = ["section-one", "section-two", "section-three"];
      sections.forEach((section, index) => {
        const container = section.querySelector(".page-container");

        gsap.to(container, {
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        });
        ScrollTrigger.create({
          trigger: section,
          start: "top 64px",
          end: "top top",
          onEnter: () => {
            document
              .querySelector("header")
              .classList.remove(sectionClasses[index - 1]);
          },
          onLeave: () => {
            document
              .querySelector("header")
              .classList.add(sectionClasses[index]);
          },
          onEnterBack: () => {
            document
              .querySelector("header")
              .classList.remove(sectionClasses[index]);
          },
          onLeaveBack: () => {
            document
              .querySelector("header")
              .classList.add(sectionClasses[index - 1]);
          },
        });
        if (index === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",

          pin: true,
          pinSpacing: false,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <main ref={containerRef}>
        <section className="section">{children[0]}</section>
        <section className="section ">{children[1]}</section>
        <section className="section">{children[2]}</section>
      </main>
    </>
  );
};

export default HomeClient;
