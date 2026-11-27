import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#070b16]/60">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Multidisciplinary engineering foundation blending mechanical precision with computer science and software development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 p-7 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    CGPA {edu.cgpa}
                  </span>
                </div>

                {/* Degree & College */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-blue-400 mb-2">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-4 pb-4 border-b border-slate-800">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-xs text-slate-300 italic mb-5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  {edu.note}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Highlights & Coursework:
                  </div>
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Status:</span>
                <span className="text-indigo-300 font-semibold">{edu.status}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
