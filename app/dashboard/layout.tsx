import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-neutral-50/50 font-editorial-sans text-xs tracking-widest text-black selection:bg-black selection:text-white">
      
      {/* 1. Left Fixed Sidebar Control Panel */}
      <aside className="w-64 bg-white border-r border-neutral-100 p-8 flex flex-col space-y-8 shrink-0 sticky top-0 h-screen">
        
        {/* Core Brand Header */}
        <div className="space-y-1">
          <div className="font-bold text-sm tracking-[0.25em] uppercase">CONSOLE // NODE</div>
          <span className="text-[9px] tracking-[0.2em] text-neutral-300 uppercase block font-mono">STATUS: ACTIVE</span>
        </div>

        <div className="w-full h-[1px] bg-neutral-100" />

        {/* Primary Route Nav Tree */}
        <nav className="flex flex-col space-y-4 text-[10px] uppercase font-medium">
          <Link href="/dashboard" className="text-black font-bold border-l-2 border-black pl-3 transition-all">
            Overview Matrix
          </Link>
          <Link href="/dashboard/billing" className="text-neutral-400 hover:text-black pl-3 border-l-2 border-transparent transition-all">
            Billing Ledger
          </Link>
          <Link href="/dashboard/settings" className="text-neutral-400 hover:text-black pl-3 border-l-2 border-transparent transition-all">
            System Settings
          </Link>
        </nav>

        {/* Bottom Utility Action */}
        <div className="mt-auto pt-6 border-t border-neutral-100">
          <Link 
            href="/" 
            className="text-[9px] text-neutral-400 hover:text-black transition-colors block uppercase font-medium"
          >
            ← Exit Workspace
          </Link>
        </div>
      </aside>

      {/* 2. Primary Right Core Stage Grid */}
      <main className="flex-1 p-8 md:p-12 min-w-0 bg-white">
        {children}
      </main>

    </div>
  );
}