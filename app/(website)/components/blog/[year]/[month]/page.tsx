import FeaturedPosts from "@/app/(website)/components/blog/FeaturedPost";
import Link from "next/link";
import { posts } from "@/public/assets";

interface ArchivePageProps {
  params: Promise<{
    year: string;
    month: string;
  }>;
}

export default async function BlogArchivePage({ params }: ArchivePageProps) {
  const { year, month } = await params;

  // Filter our data logic according to URL parameters
  const filteredPosts = posts.filter((post) => {
    // splits "2026-07-15" into ["2026", "07", "15"]
    const [postYear, postMonth] = post.date.split("-");
    return postYear === year && postMonth === month;
  });

  // Helper string to show the current month cleanly
  const monthNames: Record<string, string> = {
    "01": "January", "02": "February", "03": "March", "04": "April",
    "05": "May", "06": "June", "07": "July", "08": "August",
    "09": "September", "10": "October", "11": "November", "12": "December"
  };

  return (
    <main className="w-full bg-white font-editorial-sans selection:bg-black selection:text-white">
      
      <header className="w-full px-6 md:px-12 pt-16 pb-6 max-w-7xl mx-auto border-b border-neutral-100">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-3">
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block font-semibold">
              <Link href="/blog" className="hover:text-black transition-colors">← Back to Main Archive</Link>
            </span>
            <h1 className="font-editorial-serif text-4xl sm:text-5xl uppercase tracking-wide text-neutral-900">
              {monthNames[month] || `Month (${month})`} {year}
            </h1>
          </div>
          
          <div className="flex items-center space-x-6 text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <span className="text-neutral-300">Quick Archives:</span>
            <Link href="/blog/2026/07" className={`underline underline-offset-4 transition-colors ${year === '2026' && month === '07' ? 'text-black font-semibold' : 'text-neutral-400 hover:text-black'}`}>
              July 2026
            </Link>
            <Link href="/blog/2026/01" className={`underline underline-offset-4 transition-colors ${year === '2026' && month === '01' ? 'text-black font-semibold' : 'text-neutral-400 hover:text-black'}`}>
              Jan 2026
            </Link>
          </div>
        </div>
      </header>

      {/* Render the grid only with the filtered posts */}
      <FeaturedPosts customPosts={filteredPosts} />

    </main>
  );
}