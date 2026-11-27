import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Award, 
  Sparkles, 
  Upload, 
  GraduationCap, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CertificateModal({ isOpen, onClose }) {
  const [customImage, setCustomImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Trigger celebratory confetti on open
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback
      }

      // Check localStorage for uploaded custom image
      const saved = localStorage.getItem('sks_vbit_cert');
      if (saved) {
        setCustomImage(saved);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result;
        setCustomImage(base64);
        localStorage.setItem('sks_vbit_cert', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setCustomImage(null);
    localStorage.removeItem('sks_vbit_cert');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0d1322] border-2 border-amber-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141b2d] border-b border-amber-500/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>VBIT Official Certificate of Appreciation</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
                  3rd Prize
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                E-Waste Management System · Department of Information Technology
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              title={isZoomed ? "Zoom out" : "Zoom in"}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors hidden sm:flex"
              title="Print Certificate"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800 hover:bg-rose-900/40 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area (Scrollable if zoomed) */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 flex items-center justify-center bg-[#070b14]">
          
          {customImage ? (
            /* Uploaded Real Scanned Certificate */
            <div className={`relative transition-all duration-300 ${isZoomed ? 'scale-125 my-8' : 'scale-100 max-w-3xl'}`}>
              <img
                src={customImage}
                alt="VBIT 3rd Prize Certificate of Appreciation - Sai Kumar Shetty"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-amber-500/50 object-contain"
              />
            </div>
          ) : (
            /* High-Fidelity Official VBIT Certificate Layout */
            <div className={`w-full max-w-3xl bg-[#fffef8] text-slate-900 rounded-2xl p-8 sm:p-12 shadow-2xl border-8 border-double border-[#d4af37] relative transition-transform duration-300 ${isZoomed ? 'scale-110 my-10' : 'scale-100'}`}>
              
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#b8860b]"></div>
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#b8860b]"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#b8860b]"></div>
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#b8860b]"></div>

              {/* Watermark Seal */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <GraduationCap className="w-72 h-72 text-amber-900" />
              </div>

              {/* Institutional Header */}
              <div className="text-center space-y-1 mb-6 border-b-2 border-amber-900/15 pb-5">
                <div className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-amber-950 font-serif">
                  Vignana Bharathi Institute of Technology
                </div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-600 font-sans font-medium">
                  (Autonomous Institution · Affiliated to JNTUH · Accredited by NAAC with 'A' Grade)
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest text-slate-800 font-semibold font-sans pt-1">
                  Department of Information Technology
                </div>
              </div>

              {/* Title */}
              <div className="text-center my-6">
                <div className="inline-block px-6 py-1.5 border-y-2 border-amber-600/40">
                  <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-wider uppercase text-amber-900">
                    Certificate of Appreciation
                  </h2>
                </div>
                <p className="text-xs uppercase tracking-widest text-amber-800/80 font-mono font-semibold mt-2">
                  Real-Time Research Project Competition
                </p>
              </div>

              {/* Certificate Body Paragraphs */}
              <div className="text-center space-y-3 max-w-2xl mx-auto my-6 leading-relaxed">
                <p className="text-xs sm:text-sm text-slate-700 italic font-serif">
                  This is to certify that
                </p>
                <div className="text-lg sm:text-2xl font-bold font-serif text-slate-900 border-b-2 border-dashed border-amber-700/60 inline-block px-8 pb-1">
                  Mr. Sai Kumar Shetty
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  of B.Tech Information Technology has successfully presented and secured
                </p>
                <div className="py-1">
                  <span className="inline-block px-4 py-1 rounded-full bg-amber-100 border border-amber-400 text-amber-950 font-black text-sm sm:text-base font-serif uppercase tracking-wider shadow-sm">
                    🥉 THIRD PRIZE
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  in the Real-Time Research Project competition for the research work titled:
                </p>
                <p className="text-sm sm:text-lg font-bold font-mono text-slate-900 bg-amber-50/80 py-1.5 px-4 rounded-lg border border-amber-200/80">
                  "E-Waste Management System"
                </p>
                <p className="text-xs sm:text-sm text-slate-700">
                  carried out under the esteemed guidance of{' '}
                  <span className="font-bold text-slate-900 underline decoration-amber-500">
                    Dr. K. Kalaiwani
                  </span>.
                </p>
              </div>

              {/* Signatures & Seal Section */}
              <div className="grid grid-cols-3 items-end pt-8 mt-6 border-t-2 border-amber-900/15 text-center">
                <div>
                  <div className="h-8 flex items-end justify-center font-serif italic text-sm text-blue-900">
                    Dr. K. Kalaiwani
                  </div>
                  <div className="border-t border-slate-700 pt-1 text-[11px] font-semibold text-slate-800 uppercase">
                    Project Guide
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-4 border-amber-600 bg-amber-50 flex flex-col items-center justify-center text-amber-900 shadow-md">
                    <span className="text-[9px] font-serif font-black tracking-widest uppercase">VBIT</span>
                    <Award className="w-5 h-5 text-amber-600 my-0.5" />
                    <span className="text-[8px] font-bold uppercase">SEAL</span>
                  </div>
                </div>

                <div>
                  <div className="h-8 flex items-end justify-center font-serif italic text-sm text-blue-900">
                    Head of Department
                  </div>
                  <div className="border-t border-slate-700 pt-1 text-[11px] font-semibold text-slate-800 uppercase">
                    Dept. of Information Tech
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Upload & Verification Toolbar */}
        <div className="px-6 py-4 bg-[#141b2d] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Award verified by VBIT Department of Information Technology</span>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-blue-400" />
              <span>{customImage ? 'Replace Scanned Photo' : 'Upload Scanned Photo'}</span>
            </button>

            {customImage && (
              <button
                onClick={handleResetImage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white bg-slate-800/60"
                title="Reset to official generated certificate template"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset View</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
