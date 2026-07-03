"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".mission-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        ".mission-tag",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        "-=0.6"
      )
      .from(
        ".mission-text",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.3"
      );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-8 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans"
    >
      <div className="mission-card bg-neutral-50 border border-neutral-100/70 p-8 md:p-12 max-w-3xl space-y-4">
        <span className="mission-tag text-[9px] tracking-[0.25em] font-bold text-black uppercase block">
          The Core Framework
        </span>

        <p className="mission-text text-neutral-600 text-xs tracking-wider leading-relaxed font-light">
          This project actively demonstrates modern, high-end web development
          using the <strong>Next.js App Router</strong>. It acts as a live
          architectural sandbox showcasing clean production implementations such
          as parallel dynamic routing, deeply nested layouts, optional
          catch-all documentation indexes, and isolated application dashboards.
        </p>
      </div>
    </section>
  );
}