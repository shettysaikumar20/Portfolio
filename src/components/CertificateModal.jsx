import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Printer, 
  Award, 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CertificateModal({ isOpen, onClose }) {
  const defaultCertPath = './assets/vbit-certificate.jpg';
  const [customImage, setCustomImage] = useState(defaultCertPath);
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

      // Check localStorage for user uploaded custom image
      const saved = localStorage.getItem('sks_vbit_cert');
      if (saved) {
        setCustomImage(saved);
      } else {
        setCustomImage(defaultCertPath);
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
    setCustomImage(defaultCertPath);
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
                E-Waste Management System · Department of Information Technology (vITarka)
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

        {/* Certificate Display Area */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 flex items-center justify-center bg-[#070b14]">
          <div className={`relative transition-all duration-300 ${isZoomed ? 'scale-125 my-8 max-w-4xl' : 'scale-100 max-w-3xl'} w-full`}>
            <img
              src={customImage}
              alt="VBIT 3rd Prize Certificate of Appreciation - Shetty Sai Kumar"
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-amber-500/50 object-contain mx-auto"
            />
          </div>
        </div>

        {/* Bottom Verification & Upload Toolbar */}
        <div className="px-6 py-4 bg-[#141b2d] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Award verified: VBIT Department of Information Technology (vITarka)</span>
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
              <span>Update Certificate Photo</span>
            </button>

            {customImage !== defaultCertPath && (
              <button
                onClick={handleResetImage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white bg-slate-800/60"
                title="Reset to default uploaded certificate image"
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
