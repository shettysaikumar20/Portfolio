import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenCertificate, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-indigo-500/20">
                SK
              </div>
              <div>
                <span className="font-bold text-white text-base block">
                  {personalInfo.name}
                </span>
                <span className="text-xs text-blue-400 font-mono">
                  Software Engineer & Full-Stack Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Final-year Information Technology engineer building intelligent full-stack applications, applied AI workflows, and secure backend systems.
            </p>

            <div className="flex items-center gap-3 text-slate-400 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">Achievements & Awards</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Highlights & Modals */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Verified Highlights
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={onOpenCertificate}
                className="w-full text-left p-3 rounded-xl bg-amber-950/20 border border-amber-900/40 hover:border-amber-500/50 text-amber-300 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>3rd Prize Certificate (VBIT Research)</span>
                </div>
                <span className="text-[10px] text-amber-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full text-left p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Download Verified Resume PDF</span>
                </div>
                <span className="text-[10px] text-blue-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Open to opportunities in Hyderabad, Bangalore & Remote
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Designed & Engineered with React, Vite & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-mono">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
