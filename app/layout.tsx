import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your layout components (adjust paths based on your folder structure)
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carrie Brad | Blog & Digital Marketing",
  description: "Tips, tricks, and trends for social media and digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white text-black font-sans flex flex-col">
        
        {/* 2. Top Navigation */}
        <Navbar />

        {/* 3. Main Content Container */}
        {/* flex-grow ensures the content expands to push the footer down on short pages */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 4. Bottom Footer */}
        <Footer />

      </body>
    </html>
  );
}