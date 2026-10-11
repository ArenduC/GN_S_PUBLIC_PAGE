import React, { useState } from 'react';
import { Download, Check, Copy, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SudoraLogo } from './SudoraLogo';

export const DownloadSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.graphynovus.sudora';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(playStoreUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    });
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative rounded-3xl bg-gradient-to-b from-[#181926]/90 via-[#12131d]/90 to-[#0d0e14]/90 backdrop-blur-md border border-rose-900/50 p-8 sm:p-14 shadow-[0_0_40px_rgba(244,63,94,0.18)] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-semibold font-mono border border-rose-500/30 uppercase tracking-wider">
              Official Android Release
            </span>
          </div>

          <div className="flex justify-center">
            <SudoraLogo size="lg" />
          </div>

          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get Sudora on Google Play
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
              Elevate your puzzle experience. Enjoy distraction-free, 100% offline Sudoku with multi-grid generators and custom manual puzzle organization.
            </p>
          </div>

          {/* Google Play Store Badge / Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-950 border-2 border-rose-500 hover:border-rose-400 text-white shadow-[0_0_25px_rgba(244,63,94,0.35)] hover:shadow-[0_0_35px_rgba(244,63,94,0.6)] transition-all cursor-pointer hover:-translate-y-0.5"
            >
              {/* Google Play vector icon */}
              <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
                <path
                  d="M3.609 1.814L13.793 12 3.61 22.185A2.39 2.39 0 0 1 3 20.485V3.515c0-.663.228-1.28.609-1.701z"
                  fill="#4285F4"
                />
                <path
                  d="M17.18 8.613l-3.387 3.387-3.387-3.387 4.966-2.868c1.02-.589 2.18-.32 2.808.688.163.262.247.56.247.87v.001c0 .463-.18.899-.447 1.309z"
                  fill="#FBBC05"
                />
                <path
                  d="M3.609 22.185l10.184-10.185 3.387 3.387-11.763 6.792c-.59.341-1.242.368-1.808.006z"
                  fill="#EA4335"
                />
                <path
                  d="M3.609 1.814l11.763 6.792-3.387 3.387L1.801 1.808C2.367 1.446 3.019 1.473 3.609 1.814z"
                  fill="#34A853"
                />
              </svg>
              <div className="text-left">
                <div className="text-[11px] text-neutral-400 uppercase tracking-widest font-mono">
                  GET IT ON
                </div>
                <div className="text-xl font-bold text-white tracking-tight leading-none mt-0.5">
                  Google Play
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-rose-400 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Copy URL Button */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#161722] hover:bg-[#1e202f] border border-neutral-700 hover:border-rose-500/50 text-neutral-200 hover:text-white text-sm font-medium transition-all cursor-pointer shadow-md"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Copied Store Link!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span>Copy Store Link</span>
                </>
              )}
            </button>
          </div>

          {/* Core Benefit Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl mx-auto">
            <div className="p-3.5 rounded-2xl bg-[#141520]/80 border border-neutral-800 backdrop-blur-sm">
              <span className="text-[11px] text-neutral-400 block font-mono">Price</span>
              <span className="text-sm font-bold text-emerald-400">100% Free</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#141520]/80 border border-neutral-800 backdrop-blur-sm">
              <span className="text-[11px] text-neutral-400 block font-mono">Monetization</span>
              <span className="text-sm font-bold text-white">Zero Ads</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#141520]/80 border border-neutral-800 backdrop-blur-sm">
              <span className="text-[11px] text-neutral-400 block font-mono">Network</span>
              <span className="text-sm font-bold text-rose-400">100% Offline</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#141520]/80 border border-neutral-800 backdrop-blur-sm">
              <span className="text-[11px] text-neutral-400 block font-mono">Design</span>
              <span className="text-sm font-bold text-white">OLED Dark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
