import React from 'react';
import { ArrowRight, Grid3X3, PlusCircle, FolderHeart, CheckCircle } from 'lucide-react';
import { SudoraLogo } from './SudoraLogo';

interface HomeSectionProps {
  onNavigate: (tab: 'home' | 'rules' | 'download' | 'privacy') => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Subtle ambient red spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-radial-glow pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/40 text-rose-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Digital Sudoku Organizer for Android</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Pure Logic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-pink-500">Zero Clutter.</span> <br />
            100% Offline.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Enjoy mathematically validated <strong className="text-white font-medium">4x4, 6x6, and 9x9</strong> puzzles. Manually digitize your favorite newspaper puzzles and organize saved games in a high-density, eye-friendly crimson dark interface.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('download')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-base transition-all shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:shadow-[0_0_35px_rgba(244,63,94,0.6)] cursor-pointer hover:-translate-y-0.5"
            >
              <span>Get on Google Play</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('rules')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#161722] hover:bg-[#1f202e] border border-neutral-700 text-neutral-200 hover:text-white font-medium text-base transition-all cursor-pointer"
            >
              <span>Rules &amp; Guide</span>
            </button>

            <button
              onClick={() => onNavigate('privacy')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-900/80 hover:bg-neutral-800 border border-rose-900/40 text-rose-300 hover:text-rose-200 text-sm font-medium transition-all cursor-pointer font-mono"
            >
              <span>Privacy Policy</span>
            </button>
          </div>

          {/* Brand highlights pill */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-rose-400" /> 100% Offline
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-rose-400" /> Local Persistence
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-rose-400" /> High Density Design
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-rose-400" /> Zero Telemetry or Ads
            </span>
          </div>
        </div>
      </section>

      {/* Feature Pillar Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-400 font-mono mb-2">
            Engineered for Sudoku Enthusiasts
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed to Respect Your Focus and Privacy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="rounded-3xl bg-[#13141d] border border-neutral-800/80 p-7 hover:border-rose-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                <Grid3X3 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                1. Generated Sudoku
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Play auto-generated Easy, Medium, or Hard boards across three distinct grid formats: <strong>4x4 Mini</strong>, <strong>6x6 Mid</strong>, and classic <strong>9x9</strong>. Every board guarantees a unique, logical solution with zero guesswork.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Multi-Grid Support</span>
              <span className="text-rose-400 font-semibold">4x4 / 6x6 / 9x9</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-[#13141d] border border-neutral-800/80 p-7 hover:border-rose-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                <PlusCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                2. Create Your Own Sudoku
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Found an intriguing puzzle in a morning newspaper, book, or tournament sheet? Manually enter the digits, lock the starting clues, and solve it directly in Sudora's responsive digital grid.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Digitizer &amp; Organizer</span>
              <span className="text-rose-400 font-semibold">Custom Boards</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-[#13141d] border border-neutral-800/80 p-7 hover:border-rose-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                <FolderHeart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                3. Saved Games &amp; Persistence
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Never lose your progress. Sudora automatically maintains your active games, timers, notes, and completion milestones locally. Duplicate boards, test alternate solving paths, or organize by difficulty.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Storage Architecture</span>
              <span className="text-rose-400 font-semibold">100% On-Device</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Sudora vs Generic Bloated Apps */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#111219] border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Sudora is Built Differently
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Most puzzle apps on the store bombard you with 30-second video ads and aggressive analytics. Sudora is a breath of fresh air.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-xs font-mono text-neutral-400 uppercase">
                  <th className="pb-3 font-semibold">Feature / Metric</th>
                  <th className="pb-3 text-rose-400 font-bold">Sudora</th>
                  <th className="pb-3 font-semibold">Typical Sudoku Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 font-sans">
                <tr>
                  <td className="py-3.5 text-neutral-200 font-medium">Full-screen Pop-up Ads</td>
                  <td className="py-3.5 text-emerald-400 font-semibold">None (0%)</td>
                  <td className="py-3.5 text-neutral-400">Every 2-3 moves</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-neutral-200 font-medium">Offline Playability</td>
                  <td className="py-3.5 text-emerald-400 font-semibold">100% Offline Guarantee</td>
                  <td className="py-3.5 text-neutral-400">Requires connection for ads</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-neutral-200 font-medium">Manual Puzzle Organizer</td>
                  <td className="py-3.5 text-rose-400 font-semibold">Yes (4x4, 6x6, 9x9)</td>
                  <td className="py-3.5 text-neutral-400">Rarely supported</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-neutral-200 font-medium">User Tracking / Telemetry</td>
                  <td className="py-3.5 text-emerald-400 font-semibold">Zero Data Collected</td>
                  <td className="py-3.5 text-neutral-400">Tracks location &amp; ad IDs</td>
                </tr>
                <tr>
                  <td className="py-3.5 text-neutral-200 font-medium">Battery &amp; RAM footprint</td>
                  <td className="py-3.5 text-emerald-400 font-semibold">Ultra-lightweight (~5.8 MB)</td>
                  <td className="py-3.5 text-neutral-400">Heavy (60+ MB with ad SDKs)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-r from-rose-950/60 via-neutral-900 to-rose-950/60 border border-rose-500/40 p-8 sm:p-12 shadow-[0_0_35px_rgba(244,63,94,0.2)]">
          <SudoraLogo size="lg" className="justify-center mb-4" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
            Ready to experience Sudoku without distractions?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Download Sudora from the Google Play Store today and enjoy endless puzzles wherever you are.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('download')}
              className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all shadow-lg shadow-rose-900/50 cursor-pointer"
            >
              Go to Download Page
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="px-6 py-3 rounded-xl bg-[#181926] hover:bg-[#202235] border border-neutral-700 text-neutral-300 hover:text-white font-medium text-sm transition-colors cursor-pointer"
            >
              View Privacy Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
