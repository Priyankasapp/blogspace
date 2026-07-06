"use client";

import { 
  Plus, X, FileUp, Image as ImageIcon, EyeIcon, 
  Bold, Italic, List, Link2, Code 
} from "lucide-react";

interface ProductCreateProps {
  onBack: () => void;
}

export function ProductCreate({ onBack }: ProductCreateProps) {
  return (
    <div className="space-y-12 max-w-[1200px] mx-auto animate-fadeIn">
      {/* Breadcrumb Navigation */}
      <div>
        <nav className="flex gap-2 font-mono text-[10px] tracking-widest text-secondary mb-4 uppercase">
          <span className="hover:text-primary cursor-pointer" onClick={onBack}>PRODUCTS</span>
          <span>/</span>
          <span className="text-primary">CREATE NEW</span>
        </nav>
        <div className="flex justify-between items-center">
          <h2 className="font-serif text-3xl font-bold text-primary tracking-tight">Create New Product</h2>
          <button 
            onClick={onBack}
            className="text-secondary hover:text-primary font-mono text-xs border border-outline-variant px-4 py-2 hover:bg-surface-container-low transition-colors"
          >
            Back to Manifest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Inputs Block */}
        <div className="lg:col-span-8 space-y-8">
          {/* Basic Info */}
          <section className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-black/40 transition-colors">
            <h3 className="font-serif text-xl font-semibold mb-8 text-primary">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block font-mono text-[10px] tracking-widest text-secondary mb-2 uppercase">Product Title</label>
                <input type="text" placeholder="e.g. Modern UI Design System v2.0" className="w-full bg-background border border-outline-variant rounded px-4 py-3 text-sm focus:border-primary focus:ring-0 outline-none text-primary" />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest text-secondary mb-2 uppercase">Slug</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l border border-r-0 border-outline-variant bg-surface-container-low text-secondary/60 text-xs font-mono">blogspace.io/</span>
                  <input type="text" placeholder="modern-ui-v2" className="w-full bg-background border border-outline-variant rounded-r px-4 py-3 text-sm focus:border-primary focus:ring-0 outline-none text-primary" />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest text-secondary mb-2 uppercase">Category</label>
                <select className="w-full bg-background border border-outline-variant rounded px-4 py-3 text-sm focus:border-primary focus:ring-0 outline-none text-primary appearance-none">
                  <option>Developer Kits</option>
                  <option>Design Tools</option>
                  <option>Templates</option>
                  <option>Typography</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest text-secondary mb-2 uppercase">Base Price (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary/60 font-mono text-sm">$</span>
                  <input type="number" placeholder="0.00" className="w-full bg-background border border-outline-variant rounded pl-10 pr-4 py-3 text-sm focus:border-primary focus:ring-0 outline-none text-primary" />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-widest text-secondary mb-2 uppercase">SKU / ID</label>
                <input type="text" placeholder="MP-992-UI" className="w-full bg-background border border-outline-variant rounded px-4 py-3 text-sm focus:border-primary focus:ring-0 outline-none text-primary" />
              </div>
            </div>
          </section>

          {/* Media Module */}
          <section className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-black/40 transition-colors">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-serif text-xl font-semibold text-primary">Media</h3>
              <span className="font-mono text-[10px] tracking-widest text-secondary uppercase">UP TO 5 IMAGES</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="col-span-2 row-span-2 aspect-square border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-4 bg-background group cursor-pointer hover:border-primary transition-all">
                <div className="p-4 bg-surface-container rounded-full group-hover:scale-105 transition-transform text-secondary group-hover:text-primary">
                  <FileUp className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-primary">Cover Image</p>
                  <p className="text-[11px] text-secondary mt-0.5">Recommended 1200x1200px</p>
                </div>
              </div>
              <div className="aspect-square bg-surface-container-low rounded-xl border border-outline-variant flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-secondary/30" />
              </div>
              <div className="aspect-square bg-surface-container-low rounded-xl border border-outline-variant flex items-center justify-center">
                <button type="button" className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container text-secondary hover:text-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="aspect-square bg-surface-container-low rounded-xl border border-outline-variant border-dashed"></div>
              <div className="aspect-square bg-surface-container-low rounded-xl border border-outline-variant border-dashed"></div>
            </div>
          </section>

          {/* Text Editor */}
          <section className="bg-surface p-8 rounded-xl border border-outline-variant hover:border-black/40 transition-colors">
            <h3 className="font-serif text-xl font-semibold mb-8 text-primary">Product Description</h3>
            <div className="border border-outline-variant rounded-lg overflow-hidden bg-background focus-within:border-primary transition-colors">
              <div className="flex items-center gap-1 p-2 border-b border-outline-variant bg-surface-container-low">
                <button type="button" className="p-2 hover:bg-surface-container rounded text-secondary hover:text-primary"><Bold className="w-4 h-4" /></button>
                <button type="button" className="p-2 hover:bg-surface-container rounded text-secondary hover:text-primary"><Italic className="w-4 h-4" /></button>
                <button type="button" className="p-2 hover:bg-surface-container rounded text-secondary hover:text-primary"><List className="w-4 h-4" /></button>
                <div className="w-px h-4 bg-outline-variant mx-1"></div>
                <button type="button" className="p-2 hover:bg-surface-container rounded text-secondary hover:text-primary"><Link2 className="w-4 h-4" /></button>
                <button type="button" className="p-2 hover:bg-surface-container rounded text-secondary hover:text-primary"><ImageIcon className="w-4 h-4" /></button>
                <button type="button" className="p-2 hover:bg-surface-container rounded text-secondary hover:text-primary"><Code className="w-4 h-4" /></button>
              </div>
              <div className="p-6 min-h-[260px]">
                <p className="text-secondary/50 italic text-sm">Start typing your product narrative here...</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Columns Metadata Block */}
        <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          <section className="bg-surface p-6 rounded-xl border border-outline-variant shadow-sm space-y-6">
            <div>
              <h4 className="font-mono text-[10px] tracking-widest text-secondary uppercase mb-4">Publishing</h4>
              <div className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant">
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <EyeIcon className="w-4 h-4" />
                  <span>Status Visibility</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-secondary-container rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  <span className="ml-2 font-mono text-xs text-primary font-medium">Live</span>
                </label>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button onClick={onBack} className="w-full bg-primary text-on-primary py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">Publish Product</button>
              <button onClick={onBack} className="w-full bg-white border border-outline-variant text-primary py-3 rounded-lg text-sm font-medium hover:bg-surface-container-low transition-colors">Save Draft</button>
            </div>

            {/* SEO Panel Section */}
            <div className="border-t border-outline-variant pt-6 space-y-4">
              <h4 className="font-mono text-[10px] tracking-widest text-secondary uppercase">Search Engine Optimization</h4>
              <div>
                <label className="block font-mono text-[9px] tracking-wider text-secondary mb-1 uppercase">Meta Title</label>
                <input type="text" placeholder="SEO title..." className="w-full bg-background border border-outline-variant rounded px-3 py-2 text-xs focus:border-primary focus:ring-0 outline-none text-primary" />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-wider text-secondary mb-1 uppercase">Description</label>
                <textarea rows={3} placeholder="Describe product for search results..." className="w-full bg-background border border-outline-variant rounded px-3 py-2 text-xs focus:border-primary focus:ring-0 outline-none text-primary resize-none" />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-wider text-secondary mb-1 uppercase">Keywords</label>
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="px-2 py-0.5 bg-surface-container rounded text-[10px] font-mono text-secondary flex items-center gap-1 border border-outline-variant">UI-KIT <X className="w-2.5 h-2.5 cursor-pointer" /></span>
                </div>
                <input type="text" placeholder="Add keyword..." className="w-full bg-background border border-outline-variant rounded px-3 py-2 text-xs focus:border-primary focus:ring-0 outline-none text-primary" />
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}