import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  Clock
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Trigger pre-filled mailto directly in recruiter's default mail client
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060a16]">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono">
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have an Opportunity or Interesting Project? Let's Connect.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I am actively exploring software engineering, full-stack, backend, AI engineering, and cybersecurity roles. Feel free to reach out directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-7 backdrop-blur-md shadow-xl space-y-6">
              
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Direct Email</span>
                  <span className="text-emerald-400 text-[11px] font-semibold">Fastest response</span>
                </div>
                <div className="text-white font-mono text-xs sm:text-sm font-semibold truncate">
                  {personalInfo.email}
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-700/80 hover:bg-slate-700 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="space-y-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300">
                        LinkedIn
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        shetty-sai-kumar
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/60 hover:border-slate-600 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-700/20 border border-slate-600/40 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-slate-200">
                        GitHub
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        shettysaikumar20
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>
              </div>

              {/* Location & Status Card */}
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Hyderabad, Telangana, India (Open to Relocation / Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Available for Full-time Roles & Summer 2025/2026/2027 Internships</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-7 sm:p-8 backdrop-blur-md shadow-xl">
              
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to open your preferred mail client with a formatted note, or reach out directly at {personalInfo.email}.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-emerald-200">Mail client opened!</strong>
                    If your email application did not launch automatically, you can send your message directly to{' '}
                    <span className="font-mono underline font-bold">{personalInfo.email}</span>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Recruiter or Engineering Lead"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="SDE Opportunity / Technical Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Sai, we'd love to connect regarding an engineering role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch Pre-Filled Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
