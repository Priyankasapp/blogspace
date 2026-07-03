import Link from "next/link";

const categories = [
  { id: "apparel", name: "Premium Apparel", count: "12 Items", desc: "Heavyweight organic cotton staples and minimalist editorial outerwear." },
  { id: "digital-templates", name: "Design Templates", count: "8 Items", desc: "Next.js core boilerplates, Figma kits, and premium portfolio frameworks." },
  { id: "print-magazines", name: "Editorial Prints", count: "4 Items", desc: "Limited run physical trend forecasts and typographic design journals." }
];

export default function ShopIndexPage() {
  return (
    <main className="w-full bg-white px-6 md:px-12 py-16 font-editorial-sans max-w-7xl mx-auto selection:bg-black selection:text-white">
      <div className="space-y-12">
        <header className="border-b border-neutral-100 pb-6 space-y-2">
          <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block font-semibold">The Goods Registry</span>
          <h1 className="font-editorial-serif text-4xl uppercase tracking-wide text-neutral-900">Curated Shop</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/shop/${cat.id}`} className="group p-8 border border-neutral-100 bg-neutral-50/50 hover:bg-black hover:border-black transition-all duration-500 flex flex-col justify-between aspect-[1/1]">
              <div className="space-y-4">
                <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 group-hover:text-neutral-500 block">{cat.count}</span>
                <h2 className="font-editorial-serif text-2xl uppercase tracking-wide text-black group-hover:text-white transition-colors duration-300">{cat.name}</h2>
                <p className="text-neutral-500 group-hover:text-neutral-400 text-xs font-light tracking-wide leading-relaxed">{cat.desc}</p>
              </div>
              <div className="text-[9px] tracking-[0.25em] uppercase font-medium text-black group-hover:text-white border-b border-black/20 group-hover:border-white/40 pb-1 w-max pt-6 transition-all">
                Enter Department →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}