"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Layers,
  LayoutGrid,
  GraduationCap,
} from "lucide-react";

import { SHOP_CATEGORIES } from "@/public/assets";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Map icon names from assets.ts to Lucide icons
const iconMap: Record<string, typeof BookOpen> = {
  book: BookOpen,
  layers: Layers,
  grid: LayoutGrid,
  education: GraduationCap,
};

export default function CategoriesGrid() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo(
      ".animate-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="w-full bg-white px-[4%] py-12 md:py-20 flex justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SHOP_CATEGORIES.map((category) => {
          const Icon = iconMap[category.iconName];

          return (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="animate-card opacity-0 group flex flex-col items-center justify-center p-12 bg-[#fcfcfc] border border-neutral-200 aspect-[4/3] transition-all duration-300 hover:bg-neutral-50 hover:border-black"
            >
              <div className="text-neutral-700 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-10 h-10 stroke-[1.25]" />
              </div>

              <h3 className="font-serif font-bold text-2xl text-black tracking-tight">
                {category.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}