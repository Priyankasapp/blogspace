import Link from "next/link";

type Props = { params: Promise<{ category: string }> };

// Mock Database structured by Category keys
const mockProductsDatabase: { [key: string]: Array<{ slug: string; title: string; price: string }> } = {
  "apparel": [
    { slug: "heavyweight-tee", title: "Boxy Studio Tee", price: "$65.00" },
    { slug: "minimalist-hoodie", title: "Editorial Knit Hoodie", price: "$145.00" }
  ],
  "digital-templates": [
    { slug: "editorial-portfolio", title: "Minimalist Portfolio System", price: "$89.00" },
    { slug: "saas-dashboard-kit", title: "Console Workspace UI Kit", price: "$120.00" }
  ],
  "print-magazines": [
    { slug: "issue-01-trends", title: "Issue 01: Typographic Spacing", price: "$32.00" }
  ]
};

export default async function ShopCategoryPage({ params }: Props) {
  const { category } = await params;
  const products = mockProductsDatabase[category] || [];
  const cleanCategoryTitle = category.replace(/-/g, " ").toUpperCase();

  return (
    <main className="w-full bg-white px-6 md:px-12 py-16 font-editorial-sans max-w-7xl mx-auto selection:bg-black selection:text-white">
      <div className="space-y-12">
        <header className="border-b border-neutral-100 pb-6 flex items-end justify-between">
          <div className="space-y-2">
            <Link href="/shop" className="text-[9px] tracking-[0.25em] text-neutral-400 hover:text-black uppercase">← All Departments</Link>
            <h1 className="font-editorial-serif text-3xl uppercase tracking-wide text-neutral-900">{cleanCategoryTitle}</h1>
          </div>
        </header>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div key={prod.slug} className="border border-neutral-100 p-6 flex flex-col justify-between bg-white">
                <div className="aspect-[4/5] bg-neutral-50 border border-neutral-100/50 mb-6 flex items-center justify-center font-editorial-serif text-neutral-300 italic text-sm font-light">
                  Product Preview Image
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-editorial-serif text-xl text-neutral-900 uppercase tracking-wide">{prod.title}</h2>
                  <span className="text-xs font-mono text-neutral-500 font-medium">{prod.price}</span>
                </div>
                <Link href={`/shop/${category}/${prod.slug}`} className="w-full text-center bg-black text-white py-3 text-[9px] font-medium tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors">
                  View Product Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-400 text-xs tracking-widest uppercase py-12">No assets found matching this node category identifier.</p>
        )}
      </div>
    </main>
  );
}