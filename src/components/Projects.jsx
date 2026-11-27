import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Terminal, 
  Layers, 
  Sparkles, 
  ArrowRight,
  Eye,
  CheckCircle2,
  Lock,
  Cpu,
  FileCode
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onOpenCaseStudy, onOpenCertificate }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'flagship', label: 'Flagship & Awards' },
    { id: 'ai', label: 'AI & Generative AI' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'fullstack', label: 'Full-Stack & Backend' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'flagship') return project.isFlagship || project.isAward;
    return project.filterTags.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background glowing elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real software built to solve tangible problems: autonomous security testing engines, award-winning sustainability AI platforms, live study systems, and legal metrology tools.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ============================================================== */}
        {/* HERO SPOTLIGHT: Flagship Security Agent + E-Waste Award Winner */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Spotlight 1: AI-Powered Security Agent */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1628] via-[#090e1b] to-[#070b14] border-2 border-blue-500/30 p-7 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-blue-400/50 transition-all duration-300">
            <div>
              {/* Top Bar Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  FLAGSHIP MAJOR PROJECT
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  149 Tests Passed
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                AI-Powered Security Agent for Web Applications
              </h3>
              <p className="text-xs sm:text-sm text-blue-400/90 font-mono mt-1 mb-4">
                Autonomous Vulnerability Assessment & Safe AI Remediation Advisor
              </p>

              {/* Summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                An enterprise-grade automated web application penetration testing engine pairing active heuristic security probes with an LLM-driven Security Advisor to uncover OWASP Top 10 vulnerabilities while enforcing strict sandboxed safety policies.
              </p>

              {/* Highlights List */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Capabilities Tested & Implemented:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>SQLi & Reflected XSS Probing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>LFI, SSRF & Command Injection</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>TCP & HTTP Fingerprinting</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-700/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Policy-Validated AI Advice</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Python', 'FastAPI', 'React', 'Vite', 'SQLite', 'Claude AI', 'Security Plugins'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-950/60 text-blue-300 border border-blue-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onOpenCaseStudy('pentester-agent')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Architecture Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                Proprietary Research Codebase
              </span>
            </div>
          </div>

          {/* Spotlight 2: E-Waste Management System (3rd Place VBIT Award) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#1c180e] via-[#120f09] to-[#0a0805] border-2 border-amber-500/40 p-7 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-amber-400/60 transition-all duration-300">
            <div>
              {/* Top Bar Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono font-semibold">
                  <Award className="w-4 h-4 text-amber-400" />
                  3RD PRIZE AWARD WINNER
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold">
                  VBIT Research Exhibition
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-amber-200 transition-colors">
                E-Waste Management System
              </h3>
              <p className="text-xs sm:text-sm text-amber-400/90 font-mono mt-1 mb-4">
                AI Electronic Waste Recognition & Live Hyderabad Recycling Hub
              </p>

              {/* Summary */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Awarded <strong className="text-amber-300">Third Prize</strong> in the VBIT Real-Time Research Project competition under the guidance of <strong className="text-white">Dr. K. Kalaivani</strong>. Combines Node.js web services with Google Gemini Vision AI to streamline electronic waste collection, worker task tracking, and recycling center discovery.
              </p>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400/80">
                  Key System Innovations:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-950/20 border border-amber-800/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Gemini AI Image Recognition</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-950/20 border border-amber-800/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Customer Pickup Appointments</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-950/20 border border-amber-800/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Live Tracking for Field Workers</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-950/20 border border-amber-800/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Hyderabad E-Waste Center Matching</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Node.js', 'Google Gemini AI', 'JavaScript', 'HTML5', 'CSS3', 'Admin Dashboard'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-amber-950/50 text-amber-300 border border-amber-800/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-amber-900/40 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onOpenCertificate()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-all font-mono"
              >
                <Award className="w-4 h-4 text-slate-900" />
                <span>View Official Certificate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenCaseStudy('ewaste-management')}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 underline decoration-amber-400/50 hover:decoration-amber-300"
              >
                <span>Read Research Breakdown</span>
                &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* OTHER MAJOR PROJECTS GRID */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects
            .filter((p) => !p.isFlagship && !p.isAward)
            .map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40 group"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-blue-300 border border-slate-700">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.type}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-500">
                    {project.statusNotice ? project.statusNotice.substring(0, 32) + '...' : ''}
                  </span>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
