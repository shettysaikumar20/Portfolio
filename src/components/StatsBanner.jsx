import React from 'react';
import { Award, Trophy, FolderGit2, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function StatsBanner({ onOpenCertificate, onOpenCaseStudy }) {
  const statsConfig = [
    {
      label: "3rd Prize Award",
      title: "Real-Time Research Project",
      subtext: "VBIT Dept. of IT · E-Waste AI System",
      icon: Award,
      badge: "RESEARCH WINNER",
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-300",
      iconBg: "bg-amber-500/20 text-amber-400",
      action: onOpenCertificate,
      actionText: "View Certificate"
    },
    {
      label: "1st Place",
      title: "Hacktoberfest 2026",
      subtext: "Ranked 1st out of 150+ developers in Hyderabad",
      icon: Trophy,
      badge: "CHAMPION",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300",
      iconBg: "bg-emerald-500/20 text-emerald-400",
      action: null,
      actionText: "1st of 150+"
    },
    {
      label: "149+ Tests",
      title: "Passed on AI Sec Agent",
      subtext: "Backend unit, integration & safety policy tests",
      icon: ShieldCheck,
      badge: "ROBUST CODE",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300",
      iconBg: "bg-blue-500/20 text-blue-400",
      action: () => onOpenCaseStudy('pentester-agent'),
      actionText: "Read Case Study"
    },
    {
      label: "6+ Built",
      title: "Full-Stack & AI Systems",
      subtext: "Live deployed apps, hackathons & enterprise tools",
      icon: FolderGit2,
      badge: "EXPERIENCE",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-300",
      iconBg: "bg-purple-500/20 text-purple-400",
      action: null,
      actionText: "Production Ready"
    }
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsConfig.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className={`relative rounded-2xl bg-gradient-to-b ${stat.color} border p-5 backdrop-blur-xl shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                  {stat.badge}
                </span>
              </div>

              <div>
                <div className="text-2xl font-black text-white tracking-tight">
                  {stat.label}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">
                  {stat.title}
                </div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {stat.subtext}
                </p>
              </div>

              {stat.action && (
                <button
                  onClick={stat.action}
                  className="mt-3 text-xs font-semibold text-white/90 hover:text-white underline decoration-white/40 hover:decoration-white transition-all flex items-center gap-1"
                >
                  {stat.actionText} &rarr;
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
