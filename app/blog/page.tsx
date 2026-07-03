
import FeaturedPosts from "@/components/blog/FeaturedPost";
import Link from "next/link";

export default function BlogIndexPage() {
  return (
    <main className="w-full bg-white font-editorial-sans selection:bg-black selection:text-white">
      
      {/* 1. Main Directory Minimalist Header Section */}
      <header className="w-full px-6 md:px-12 pt-16 pb-6 max-w-7xl mx-auto border-b border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block font-semibold">
              The Archive Registry
            </span>
            <h1 className="font-editorial-serif text-4xl sm:text-5xl uppercase tracking-wide text-neutral-900">
              All Articles
            </h1>
          </div>
          
          {/* Quick links to test your year/month archive route views */}
          <div className="flex items-center space-x-6 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <span className="text-neutral-300">Quick Archives:</span>
            <Link href="/blog/2026/07" className="text-black hover:text-neutral-500 underline underline-offset-4 transition-colors">
              July 2026
            </Link>
            <Link href="/blog/2026/01" className="text-black hover:text-neutral-500 underline underline-offset-4 transition-colors">
              Jan 2026
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Reusing your high-end staggered GSAP article grid */}
      <FeaturedPosts />

    </main>
  );
}