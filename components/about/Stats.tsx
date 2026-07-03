export default function Stats() {
  const stats = [
    { metric: "10K+", label: "Active Developers" },
    { metric: "450+", label: "Technical Guides" },
    { metric: "99.9%", label: "Uptime Integrity" }
  ];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 max-w-7xl mx-auto font-editorial-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-neutral-100 py-10">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-1">
            <div className="font-editorial-serif text-4xl text-black">{stat.metric}</div>
            <div className="text-[9px] tracking-[0.2em] text-neutral-400 uppercase font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}