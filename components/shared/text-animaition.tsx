// intro-text.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = () => {
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        { scaleY: 0.9 },
        {
          scaleY: 1.0,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top bottom",
            end: "top 30%",
            scrub: true,
          },
        },
      );
    },
    { scope: textRef },
  );

  return (
    <div
      ref={textRef}
      className="flex-1 border-b-1 sm:border-b-0 sm:border-r-1   border-white/30 text-[200px] leading-none font-english tracking-wide pr-8 text-black font-bold"
    >
      USED TECHS
    </div>
  );
};

export default TextAnimation;
