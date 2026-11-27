import React from 'react';
import { 
  GraduationCap, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Workflow, 
  Award, 
  Sparkles,
  CheckCircle,
  FileText,
  MapPin
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export default function About({ onOpenResume, onOpenCertificate }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & My Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From mechanical diagnostic precision to autonomous AI systems and web application security: bridging multi-disciplinary engineering into scalable software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Story & Engineering Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                <span>Engineering Practical Software That Matters</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a final-year <strong className="text-white font-semibold">Information Technology</strong> engineering student at <strong className="text-white font-semibold">Vignana Bharathi Institute of Technology (VBIT)</strong> in Hyderabad. My focus spans full-stack web architectures, applied artificial intelligence, scalable backend services, and application security.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Before joining B.Tech through lateral entry, I earned my <strong className="text-white font-semibold">Diploma in Automobile Engineering</strong> with distinction (8.2 CGPA) from the Government Polytechnic College, Masab Tank. That experience ingrained rigorous analytical diagnostics, systematic telemetry tracking, and hardware-software interaction into my problem-solving DNA.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                During my technical internship at <strong className="text-white font-semibold">Silver Star Mercedes-Benz</strong>, I engineered diagnostic reporting protocols for approximately 3,000 vehicles, achieving an estimated 25% improvement in reporting turnaround. I have applied that same relentless engineering rigor to software: creating an <strong className="text-blue-300">AI-Powered Security Agent</strong> with 149 passing backend test suites, building the <strong className="text-indigo-300">Need-a-Help</strong> live study platform, and securing <strong className="text-amber-300">3rd Place in VBIT's Real-Time Research Project</strong> for our Gemini-powered E-Waste Management System.
              </p>

              {/* Core Strengths Chips */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Pillars
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Full-Stack App Architecture</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>FastAPI & Node REST Services</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>Multimodal AI & LLM Systems</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                    <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>OWASP Probes & Safe AI Agents</span>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Detailed Resume</span>
                </button>
                <button
                  onClick={onOpenCertificate}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Inspect VBIT Award Certificate</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Educational Pathway & Key Profile Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Journey Card */}
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-md space-y-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Academic Foundation</span>
              </h3>

              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div 
                    key={edu.id}
                    className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-white text-sm">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-blue-300 font-medium mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          CGPA {edu.cgpa}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-2 pt-2 border-t border-slate-700/40">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Highlights Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/30 via-slate-900/60 to-purple-950/20 border border-indigo-900/40 p-6 space-y-4">
              <h4 className="text-sm font-bold text-indigo-200 uppercase tracking-wider font-mono flex items-center gap-2">
                <Workflow className="w-4 h-4 text-indigo-400" />
                <span>Professional Snapshot</span>
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Primary Location</span>
                  <strong className="text-white font-medium flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-blue-400" /> Hyderabad, India
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Availability</span>
                  <strong className="text-emerald-300 font-medium mt-0.5 block">
                    Immediate / Open
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Target Roles</span>
                  <strong className="text-white font-medium mt-0.5 block">
                    SDE / Full-Stack / AI
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Expected Grad</span>
                  <strong className="text-indigo-300 font-medium mt-0.5 block font-mono">
                    May 2027
                  </strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
