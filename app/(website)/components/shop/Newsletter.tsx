'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Newsletter() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo('.animate-news-heading', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo('.animate-news-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.animate-news-form', { scale: 0.98, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .fromTo('.animate-news-footer', { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2');
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-white px-[4%] py-24 border-t border-neutral-200 flex justify-center">
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        
        <h2 className="animate-news-heading opacity-0 font-serif font-bold text-4xl md:text-5xl text-black mb-6 tracking-tight">
          Stay Inspired
        </h2>
        
        <p className="animate-news-sub opacity-0 text-neutral-500 text-[0.95rem] md:text-base max-w-lg leading-relaxed mb-10">
          Join our community of 10,000+ engineers receiving bi-weekly updates on new resources, design patterns, and technical deep dives.
        </p>

        {/* Input Wrapper Group Container */}
        <form onSubmit={(e) => e.preventDefault()} className="animate-news-form opacity-0 w-full max-w-xl flex border border-black p-1.5 mb-4 bg-white">
          <input 
            type="email" 
            placeholder="Your email address" 
            required
            className="w-full px-4 py-3 text-black placeholder-neutral-400 text-sm focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wide transition-colors hover:bg-neutral-800 shrink-0"
          >
            Subscribe
          </button>
        </form>

        <span className="animate-news-footer opacity-0 text-[0.65rem] tracking-[2px] font-medium text-neutral-400 uppercase">
          NO SPAM. JUST PURE TECHNICAL QUALITY.
        </span>

      </div>
    </section>
  );
}