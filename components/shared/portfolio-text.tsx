"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const letters = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];
const multipliers = [-0.2, -0.2, -0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2];
const basicScale = [1.2, 1.2, 1.1, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0];

const PortfolioText = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const spans = containerRef.current.querySelectorAll(".letter");

      gsap.set(spans, { transformOrigin: "center top" });

      window.addEventListener("mousemove", (e) => {
        const { clientX } = e;
        const distY = clientX / window.innerWidth;

        spans.forEach((span, i) => {
          const scale = basicScale[i] + distY * multipliers[i];

          gsap.to(span, {
            scaleY: scale,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full relative font-english text-white font-black "
    >
      {letters.map((char, i) => (
        <div
          key={i}
          className="letter text-[180px] sm:text-[300px] lg:text-[500px] xl:text-[600px] 2xl:text-[750px] 3xl:text-[1000px]"
          style={{
            position: "absolute",
            top: 0,
            left: `${(i / letters.length) * 100}%`,
            lineHeight: 1,

            display: "inline-block",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default PortfolioText;
