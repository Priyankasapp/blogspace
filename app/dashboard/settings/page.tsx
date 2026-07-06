"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { 
 
  Sliders, 
  Plus, 
  Copy, 
  Trash2, 
  CheckCircle,

} from "lucide-react";
import Image from "next/image";
type TabSection = "profile" | "api" | "appearance";

export default function DashboardSettingsPage() {
  const [activeTab, setActiveTab] = useState<TabSection>("profile");
  const [showToast, setShowToast] = useState(false);
  const settingsContainerRef = useRef<HTMLDivElement>(null);

  // Stagger entry animation for settings cards using GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".settings-reveal", {
        y: 14,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out"
      });
    }, settingsContainerRef);
    return () => ctx.revert();
  }, [activeTab]);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div ref={settingsContainerRef} className="max-w-[1000px] mx-auto font-editorial-sans">
      
      {/* 1. Header Node */}
      <header className="mb-12 settings-reveal">
        <h2 className="font-serif text-3xl font-bold text-primary mb-2">Settings</h2>
        <p className="text-secondary text-sm font-light">Manage your account preferences, security configurations, and active integration nodes.</p>
      </header>

      <div className="flex flex-col md:flex-row gap-16">
        
        {/* 2. Sub-Tab Navigation Controller */}
        <aside className="w-full md:w-48 shrink-0 settings-reveal">
          <nav className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto pb-4 md:pb-0 border-b md:border-b-0 border-outline-variant/30">
            <button 
              onClick={() => setActiveTab("profile")}
              className={`text-left text-xs uppercase tracking-widest font-medium pl-4 py-1 border-l-2 transition-all shrink-0 ${
                activeTab === "profile" 
                  ? "text-primary font-bold border-primary" 
                  : "text-secondary border-transparent hover:text-primary"
              }`}
            >
              Profile
            </button>
            <button 
              onClick={() => setActiveTab("api")}
              className={`text-left text-xs uppercase tracking-widest font-medium pl-4 py-1 border-l-2 transition-all shrink-0 ${
                activeTab === "api" 
                  ? "text-primary font-bold border-primary" 
                  : "text-secondary border-transparent hover:text-primary"
              }`}
            >
              API Keys
            </button>
            <button 
              onClick={() => setActiveTab("appearance")}
              className={`text-left text-xs uppercase tracking-widest font-medium pl-4 py-1 border-l-2 transition-all shrink-0 ${
                activeTab === "appearance" 
                  ? "text-primary font-bold border-primary" 
                  : "text-secondary border-transparent hover:text-primary"
              }`}
            >
              Appearance
            </button>
          </nav>
        </aside>

        {/* 3. Segment Rendering Frame */}
        <div className="flex-1 space-y-12">
          
          {/* PROFILE CARD TAB */}
          {activeTab === "profile" && (
            <section className="space-y-8 settings-reveal">
              <div className="border-b border-outline-variant/50 pb-8 hover:border-primary transition-colors duration-200">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Profile Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-secondary block">First Name</label>
                    <input className="w-full bg-transparent border-b border-outline-variant/60 focus:border-primary focus:ring-0 px-0 py-2 transition-colors outline-none text-sm" type="text" defaultValue="Alexander"/>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-secondary block">Last Name</label>
                    <input className="w-full bg-transparent border-b border-outline-variant/60 focus:border-primary focus:ring-0 px-0 py-2 transition-colors outline-none text-sm" type="text" defaultValue="Hamilton"/>
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-secondary block">Email Address</label>
                    <input className="w-full bg-transparent border-b border-outline-variant/60 focus:border-primary focus:ring-0 px-0 py-2 transition-colors outline-none text-sm" type="email" defaultValue="alexander.h@blogspace.io"/>
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-secondary block">Biography</label>
                    <textarea className="w-full bg-transparent border-b border-outline-variant/60 focus:border-primary focus:ring-0 px-0 py-2 transition-colors resize-none outline-none text-sm" rows={3} defaultValue="Lead platform engineer focused on high-performance distributed systems and minimalist interface design." />
                  </div>
                </div>
              </div>

              <div className="border-b border-outline-variant/50 pb-8 hover:border-primary transition-colors duration-200">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Workspace Avatar</h3>
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/60 shrink-0">
                    <Image 
    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
    alt="Admin headshot avatar"
    fill
    className="object-cover"
    sizes="80px"
    priority
  />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-primary text-surface px-5 py-2 rounded-lg text-xs font-medium uppercase tracking-widest hover:bg-neutral-800 transition-colors">Change Image</button>
                    <button className="bg-surface border border-outline-variant/60 px-5 py-2 rounded-lg text-xs font-medium uppercase tracking-widest hover:bg-surface-container-low transition-colors text-secondary">Remove</button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* API KEYS MANAGEMENT TAB */}
          {activeTab === "api" && (
            <section className="space-y-8 settings-reveal">
              <div className="border-b border-outline-variant/50 pb-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2 text-primary">Integration Passkeys</h3>
                    <p className="text-secondary text-sm font-light">Access core system API nodes directly using live integration security hashes.</p>
                  </div>
                  <button className="bg-primary text-surface px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 transition-colors self-start sm:self-auto">
                    <Plus className="w-3.5 h-3.5" /> Generate Token
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/60 flex items-center justify-between gap-4">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-primary text-sm">Production Gateway Token</span>
                        <span className="text-[9px] font-mono bg-primary text-surface px-2 py-0.5 rounded uppercase tracking-wider">Live</span>
                      </div>
                      <code className="font-mono text-xs text-secondary block truncate">pk_live_************************3f2a</code>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button className="p-2 text-secondary hover:text-primary transition-colors"><Copy className="w-4 h-4" /></button>
                      <button className="p-2 text-secondary hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>

                  <div className="p-5 bg-surface-container-low rounded-xl border border-outline-variant/60 flex items-center justify-between gap-4 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-primary text-sm">Staging Sandbox Token</span>
                        <span className="text-[9px] font-mono bg-surface-container-high text-secondary px-2 py-0.5 rounded uppercase tracking-wider">Test</span>
                      </div>
                      <code className="font-mono text-xs text-secondary block truncate">pk_test_************************7g91</code>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <button className="p-2 text-secondary hover:text-primary transition-colors"><Copy className="w-4 h-4" /></button>
                      <button className="p-2 text-secondary hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* APPEARANCE ENVIRONMENT CONFIG */}
          {activeTab === "appearance" && (
            <section className="space-y-8 settings-reveal">
              <div className="border-b border-outline-variant/50 pb-8">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Interface Skin Mode</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  
                  <button className="text-left group outline-none">
                    <div className="aspect-video bg-white border-2 border-primary rounded-xl overflow-hidden mb-3 p-3 space-y-1.5 shadow-sm ring-2 ring-outline-variant/40">
                      <div className="h-1.5 w-1/2 bg-neutral-200 rounded"></div>
                      <div className="h-1.5 w-full bg-neutral-100 rounded"></div>
                      <div className="h-1.5 w-3/4 bg-neutral-100 rounded"></div>
                    </div>
                    <span className="font-medium text-primary text-xs uppercase tracking-wider block">Light Editorial</span>
                    <span className="text-[11px] text-secondary font-light">Classic clean workspace grid.</span>
                  </button>

                  <button className="text-left group opacity-50 hover:opacity-100 transition-all outline-none">
                    <div className="aspect-video bg-neutral-900 border border-outline-variant/50 rounded-xl overflow-hidden mb-3 p-3 space-y-1.5">
                      <div className="h-1.5 w-1/2 bg-neutral-700 rounded"></div>
                      <div className="h-1.5 w-full bg-neutral-800 rounded"></div>
                      <div className="h-1.5 w-3/4 bg-neutral-800 rounded"></div>
                    </div>
                    <span className="font-medium text-primary text-xs uppercase tracking-wider block">Studio Dark</span>
                    <span className="text-[11px] text-secondary font-light">Low light engineering contrast.</span>
                  </button>

                  <button className="text-left group opacity-50 hover:opacity-100 transition-all outline-none">
                    <div className="aspect-video bg-surface-container-low border border-outline-variant/50 rounded-xl overflow-hidden mb-3 flex flex-col items-center justify-center gap-1">
                      <Sliders className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium text-primary text-xs uppercase tracking-wider block">System Sync</span>
                    <span className="text-[11px] text-secondary font-light">Mirror local OS preferences.</span>
                  </button>

                </div>
              </div>

              <div className="border-b border-outline-variant/50 pb-8">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">Typography Blueprint Density</h3>
                <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest font-medium">
                  {["Standard", "Compact", "Expanded"].map((density, i) => (
                    <label key={density} className="flex items-center gap-2.5 cursor-pointer text-secondary hover:text-primary transition-colors">
                      <input defaultChecked={i === 0} name="density" type="radio" className="w-3.5 h-3.5 text-primary border-outline-variant focus:ring-primary focus:ring-offset-0 bg-transparent" />
                      <span>{density}</span>
                    </label>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4. Persistence Actions Footer */}
          <div className="flex items-center justify-end gap-4 pt-4 settings-reveal">
            <button className="px-6 py-2.5 bg-surface border border-outline-variant/60 rounded-lg text-xs font-medium uppercase tracking-widest text-secondary hover:bg-surface-container-low hover:text-primary transition-colors">
              Reset Changes
            </button>
            <button onClick={handleSave} className="px-6 py-2.5 bg-primary text-surface rounded-lg text-xs font-medium uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm">
              Save Preferences
            </button>
          </div>

        </div>
      </div>

      {/* 5. Dynamic Feedback Toast System */}
      <div className={`fixed bottom-12 right-12 bg-primary text-surface px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 transition-all duration-300 transform font-mono text-xs tracking-wider z-50 ${
        showToast ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}>
        <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
        <span>MUTATION STATE PERSISTED SUCCESSFULLY</span>
      </div>

    </div>
  );
}