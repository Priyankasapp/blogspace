'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero from '../../public/images/photo1.jpg';
// Register the React plugin for GSAP
gsap.registerPlugin(useGSAP);

export default function ShopHero() {
  // Global HTMLElement is perfectly type-safe here
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    // Safety guard: Ensure container is actually loaded in the DOM first
    if (!container.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Staggered timeline execution safely bound to your scope
    tl.from('.animate-subtitle', { y: 20, opacity: 0, duration: 0.6 })
      .from('.animate-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.animate-desc', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.animate-btn', { y: 15, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.5')
      .from('.animate-img-container', { scale: 0.95, opacity: 0, duration: 1 }, '-=0.8');
      
  }, { scope: container, dependencies: [] }); // Adding dependencies: [] makes sure it waits for initial DOM mount

  return (
    <section 
      ref={container} 
      className="w-full min-h-[80vh] flex items-center justify-center px-[4%] py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-[60px]">
        
        {/* Left Side: Text Content Container */}
        <div className="flex-1 max-w-[580px] w-full">
          <span className="animate-subtitle inline-block text-[0.8rem] font-medium tracking-[2px] text-[#757575] mb-6">
            PREMIUM COLLECTION // DIGITAL MARKETPLACE
          </span>
          
          <h1 className="animate-title text-5xl md:text-[4.5rem] font-serif font-bold text-black leading-[1.1] mb-8 tracking-tight">
            Developer<br />Resources
          </h1>
          
          <p className="animate-desc text-base md:text-[1.15rem] text-[#555555] leading-relaxed mb-10 max-w-[520px]">
            Elevate your engineering craft with our curated selection of technical editorial guides, 
            high-performance UI kits, and architectural blueprints designed for the modern web professional.
          </p>
          
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="animate-btn bg-black text-white px-8 py-4 font-medium transition-colors hover:bg-neutral-800"
            >
              Explore Collection &rarr;
            </a>
            <a 
              href="#" 
              className="animate-btn text-black pb-1 font-medium border-b-2 border-black transition-colors hover:text-neutral-500 hover:border-neutral-500"
            >
              Browse Categories
            </a>
          </div>
        </div>

        {/* Right Side: Image Canvas Container */}
        <div className="animate-img-container flex-1 flex justify-center md:justify-end w-full">
          <div className="bg-[#f7f7f7] p-10 w-full max-w-[480px] aspect-square flex items-center justify-center">
            <div className="relative w-full h-full mix-blend-multiply opacity-90">
              <Image
                src={Hero}
                alt="Developer Resources Preview"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}