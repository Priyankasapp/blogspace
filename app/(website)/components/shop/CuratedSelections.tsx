"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Swapped out regular anchors for Next.js Link
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bookmark } from 'lucide-react';
import { CURATED_PRODUCTS } from '@/public/assets'; 

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CuratedSelections() {
  const container = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!container.current) return;

    gsap.fromTo('.animate-product-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-white px-[4%] py-16 flex justify-center">
      <div className="max-w-7xl w-full">
        
        <div className="flex justify-between items-baseline border-b border-neutral-200 pb-4 mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-black tracking-tight">
            Curated Selections
          </h2>
          {/* Main fallback link pointing to your shop index if needed */}
          <Link href="/shop" className="text-[0.75rem] font-medium tracking-[1.5px] uppercase text-neutral-500 hover:text-black transition-colors">
            View All Products &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {CURATED_PRODUCTS.map((product) => (
            <div key={product.id} className="animate-product-card opacity-0 flex flex-col w-full group">
              
              {/* Dynamic Image Link Wrapper */}
              <Link 
                href={`/shop/${product.category}/${product.slug}`}
                className="bg-[#f0f0f0] p-12 aspect-[4/5] flex items-center justify-center relative overflow-hidden mb-6 block cursor-pointer"
              >
                <div className="relative w-full h-full shadow-md transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.imageSrc} 
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="flex justify-between items-center mb-3">
                <span className="text-[0.7rem] font-medium tracking-[1.5px] text-neutral-500 uppercase">
                  {product.category} || {product.price}
                </span>
                <button aria-label="Save item" className="text-neutral-400 hover:text-black transition-colors cursor-pointer">
                  <Bookmark className="w-3.5 h-3.5 stroke-[1.5]" />
                </button>
              </div>

              {/* Dynamic Title Link */}
              <h3 className="font-serif font-bold text-2xl text-black tracking-tight mb-2 hover:text-neutral-700 transition-colors">
                <Link href={`/shop/${product.category}/${product.slug}`}>
                  {product.title}
                </Link>
              </h3>

              <p className="text-neutral-500 text-[0.92rem] leading-relaxed mb-6 flex-grow line-clamp-2">
                {product.description}
              </p>

              {/* 2. Dynamically pointing directly into your new route path mapping */}
              <Link 
                href={`/shop/${product.category}/${product.slug}`}
                className="w-full text-center py-3 border border-neutral-800 text-sm font-medium text-black bg-transparent transition-all duration-300 hover:bg-black hover:text-white block tracking-wider"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}