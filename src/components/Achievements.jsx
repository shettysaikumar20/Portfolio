import React from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  GraduationCap, 
  ShieldCheck, 
  Cloud, 
  FileCheck2, 
  Eye,
  Maximize2
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements({ onOpenCertificate }) {
  const featuredAchievement = achievementsData.find(a => a.id === 'vbit-ewaste');
  const otherAchievements = achievementsData.filter(a => a.id !== 'vbit-ewaste');

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#070a14]">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Institutional research awards, national hackathon milestones, industry-standard cloud certifications, and open-source accolades.
          </p>
        </div>

        {/* ============================================================== */}
        {/* PROMINENT SPOTLIGHT: 3rd Prize VBIT Real-Time Research Project */}
        {/* ============================================================== */}
        {featuredAchievement && (
          <div className="mb-16 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-60"></div>

            <div className="relative rounded-3xl bg-gradient-to-b from-[#19150d] via-[#100e08] to-[#0a0805] border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Details Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold tracking-wide">
                      <Award className="w-4 h-4 text-amber-400" />
                      FEATURED RESEARCH ACHIEVEMENT
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      Academic Year 2024–2025
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    🥉 THIRD PRIZE – Real-Time Research Project
                  </h3>
                  
                  <div className="space-y-1 font-mono text-xs sm:text-sm">
                    <p className="text-amber-300 font-semibold">
                      Project: E-Waste Management System
                    </p>
                    <p className="text-slate-300">
                      Institution: <span className="text-white font-medium">Vignana Bharathi Institute of Technology (VBIT)</span>
                    </p>
                    <p className="text-slate-400">
                      Department: <span className="text-slate-200">Department of Information Technology (vITarka)</span> · Mentors: <span className="text-amber-200">Dr. K. Kalaivani (HOD, IT)</span>
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    "Secured Third Prize in the Real-Time Research Project competition at Vignana Bharathi Institute of Technology for developing an E-Waste Management System integrating web technologies and Google Gemini AI. The project focuses on simplifying e-waste collection, improving pickup coordination, and helping users identify appropriate recycling facilities."
                  </p>

                  <div className="space-y-2 pt-2 border-t border-amber-900/40 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Customer appointment booking & automated pickup scheduling system.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Live service tracking for field workers and administrative oversight dashboard.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Google Gemini Vision multimodal AI classification & Hyderabad recycling center recommendations.</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={onOpenCertificate}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-400/20 transition-all font-mono"
                    >
                      <Maximize2 className="w-4 h-4 text-slate-950" />
                      <span>View & Inspect Official Certificate</span>
                    </button>
                    <span className="text-xs font-mono text-amber-300/80">
                      Official Certificate of Appreciation
                    </span>
                  </div>
                </div>

                {/* Certificate Preview Card Column */}
                <div className="lg:col-span-5">
                  <div 
                    onClick={onOpenCertificate}
                    className="cursor-pointer group relative rounded-2xl bg-gradient-to-b from-[#251f12] to-[#120f08] border-2 border-amber-500/60 p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-amber-400"
                  >
                    {/* Official Scanned Certificate Image */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-amber-500/50 bg-[#0d1322]">
                      <img 
                        src="./assets/vbit-certificate.jpg" 
                        alt="VBIT 3rd Prize Certificate of Appreciation - Shetty Sai Kumar" 
                        className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.01]" 
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-4 h-4" /> Click to Enlarge Official Certificate
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <span className="text-[11px] font-mono text-amber-300/90 flex items-center justify-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Click to view full high-res certificate & print/save
                      </span>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* OTHER HONORS & CERTIFICATIONS GRID */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAchievements.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-blue-400/90 font-mono mb-3">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.prize && (
                  <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-800/30 text-emerald-300 text-xs font-mono mb-3">
                    🏆 {item.prize}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400">
                <span className="truncate">{item.organization}</span>
                <span className="text-emerald-400 font-semibold font-mono text-[11px]">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
