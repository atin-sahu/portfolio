"use client";

import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experiences, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-sky-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-accent">Experience & Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            4 years of proven hands-on impact in fast-paced software engineering roles,
            scaling multi-tenant web and mobile architectures.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group"
            >
              {/* Top Row: Role, Company & Meta */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-2">
                    {exp.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-base text-slate-300 font-medium">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Accomplishments & Systems Built:
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Employed */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-[11px] font-mono text-slate-300 hover:border-sky-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Certifications (Masai School) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Full Stack Engineering Certification</h3>
                <p className="text-xs text-indigo-400 font-mono">Masai School • Bengaluru</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> 11/2021 – 07/2022
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Bengaluru, Karnataka
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Intensive training in JavaScript, React.js, Node.js, Express, MongoDB, REST APIs, and DSA.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Selected as <strong>Student Guide for 2 months</strong>, mentoring cohorts in debugging and code structure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Completed full professional development training covering agile environments and collaboration.</span>
              </li>
            </ul>
          </div>

          {/* College Degree (The Study Hall College) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bachelor of Computer Application</h3>
                <p className="text-xs text-sky-400 font-mono">The Study Hall College • Lucknow</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> 07/2018 – 07/2021
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Lucknow, Uttar Pradesh
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-white/5">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Comprehensive study of core computer science fundamentals, algorithms, OOP, and data structures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Extensive coursework in database management systems (DBMS), networking, and software engineering.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>Completed capstone academic programming projects emphasizing clean architectural design.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
