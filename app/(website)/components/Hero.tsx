"use client";

import React from "react";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// Import the WebGL shader element from paper-design
import { GrainGradient } from "@paper-design/shaders-react";

export default function Hero() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-divider", {
      scaleX: 0,
      transformOrigin: "center",
      duration: 1,
      ease: "power3.inOut",
    });

    tl.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power4.out",
    }, "-=0.5");

    tl.from(".hero-col-text", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
    }, "-=0.6");

    tl.from(".hero-shader-wrap", {
      opacity: 0,
      scale: 0.98,
      duration: 1.2,
      ease: "power3.out",
    }, "-=0.8");

  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-white px-6 md:px-12 pt-4 pb-16">
      
      {/* Thin line divider */}
      <div className="hero-divider w-full h-[1px] bg-neutral-200 mb-10 md:mb-14" />

      {/* Main Title */}
      <div className="w-full flex justify-center mb-10 md:mb-16">
        <h1 className="hero-title font-editorial-serif text-[13vw] sm:text-[11vw] md:text-[9vw] leading-none tracking-wide text-black text-center select-none uppercase">
          THE BLOG
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-8">
          <div className="hero-col-text flex flex-wrap gap-3 text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-editorial-sans">
            <span>Next.js</span>
            <span className="text-neutral-200">•</span>
            <span>React</span>
            <span className="text-neutral-200">•</span>
            <span>TypeScript</span>
          </div>
          
          <p className="hero-col-text font-editorial-serif text-2xl sm:text-3xl lg:text-3xl text-neutral-800 leading-relaxed italic font-light">
           Learn modern web development through practical tutorials,
real-world projects, and in-depth guides for building
fast, scalable web applications.

          </p>

          <div className="hero-col-text pt-4">
            <Link 
              href="/blog" 
              className="inline-block text-[10px] tracking-[0.2em] uppercase font-editorial-sans font-medium text-black border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-300 transition-colors duration-200"
            >
              Start Reading
            </Link>
          </div>
        </div>

        {/* Right Column: High-End WebGL Paper Shader Canvas */}
        <div className="lg:col-span-8 w-full">
          <div className="hero-shader-wrap relative aspect-[16/10] md:aspect-[16/9] bg-black overflow-hidden w-full border border-neutral-100">
            
            {/* Paper Design Shader:
              Using neutral editorial tones (whites, greys, and deep charcoal black) 
              to match your minimalist theme while introducing a dynamic grain movement.
            */}
            <GrainGradient 
              width="100%"
              height="100%"
              colors={["#f5f5f5", "#e5e5e5", "#a3a3a3", "#171717"]} 
              colorBack="#ffffff"
              softness={0.65} 
              intensity={0.4} 
              noise={0.18} // Controls the organic paper-ink look
              shape="wave" 
              speed={0.4} // Kept low for a subtle, high-end flowing motion
            />
            
            {/* Text Overlay inside the custom shader frame */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none">
              <span className="text-white text-[9px] tracking-[0.3em] font-editorial-sans uppercase mb-2">Featured Tutorial</span>
              <h2 className="text-white text-2xl md:text-3xl font-editorial-serif tracking-wide uppercase max-w-md">
                Mastering the Next.js App Router
              </h2>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}