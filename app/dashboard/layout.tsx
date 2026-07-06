"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface font-editorial-sans text-xs tracking-widest text-on-background selection:bg-primary selection:text-surface">
      
      {/* 1. Global Left Sidebar Navigation */}
      <Sidebar />

      {/* 2. Main Workstage Engine */}
      <div className="ml-64 flex flex-col min-h-screen">
        
        {/* Sticky Top Bar System Control */}
        <Header />

        {/* Primary Page Injection Layer */}
        <main className="flex-1 p-8 md:p-12 min-w-0 bg-surface">
          {children}
        </main>
        
      </div>
    </div>
  );
}