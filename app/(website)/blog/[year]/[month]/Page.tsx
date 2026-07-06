import Link from 'next/link';
// Import the posts list from your shared assets file
import { posts } from "@/public/assets";
import FeaturedPosts from "@/app/(website)/components/blog/FeaturedPost";

type Props = {
  params: Promise<{ year: string; month: string }>;
};

export default async function BlogArchivePage({ params }: Props) {
  // Destructure BOTH parameters at the same time out of the dynamic URL route
  const { year, month } = await params;

  // Filter the central posts array down to match this exact year and month combo
  const filteredPosts = posts.filter((post) => {
    // splits "2026-07-15" into ["2026", "07", "15"]
    const [postYear, postMonth] = post.date.split("-");
    return postYear === year && postMonth === month;
  });

  // Simple key-map dictionary to turn numbers like "07" into beautiful string text
  const monthNames: { [key: string]: string } = {
    "01": "January", "02": "February", "03": "March", "04": "April",
    "05": "May", "06": "June", "07": "July", "08": "August",
    "09": "September", "10": "October", "11": "November", "12": "December"
  };

  const formattedMonth = monthNames[month] || `Month (${month})`;

  // 1. Generate the dynamic Structured Schema Object for this timeframe query
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Editorial Archives for ${formattedMonth} ${year}`,
    "description": `Curated list of articles published during ${formattedMonth} ${year}`,
    "itemListElement": filteredPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "@id": `https://blogspace-jet.vercel.app/blog/${post.slug}`,
        "url": `https://blogspace-jet.vercel.app/blog/${post.slug}`,
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
          "@type": "Organization",
          "name": "Blogspace Editorial"
        }
      }
    }))
  };

  return (
    <>
      {/* 2. Injecting the structural data node invisible to users but perfect for SEO bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="w-full bg-white font-editorial-sans selection:bg-black selection:text-white">
        <div className="max-w-7xl mx-auto pt-16">
          
          {/* Editorial Header Layout */}
          <div className="max-w-4xl mx-auto px-6 md:px-12 border-b border-neutral-200 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block">Time Capsule Filter Node</span>
              <h1 className="font-editorial-serif text-3xl sm:text-4xl uppercase text-black tracking-wide">
                Archive: {formattedMonth} {year}
              </h1>
            </div>
            
            <Link href="/blog" className="text-[10px] tracking-[0.2em] uppercase text-black border-b border-black pb-0.5 hover:text-neutral-500 transition-colors">
              ← Clear Filters
            </Link>
          </div>

          {/* Diagnostic Meta Box showing parameters reading cleanly */}
          <div className="max-w-4xl mx-auto my-6 px-6 md:px-12">
            <div className="p-6 bg-neutral-50 border border-neutral-100 flex flex-col space-y-2 text-xs tracking-widest text-neutral-500">
              <div>
                URL YEAR PARAMETER: <span className="font-mono font-bold text-black bg-white px-1.5 py-0.5 border border-neutral-200">{year}</span>
              </div>
              <div>
                URL MONTH PARAMETER: <span className="font-mono font-bold text-black bg-white px-1.5 py-0.5 border border-neutral-200">{month}</span>
              </div>
            </div>
          </div>

          {/* 3. Reusing your high-end staggered GSAP article grid filtered exclusively to your data subset */}
          <FeaturedPosts customPosts={filteredPosts} />

        </div>
      </main>
    </>
  );
}