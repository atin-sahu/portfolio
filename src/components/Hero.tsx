"use client";

import Image from "next/image";
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Phone, 
  Sparkles, 
  Code2, 
  Smartphone, 
  Server,
  Layers
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal, metrics } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill & Preferred Locations */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-medium text-emerald-400 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Full-time Roles & Contracts</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-white/10 text-[11px] text-slate-300 font-mono">
                <span className="text-slate-400">Hubs:</span>
                <span className="text-sky-300">Noida • Gurugram • Hyderabad • Bengaluru • Pune</span>
              </div>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-sky-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Hello, I am {personal.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Crafting Scalable{" "}
                <span className="text-gradient-accent">Web & Mobile</span>{" "}
                Applications.
              </h1>
            </div>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Frontend-focused <span className="text-white font-medium">Full Stack Developer</span> with 
              <span className="text-sky-400 font-semibold"> 4 years</span> of experience engineering scalable systems across 
              <span className="text-white"> React.js, Next.js, React Native, Node.js, NestJS</span>, and modern cloud architectures.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Atin_Sahu_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 glass-panel hover:bg-slate-800/80 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-white/10 hover:border-sky-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Download className="w-4 h-4 text-sky-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="pt-4 flex items-center gap-4 border-t border-white/5 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                {personal.socials.twitter && (
                  <a
                    href={personal.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all hover:scale-110"
                    aria-label="Twitter/X Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={personal.socials.email}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all hover:scale-110"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.phone}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-white/20 text-slate-300 hover:text-white transition-all hover:scale-110"
                  aria-label="Call Mobile"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card & Floating Tech Elements */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
              
              {/* Image Frame Card */}
              <div className="relative glass-panel bg-slate-950/90 rounded-3xl p-3 border border-white/10 overflow-hidden shadow-2xl">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src={personal.profileImage || "/avatar.jpg"}
                    alt={personal.name}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">{personal.name}</p>
                      <p className="text-[10px] text-sky-400 font-mono">Full Stack Engineer</p>
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                      Verified 4y Exp
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill 1: Next.js & React */}
              <div className="absolute -top-4 -left-6 glass-panel bg-slate-950/90 border border-white/10 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 animate-float-slow hidden sm:flex">
                <div className="p-1.5 bg-sky-500/20 rounded-lg text-sky-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Frontend</p>
                  <p className="text-xs font-bold text-white">Next.js & React</p>
                </div>
              </div>

              {/* Floating Tech Pill 2: Mobile Apps */}
              <div className="absolute -bottom-4 -right-4 glass-panel bg-slate-950/90 border border-white/10 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 animate-float-slow [animation-delay:2s] hidden sm:flex">
                <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Mobile</p>
                  <p className="text-xs font-bold text-white">React Native Expo</p>
                </div>
              </div>

              {/* Floating Tech Pill 3: Backend */}
              <div className="absolute top-1/2 -right-8 glass-panel bg-slate-950/90 border border-white/10 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2 animate-float-slow [animation-delay:4s] hidden sm:flex">
                <div className="p-1 bg-emerald-500/20 rounded-md text-emerald-400">
                  <Server className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-semibold text-white">Node / NestJS</span>
              </div>

            </div>
          </div>

        </div>

        {/* Metrics Counter Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel glass-panel-hover p-4 rounded-2xl border border-white/5 flex flex-col space-y-1"
            >
              <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                {item.value}
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                {item.label}
              </span>
              <span className="text-[11px] text-slate-400">
                {item.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
