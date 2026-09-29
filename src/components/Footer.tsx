"use client";

import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="text-base font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </span>
            <p className="text-xs text-slate-400">
              Frontend-Focused Full Stack Developer • {portfolioData.personal.title}
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a 
              href={portfolioData.personal.resumeUrl} 
              download="Atin_Sahu_Resume.pdf"
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {portfolioData.personal.socials.twitter && (
                <a
                  href={portfolioData.personal.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-all"
                  aria-label="Twitter/X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              <a
                href={portfolioData.personal.socials.email}
                className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/5 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 border border-white/5 hover:border-sky-500/30 transition-all ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
