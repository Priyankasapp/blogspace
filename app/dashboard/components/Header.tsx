// components/Header.tsx
"use client";

import { Search, Bell, SunMoon } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between h-16 px-16">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-secondary">
            <Search className="w-4 h-4" />
          </span>
          <input 
            type="text"
            placeholder="Search blog posts..." 
            className="block w-full pl-10 pr-4 py-2 border-none bg-surface-container-low rounded-full text-xs font-mono tracking-wide focus:ring-1 focus:ring-primary text-on-background placeholder:text-secondary/60 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-medium text-secondary">
          {/* <a className="hover:text-primary transition-colors" href="/docs">Docs</a> */}
          <a className="hover:text-primary transition-colors" href="#">Help</a>
        </div>
        
        <div className="flex items-center gap-4 border-l border-outline-variant pl-6">
          <button className="text-secondary hover:text-primary transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="text-secondary hover:text-primary transition-colors">
            <SunMoon className="w-4 h-4" />
          </button>
          <div className="w-7 h-7 rounded-full overflow-hidden border border-outline-variant bg-neutral-200">
            <Image
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
              alt="Admin administrator profile"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
    </header>
  );
}