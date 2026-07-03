import Link from "next/link";

export default function DashboardPage() {
  // Mock administrative telemetry parameters
  const performanceMetrics = [
    { label: "Active Reader Sessions", value: "14,204", delta: "+12% MoM" },
    { label: "Digital Product Yield", value: "$4,890.00", delta: "+8.4%" },
    { label: "Bandwidth Cache Rate", value: "99.92%", delta: "OPTIMAL" }
  ];

  return (
    <div className="space-y-12">
      
      {/* Workspace Header */}
      <header className="border-b border-neutral-100 pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase block font-semibold">Workspace Command Console</span>
          <h1 className="font-editorial-serif text-3xl uppercase tracking-wide text-neutral-900">System Overview</h1>
        </div>
        <div className="font-mono text-[10px] text-neutral-400 bg-neutral-50 px-3 py-1.5 border border-neutral-100">
          SECURE_SESSION_TOKEN_VERIFIED
        </div>
      </header>

      {/* Grid Telemetry Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performanceMetrics.map((metric, i) => (
          <div key={i} className="border border-neutral-100 p-6 bg-neutral-50/50 flex flex-col justify-between space-y-4">
            <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 font-medium">{metric.label}</span>
            <div className="flex items-baseline justify-between">
              <span className="font-editorial-serif text-2xl tracking-wide text-black">{metric.value}</span>
              <span className="font-mono text-[9px] text-neutral-500 font-semibold bg-white border border-neutral-100 px-1.5 py-0.5">{metric.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Operational Task List Segment */}
      <div className="space-y-4">
        <div className="text-[10px] tracking-[0.25em] uppercase font-bold text-black">System Terminal Actions</div>
        <div className="border border-neutral-100 divide-y divide-neutral-100 text-neutral-600 text-xs font-light">
          <div className="p-4 flex items-center justify-between hover:bg-neutral-50/50 transition-colors">
            <div>Configure parallel shop distribution endpoints</div>
            <Link href="/shop" className="text-black font-medium underline text-[10px] uppercase">Review Products →</Link>
          </div>
          <div className="p-4 flex items-center justify-between hover:bg-neutral-50/50 transition-colors">
            <div>Inspect dynamic cache indexing arrays</div>
            <Link href="/docs" className="text-black font-medium underline text-[10px] uppercase">Access Docs →</Link>
          </div>
        </div>
      </div>

    </div>
  );
}