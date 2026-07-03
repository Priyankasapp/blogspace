export default function Testimonials() {
  return (
    <section className="w-full bg-white pt-8 pb-16 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans">
      <div className="space-y-6 max-w-xl">
        <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 block">Community Endorsement</span>
        <blockquote className="font-editorial-serif text-lg italic text-neutral-800 font-light leading-relaxed">
          BlogSpace strips away the unnecessary clutter of traditional publishing platforms. The layout feels like a clean print magazine, making complex software engineering topics an absolute pleasure to read.
        </blockquote>
        <div className="text-[10px] tracking-widest uppercase font-medium text-black">
          — Senior Frontend Architect, San Francisco
        </div>
      </div>
    </section>
  );
}