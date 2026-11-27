import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  ExternalLink,
  Award,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Code
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { 
  personalInfo, 
  educationData, 
  experienceData, 
  skillCategories, 
  projectsData, 
  achievementsData, 
  certificationsList 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0f172a] border border-slate-700 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141e33] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
              Verified Developer Resume
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300 font-mono">Sai Kumar Shetty</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Paper */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#070b14] text-slate-200">
          
          <div className="max-w-3xl mx-auto bg-[#0d1424] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 font-sans print:bg-white print:text-black print:border-none print:p-0">
            
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-6 print:border-black">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                {personalInfo.name}
              </h1>
              <div className="text-xs sm:text-sm font-semibold text-blue-400 print:text-blue-700 mt-1">
                {personalInfo.headline}
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 print:text-slate-700 mt-3 font-mono">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {personalInfo.location}
                </span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-white underline">
                  <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
                </a>
                <span>•</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white underline">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <span>•</span>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white underline">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                Final-year Information Technology engineering student with hands-on experience developing full-stack applications, AI-powered agentic systems, backend services, and security assessment tools. Lateral entry graduate with an Automobile Engineering diploma foundation, focused on building practical, secure, and scalable software products.
              </p>
            </div>

            {/* Key Honors / Awards */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 print:text-amber-700 border-b border-slate-800 pb-1 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>Honors & Recognitions</span>
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-800/30 print:bg-amber-50 print:border-amber-200">
                  <strong className="text-white print:text-black">🥉 THIRD PRIZE – Real-Time Research Project (VBIT, IT Dept)</strong>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">
                    Project: <em>E-Waste Management System</em> (Node.js + Google Gemini AI). Guided by Dr. K. Kalaivani (HOD, IT). Certificate of Appreciation awarded.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <strong className="text-white print:text-black">🥇 1st Place – Hacktoberfest 2026 Hack Day (Hyderabad)</strong>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">
                    Secured 1st place out of 150+ software developers. Awarded Arduino UNO Q board and honors.
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 print:bg-slate-50 print:border-slate-200">
                  <strong className="text-white print:text-black">Smart India Hackathon 2026 Innovation Finalist</strong>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">
                    Team Amogha: LabelSure Legal Metrology OCR & compliance engine.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800 pb-1 flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                {educationData.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start">
                    <div>
                      <strong className="text-white print:text-black block">{edu.degree}</strong>
                      <span className="text-slate-400 print:text-slate-600 text-xs">{edu.institution} ({edu.location})</span>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className="text-emerald-400 print:text-emerald-700 font-bold block">CGPA: {edu.cgpa}</span>
                      <span className="text-slate-500">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800 pb-1 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Experience & Internships</span>
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="text-white print:text-black block">{exp.role}</strong>
                        <span className="text-blue-400 print:text-blue-700 text-xs font-medium">{exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-700 text-xs">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800 pb-1 flex items-center gap-2">
                <Code className="w-3.5 h-3.5" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <strong className="text-slate-400 print:text-slate-700">Languages:</strong>{' '}
                  <span className="text-white print:text-black">Java, Python, JavaScript, C, SQL</span>
                </div>
                <div>
                  <strong className="text-slate-400 print:text-slate-700">Frontend:</strong>{' '}
                  <span className="text-white print:text-black">React.js, Vite, Tailwind CSS, HTML5, CSS3, Bootstrap</span>
                </div>
                <div>
                  <strong className="text-slate-400 print:text-slate-700">Backend:</strong>{' '}
                  <span className="text-white print:text-black">Node.js, Express.js, FastAPI, RESTful APIs</span>
                </div>
                <div>
                  <strong className="text-slate-400 print:text-slate-700">Databases:</strong>{' '}
                  <span className="text-white print:text-black">PostgreSQL, MongoDB, MySQL, SQLite, Firebase</span>
                </div>
                <div>
                  <strong className="text-slate-400 print:text-slate-700">AI & LLMs:</strong>{' '}
                  <span className="text-white print:text-black">Gemini Vision API, OpenRouter, Backboard, Ollama, Whisper</span>
                </div>
                <div>
                  <strong className="text-slate-400 print:text-slate-700">Security & AppSec:</strong>{' '}
                  <span className="text-white print:text-black">OWASP Top 10, SQLi, Reflected XSS, SSRF, LFI Probes, Sandbox Policies</span>
                </div>
                <div>
                  <strong className="text-slate-400 print:text-slate-700">Cloud & Tools:</strong>{' '}
                  <span className="text-white print:text-black">Microsoft Azure (AZ-900), AWS Basics, Docker, Git, Postman, Jira</span>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800 pb-1">
                Flagship Projects
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between items-start">
                    <strong className="text-white print:text-black">AI-Powered Security Agent for Web Applications</strong>
                    <span className="text-[11px] font-mono text-blue-400">149 Tests Passed</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">
                    FastAPI + React security platform with active heuristic probes (SQLi, XSS, SSRF, LFI), policy validation sandbox, and AI remediation advisor.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <strong className="text-white print:text-black">E-Waste Management System (3rd Prize Award)</strong>
                    <span className="text-[11px] font-mono text-amber-400">Node.js + Gemini AI</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">
                    Door-to-door customer booking, worker dispatch tracking, Gemini multimodal hardware classifier, and Hyderabad recycling center recommendation engine.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <strong className="text-white print:text-black">Need-a-Help – AI Study Workspace</strong>
                    <span className="text-[11px] font-mono text-emerald-400">Live Deployed</span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 text-xs mt-0.5">
                    Multi-document study assistant with Gemini API, Backboard AI, KaTeX mathematical rendering, and local Ollama redundancy.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 print:text-blue-800 border-b border-slate-800 pb-1">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-700 text-xs">
                {certificationsList.map((c, idx) => (
                  <li key={idx}>
                    <strong className="text-white print:text-black">{c.title}</strong> — {c.issuer} ({c.issueDate})
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
