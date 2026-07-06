import Link from 'next/link';

// Next.js 15+ uses a Promise type for asynchronous page params
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  // Await your dynamic url parameters safely
  const { slug } = await params;
  
  // Transform "tax-season-systems" into "Tax Season Systems" for an elegant title display
  const cleanTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="w-full bg-white px-6 md:px-12 py-16 font-editorial-sans selection:bg-black selection:text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Back navigation */}
        <div>
          <Link 
            href="/" 
            className="text-[10px] tracking-[0.2em] uppercase font-medium text-neutral-400 hover:text-black transition-colors"
          >
            ← Back to Editorial
          </Link>
        </div>

        {/* Article Meta Header Layout */}
        <div className="space-y-4 border-b border-neutral-100 pb-8">
          <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400 font-semibold block">
            Single Post View
          </span>
          <h1 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 leading-tight uppercase tracking-wide">
            {cleanTitle}
          </h1>
        </div>

        {/* Content Body Placeholder */}
        <article className="font-editorial-serif text-lg text-neutral-700 leading-relaxed space-y-6 max-w-2xl italic font-light">
          <p>
            This post template is rendering dynamically from your Next.js application core route node. The database lookup identifier evaluates explicitly as: <span className="font-mono not-italic font-bold text-xs bg-neutral-100 px-2 py-1 text-black rounded">{slug}</span>.
          </p>
          <p className="font-editorial-sans not-italic text-xs text-neutral-400 tracking-wide leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>

      </div>
    </main>
  );
}