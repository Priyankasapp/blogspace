// components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
 
  Package, 
  FileText,  
  Settings, 
  LogOut 
} from "lucide-react";

const navItems = [
  
  { name: "Blogs", href: "/dashboard/blogs", icon: FileText },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    // Subtle horizontal slide micro-interactions via GSAP
    navLinksRef.current.forEach((link) => {
      if (!link || link.classList.contains("bg-secondary-container")) return;

      const hoverTween = gsap.to(link, { 
        x: 4, 
        duration: 0.2, 
        paused: true, 
        ease: "power2.out" 
      });

      link.addEventListener("mouseenter", () => hoverTween.play());
      link.addEventListener("mouseleave", () => hoverTween.reverse());
    });
  }, [pathname]);

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 flex flex-col p-4 bg-surface border-r border-outline-variant z-50">
      <div className="px-4 py-6 mb-8">
        <h1 className="font-serif text-2xl font-bold text-primary tracking-wide">Marketplace</h1>
        <p className="font-mono text-[10px] tracking-[0.2em] text-secondary mt-1 uppercase">Admin Console</p>
      </div>

      <nav className="flex-1 space-y-1 px-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          // Clean dynamic matching validation for path trees
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => { if (el) navLinksRef.current[index] = el; }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-widest font-medium transition-colors ${
                isActive 
                  ? "bg-secondary-container text-primary font-bold" 
                  : "text-secondary hover:text-primary hover:bg-surface-container-low"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-2 mt-auto pb-4">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-error hover:bg-error-container/20 transition-colors rounded-lg text-xs uppercase tracking-widest font-medium font-mono">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}