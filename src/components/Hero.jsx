import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Award,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenCertificate, onOpenCaseStudy }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/10 blur-[130px] rounded-full"></div>
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[140px] rounded-full"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalInfo.status}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-mono font-medium text-blue-400 tracking-wide">
                Hi, I'm {personalInfo.name}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Building Intelligent Software. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                  Solving Real-World Problems.
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Final-year Information Technology engineering student with hands-on experience developing full-stack web applications, AI-powered agentic systems, robust backend services, and automated web security assessment platforms.
            </p>

            {/* Key Focus Highlights */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-blue-400" /> Full-Stack & Backend
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-800/40 text-purple-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-purple-400" /> Applied AI & LLMs
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> Cybersecurity & AppSec
              </span>
            </div>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-slate-800 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Email Copy */}
            <div className="pt-4 flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-blue-400 hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-600 hover:text-slate-200 text-xs font-mono transition-colors"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Profile & Terminal Feature Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-50"></div>
            
            {/* Main Interactive Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0f172a]/90 to-[#0a0f1d]/90 border border-slate-800/90 shadow-2xl p-6 backdrop-blur-xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">sai-kumar-shetty ~ main</span>
                </div>
                <div className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/50 text-blue-300">
                  vbit-it-2027
                </div>
              </div>

              {/* Developer Profile Card Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20">
                    <div className="w-full h-full rounded-2xl bg-[#090d1a] flex items-center justify-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 to-indigo-200">
                      SK
                    </div>
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0f172a] flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white truncate">
                    Sai Kumar Shetty
                  </h3>
                  <p className="text-xs text-blue-400 font-mono">
                    B.Tech IT · Lateral Entry Graduate (Diploma Auto Engg)
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <span>Vignana Bharathi Institute of Technology</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-emerald-400 font-semibold font-mono">CGPA 8.15</span>
                  </p>
                </div>
              </div>

              {/* Live Accomplishment Pills */}
              <div className="space-y-3 mb-5">
                
                {/* 3rd Place Award Pill (Clickable) */}
                <button
                  onClick={() => onOpenCertificate()}
                  className="w-full text-left group flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 hover:border-amber-400/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-amber-200 group-hover:text-amber-100 flex items-center gap-1.5">
                        <span>3rd Prize – Real-Time Research Project</span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300">VBIT</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        E-Waste Management System (Gemini AI + Node.js)
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-amber-300/80 group-hover:text-amber-200 group-hover:translate-x-0.5 transition-transform">
                    View &rarr;
                  </span>
                </button>

                {/* Flagship Security Agent Milestone (Clickable) */}
                <button
                  onClick={() => onOpenCaseStudy('pentester-agent')}
                  className="w-full text-left group flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-500/30 hover:border-blue-400/60 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-300">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-200 group-hover:text-blue-100 flex items-center gap-1.5">
                        <span>AI Web Security Agent</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-400/20 text-blue-300">149 Tests</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        FastAPI + React + Heuristic Probes + Policy Sandbox
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-blue-300/80 group-hover:text-blue-200 group-hover:translate-x-0.5 transition-transform">
                    Case Study &rarr;
                  </span>
                </button>

                {/* Live App Pill */}
                <a
                  href="https://need-a-help.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/60 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-white flex items-center gap-1.5">
                        <span>Need-a-Help (AI Study Notes)</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-400/20 text-purple-300">Live Demo</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Multi-LLM Q&A with LaTeX math rendering
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>

              {/* Terminal Code Snippet */}
              <div className="p-3 rounded-xl bg-[#070a14] border border-slate-800/90 font-mono text-[11px] text-slate-300 space-y-1">
                <div className="text-slate-500">
                  // Target Roles: SDE, Full-Stack, AI, Cybersecurity
                </div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">candidate</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span>{' '}
                  <span className="text-emerald-300">['React', 'Node', 'FastAPI', 'Python', 'Gemini']</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">readyForProduction:</span>{' '}
                  <span className="text-amber-400">true</span>
                </div>
                <div>{'}'};</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
