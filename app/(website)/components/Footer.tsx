"use client";

import { FOOTER_LINKS } from '@/public/assets';
import { Globe, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white px-[4%] py-12 border-t border-neutral-200 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-6">
        
        {/* Brand Side */}
        <div className="flex flex-col">
          <h2 className="font-serif font-bold text-3xl text-black tracking-tight mb-3">
            BlogSpace
          </h2>
          <p className="text-[0.75rem] text-neutral-400 leading-normal max-w-xs">
            &copy; {currentYear} BlogSpace Editorial. All rights reserved.
          </p>
        </div>

        {/* Links and Action Icons Side */}
        <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
          {/* Navigation Items */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {FOOTER_LINKS.map((link, idx) => (
              <a 
                key={idx} 
                href={link.link} 
                className="text-xs font-medium text-neutral-500 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social / Support Actions Utility Bar */}
          <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-8 border-t md:border-t-0 border-neutral-100 pt-4 md:pt-0">
            <a href="#" className="text-xs font-medium text-neutral-500 hover:text-black underline underline-offset-4">
              Contact Support
            </a>
            <div className="flex items-center gap-4 text-neutral-400">
              <button aria-label="Language selection" className="hover:text-black transition-colors">
                <Globe className="w-4 h-4 stroke-[1.5]" />
              </button>
              <button aria-label="Share platform" className="hover:text-black transition-colors">
                <Share2 className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}