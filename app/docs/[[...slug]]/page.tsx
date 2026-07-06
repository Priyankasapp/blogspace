// import Link from "next/link";

// type Props = {
//   params: Promise<{ slug?: string[] }>; // slug is an array of paths, and it is optional (?)
// };

// export default async function DocsPage({ params }: Props) {
//   const { slug } = await params;

//   // Mock sidebar navigation data for our high-end docs interface
//   const docNavigation = [
//     { name: "Architecture Overview", href: "/docs" },
//     { name: "Installation Guide", href: "/docs/getting-started/installation" },
//     { name: "Global Configuration", href: "/docs/getting-started/config" },
//     { name: "Dynamic Layout Routing", href: "/docs/routing/app-router" },
//     { name: "GSAP Animation Canvas", href: "/docs/animations/gsap" },
//   ];

//   // Helper to generate an elegant display title based on the active path parameters
//   const currentPathTitle = slug && slug.length > 0 
//     ? slug[slug.length - 1].replace(/-/g, " ").toUpperCase()
//     : "ARCHITECTURE OVERVIEW";

//   return (
//     <main className="w-full bg-white min-h-screen text-black font-editorial-sans selection:bg-black selection:text-white flex">
      
//       {/* 1. Left Sidebar - Sticky Documentation Navigation Map */}
//       <aside className="w-64 border-r border-neutral-100 p-8 hidden md:flex flex-col space-y-6 shrink-0 sticky top-0 h-screen">
//         <div className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase">
//           Documentation
//         </div>
//         <nav className="flex flex-col space-y-3 text-[11px] tracking-widest uppercase">
//           {docNavigation.map((item) => {
//             // Check if this menu link is currently active based on url array parameters
//             const currentItemSlugString = item.href.replace("/docs", "").split("/").filter(Boolean).join("/");
//             const activeSlugString = slug ? slug.join("/") : "";
//             const isActive = currentItemSlugString === activeSlugString;

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`transition-colors duration-200 hover:text-black ${
//                   isActive ? "text-black font-bold border-l border-black pl-2" : "text-neutral-400"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </aside>

//       {/* 2. Right Main Content Area */}
//       <section className="flex-1 p-8 md:p-14 max-w-4xl">
//         <div className="space-y-6">
          
//           {/* Breadcrumb Path Tracking indicator */}
//           <div className="text-[9px] tracking-[0.25em] uppercase text-neutral-400 flex items-center space-x-2">
//             <Link href="/docs" className="hover:text-black">DOCS</Link>
//             {slug?.map((segment, index) => (
//               <span key={index} className="flex items-center space-x-2">
//                 <span>/</span>
//                 <span className="text-neutral-600 font-mono">{segment.toUpperCase()}</span>
//               </span>
//             ))}
//           </div>

//           {/* Dynamic Editorial Content Header */}
//           <h1 className="font-editorial-serif text-3xl sm:text-4xl text-neutral-900 tracking-wide leading-tight border-b border-neutral-100 pb-4">
//             {currentPathTitle}
//           </h1>

//           {/* URL Parameter Inspector Node Panel */}
//           <div className="p-4 bg-neutral-50 border border-neutral-100 text-[11px] tracking-widest text-neutral-500 space-y-2">
//             <div className="font-semibold text-black text-[9px] uppercase tracking-[0.2em] mb-1 text-neutral-400">
//               Catch-All Active Matrix Data:
//             </div>
//             <div>
//               Nested Depth Level: <span className="font-mono font-bold text-black">{slug ? slug.length : 0}</span>
//             </div>
//             <div>
//               Raw JavaScript Array Value:{" "}
//               <span className="font-mono text-black bg-white border border-neutral-200 px-1.5 py-0.5">
//                 {slug ? JSON.stringify(slug) : "[] (Empty array matches root /docs)"}
//               </span>
//             </div>
//           </div>

//           {/* Sample Descriptive Body Context block */}
//           <p className="font-editorial-serif text-lg text-neutral-700 leading-relaxed italic font-light pt-4">
//             This interface utilizes a unified Next.js structural controller. It isolates routing arrays inside a single handler layout, matching nested design hierarchies instantly.
//           </p>
//         </div>
//       </section>

//     </main>
//   );
// }

import Link from "next/link";

type Props = {
  params: Promise<{ slug?: string[] }>; // slug is an array of paths, and it is optional ([...slug]])
};

export default async function DocsPage({ params }: Props) {
  const { slug } = await params;

  // Curated sidebar navigation mapping out your exact practical assignment sections
  const docNavigation = [
    { name: "Routing Overview", href: "/docs" },
    { name: "Part 1: Static & Nested Routes", href: "/docs/routing/static-nested" },
    { name: "Part 2: Dynamic Segments", href: "/docs/routing/dynamic-segments" },
    { name: "Part 3: Catch-All Matrices", href: "/docs/routing/catch-all" },
    { name: "Part 4: Route Groups (Auth)", href: "/docs/routing/route-groups" },
    { name: "Part 6: Loading & Error Boundaries", href: "/docs/routing/loading-errors" },
  ];

  // Generates an elegant display title based on the active path parameters
  const currentPathTitle = slug && slug.length > 0 
    ? slug[slug.length - 1].replace(/-/g, " ").toUpperCase()
    : "ROUTING ROUTE MAP OVERVIEW";

  return (
    <main className="w-full bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white flex">
      
      {/* 1. Left Sidebar - Sticky Documentation Navigation Map */}
      <aside className="w-72 border-r border-neutral-100 p-8 hidden md:flex flex-col space-y-6 shrink-0 sticky top-0 h-screen">
        <div className="text-[10px] tracking-[0.3em] font-semibold text-neutral-400 uppercase">
          App Router Practical
        </div>
        <nav className="flex flex-col space-y-3 text-[11px] tracking-widest uppercase">
          {docNavigation.map((item) => {
            // Check if this menu link is currently active based on url array parameters
            const currentItemSlugString = item.href.replace("/docs", "").split("/").filter(Boolean).join("/");
            const activeSlugString = slug ? slug.join("/") : "";
            const isActive = currentItemSlugString === activeSlugString;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 hover:text-black ${
                  isActive ? "text-black font-bold border-l border-black pl-2" : "text-neutral-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 2. Right Main Content Area */}
      <section className="flex-1 p-8 md:p-14 max-w-4xl">
        <div className="space-y-6">
          
          {/* Breadcrumb Path Tracking indicator */}
          <div className="text-[9px] tracking-[0.25em] uppercase text-neutral-400 flex items-center space-x-2">
            <Link href="/docs" className="hover:text-black">LABS</Link>
            {slug?.map((segment, index) => (
              <span key={index} className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-neutral-600 font-mono">{segment.toUpperCase()}</span>
              </span>
            ))}
          </div>

          {/* Dynamic Editorial Content Header */}
          <h1 className="text-3xl sm:text-4xl text-neutral-900 tracking-wide font-serif leading-tight border-b border-neutral-100 pb-4">
            {currentPathTitle}
          </h1>

          {/* URL Parameter Inspector Node Panel */}
          <div className="p-4 bg-neutral-50 border border-neutral-100 text-[11px] tracking-widest text-neutral-500 space-y-2">
            <div className="font-semibold text-neutral-400 text-[9px] uppercase tracking-[0.2em] mb-1">
              Catch-All Active Matrix Data:
            </div>
            <div>
              Nested Depth Level: <span className="font-mono font-bold text-black">{slug ? slug.length : 0}</span>
            </div>
            <div>
              Raw JavaScript Array Value:{" "}
              <span className="font-mono text-black bg-white border border-neutral-200 px-1.5 py-0.5">
                {slug ? JSON.stringify(slug) : "[] (Empty array matches root /docs)"}
              </span>
            </div>
          </div>

          {/* Contextual description block based on user depth selection */}
          <p className="text-lg text-neutral-700 leading-relaxed italic font-light pt-4 font-serif">
            This module showcases how an Optional Catch-All layout <code className="font-mono bg-neutral-100 px-1 text-sm not-italic">[[...slug]]</code> intercepts deep arbitrary folders while cleanly handling the root <code className="font-mono bg-neutral-100 px-1 text-sm not-italic">/docs</code> path under a singular, unified controller layout.
          </p>
        </div>
      </section>

    </main>
  );
}