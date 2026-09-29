"use client";

import { useState } from "react";
import { 
  Cpu, 
  Search, 
  Terminal, 
  Sparkles, 
  Check, 
  Flame 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredCategories = skills
    .map((cat) => {
      const filteredItems = cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...cat,
        items: filteredItems,
      };
    })
    .filter((cat) => {
      const matchesCategory = selectedCategory === "All" || cat.category === selectedCategory;
      const hasMatchingItems = cat.items.length > 0;
      return matchesCategory && hasMatchingItems;
    });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-sky-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-accent">Technology Stack</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Engineered with modern standards, clean modular patterns, and optimized developer tooling.
          </p>

          {/* Search & Filter Bar */}
          <div className="w-full max-w-md mt-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies (e.g. Next.js, Docker, NestJS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 shadow-inner"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm"
                    : "bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span>{group.category}</span>
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-white/5">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-xl bg-slate-950/70 border border-white/5 text-xs text-slate-200 hover:text-white hover:border-sky-500/30 hover:bg-slate-900 transition-all flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60 group-hover:bg-sky-400 transition-colors" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom highlight */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" /> Production Verified
                </span>
                <span className="text-slate-500">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
