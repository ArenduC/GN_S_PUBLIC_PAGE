import React from 'react';
import { Mail, ShieldCheck, Heart, ExternalLink, Smartphone } from 'lucide-react';
import { SudoraLogo } from './SudoraLogo';
import { NavTab } from './Navbar';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="relative mt-20 border-t border-rose-950/40 bg-[#090a0e] pt-14 pb-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-850">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <SudoraLogo size="md" />
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Sudora is an elegant, distraction-free Sudoku organizer and generator for Android. Built with 100% offline local persistence and modern OLED-black crimson design.
            </p>
            <div className="pt-2">
              <p className="text-xs tracking-[0.3em] text-rose-400/90 font-semibold uppercase font-mono">
                G R A P H Y N O V U S
              </p>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Independent Android Software Studio
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-rose-400 transition-colors cursor-pointer text-left"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('rules')}
                  className="hover:text-rose-400 transition-colors cursor-pointer text-left"
                >
                  Sudoku Rules &amp; Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('download')}
                  className="hover:text-rose-400 transition-colors cursor-pointer text-left"
                >
                  Google Play Download
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('privacy')}
                  className="text-rose-400 font-medium hover:text-rose-300 transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Privacy Policy (Play Console)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Developer Contact
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Have feedback, bug reports, or Google Play listing verification questions? Reach out directly:
            </p>
            <a
              href="mailto:arenduchanda1997@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-mono bg-neutral-900 hover:bg-neutral-800 text-rose-300 px-3 py-2 rounded-xl border border-neutral-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              arenduchanda1997@gmail.com
            </a>
            <div className="pt-2 text-[11px] text-neutral-500 font-mono">
              Package ID: <span className="text-neutral-300">com.graphynovus.sudora</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 Sudora by <span className="text-neutral-300">Graphynovus</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">100% Offline • Zero Tracking • Ad-Free</span>
            <button
              onClick={() => onSelectTab('privacy')}
              className="text-rose-400 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
