import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on technical diagnostics, data reporting automation, and software engineering internships.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Rule */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500/20"></div>

          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <div 
                key={exp.id}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Timeline Marker Icon */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-[#0b101f] border-2 border-blue-500/50 shadow-lg shadow-blue-500/20 text-blue-400 flex-shrink-0 z-10 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Experience Card */}
                <div className="flex-1 w-full rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-slate-700 transition-all">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/30">
                        {exp.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-blue-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact Highlights */}
                  {exp.id === 'mercedes' && (
                    <div className="my-4 p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="text-xs font-mono text-emerald-300">
                        <strong>Measurable Impact:</strong> ~25% improvement in diagnostic tracking reliability and report turnaround across ~3,000 luxury vehicles.
                      </div>
                    </div>
                  )}

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 my-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
