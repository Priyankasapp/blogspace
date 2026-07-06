'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, RefreshCw, ShieldCheck } from 'lucide-react';
import { STORE_FEATURES, STORE_STATS } from '@/public/assets';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturesAndStats() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    // 1. Reveal features rows smoothly
    gsap.fromTo('.animate-feature-item',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid-trigger',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    // 2. Dynamic Count-Up Metric Numbers Animation
    const dynamicTargets = gsap.utils.toArray<HTMLSpanElement>('.animate-stat-number');
    dynamicTargets.forEach((target) => {
      const endValue = parseFloat(target.getAttribute('data-value') || '0');
      const isDecimal = endValue % 1 !== 0;

      gsap.fromTo(target,
        { textContent: '0' },
        {
          textContent: endValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          snap: { textContent: isDecimal ? 0.1 : 1 }, // Retains decimal point notation for 99.9%
          onUpdate: function () {
            // Adds the matching trailing suffix strings seamlessly
            if (isDecimal) {
              target.textContent = parseFloat(target.textContent).toFixed(1);
            }
          }
        }
      );
    });
  }, { scope: container });

  // Icon selector mapper helper
  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-black stroke-[1.5]" };
    switch (name) {
      case 'check': return <Check {...props} />;
      case 'refresh': return <RefreshCw {...props} />;
      case 'shield': return <ShieldCheck {...props} />;
      default: return null;
    }
  };

  return (
    <section ref={container} className="w-full bg-white px-[4%] py-20 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        
        {/* Features Row Blocks Grid */}
        <div className="features-grid-trigger grid grid-cols-1 md:grid-cols-3 border-y border-neutral-200 divide-y md:divide-y-0 md:divide-x divide-neutral-200 mb-24">
          {STORE_FEATURES.map((feat) => (
            <div key={feat.id} className="animate-feature-item opacity-0 flex flex-col p-8 md:p-12 lg:p-16">
              <div className="mb-6">
                {renderIcon(feat.iconName)}
              </div>
              <h3 className="font-serif font-bold text-xl text-black mb-3 tracking-tight">
                {feat.title}
              </h3>
              <p className="text-neutral-500 text-[0.92rem] leading-relaxed max-w-xs">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Big Metric Stat Counters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {STORE_STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center">
              <div className="font-serif font-medium text-6xl md:text-7xl text-black tracking-tight mb-3 flex items-baseline justify-center">
                <span 
                  className="animate-stat-number" 
                  data-value={stat.value}
                >
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>
              <span className="text-[0.7rem] font-medium tracking-[2px] text-neutral-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}