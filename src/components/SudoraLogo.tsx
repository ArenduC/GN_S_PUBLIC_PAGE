import React, { useState } from 'react';

interface SudoraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const SUDORA_LOGO_URL = 'https://zcxsscvheqidzvkhlnwz.supabase.co/storage/v1/object/public/Default%20image/SUDORA/sudoraLogo.svg';

/**
 * SudoraLogo renders the official Sudora SVG emblem provided by the user.
 */
export const SudoraLogo: React.FC<SudoraLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblem container */}
      <div
        className={`${iconDimensions} relative flex items-center justify-center rounded-xl bg-[#1c1417]/80 border border-rose-900/60 shadow-[0_0_20px_rgba(244,63,94,0.25)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,63,94,0.45)] overflow-hidden p-1.5`}
      >
        {!imgError ? (
          <img
            src={SUDORA_LOGO_URL}
            alt="Sudora Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Dot Matrix 'S' Fallback if network blocks Supabase */
          <svg
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4/5 h-4/5"
          >
            <circle cx="14" cy="8" r="3.2" fill="#ff4b5c" />
            <circle cx="22" cy="8" r="3.2" fill="#ff4b5c" />
            <circle cx="30" cy="8" r="3.2" fill="#ff4b5c" />
            <circle cx="14" cy="15" r="3.2" fill="#ff4b5c" />
            <circle cx="14" cy="22" r="3.2" fill="#ff4b5c" />
            <circle cx="22" cy="22" r="3.2" fill="#ff4b5c" />
            <circle cx="30" cy="22" r="3.2" fill="#ff4b5c" />
            <circle cx="30" cy="29" r="3.2" fill="#ff4b5c" />
            <circle cx="14" cy="36" r="3.2" fill="#ff4b5c" />
            <circle cx="22" cy="36" r="3.2" fill="#ff4b5c" />
            <circle cx="30" cy="36" r="3.2" fill="#ff4b5c" />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold tracking-[0.22em] text-white uppercase ${textSizes}`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            SUDORA
          </span>
          <span className="text-[9px] tracking-[0.25em] text-rose-400/80 font-medium uppercase -mt-1 hidden sm:block">
            Puzzle Organizer
          </span>
        </div>
      )}
    </div>
  );
};

