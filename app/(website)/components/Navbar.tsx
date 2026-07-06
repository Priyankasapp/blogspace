"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const container = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Setup the context master to automatically clean up all timelines inside this scope
  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".nav-logo", { opacity: 0, x: -15, duration: 0.8, ease: "power3.out" });
    tl.from(".nav-link", { opacity: 0, y: 8, duration: 0.6, stagger: 0.08, ease: "power2.out" }, "-=0.5");
    tl.from(".nav-cta", { opacity: 0, scale: 0.98, duration: 0.4, ease: "power1.out" }, "-=0.3");

    const activeLink = container.current?.querySelector(`.nav-link[data-active="true"]`) as HTMLElement;
    if (activeLink && underlineRef.current) {
      gsap.set(underlineRef.current, {
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        opacity: 1
      });
    }
  }, { scope: container });

  // Native event handler wrapped safely inside an on-demand event callback
  const toggleMobileMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      
      // Execute within the context safe layer explicitly on click
      contextSafe(() => {
        gsap.timeline()
          .to(".mobile-menu-drawer", { x: 0, duration: 0.5, ease: "power4.out" })
          .from(".mobile-nav-link", { opacity: 0, y: 15, duration: 0.4, stagger: 0.08, ease: "power2.out" }, "-=0.2");
      })();
    } else {
      contextSafe(() => {
        gsap.to(".mobile-menu-drawer", {
          x: "100%",
          duration: 0.4,
          ease: "power3.inOut",
          onComplete: () => setIsOpen(false)
        });
      })();
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    if (underlineRef.current) {
      gsap.to(underlineRef.current, {
        left: target.offsetLeft,
        width: target.offsetWidth,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  const handleMouseLeave = () => {
    const activeLink = container.current?.querySelector(`.nav-link[data-active="true"]`) as HTMLElement;
    if (activeLink && underlineRef.current) {
      gsap.to(underlineRef.current, {
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Docs', href: '/docs' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav 
      ref={container} 
      className="w-full relative z-50 bg-white border-b border-gray-100 px-6 py-4 md:px-12 flex items-center justify-between tracking-[0.2em] uppercase text-[10px] text-black font-editorial-sans"
    >
      {/* Left Section: Logo */}
      <div className="nav-logo font-medium text-sm md:text-base tracking-[0.25em] z-50">
        <Link href="/">BlogSpace</Link>
      </div>

      {/* Center Section: Navigation Links */}
      <div 
        className="relative hidden md:flex items-center space-x-8 text-gray-500 font-medium py-2"
        onMouseLeave={handleMouseLeave}
      >
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link 
              key={link.href}
              href={link.href} 
              data-active={isActive}
              onMouseEnter={handleMouseEnter}
              className={`nav-link pb-1 transition-colors duration-200 hover:text-black ${isActive ? 'text-black font-semibold' : ''}`}
            >
              {link.name}
            </Link>
          );
        })}
        <div ref={underlineRef} className="absolute bottom-0 h-[1.5px] bg-black opacity-0 pointer-events-none" style={{ willChange: 'transform, width, left' }} />
      </div>

      {/* Right Section: CTA & Mobile Toggle Button */}
      <div className="flex items-center space-x-4">
        <div className="nav-cta hidden md:block">
          <Link 
            href="/login" 
            className="bg-black text-white px-6 py-2.5 text-[9px] font-medium tracking-[0.2em] hover:bg-neutral-800 transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-black focus:outline-none p-1 z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        ref={mobileMenuRef}
        className="mobile-menu-drawer fixed inset-y-0 right-0 w-full sm:w-80 bg-white border-l border-gray-100 shadow-2xl p-10 flex flex-col justify-between z-40 transform translate-x-full md:hidden"
      >
        <div className="mt-16 flex flex-col space-y-6 text-sm tracking-[0.25em]">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link 
                key={link.href}
                href={link.href}
                onClick={toggleMobileMenu}
                className={`mobile-nav-link py-2 transition-colors ${isActive ? 'text-black font-bold border-b border-black w-max' : 'text-gray-500'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="mobile-nav-link mt-auto pt-8">
          <Link 
            href="/login"
            onClick={toggleMobileMenu}
            className="block text-center bg-black text-white py-4 text-xs font-medium tracking-[0.2em]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}