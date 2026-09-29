"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle, 
  CheckCircle2, 
  PlusCircle, 
  FolderGit2 
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Mobile", "SaaS", "Full-Stack"];

  const filteredProjects = activeFilter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-sky-400">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-accent">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Architected for scalability, responsiveness, and seamless user experiences.
            Production systems serving thousands of active users.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-slate-950/80 border border-white/10 mt-4 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/25"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                    <FolderGit2 className="w-12 h-12" />
                  </div>
                )}
                
                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-medium text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {project.status}
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-sky-950/80 backdrop-blur-md border border-sky-500/30 text-[10px] font-mono font-semibold text-sky-300">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400/90 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Key Highlights:
                  </p>
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://github.com/atin-sahu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner for additional projects */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 bg-gradient-to-r from-sky-950/20 via-slate-900/40 to-indigo-950/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <FolderGit2 className="w-5 h-5 text-sky-400" />
              Have more projects or client repositories in mind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              I have developed numerous other client systems, private SaaS workflows, and microservices. 
              Let&apos;s talk to review relevant case studies for your stack.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-semibold text-xs transition-all hover:scale-105"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Request Project Demos</span>
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="glass-panel bg-slate-950 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400">
                  {selectedProject.category} • {selectedProject.status}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-white/10"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            {selectedProject.image && (
              <div className="rounded-2xl overflow-hidden aspect-[16/9] w-full border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400">Overview</h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Full Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400">Key Architectural Achievements</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-mono text-sky-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href="https://github.com/atin-sahu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-semibold text-white hover:bg-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-xs font-semibold text-white shadow-lg"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
