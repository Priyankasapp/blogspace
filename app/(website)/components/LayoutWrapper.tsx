"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}