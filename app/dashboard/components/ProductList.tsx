"use client";

import Image from "next/image";
import { 
  Plus, Search, SlidersHorizontal, ChevronDown, Filter, 
  CheckCircle2, AlertCircle, Eye, Edit3, Trash2 
} from "lucide-react";
import { Product } from "@/public/assets";

interface ProductListProps {
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedProducts: number[];
  handleSelectProduct: (id: number) => void;
  handleSelectAll: () => void;
  onCreateClick: () => void;
}

export function ProductList({
  products,
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  selectedProducts,
  handleSelectProduct,
  handleSelectAll,
  onCreateClick
}: ProductListProps) {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="space-y-1">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary tracking-tight">Products</h1>
          <p className="text-base md:text-lg text-secondary font-light max-w-lg">
            Manage your digital marketplace offerings and architectural learning resources.
          </p>
        </div>
        <button 
          onClick={onCreateClick}
          className="bg-primary text-on-primary px-8 py-3 rounded-none text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" /> Create Product
        </button>
      </section>

      {/* Stats Hub */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Total Products", value: products.length, change: "+12%" },
          { label: "Active Courses", value: 64 },
          { label: "Drafts", value: 12 },
          { label: "Avg. Revenue", value: "$2,450", suffix: "/mo" }
        ].map((stat, idx) => (
          <div key={idx} className="p-6 bg-surface border border-outline-variant hover:border-primary transition-colors">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-primary">{stat.value}</span>
              {stat.change && <span className="font-mono text-xs text-green-600 font-medium">{stat.change}</span>}
              {stat.suffix && <span className="font-mono text-xs text-secondary">{stat.suffix}</span>}
            </div>
          </div>
        ))}
      </section>

      {/* Filtering Toolkit Matrix */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-outline-variant pb-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-1 p-1 bg-surface-container-low border border-outline-variant/40 rounded-lg">
            {["all", "courses", "books", "templates", "ui-kits"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 font-mono text-xs capitalize transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-white text-primary shadow-sm rounded-md font-medium"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {cat === "all" ? "All" : cat.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative group flex-1 sm:flex-none">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search marketplace..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container-low text-sm border border-outline-variant/50 focus:border-primary focus:ring-0 rounded-lg pl-10 pr-4 py-2 w-full sm:w-72 transition-all outline-none text-primary placeholder:text-secondary/60"
            />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 border border-outline-variant bg-surface font-mono text-xs text-primary cursor-pointer hover:bg-surface-container-low transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Sort: Newest First</span>
            <ChevronDown className="w-3.5 h-3.5 text-secondary" />
          </div>

          <button className="flex items-center justify-center gap-2 px-3 py-2 border border-outline-variant bg-surface font-mono text-xs text-primary hover:bg-surface-container-low transition-colors">
            <Filter className="w-3.5 h-3.5" />
            <span>Advanced Filters</span>
          </button>
        </div>
      </section>

      {/* Data Table */}
      <section className="bg-surface border border-outline-variant overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="border-b border-outline-variant bg-surface-container-low/40">
              <th className="px-8 py-5 w-16">
                <input
                  type="checkbox"
                  checked={filteredProducts.length > 0 && selectedProducts.length === filteredProducts.length}
                  onChange={handleSelectAll}
                  className="rounded-none border-outline-variant text-primary focus:ring-0 w-4 h-4 cursor-pointer bg-transparent"
                />
              </th>
              <th className="px-8 py-5 font-mono text-[10px] text-secondary uppercase tracking-widest font-medium">Product Details</th>
              <th className="px-8 py-5 font-mono text-[10px] text-secondary uppercase tracking-widest font-medium">Category</th>
              <th className="px-8 py-5 font-mono text-[10px] text-secondary uppercase tracking-widest font-medium">Price</th>
              <th className="px-8 py-5 font-mono text-[10px] text-secondary uppercase tracking-widest font-medium">Status</th>
              <th className="px-8 py-5 font-mono text-[10px] text-secondary uppercase tracking-widest font-medium text-right">Sales</th>
              <th className="px-8 py-5 font-mono text-[10px] text-secondary uppercase tracking-widest font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {filteredProducts.map((product, idx) => {
              const isSelected = selectedProducts.includes(product.id);
              const isDraft = product.id === 3 || product.id === 5;

              return (
                <tr
                  key={product.id}
                  className={`group transition-colors duration-150 hover:bg-surface-container-low/60 ${isSelected ? "bg-surface-container-high/40" : ""}`}
                >
                  <td className="px-8 py-6">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelectProduct(product.id)}
                      className="rounded-none border-outline-variant text-primary focus:ring-0 w-4 h-4 cursor-pointer bg-transparent"
                    />
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-16 bg-surface-container flex-shrink-0 border border-outline-variant/60 overflow-hidden relative">
                        <Image
                          src={product.imageSrc}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="56px"
                          priority={idx < 3}
                        />
                      </div>
                      <div className="space-y-0.5 max-w-sm">
                        <h3 className="font-serif text-[17px] font-bold text-primary leading-tight">{product.title}</h3>
                        <p className="font-mono text-secondary text-[11px]">ID: PRD-9021{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-container border border-outline-variant/30 font-mono text-[10px] uppercase tracking-wider rounded-full text-secondary">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono text-sm text-primary">{product.price}.00</td>
                  <td className="px-8 py-6">
                    {!isDraft ? (
                      <div className="flex items-center gap-2 text-green-700 font-mono text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 fill-green-50" />
                        <span>Active</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-amber-700 font-mono text-xs">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500 fill-amber-50" />
                        <span>Draft</span>
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-6 text-right font-mono text-sm text-primary">
                    {isDraft ? 0 : (product.id * 89).toLocaleString()}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="opacity-0 group-hover:opacity-100 flex justify-end gap-1 transition-opacity duration-150">
                      <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded"><Eye className="w-4 h-4" /></button>
                      <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded"><Edit3 className="w-4 h-4" /></button>
                      <button className="p-2 text-secondary hover:text-error hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}