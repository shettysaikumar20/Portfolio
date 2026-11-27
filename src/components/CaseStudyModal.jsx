import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Award, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Lock, 
  FileCode, 
  Workflow, 
  Sparkles, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function CaseStudyModal({ projectId, onClose, onOpenCertificate }) {
  if (!projectId) return null;

  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return null;

  const isPentester = project.id === 'pentester-agent';
  const isEWaste = project.id === 'ewaste-management';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0c111e] border-2 border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#111827] border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              isPentester ? 'bg-blue-500/20 text-blue-400' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {isPentester ? <ShieldCheck className="w-5 h-5" /> : <Award className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400">
                {isPentester ? 'FLAGSHIP ARCHITECTURE DEEP DIVE' : 'AWARD-WINNING RESEARCH CASE STUDY'}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[11px] font-mono text-slate-400 block">{m.label}</span>
                <span className="text-base sm:text-lg font-bold text-white mt-0.5 block">{m.value}</span>
              </div>
            ))}
          </div>

          {/* ============================================================== */}
          {/* CASE STUDY: PENTESTER AGENT */}
          {/* ============================================================== */}
          {isPentester && (
            <div className="space-y-6">
              
              {/* Problem & Motivation */}
              <div>
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-blue-400" />
                  <span>The Engineering Problem</span>
                </h4>
                <p>
                  Modern web applications are susceptible to severe OWASP Top 10 vulnerabilities (SQL Injection, XSS, SSRF, Local File Inclusion), yet traditional commercial vulnerability scanners generate high false-positive rates and lack contextual remediation guidance. Conversely, uncapped LLM security agents can perform unpredictable, destructive payload testing if left unrestrained.
                </p>
                <p className="mt-2 text-slate-400">
                  <strong className="text-white">The Solution:</strong> A dual-layer architecture combining deterministic, non-destructive heuristic testing plugins with an AI Security Advisor governed by a strict safety policy engine.
                </p>
              </div>

              {/* Execution Flow Diagram */}
              <div className="p-5 rounded-2xl bg-[#080d1a] border border-blue-900/40 space-y-3 font-mono text-xs">
                <div className="text-blue-300 font-bold uppercase text-[11px]">
                  Execution Architecture & Safety Pipeline:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-[11px]">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-blue-400 block font-bold">1. Target Auth</span>
                    <span className="text-slate-400 text-[10px]">DNS & Scope Guard</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-cyan-400 block font-bold">2. Recon & Crawl</span>
                    <span className="text-slate-400 text-[10px]">TCP & Header Fingerprint</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-amber-400 block font-bold">3. Heuristic Probes</span>
                    <span className="text-slate-400 text-[10px]">SQLi, XSS, SSRF, LFI</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-purple-400 block font-bold">4. Policy Engine</span>
                    <span className="text-slate-400 text-[10px]">Deterministic Sandbox</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <span className="text-emerald-400 block font-bold">5. Audit Report</span>
                    <span className="text-slate-400 text-[10px]">JSON & HTML CVSS Score</span>
                  </div>
                </div>
              </div>

              {/* Key Implementations & Modules */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>Core Subsystems & Implementations</span>
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-blue-300 block mb-1">1. Authorized Target Validation Engine</strong>
                    Strict origin validation that checks host headers, IP resolution, and explicit consent tokens before initializing port scans or sending probe traffic, preventing accidental out-of-scope testing.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-blue-300 block mb-1">2. Vulnerability Probe Suite (Python FastAPI)</strong>
                    Lightweight asynchronous probes designed to test for Reflected XSS through contextual script breakout, SQL Injection via time-based and error-based payloads, LFI via directory traversal heuristics, and SSRF against non-routable interfaces.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-blue-300 block mb-1">3. Sandboxed AI Security Advisor</strong>
                    Integrates Claude LLM to analyze raw HTTP response anomalies, assigning severity levels (Critical, High, Medium, Low) and drafting concrete developer code fixes, while passing all advice through a hard safety validator to prevent destructive exploits.
                  </div>
                </div>
              </div>

              {/* Testing & Verification Milestone */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-emerald-300 font-bold mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>149 Backend Tests Milestone Verified</span>
                </div>
                <p className="text-slate-300">
                  The backend service maintains 149 passing unit and integration tests verifying parser logic, mock target response detection, network timeout fallbacks, and policy sandbox enforcement. The React + Vite frontend has 25 verified component test cases.
                </p>
              </div>

            </div>
          )}

          {/* ============================================================== */}
          {/* CASE STUDY: E-WASTE MANAGEMENT SYSTEM */}
          {/* ============================================================== */}
          {isEWaste && (
            <div className="space-y-6">
              
              {/* Award Callout */}
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold text-amber-300 uppercase">
                    Institutional Recognition
                  </div>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    🥉 Third Prize – VBIT Real-Time Research Project Competition
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Guided by <strong className="text-amber-200">Dr. K. Kalaivani</strong>, Department of Information Technology (vITarka), Vignana Bharathi Institute of Technology.
                  </p>
                </div>
                <button
                  onClick={onOpenCertificate}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  <Award className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>

              {/* Research Problem Statement */}
              <div>
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-amber-400" />
                  <span>The Real-Time Research Problem</span>
                </h4>
                <p>
                  Rapid technological turnover generates millions of tons of hazardous electronic waste annually. In urban hubs like Hyderabad, consumers face significant friction: lack of knowledge on which electronic components contain hazardous heavy metals (lead, cadmium, mercury), no simple door-to-door collection scheduling, and opacity surrounding legitimate authorized recycling facilities.
                </p>
              </div>

              {/* Proposed Solution & Features */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Architecture & Key Modules</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">1. Customer Appointment Booking</strong>
                    Interactive web portal enabling households and enterprises to schedule door-to-door electronic waste pickups with date, time slot, and estimated item count.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">2. Worker Dispatch & Live Tracking</strong>
                    Field collection agents receive assigned pickups, view destination navigation, and update real-time progress statuses (En Route, Arrived, Collected).
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">3. Admin Management Operations</strong>
                    Centralized command dashboard allowing managers to assign routes, balance collection loads, and verify waste category quotas.
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <strong className="text-amber-300 block mb-1">4. Google Gemini Multimodal Vision AI</strong>
                    Users upload an image of discarded electronics; Google Gemini Vision models classify the hardware category, identify toxic internal materials, and suggest safe handling.
                  </div>
                </div>
              </div>

              {/* Localized Hyderabad Recycling Engine */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                <strong className="text-white block mb-1">
                  5. Real-Time Hyderabad E-Waste Center Matching Engine
                </strong>
                <p className="text-slate-300">
                  Integrated an intelligent recommendation system connecting Hyderabad residents with authorized state pollution control board (TSPCB) registered e-waste collection centers and formal recyclers across major zones (Secunderabad, HITEC City, Uppal, Kukatpally, Charminar).
                </p>
              </div>

              {/* Reflection & Learning Outcome */}
              <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-800/40 text-xs sm:text-sm">
                <strong className="text-indigo-300 block mb-1">Key Developer Learning & Growth:</strong>
                <p className="text-slate-300">
                  "This project not only helped me build a socially impactful solution but also gave me a deeper understanding of web development and AI integration. It truly sparked my passion and interest in the field of web development and problem-solving through technology."
                </p>
              </div>

            </div>
          )}

          {/* Tech Stack Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md font-mono bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-500"
              >
                <span>View Code on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
