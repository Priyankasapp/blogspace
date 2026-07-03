import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-full bg-white px-6 md:px-12 py-16 font-editorial-sans max-w-7xl mx-auto selection:bg-black selection:text-white">
      <div className="space-y-16">
        
        {/* Minimalist Sub-Header */}
        <header className="border-b border-neutral-100 pb-8 space-y-3">
          <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block font-semibold">
            Corporate Profile // Context Node
          </span>
          <h1 className="font-editorial-serif text-4xl sm:text-5xl uppercase tracking-wide text-neutral-900">
            About the Studio
          </h1>
        </header>

        {/* Two-Column Editorial Profile Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-5">
            <p className="font-editorial-serif text-3xl sm:text-4xl text-neutral-900 leading-tight italic font-light">
              We construct minimalist digital architectures explicitly tailored for high-end digital operators, creatives, and visual leaders.
            </p>
          </div>

          {/* Right Column: Detailed Context Copy */}
          <div className="lg:col-span-7 space-y-6 text-neutral-600 text-xs tracking-wider leading-relaxed font-light max-w-xl">
            <p>
              Founded at the intersection of programmatic excellence and pure editorial aesthetic layout design guidelines, BlogSpace is an independent framework infrastructure. We believe that digital platforms should not be passive containers; they must aggressively declare value through deliberate typographic hierarchies, expansive whitespace containment, and flawless functional performance loops.
            </p>
            <p>
              Our internal development engineering team approaches code with a reductionist mindset. By removing non-essential script overhead and relying on native Next.js core frameworks, we ensure your brand message loads instantaneously with pristine asset precision.
            </p>
            
            {/* Core Pillars List */}
            <div className="pt-6 space-y-4">
              <div className="text-[9px] tracking-[0.25em] font-bold text-black uppercase">
                Operating Pillars
              </div>
              <ul className="space-y-2 border-l border-neutral-200 pl-4 font-mono text-[11px] text-neutral-500 list-none">
                <li><span className="text-black font-semibold">01 //</span> Structural Reductionist Typography</li>
                <li><span className="text-black font-semibold">02 //</span> WebGL Shading & Interactive Performance Canvas</li>
                <li><span className="text-black font-semibold">03 //</span> Asynchronous Server-Render Data Integrity</li>
              </ul>
            </div>

            {/* Back Call to Action Link */}
            <div className="pt-8">
              <Link 
                href="/" 
                className="inline-block text-[10px] tracking-[0.2em] uppercase font-medium text-black border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-300 transition-colors duration-200"
              >
                ← Back to Core Console Index
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}