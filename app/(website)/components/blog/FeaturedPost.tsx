"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { posts as allPosts, Post } from "@/public/assets";

interface FeaturedPostsProps {
  customPosts?: Post[];
}

export default function FeaturedPosts({ customPosts }: FeaturedPostsProps) {
  const container = useRef<HTMLElement>(null);
  
  // Use the custom passed posts if available, otherwise fallback to all posts
  const displayPosts = customPosts || allPosts;

  useGSAP(() => {
    if (displayPosts.length === 0) return;
    
    gsap.from(".post-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container, dependencies: [displayPosts] });

  return (
    <section ref={container} className="w-full bg-white px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="w-full flex justify-between items-center border-b border-neutral-100 pb-4 mb-12">
        <h2 className="text-[10px] tracking-[0.3em] uppercase font-editorial-sans font-semibold text-neutral-400">
          Recent Editorial Entries
        </h2>
        <span className="text-[9px] tracking-[0.2em] uppercase font-editorial-sans text-neutral-300">
          Showing {displayPosts.length} Articles
        </span>
      </div>

      {displayPosts.length === 0 ? (
        <div className="text-center py-12 text-sm text-neutral-400 font-mono tracking-wider">
          NO ENTRIES FOUND FOR THIS TIME PERIOD
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {displayPosts.map((post) => (
            <article key={post.id} className="post-card flex flex-col group cursor-pointer">
              <Link href={`/blog/${post.slug}`} className="relative w-full aspect-[4/5] bg-neutral-50 overflow-hidden mb-6 block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center grayscale hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
              </Link>

              <span className="text-[9px] tracking-[0.25em] uppercase font-editorial-sans text-neutral-400 mb-2.5 block">
                {post.category}
              </span>

              <h3 className="font-editorial-serif text-2xl sm:text-3xl text-neutral-900 tracking-wide leading-[1.2] mb-3 group-hover:text-neutral-600 transition-colors duration-300">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-neutral-500 font-editorial-sans font-light tracking-wide text-xs leading-relaxed line-clamp-3 mb-4">
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-block text-[9px] tracking-[0.2em] uppercase font-editorial-sans font-medium text-black border-b border-black/30 pb-0.5 group-hover:border-black transition-all duration-300"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}