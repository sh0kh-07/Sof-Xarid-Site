import React from 'react';

export function SofXaridIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Shield Outline */}
      <path
        d="M60 102C60 102 96 82 96 45V24L60 15L24 24V45C24 82 60 102 60 102Z"
        fill="white"
        stroke="#1B3A6B"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      
      {/* Government building inside */}
      <path d="M40 82H80V85H40V82Z" fill="#1B3A6B" />
      <rect x="44" y="68" width="3" height="14" fill="#1B3A6B" />
      <rect x="51" y="68" width="3" height="14" fill="#1B3A6B" />
      <rect x="58" y="68" width="3" height="14" fill="#1B3A6B" />
      <rect x="65" y="68" width="3" height="14" fill="#1B3A6B" />
      <rect x="72" y="68" width="3" height="14" fill="#1B3A6B" />
      <path d="M40 65H80V68H40V65Z" fill="#1B3A6B" />
      
      <path d="M46 65C46 52 74 52 74 65H46Z" fill="#1B3A6B" />
      <rect x="59.5" y="44" width="1" height="8" fill="#1B3A6B" />
      <circle cx="60" cy="42" r="1.5" fill="#1B3A6B" />

      {/* Left network nodes */}
      <line x1="32" y1="36" x2="48" y2="48" stroke="#1B3A6B" strokeWidth="2" />
      <line x1="48" y1="48" x2="34" y2="64" stroke="#1B3A6B" strokeWidth="2" />
      <circle cx="32" cy="36" r="3.5" fill="white" stroke="#1B3A6B" strokeWidth="2" />
      <circle cx="48" cy="48" r="4.5" fill="#1B3A6B" />
      <circle cx="34" cy="64" r="3.5" fill="#1B3A6B" />

      {/* Right network nodes */}
      <line x1="88" y1="36" x2="74" y2="44" stroke="#1B3A6B" strokeWidth="2" />
      <line x1="74" y1="44" x2="84" y2="58" stroke="#1B3A6B" strokeWidth="2" />
      <line x1="88" y1="36" x2="84" y2="58" stroke="#1B3A6B" strokeWidth="2" />
      <circle cx="88" cy="36" r="3.5" fill="#1B3A6B" />
      <circle cx="74" cy="44" r="3.5" fill="#1B3A6B" />
      <circle cx="84" cy="58" r="3.5" fill="#1B3A6B" />

      {/* Green checkmark overlay */}
      <path
        d="M48 36L56 44L76 24"
        stroke="#10B981"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ showSubtitle = true, size = "md" }: { showSubtitle?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const iconSizeClass = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-11 h-11';
  const titleSizeClass = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl';
  const subSizeClass = 'text-[9px]';

  return (
    <div className="flex items-center space-x-3 group">
      <SofXaridIcon className={`${iconSizeClass} group-hover:scale-105 transition-transform duration-300`} />
      <div className="flex flex-col">
        <span className={`font-display ${titleSizeClass} font-extrabold tracking-tight text-[#1B3A6B] transition-colors`}>
          SOF-XARID
        </span>
        {showSubtitle && (
          <span className={`${subSizeClass} font-sans font-bold uppercase tracking-wider text-slate-400 mt-0.5 leading-none`}>
            HUKUMAT RAQAMLI XARIDLAR PLATFORMASI
          </span>
        )}
      </div>
    </div>
  );
}
