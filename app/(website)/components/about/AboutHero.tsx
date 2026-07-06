"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AboutHero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".about-tag", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".about-title",
          {
            y: 80,
            opacity: 0,
            duration: 1,
          },
          "-=0.2"
        )
        .from(
          ".about-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="w-full bg-white pt-16 pb-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <span className="about-tag text-[9px] tracking-[0.3em] uppercase text-neutral-400 font-semibold">
            Platform Manifest // Context Node
          </span>

          <h1 className="about-title font-editorial-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-neutral-900 leading-none">
            About BlogSpace
          </h1>

          <div className="about-line h-px bg-neutral-200"></div>
        </div>
      </div>
    </section>
  );
}