// public/assets.ts
import { StaticImageData } from "next/image";
import photo1 from "./images/photo2.png";
import photo2 from "./images/photo3.png";
import photo3 from "./images/photo4.png";
import photo4 from "./images/photo5.png";
import photo5 from "./images/photo6.png";
import photo6 from "./images/photo7.png";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  description: string;
  imageSrc: string | StaticImageData; 
  link: string;
}

export interface Category {
  id: number;
  title: string;
  iconName: 'book' | 'layers' | 'grid' | 'education'; 
  link: string;
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
  iconName: 'check' | 'refresh' | 'shield';
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export const SHOP_CATEGORIES: Category[] = [
  { id: 1, title: 'Books', iconName: 'book', link: '#' },
  { id: 2, title: 'Templates', iconName: 'layers', link: '#' },
  { id: 3, title: 'UI Kits', iconName: 'grid', link: '#' },
  { id: 4, title: 'Courses', iconName: 'education', link: '#' },
];

export const CURATED_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Next.js Mastery',
    category: 'DIGITAL BOOK',
    price: '$49',
    description: 'Complete guide to building high-performance server-side applications with Next.js.',
    imageSrc: photo1, 
    link: '#',
  },
  {
    id: 2,
    title: 'React Architecture',
    category: 'DIGITAL BOOK',
    price: '$55',
    description: 'Advanced patterns for scalable frontend systems and complex state management.',
    imageSrc: photo2,
    link: '#',
  },
  {
    id: 3,
    title: 'Editorial UI Kit',
    category: 'UI KIT',
    price: '$89',
    description: 'A collection of premium components designed for high-end technical blogs and platforms.',
    imageSrc: photo3,
    link: '#',
  },
  {
    id: 4,
    title: 'TypeScript Handbook',
    category: 'DIGITAL BOOK',
    price: '$39',
    description: 'The definitive guide to type safety and advanced Typescript features for engineers.',
    imageSrc: photo4,
    link: '#',
  },
  {
    id: 5,
    title: 'Dev Portfolio',
    category: 'TEMPLATE',
    price: '$35',
    description: 'A minimalist, SEO-optimized portfolio template for modern developers.',
    imageSrc: photo5,
    link: '#',
  },
  {
    id: 6,
    category: 'DIGITAL BOOK',
    title: 'Node.js Guide',
    price: '$59',
    description: 'Deep dive into backend architecture, streaming and performance optimization.',
    imageSrc: photo6,
    link: '#',
  },
];

// --- Added Features & Stats Data ---
export const STORE_FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Instant Download',
    description: 'Access your files immediately after purchase in your member dashboard.',
    iconName: 'check',
  },
  {
    id: 2,
    title: 'Lifetime Updates',
    description: 'Receive all future versions and improvements at no additional cost.',
    iconName: 'refresh',
  },
  {
    id: 3,
    title: 'Production Ready',
    description: 'Extensively tested code and assets ready for real-world application.',
    iconName: 'shield',
  },
];

export const STORE_STATS: Stat[] = [
  { id: 1, value: 10, suffix: 'K+', label: 'GLOBAL DEVELOPERS' },
  { id: 2, value: 450, suffix: '+', label: 'CURATED RESOURCES' },
  { id: 3, value: 99.9, suffix: '%', label: 'SATISFACTION RATE' },
];

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Terms of Service', link: '#' },
  { label: 'Privacy Policy', link: '#' },
  { label: 'License Agreement', link: '#' },
];