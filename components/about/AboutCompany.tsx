"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutCompany() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(".company-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".company-text p",
          {
            y: 25,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-8 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="company-title font-editorial-serif text-2xl sm:text-3xl text-neutral-900 leading-tight italic font-light">
            A digital platform built deliberately for readers, writers, and
            developers passionate about sharing knowledge.
          </p>
        </div>

        <div className="company-text lg:col-span-7 text-neutral-600 text-xs tracking-wider leading-relaxed font-light space-y-6 max-w-xl">
          <p>
            Welcome to BlogSpace. We believe that great content should be
            incredibly easy to find and enjoyable to interact with. Our platform
            features articles curated across a variety of modern technical
            tracks, including web development, programming, technology
            ecosystems, and structured software engineering.
          </p>

          <p>
            Whether you are exploring beginner-friendly tutorials or learning
            highly advanced architecture concepts, BlogSpace aims to provide
            clear, practical, and engaging content to help you scale your
            engineering skills smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}