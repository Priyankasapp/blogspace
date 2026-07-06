// public/assets.ts
import { StaticImageData } from "next/image";
import photo1 from "./images/photo2.png";
import photo2 from "./images/photo3.png";
import photo3 from "./images/photo4.png";
import photo4 from "./images/photo5.png";
import photo5 from "./images/photo6.png";
import photo6 from "./images/photo7.png";
import photo7 from "./images/photo8.png";
import photo8 from "./images/photo9.png";
import photo9 from "./images/photo10.png";

export interface Product {
  id: number;
  slug: string;
  title: string;
  category: string;
  price: string;
  description: string;
  imageSrc: string | StaticImageData;
  link: string;

   pages?: number;
  format?: string;
  language?: string;
  version?: string;
  lastUpdated?: string;
  fileSize?: string;
  features?: string[];
  
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  iconName: "book" | "layers" | "grid" | "education";
}

export interface FooterLink {
  label: string;
  link: string;
}

// New interfaces for Features and Stats
export interface Feature {
  id: number;
  title: string;
  description: string;
  iconName: "check" | "refresh" | "shield";
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface Post {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
}

export const SHOP_CATEGORIES = [
  {
    id: 1,
    title: "Books",
    slug: "books",
    iconName: "book",
  },
  {
    id: 2,
    title: "Templates",
    slug: "templates",
    iconName: "layers",
  },
  {
    id: 3,
    title: "UI Kits",
    slug: "ui-kits",
    iconName: "grid",
  },
  {
    id: 4,
    title: "Courses",
    slug: "courses",
    iconName: "education",
  },
];

export const CURATED_PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "nextjs-mastery",
    title: "Next.js Mastery",
    category: "books",
    price: "$49",
    description:
      "Complete guide to building high-performance server-side applications with Next.js.",
    imageSrc: photo1,
    link: "#",

     pages: 320,
  format: "PDF",
  language: "English",
  version: "2.1",
  lastUpdated: "June 2026",
  fileSize: "18 MB",

  features: [
    "320 Pages",
    "Source Code Included",
    "Lifetime Updates",
    "Instant Download",
    "Certificate of Completion"
  ],
  },
  {
    id: 2,
    slug: "react-architecture",
    title: "React Architecture",
    category: "books",
    price: "$55",
    description:
      "Advanced patterns for scalable frontend systems and complex state management.",
    imageSrc: photo2,
    link: "#",
  },
  {
    id: 3,
    slug: "editorial-ui-kit",
    title: "Editorial UI Kit",
    category: "ui-kits",
    price: "$89",
    description:
      "A collection of premium components designed for high-end technical blogs and platforms.",
    imageSrc: photo3,
    link: "#",
  },
  {
    id: 4,
    slug: "typescript-handbook",
    title: "TypeScript Handbook",
    category: "books",
    price: "$39",
    description:
      "The definitive guide to type safety and advanced Typescript features for engineers.",
    imageSrc: photo4,
    link: "#",
  },
  {
    id: 5,
    slug: "dev-portfolio",
    title: "Dev Portfolio",
    category: "templates",
    price: "$35",
    description:
      "A minimalist, SEO-optimized portfolio template for modern developers.",
    imageSrc: photo5,
    link: "#",
  },
  {
    id: 6,
    slug: "nodejs-guide",
    title: "Node.js Guide",
    category: "books",
    price: "$59",
    description:
      "Deep dive into backend architecture, streaming and performance optimization.",
    imageSrc: photo6,
    link: "#",
  },
  {
    id: 7,
    slug: "rust-performance-guide",
    title: "Rust Performance Guide",
    category: "books",
    price: "$59",
    description:
      "Master Rust performance techniques to build fast, memory-safe, and highly efficient applications.",
    imageSrc: photo7,
    link: "#",
  },
  {
    id: 8,
    slug: "saas-ui-kit",
    title: "SaaS UI Kit",
    category: "ui-kits",
    price: "$59",
    description:
      "A modern SaaS UI Kit featuring clean, responsive components designed to accelerate your next web application.",
    imageSrc: photo8,
    link: "#",
  },
  {
    id: 9,
    slug: "design-systems-masterclass",
    title: "Design Systems Masterclass",
    category: "courses",
    price: "$99",
    description:
      "Master the principles of scalable design systems to build consistent, accessible, and modern digital products.",
    imageSrc: photo9,
    link: "#",
  },
];

// --- Added Features & Stats Data ---
export const STORE_FEATURES: Feature[] = [
  {
    id: 1,
    title: "Instant Download",
    description:
      "Access your files immediately after purchase in your member dashboard.",
    iconName: "check",
  },
  {
    id: 2,
    title: "Lifetime Updates",
    description:
      "Receive all future versions and improvements at no additional cost.",
    iconName: "refresh",
  },
  {
    id: 3,
    title: "Production Ready",
    description:
      "Extensively tested code and assets ready for real-world application.",
    iconName: "shield",
  },
];

export const STORE_STATS: Stat[] = [
  { id: 1, value: 10, suffix: "K+", label: "GLOBAL DEVELOPERS" },
  { id: 2, value: 450, suffix: "+", label: "CURATED RESOURCES" },
  { id: 3, value: 99.9, suffix: "%", label: "SATISFACTION RATE" },
];

export const FOOTER_LINKS: FooterLink[] = [
  { label: "Terms of Service", link: "#" },
  { label: "Privacy Policy", link: "#" },
  { label: "License Agreement", link: "#" },
];

  export const posts: Post[] = [
    {
      id: 1,
      category: "Marketing & Growth",
      title: "Dreading tax season? Our foolproof organization systems",
      excerpt: "Discover the exactly mapped out frameworks we use to store client receipts, reconcile workflows, and automate end-of-month financials seamlessly.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
      slug: "tax-season-organization-systems",
      date: "2026-07-15" 
    },
    {
      id: 2,
      category: "Operations",
      title: "How to run an end of year audit on your contract processes",
      excerpt: "Protect your creative pipeline. Learn how we analyze liability vulnerabilities and structure our onboarding documents for frictionless sign-offs.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800",
      slug: "end-of-year-contract-audit",
      date: "2026-01-22" 
    },
    {
      id: 3,
      category: "Design Systems",
      title: "The hidden psychology of neutral spacing grids in editorial layouts",
      excerpt: "Whitespace isn't passive—it dictates value. Explore why luxury branding guidelines prioritize extensive margins over dense visual data packing.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800",
      slug: "psychology-of-neutral-spacing-grids",
      date: "2025-11-05"
    }
  ];