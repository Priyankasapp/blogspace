'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Layers, LayoutGrid, GraduationCap } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Category {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

const categories: Category[] = [
  { id: 1, title: 'Books', icon: BookOpen, link: '#' },
  { id: 2, title: 'Templates', icon: Layers, link: '#' },
  { id: 3, title: 'UI Kits', icon: LayoutGrid, link: '#' },
  { id: 4, title: 'Courses', icon: GraduationCap, link: '#' },
];

export default function CategoriesGrid() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    // Using fromTo eliminates layout flashing completely
    gsap.fromTo('.animate-card', 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12, // Slightly tighter stagger step for a premium snappier feel
        ease: 'power4.out', // Sweeter, smoother easing curve than power3
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );
  }, { scope: container }); // Removed dependencies: [] to let GSAP grab actual DOM dimensions cleanly

  return (
    <section 
      ref={container} 
      className="w-full bg-white px-[4%] py-12 md:py-20 flex justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <a
              key={category.id}
              href={category.link}
              // Added "opacity-0" so cards stay hidden until GSAP wakes up
              className="animate-card opacity-0 group flex flex-col items-center justify-center p-12 bg-[#fcfcfc] border border-neutral-200 aspect-[4/3] transition-all duration-300 hover:bg-neutral-50 hover:border-black"
            >
              <div className="text-neutral-700 mb-6 transition-transform duration-300 group-hover:scale-110">
                <Icon className="w-10 h-10 stroke-[1.25]" />
              </div>
              
              <h3 className="font-serif font-bold text-2xl text-black tracking-tight">
                {category.title}
              </h3>
            </a>
          );
        })}
      </div>
    </section>
  );
}