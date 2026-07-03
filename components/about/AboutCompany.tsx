export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-8 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <p className="font-editorial-serif text-2xl sm:text-3xl text-neutral-900 leading-tight italic font-light">
            A digital platform built deliberately for readers, writers, and developers passionate about sharing knowledge.
          </p>
        </div>
        <div className="lg:col-span-7 text-neutral-600 text-xs tracking-wider leading-relaxed font-light space-y-6 max-w-xl">
          <p>
            Welcome to BlogSpace. We believe that great content should be incredibly easy to find and enjoyable to interact with. Our platform features articles curated across a variety of modern technical tracks, including web development, programming, technology ecosystems, and structured software engineering.
          </p>
          <p>
            Whether you are exploring beginner-friendly tutorials or learning highly advanced architecture concepts, BlogSpace aims to provide clear, practical, and engaging content to help you scale your engineering skills smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}