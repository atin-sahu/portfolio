"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 px-5 py-3 flex items-center justify-between ${
          scrolled
            ? "glass-panel bg-slate-950/80 shadow-2xl border-white/10 backdrop-blur-xl"
            : "bg-slate-900/40 border border-white/5 backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            AS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
              {portfolioData.personal.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">
              FULL STACK DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-slate-950/40 border border-white/5 px-3 py-1.5 rounded-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Atin_Sahu_Resume.pdf"
            className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 px-3.5 py-2 rounded-full transition-all shadow-sm shadow-sky-500/10"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 px-4 py-2 rounded-full shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={portfolioData.personal.resumeUrl}
            download="Atin_Sahu_Resume.pdf"
            className="p-2 text-sky-400 bg-sky-500/10 rounded-full border border-sky-500/20"
            title="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 glass-panel bg-slate-950/95 border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 sm:hidden animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Atin_Sahu_Resume.pdf"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/30 py-2.5 rounded-xl"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 py-2.5 rounded-xl shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
