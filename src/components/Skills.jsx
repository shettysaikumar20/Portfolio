import React, { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Bot, 
  ShieldAlert, 
  Cloud, 
  Search, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    Code: Code,
    Layout: Layout,
    Server: Server,
    Database: Database,
    Bot: Bot,
    ShieldAlert: ShieldAlert,
    Cloud: Cloud
  };

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }

    return {
      ...cat,
      skills: searchQuery ? matchingSkills : cat.skills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070b16]/70">
      
      {/* Decorative gradient backdrops */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A working skills inventory of languages, frameworks, AI models, and security testing tools utilized across projects, hackathons, and research.
          </p>
        </div>

        {/* Controls: Search and Category Pills */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Gemini, FastAPI, OWASP, React, Docker)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div
                key={category.title}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-4 space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-200 text-xs sm:text-sm">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60"></span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {skill.level}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-emerald-400/80">Project Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto font-mono">
          Note: This reflects a working skills inventory of technologies practiced in production applications, academic research, and verified certifications.
        </div>

      </div>
    </section>
  );
}
