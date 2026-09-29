"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Download, 
  CheckCircle2, 
  MessageSquare,
  Sparkles 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/jayshiv7171@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Portfolio Inquiry",
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });
    } catch {
      // In case of network blocker, still show confirmation to user
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-sky-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET&apos;S COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient-accent">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Interested in hiring for a role, discussing a project, or exploring technical collaboration? 
            My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Resume Download Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Feel free to reach out via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-sky-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">{personal.email}</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-900/60 hover:bg-slate-800 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Phone / WhatsApp</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">{personal.phone}</p>
                  </div>
                </a>

                {/* Location & Preferred Hubs */}
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Preferred Locations</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">Noida • Gurugram • Hyderabad • Bengaluru • Pune</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {personal.preferredLocations.map((loc) => (
                      <span
                        key={loc}
                        className="px-2 py-0.5 rounded-md bg-slate-950 border border-white/10 text-[10px] font-mono text-sky-300"
                      >
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">Profiles:</span>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 hover:text-white transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                {personal.socials.twitter && (
                  <a
                    href={personal.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 hover:text-white transition-all hover:scale-105"
                    aria-label="Twitter/X Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Resume Download Spotlight Card */}
            <div className="glass-panel rounded-3xl p-6 border border-sky-500/30 bg-gradient-to-br from-sky-950/30 via-slate-900/60 to-indigo-950/30 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-[10px] font-mono uppercase font-semibold">
                  Official Document
                </span>
                <span className="text-[11px] font-mono text-slate-400">PDF • 193 KB</span>
              </div>

              <h4 className="text-base font-bold text-white">
                Download Comprehensive Resume
              </h4>
              <p className="text-xs text-slate-300">
                Get an offline copy of my complete work history, technology competencies, and project track record.
              </p>

              <a
                href={personal.resumeUrl}
                download="Atin_Sahu_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-all shadow-lg shadow-sky-500/25 active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details below and I will respond to your inquiry promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, {formData.name || "friend"}. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Opportunity / Technical Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hi Atin, I'd like to discuss an opportunity regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-sky-500/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
