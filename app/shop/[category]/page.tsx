import Link from "next/link";
import Image from "next/image";
import { CURATED_PRODUCTS } from "@/public/assets";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function ShopCategoryPage({ params }: Props) {
  const { category } = await params;

  const products = CURATED_PRODUCTS.filter(
    (product) => product.category === category
  );

  const cleanCategoryTitle =
    category.charAt(0).toUpperCase() +
    category.slice(1).replace(/-/g, " ");

  return (
    <main className="w-full bg-white px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="space-y-12">
        <header className="border-b border-neutral-200 pb-6">
          <Link
            href="/shop"
            className="text-sm text-neutral-500 hover:text-black"
          >
            ← Back to Shop
          </Link>

          <h1 className="mt-4 text-4xl font-bold font-serif">
            {cleanCategoryTitle}
          </h1>
        </header>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-neutral-200 p-5 bg-white"
              >
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-neutral-100">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {product.category}
                </p>

                <h2 className="mt-2 text-2xl font-serif font-bold">
                  {product.title}
                </h2>

                <p className="mt-3 text-sm text-neutral-500 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold">{product.price}</span>

                  <Link
                    href={`/shop/${product.category}/${product.slug}`}
                    className="px-5 py-2 border border-black hover:bg-black hover:text-white transition"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-serif">
              No products found
            </h2>

            <p className="mt-3 text-neutral-500">
              There are no products in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}