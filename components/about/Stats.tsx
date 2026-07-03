"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const stats = [
    { value: 10000, suffix: "+", label: "Active Developers" },
    { value: 450, suffix: "+", label: "Technical Guides" },
    { value: 99.9, suffix: "%", label: "Uptime Integrity" },
  ];

  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    numberRefs.current.forEach((el, index) => {
      if (!el) return;

      const stat = stats[index];
      const counter = { value: 0 };

      gsap.to(counter, {
        value: stat.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (stat.suffix === "%") {
            el.textContent = counter.value.toFixed(1) + stat.suffix;
          } else {
            el.textContent =
              Math.floor(counter.value).toLocaleString() + stat.suffix;
          }
        },
      });
    });
  });

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-neutral-100 py-10">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-1">
            <div
              ref={(el) => {
                numberRefs.current[i] = el;
              }}
              className="font-editorial-serif text-4xl text-black"
            >
              0
            </div>

            <div className="text-[9px] tracking-[0.2em] text-neutral-400 uppercase font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}