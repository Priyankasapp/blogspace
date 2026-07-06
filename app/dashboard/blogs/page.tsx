
"use client";


import Image from "next/image";
import { posts } from "@/public/assets";

const BlogAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f8] text-[#1c1b1b] antialiased selection:bg-neutral-200">
      {/* main section  */}
      <main className="p-16 flex-1">
        {/* Section Hero Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-serif font-semibold tracking-tight text-neutral-900">
              Editorial Management
            </h2>
            <p className="text-neutral-500 font-light mt-2 max-w-md">
              Manage, edit, and publish your technical blog content across the
              ecosystem.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-800 shadow-sm transition-all flex items-center gap-2">
            <span>+</span> Create Blog
          </button>
        </div>

        {/* Quick Analytical Stat Counters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Posts", value: posts.length.toString() },
            { label: "Published", value: "2" },
            { label: "Drafts", value: "1" },
            { label: "Monthly Views", value: "45.2k" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 border border-neutral-200 rounded-xl transition-all hover:border-black"
            >
              <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-2xl font-semibold text-neutral-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tabular Management Display Grid */}
        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                    Cover
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                    Blog Title
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                    Category
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                    Status
                  </th>
                  <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wider text-neutral-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-neutral-50/70 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="w-16 h-10 rounded overflow-hidden bg-neutral-100 border border-neutral-200 relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm font-semibold text-neutral-900 block">
                        {post.title}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400">
                        ID: BLOG-00{post.id}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200 rounded font-mono text-[10px] text-neutral-600 uppercase">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.id !== 2
                            ? "bg-green-50 text-green-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${post.id !== 2 ? "bg-green-600" : "bg-amber-500"}`}
                        />
                        {post.id !== 2 ? "Live" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                         <button className="text-neutral-400 hover:text-black transition-colors font-bold">···</button>
                       </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogAdminDashboard;
