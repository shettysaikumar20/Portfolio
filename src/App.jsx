import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificateModal from './components/CertificateModal';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import './App.css';

export default function App() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [selectedCaseStudyProjectId, setSelectedCaseStudyProjectId] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCertificateOpen(false);
        setSelectedCaseStudyProjectId(null);
        setIsResumeOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCertificate={() => setIsCertificateOpen(true)}
          onOpenCaseStudy={(id) => setSelectedCaseStudyProjectId(id)}
        />

        {/* Highlight Stats Banner */}
        <StatsBanner
          onOpenCertificate={() => setIsCertificateOpen(true)}
          onOpenCaseStudy={(id) => setSelectedCaseStudyProjectId(id)}
        />

        {/* About Me & Academic Foundations */}
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Working Skills Inventory */}
        <Skills />

        {/* Featured Projects & Systems */}
        <Projects
          onOpenCaseStudy={(id) => setSelectedCaseStudyProjectId(id)}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Achievements & Certificate Showcase */}
        <Achievements
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Professional Experience */}
        <Experience />

        {/* Education Timeline */}
        <Education />

        {/* Contact & Inquiry Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenCertificate={() => setIsCertificateOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* ============================================================== */}
      {/* MODALS */}
      {/* ============================================================== */}
      
      {/* Certificate Viewer Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      {/* Architecture Deep Dive Case Study Modal */}
      <CaseStudyModal
        projectId={selectedCaseStudyProjectId}
        onClose={() => setSelectedCaseStudyProjectId(null)}
        onOpenCertificate={() => {
          setSelectedCaseStudyProjectId(null);
          setIsCertificateOpen(true);
        }}
      />

      {/* Verified Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
