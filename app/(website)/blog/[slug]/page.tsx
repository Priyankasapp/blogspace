
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/public/assets';
// Next.js 15+ uses a Promise type for asynchronous page params

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  // Await your dynamic url parameters safely
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <main className="py-24 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
      </main>
    );
  }
 


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
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
  <span>{post.category}</span>
  <span>•</span>
  <span>{post.date}</span>
</div>
          <h1 className="font-editorial-serif text-4xl sm:text-5xl md:text-6xl text-neutral-900 leading-tight uppercase tracking-wide">
          {post.title}
          </h1>
        </div>

        {/* Content Body Placeholder */}
        <article className="space-y-8">
  <Image
    src={post.image}
    alt={post.title}
    width={1200}
    height={500}
    className="w-full h-[500px] object-cover rounded-xl"
  />

  <p className="text-lg text-neutral-600 leading-8">
    {post.excerpt}
  </p>

  <div className="space-y-6 text-neutral-700 leading-8">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptatibus officiis molestiae ipsum maiores aspernatur
      pariatur. Ducimus, nihil quos.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repudiandae inventore laborum natus, explicabo autem
      deserunt quos voluptatibus maxime.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Consequuntur, officia. Reprehenderit aspernatur quas
      consequatur dolores molestiae doloremque.
    </p>
  </div>
</article>

      </div>
    </main>
  );
}