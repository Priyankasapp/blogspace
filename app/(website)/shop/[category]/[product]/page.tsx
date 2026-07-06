import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
// Import the list of items from your shared file
import { CURATED_PRODUCTS } from "@/public/assets";

type Props = {
  params: Promise<{ category: string; product: string }>;
};

export default async function ShopProductPage({ params }: Props) {
  // Await and extract both segments cleanly from the URL promise structure
  const { category, product: productSlug } = await params;

  // Find the matching item by its slug
  const productData = CURATED_PRODUCTS.find((p) => p.slug === productSlug);

  // If the product doesn't exist, instantly trigger Next.js built-in 404 page
  if (!productData) {
    notFound();
  }

  return (
    <main className="w-full bg-white min-h-[80vh] px-6 md:px-12 py-16 font-editorial-sans selection:bg-black selection:text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Visual Placement Box */}
        <div className="md:col-span-6 w-full aspect-[4/5] bg-neutral-50 border border-neutral-100 flex flex-col items-center justify-center relative overflow-hidden group">
          {productData.imageSrc ? (
            <Image
              src={productData.imageSrc}
              alt={productData.title}
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out"
            />
          ) : (
            <div className="font-editorial-serif text-xl italic text-neutral-400 font-light max-w-xs p-8 text-center">
              No product image available.
            </div>
          )}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
        </div>

        {/* Right Column: Product Detail Matrix */}
        <div className="md:col-span-6 space-y-6">
          
          {/* Breadcrumbs */}
          <div className="text-[9px] tracking-[0.25em] text-neutral-400 flex items-center space-x-2 uppercase">
            <Link href="/" className="hover:text-black">Home</Link>
            <span>/</span>
            <Link href={`/shop/${category}`} className="hover:text-black font-mono">{category}</Link>
            <span>/</span>
            <span className="text-neutral-600 font-mono truncate max-w-[150px]">{productData.slug}</span>
          </div>

          {/* Product Meta Info Header */}
          <div className="space-y-2">
            <span className="text-[9px] tracking-[0.3em] font-semibold text-neutral-400 uppercase block">
              Category Matrix: {productData.category}
            </span>
            <h1 className="font-editorial-serif text-3xl sm:text-4xl text-neutral-900 uppercase tracking-wide leading-tight">
              {productData.title}
            </h1>
          </div>

          <p className="text-neutral-600 text-sm font-light leading-relaxed tracking-wide">
            {productData.description}
          </p>

          <div className="w-12 h-[1px] bg-neutral-200" />

          {/* File/Book Specification Grid (Renders dynamically if details are present) */}
          {(productData.format || productData.fileSize || productData.pages) && (
            <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 border border-neutral-100 text-[11px] font-mono tracking-wider text-neutral-500">
              {productData.format && (
                <div>Format: <span className="text-black font-semibold ml-1">{productData.format}</span></div>
              )}
              {productData.fileSize && (
                <div>File Size: <span className="text-black font-semibold ml-1">{productData.fileSize}</span></div>
              )}
              {productData.pages && (
                <div>Pages: <span className="text-black font-semibold ml-1">{productData.pages} pages</span></div>
              )}
              {productData.version && (
                <div>Version: <span className="text-black font-semibold ml-1">v{productData.version}</span></div>
              )}
            </div>
          )}

          {/* Features Checklist Array */}
          {productData.features && productData.features.length > 0 && (
            <div className="space-y-2">
              <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-neutral-400 block">Asset Deliverables:</span>
              <ul className="space-y-1.5">
                {productData.features.map((feature, i) => (
                  <li key={i} className="text-xs text-neutral-600 flex items-center gap-2 font-light">
                    <span className="w-1 h-1 bg-neutral-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Trigger Action */}
          <div className="pt-4">
            <button className="w-full bg-black text-white py-4 text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-neutral-800 transition-colors duration-300 cursor-pointer">
              Acquire Digital Asset — {productData.price}
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}