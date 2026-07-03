"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Mock data mirroring the content types in a high-end service/marketing blog
const posts = [
  {
    id: 1,
    category: "Marketing & Growth",
    title: "Dreading tax season? Our foolproof organization systems",
    excerpt: "Discover the exactly mapped out frameworks we use to store client receipts, reconcile workflows, and automate end-of-month financials seamlessly.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
    slug: "tax-season-organization-systems"
  },
  {
    id: 2,
    category: "Operations",
    title: "How to run an end of year audit on your contract processes",
    excerpt: "Protect your creative pipeline. Learn how we analyze liability vulnerabilities and structure our onboarding documents for frictionless sign-offs.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
    slug: "end-of-year-contract-audit"
  },
  {
    id: 3,
    category: "Design Systems",
    title: "The hidden psychology of neutral spacing grids in editorial layouts",
    excerpt: "Whitespace isn't passive—it dictates value. Explore why luxury branding guidelines prioritize extensive margins over dense visual data packing.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800",
    slug: "psychology-of-neutral-spacing-grids"
  }
];

export default function FeaturedPosts() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Elegant fade-in stagger sequence for the post grids as they scroll into view
    gsap.from(".post-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%", // Triggers safely when the container approaches the viewport
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-white px-6 md:px-12 py-16 max-w-7xl mx-auto">
      
      {/* Optional Top Section Sub-header */}
      <div className="w-full flex justify-between items-center border-b border-neutral-100 pb-4 mb-12">
        <h2 className="text-[10px] tracking-[0.3em] uppercase font-editorial-sans font-semibold text-neutral-400">
          Recent Editorial Entries
        </h2>
        <span className="text-[9px] tracking-[0.2em] uppercase font-editorial-sans text-neutral-300">
          Showing {posts.length} Articles
        </span>
      </div>

      {/* Responsive Grid System Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {posts.map((post) => (
          <article key={post.id} className="post-card flex flex-col group cursor-pointer">
            
            {/* Image Wrapper Container */}
            <Link href={`/blog/${post.slug}`} className="relative w-full aspect-[4/5] bg-neutral-50 overflow-hidden mb-6 block">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center grayscale hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              {/* Soft overlay framing edge to blend image elegantly with the white backdrop */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
            </Link>

            {/* Category Tag */}
            <span className="text-[9px] tracking-[0.25em] uppercase font-editorial-sans text-neutral-400 mb-2.5 block">
              {post.category}
            </span>

            {/* Dynamic Article Title Heading */}
            <h3 className="font-editorial-serif text-2xl sm:text-3xl text-neutral-900 tracking-wide leading-[1.2] mb-3 group-hover:text-neutral-600 transition-colors duration-300">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>

            {/* Short Read Excerpt Text Snippet */}
            <p className="text-neutral-500 font-editorial-sans font-light tracking-wide text-xs leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>

            {/* Clean Editorial Action Text Trigger */}
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

    </section>
  );
}