"use client";

import { 
  Code2, 
  Smartphone, 
  Database, 
  Users, 
  Bot, 
  ShieldCheck, 
  CheckCircle2, 
  Zap 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { personal } = portfolioData;

  const bentoCards = [
    {
      title: "Frontend Engineering",
      subtitle: "React.js • Next.js • TypeScript",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      description:
        "Building modular, high-performance interfaces with Next.js, React 19, TypeScript, Tailwind CSS, and Shadcn UI. Expert in clean state management using Redux Toolkit, RTK Query, and Zustand.",
      badge: "Core Mastery"
    },
    {
      title: "Mobile App Development",
      subtitle: "React Native • Expo • OTA",
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
      description:
        "Developing cross-platform mobile apps for Android and iOS using Expo & React Native. Experienced in device geofencing (Google Maps), offline workflows, multi-profile builds, and Play Store releases.",
      badge: "Cross-Platform"
    },
    {
      title: "Backend & System APIs",
      subtitle: "Node.js • Express • NestJS • Redis",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      description:
        "Designing scalable RESTful APIs, relational schema models with PostgreSQL & TypeORM/Prisma, NoSQL databases with MongoDB, and caching with Redis to support mission-critical workflows.",
      badge: "Scalable APIs"
    },
    {
      title: "Engineering Ownership & Mentorship",
      subtitle: "Code Reviews • Junior Mentorship",
      icon: <Users className="w-5 h-5 text-purple-400" />,
      description:
        "Active leader in agile sprints, driving code quality standards, mentoring junior developers, and collaborating cross-functionally with product managers and designers.",
      badge: "Leadership"
    },
    {
      title: "AI-Augmented Development",
      subtitle: "Cursor AI • Copilot • Claude",
      icon: <Bot className="w-5 h-5 text-pink-400" />,
      description:
        "Harnessing state-of-the-art AI workflows (Cursor AI, GitHub Copilot, Claude) to accelerate prototype velocity, write resilient unit tests, and maintain clean architectural patterns.",
      badge: "Productivity"
    },
    {
      title: "Production Deployments",
      subtitle: "Docker • Vercel • Netlify",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      description:
        "Containerized workflows with Docker, CI/CD automated deployments, Razorpay payment integrations, and performance monitoring for production reliability.",
      badge: "DevOps"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-sky-400">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering with <span className="text-gradient-accent">Purpose & Precision</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            4 years of battle-tested experience delivering production-grade web applications,
            cross-platform mobile apps, and robust backend microservices.
          </p>
        </div>

        {/* Story & Philosophy Spotlight Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 mb-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                From Frontend Architecture to Scalable Cloud Backends
              </h3>
              {personal.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="lg:col-span-4 bg-slate-950/60 rounded-2xl p-5 border border-white/5 space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Principles
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pixel-perfect, accessible UI components</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Resilient REST & Microservice APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Security-first auth & RBAC controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Continuous learning & AI tool adoption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-white/5">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-sky-400 font-mono mb-3">
                  {card.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
