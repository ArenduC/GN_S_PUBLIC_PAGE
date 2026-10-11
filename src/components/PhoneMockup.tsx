import React from 'react';
import { Play, Grid3X3, PlusCircle, FolderHeart, Pause, Moon, ArrowLeft, Eye, CheckCircle2 } from 'lucide-react';
import { SudoraLogo, SUDORA_LOGO_URL } from './SudoraLogo';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-8 px-4 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Primary Phone Mockup: Main Menu Screen */}
      <div className="relative z-10 w-full max-w-[320px] rounded-[42px] p-3 bg-gradient-to-b from-[#261519] via-[#1a1215] to-[#120d10] border-2 border-rose-500/70 shadow-[0_0_35px_rgba(244,63,94,0.3)] transition-transform duration-500 hover:-translate-y-1">
        {/* Phone Speaker Notch & Camera */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/80 rounded-full flex items-center justify-center gap-2 z-20">
          <div className="w-2.5 h-2.5 bg-[#1a1a24] rounded-full border border-rose-500/20" />
          <div className="w-8 h-1 bg-neutral-800 rounded-full" />
        </div>

        {/* Inner Screen Content */}
        <div className="relative bg-[#0d0d12] rounded-[34px] overflow-hidden pt-8 pb-6 px-4 border border-rose-950/50 min-h-[580px] flex flex-col justify-between select-none">
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono px-2 pt-1 pb-3">
            <span className="font-semibold text-neutral-200">10:30</span>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <span className="text-[10px]">5G</span>
              <div className="w-4 h-2 rounded-sm border border-neutral-400 p-[1px] flex items-center">
                <div className="h-full w-3 bg-rose-500 rounded-xs" />
              </div>
            </div>
          </div>

          {/* App Header Inside Phone */}
          <div className="flex items-center justify-between pb-4 border-b border-rose-900/30 px-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-neutral-900 border border-rose-500/40 flex items-center justify-center p-1 overflow-hidden">
                <img src={SUDORA_LOGO_URL} alt="Sudora" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-neutral-300">
                Digital Sudoku Organizer
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-950/60 border border-rose-500/40 text-rose-300 font-mono">
              v1.2
            </span>
          </div>

          {/* Menu Items */}
          <div className="space-y-3.5 my-auto py-4">
            {/* Item 1 */}
            <div className="group relative rounded-2xl p-3.5 bg-[#171720] border border-rose-900/40 hover:border-rose-500/80 transition-all cursor-pointer shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-950/50 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Grid3X3 className="w-4 h-4 text-rose-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[13px] font-semibold text-white tracking-wide">
                      1. Generated Sudoku
                    </h4>
                    <span className="text-neutral-500 text-xs">→</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    Play auto-generated Easy, Medium or Hard (4x4, 6x6, 9x9)
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group relative rounded-2xl p-3.5 bg-[#171720] border border-rose-900/40 hover:border-rose-500/80 transition-all cursor-pointer shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-950/50 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <PlusCircle className="w-4 h-4 text-rose-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[13px] font-semibold text-white tracking-wide">
                      2. Create Your Own Sudoku
                    </h4>
                    <span className="text-neutral-500 text-xs">→</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    Manually enter & lock a puzzle (4x4, 6x6, or 9x9)
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group relative rounded-2xl p-3.5 bg-[#171720] border border-rose-900/40 hover:border-rose-500/80 transition-all cursor-pointer shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-950/50 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5">
                  <FolderHeart className="w-4 h-4 text-rose-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[13px] font-semibold text-white tracking-wide">
                      3. Saved Games
                    </h4>
                    <span className="text-neutral-500 text-xs">→</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    Resume, manage, duplicate or organize saved puzzles
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Branding from Screenshot */}
          <div className="pt-3 border-t border-rose-900/30 text-center">
            <p className="text-[10px] text-neutral-400 font-medium tracking-wide">
              100% Offline • Local Persistence • High Density Design
            </p>
            <p className="text-[9px] tracking-[0.35em] text-rose-400/90 font-semibold uppercase mt-1">
              G R A P H Y N O V U S
            </p>
          </div>
        </div>
      </div>

      {/* Secondary Phone Mockup: Active Board Gameplay (4x4 Custom) */}
      <div className="relative z-10 w-full max-w-[320px] rounded-[42px] p-3 bg-gradient-to-b from-[#261519] via-[#1a1215] to-[#120d10] border-2 border-rose-500/70 shadow-[0_0_35px_rgba(244,63,94,0.3)] transition-transform duration-500 hover:-translate-y-1">
        {/* Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/80 rounded-full flex items-center justify-center gap-2 z-20">
          <div className="w-2.5 h-2.5 bg-[#1a1a24] rounded-full border border-rose-500/20" />
          <div className="w-8 h-1 bg-neutral-800 rounded-full" />
        </div>

        {/* Inner Screen */}
        <div className="relative bg-[#0d0d12] rounded-[34px] overflow-hidden pt-8 pb-6 px-4 border border-rose-950/50 min-h-[580px] flex flex-col justify-between select-none">
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono px-2 pt-1">
            <span className="font-semibold text-neutral-200">10:30</span>
            <div className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-neutral-400" />
              <div className="w-4 h-2 rounded-sm border border-neutral-400 p-[1px] flex items-center">
                <div className="h-full w-3 bg-rose-500 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Board Header Bar */}
          <div className="py-2.5 px-1 border-b border-rose-900/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5 text-neutral-400" />
              <div>
                <h4 className="text-xs font-semibold text-white leading-none">
                  Custom 4x4 (Oct 1)
                </h4>
                <span className="text-[10px] text-neutral-400">Custom Puzzle</span>
              </div>
            </div>
            <button className="flex items-center gap-1 text-[10px] text-rose-400 hover:text-rose-300 font-medium">
              <Eye className="w-3 h-3" />
              <span>Reveal Answer</span>
            </button>
          </div>

          {/* Timer & Progress */}
          <div className="flex items-center justify-between px-1 py-1.5 font-mono text-xs text-neutral-300">
            <div className="flex items-center gap-1.5 text-rose-400 bg-rose-950/40 px-2 py-0.5 rounded border border-rose-500/30">
              <Pause className="w-3 h-3" />
              <span>00:00</span>
            </div>
            <div className="text-[11px] font-semibold tracking-wider text-neutral-400">
              PROGRESS: <span className="text-white">12%</span>
            </div>
          </div>

          {/* 4x4 Mini Board Matrix (faithfully matching screenshot) */}
          <div className="my-2 bg-black/60 p-2 rounded-2xl border border-rose-900/40">
            <div className="grid grid-cols-4 gap-1 aspect-square w-full">
              {/* Row 1 */}
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white shadow-inner">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-rose-500/50 bg-rose-950/20 flex items-center justify-center text-lg font-bold text-rose-400">
                2
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>

              {/* Row 2 */}
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-rose-500/50 bg-rose-950/20 flex items-center justify-center text-lg font-bold text-rose-400">
                3
              </div>

              {/* Row 3 */}
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                1
              </div>
              <div className="bg-[#1e141a] rounded-lg border-2 border-rose-500 flex items-center justify-center text-lg font-bold text-white shadow-[0_0_12px_rgba(244,63,94,0.4)]">
                {/* Active cursor */}
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping" />
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>

              {/* Row 4 */}
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                4
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
              <div className="bg-[#14151e] rounded-lg border border-neutral-800 flex items-center justify-center text-lg font-bold text-white">
                {/* empty */}
              </div>
            </div>
          </div>

          {/* Number Keypad */}
          <div className="grid grid-cols-4 gap-2 pt-1">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                className="py-2.5 rounded-xl bg-[#1b1c28] border border-rose-900/40 text-rose-300 font-bold text-sm hover:border-rose-500 hover:bg-rose-950/40 transition-colors"
              >
                {num}
              </button>
            ))}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 px-1 border-t border-rose-950/60">
            <span className="hover:text-white cursor-pointer">Erase</span>
            <span className="text-rose-400 font-medium">Notes: OFF</span>
            <span className="hover:text-white cursor-pointer">Hint (3)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
