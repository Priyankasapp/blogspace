"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });

    tl.from(".testimonial-tag", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    })
      .from(
        ".testimonial-quote",
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .from(
        ".testimonial-author",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
        },
        "-=0.5"
      );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans"
    >
      <div className="space-y-6 max-w-2xl">
        <span className="testimonial-tag text-[9px] tracking-[0.2em] uppercase text-neutral-400 block">
          Community Voices
        </span>

        <blockquote className="testimonial-quote font-editorial-serif text-xl md:text-2xl italic text-neutral-800 font-light leading-relaxed">
          “BlogSpace transforms technical articles into an enjoyable reading
          experience. Its clean layout, thoughtful typography, and organized
          content make learning web development feel effortless.”
        </blockquote>

        <div className="testimonial-author text-[10px] tracking-widest uppercase font-medium text-black">
          — Alex Carter, Full Stack Developer
        </div>
      </div>
    </section>
  );
}