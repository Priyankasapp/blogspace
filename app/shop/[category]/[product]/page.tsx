import Link from "next/link";

type Props = {
  params: Promise<{ category: string; product: string }>;
};

export default async function ShopProductPage({ params }: Props) {
  // Await and extract both segments cleanly from the URL promise structure
  const { category, product } = await params;

  // Clean the string inputs for a premium typography representation
  const cleanCategory = category.replace(/-/g, " ").toUpperCase();
  const cleanProduct = product.replace(/-/g, " ").toUpperCase();

  return (
    <main className="w-full bg-white min-h-[80vh] px-6 md:px-12 py-16 font-editorial-sans selection:bg-black selection:text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Visual Placement Box Placeholder */}
        <div className="md:col-span-6 w-full aspect-[4/5] bg-neutral-50 border border-neutral-100 flex flex-col items-center justify-center p-8 text-center">
          <span className="text-[9px] tracking-[0.3em] text-neutral-300 uppercase mb-2">Display Canvas Frame</span>
          <div className="font-editorial-serif text-xl italic text-neutral-400 font-light max-w-xs">
            High-contrast product framing tailored for luxury digital goods.
          </div>
        </div>

        {/* Right Column: Product Detail Matrix */}
        <div className="md:col-span-6 space-y-6">
          
          {/* Breadcrumbs */}
          <div className="text-[9px] tracking-[0.25em] text-neutral-400 flex items-center space-x-2 uppercase">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <span className="text-neutral-600 font-mono">{category}</span>
          </div>

          {/* Product Meta Info Header */}
          <div className="space-y-2">
            <span className="text-[9px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block">
              Category Matrix: {cleanCategory}
            </span>
            <h1 className="font-editorial-serif text-3xl sm:text-4xl text-neutral-900 uppercase tracking-wide leading-tight">
              {cleanProduct}
            </h1>
          </div>

          <div className="w-12 h-[1px] bg-neutral-200" />

          {/* Dynamic Router Parameter Tracker Panel */}
          <div className="p-4 bg-neutral-50 border border-neutral-100 text-[11px] tracking-widest text-neutral-500 space-y-2">
            <div className="font-semibold text-black text-[9px] uppercase tracking-[0.2em] mb-1 text-neutral-400">
              Active Parallel Node Variables:
            </div>
            <div>
              Segment 1 (Category): <span className="font-mono text-black font-bold bg-white px-1.5 py-0.5 border border-neutral-200 ml-1">{category}</span>
            </div>
            <div>
              Segment 2 (Product): <span className="font-mono text-black font-bold bg-white px-1.5 py-0.5 border border-neutral-200 ml-1">{product}</span>
            </div>
          </div>

          {/* CTA Trigger Action */}
          <div className="pt-4">
            <button className="w-full bg-black text-white py-4 text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors duration-300">
              Acquire Digital Asset — $89.00
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}