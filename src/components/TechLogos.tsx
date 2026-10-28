import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  showLabel?: boolean;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = "w-4 h-4", showLabel = false }) => {
  const norm = name.toLowerCase().trim();

  const renderIcon = () => {
    // 1. React
    if (norm.includes('react')) {
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    }

    // 2. TypeScript
    if (norm.includes('typescript') || norm === 'ts') {
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="16" fill="#3178C6"/>
          <path d="M72.5 81.3c2.7 4.1 6.5 6.6 11.5 6.6 6.3 0 10.4-3.5 10.4-8.8 0-5.8-4.8-7.9-12.7-11.4-11.4-5-16.7-10.4-16.7-20.7 0-11.5 9-20.3 22.8-20.3 8.3 0 14.7 2.8 19.3 8.3l-7.3 6.9c-2.7-3.6-6.1-5.4-11.8-5.4-6.3 0-9.8 3.5-9.8 8.1 0 4.9 3.8 6.9 12.3 10.7 12.1 5.3 17.3 10.9 17.3 21.4 0 13.5-9.8 21.3-24.3 21.3-10.7 0-18.4-4-23.4-11l6.7-5.7zM18.8 38.3h41.4V49H42.7v47.2H29.8V49H18.8V38.3z" fill="#FFF"/>
        </svg>
      );
    }

    // 3. JavaScript
    if (norm.includes('javascript') || norm === 'js') {
      return (
        <svg className={className} viewBox="0 0 630 630">
          <rect width="630" height="630" rx="40" fill="#F7DF1E"/>
          <path d="M386 448c15 25 35 41 68 41 29 0 48-14 48-35 0-24-19-33-53-48l-18-8c-52-22-87-50-87-110 0-55 42-97 108-97 47 0 81 16 104 57l-47 30c-13-23-28-32-57-32-26 0-43 14-43 32 0 22 17 31 49 45l18 8c61 26 94 53 94 114 0 65-51 101-119 101-65 0-106-34-124-78l60-26zm-222 5v-274h67v278c0 48-26 71-69 71-19 0-38-4-53-12l14-53c9 5 18 8 30 8 16 0 21-6 21-18z" fill="#000"/>
        </svg>
      );
    }

    // 4. Python
    if (norm.includes('python') || norm.includes('pandas')) {
      return (
        <svg className={className} viewBox="0 0 110 110">
          <path d="M53.7 3.5c-24.8 0-23.3 10.7-23.3 10.7l.1 11.1h23.7v3.4H20.7S3.5 26.8 3.5 51.6c0 24.8 15 23.9 15 23.9h8.9V62.8s-.5-15 14.8-15h23.6s14.3-.2 14.3-14.1c0-13.8.3-22.7.3-22.7s1.5-7.5-26.7-7.5zm-13 7.3c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4z" fill="#3776AB"/>
          <path d="M56.3 106.5c24.8 0 23.3-10.7 23.3-10.7l-.1-11.1H55.8v-3.4h33.5s17.2 1.9 17.2-22.9c0-24.8-15-23.9-15-23.9h-8.9v12.7s.5 15-14.8 15H44.2s-14.3.2-14.3 14.1c0 13.8-.3 22.7-.3 22.7s-1.5 7.5 26.7 7.5zm13-7.3c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4z" fill="#FFD43B"/>
        </svg>
      );
    }

    // 5. Power BI / DAX
    if (norm.includes('power bi') || norm.includes('dax') || norm.includes('bi')) {
      return (
        <svg className={className} viewBox="0 0 32 32">
          <rect x="2" y="16" width="6" height="14" rx="2" fill="#E6AD10"/>
          <rect x="10" y="10" width="6" height="20" rx="2" fill="#F2C811"/>
          <rect x="18" y="4" width="6" height="26" rx="2" fill="#F6D751"/>
          <rect x="26" y="12" width="4" height="18" rx="2" fill="#E6AD10"/>
        </svg>
      );
    }

    // 6. Microsoft Excel / Power Query / Power Pivot
    if (norm.includes('excel') || norm.includes('query') || norm.includes('pivot')) {
      return (
        <svg className={className} viewBox="0 0 32 32">
          <rect x="2" y="2" width="28" height="28" rx="4" fill="#107C41"/>
          <path d="M7 7h18v18H7z" fill="#FFF" fillOpacity="0.15"/>
          <path d="M12.5 11l3.5 5-3.5 5h3l2-3.2 2 3.2h3l-3.5-5 3.5-5h-3l-2 3.2-2-3.2h-3z" fill="#FFF"/>
        </svg>
      );
    }

    // 7. SQL / MySQL / PostgreSQL / Database
    if (norm.includes('sql') || norm.includes('mysql') || norm.includes('database')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#00758F" fillOpacity="0.4" stroke="#00758F" strokeWidth="2"/>
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#F29111" strokeWidth="2"/>
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#00758F" strokeWidth="2"/>
        </svg>
      );
    }

    // 8. NestJS
    if (norm.includes('nestjs') || norm.includes('nest')) {
      return (
        <svg className={className} viewBox="0 0 256 256">
          <path d="M248.8 45.4c-4.4-6.4-11.4-10.7-19.1-11.8l-123.5-17c-5.7-.8-11.4.9-15.6 4.6L12.5 91.5C3.7 99.1-.8 111 .1 122.7l9.7 101.4c1.1 11.4 8.7 21 19.5 24.5l105.8 34.6c2.7.9 5.5 1.3 8.3 1.3 3.4 0 6.9-.7 10-2.2l87.5-42c9.5-4.5 15.6-14.2 15.6-24.8l-7.7-160.1z" fill="#E0234E"/>
          <path d="M192 104l-64 72-32-36" stroke="#FFF" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }

    // 9. Node.js
    if (norm.includes('node')) {
      return (
        <svg className={className} viewBox="0 0 32 32">
          <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" fill="#339933"/>
          <path d="M16 6l8 4.7v9.4l-8 4.7-8-4.7v-9.4L16 6z" fill="#FFF" fillOpacity="0.2"/>
        </svg>
      );
    }

    // 10. Three.js / WebGL
    if (norm.includes('three') || norm.includes('webgl') || norm.includes('3d')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-white"/>
          <circle cx="12" cy="12" r="3" fill="#38BDF8"/>
        </svg>
      );
    }

    // 11. GSAP / ScrollTrigger
    if (norm.includes('gsap') || norm.includes('scrolltrigger')) {
      return (
        <svg className={className} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" fill="#0AE448"/>
          <path d="M10 16l4-6h8l-5 6 5 6h-8l-4-6z" fill="#000"/>
        </svg>
      );
    }

    // 12. Tailwind CSS
    if (norm.includes('tailwind')) {
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 6c-2.4 0-3.8 1.2-4.2 3.6 1-.8 2.1-1.1 3.2-.8 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.9 6.5 2.9 2.4 0 3.8-1.2 4.2-3.6-1 .8-2.1 1.1-3.2.8-1-.2-1.7-.9-2.5-1.7C17.2 7.6 15.7 6 12 6zM4 12c-2.4 0-3.8 1.2-4.2 3.6 1-.8 2.1-1.1 3.2-.8 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.9 6.5 2.9 2.4 0 3.8-1.2 4.2-3.6-1 .8-2.1 1.1-3.2.8-1-.2-1.7-.9-2.5-1.7C9.2 13.6 7.7 12 4 12z" fill="#38BDF8"/>
        </svg>
      );
    }

    // 13. Prisma ORM
    if (norm.includes('prisma')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3.8 19.3L12 2.5l8.2 16.8H3.8z" stroke="#2D3748" strokeWidth="2" fill="#5A67D8" fillOpacity="0.3" className="dark:stroke-white"/>
          <path d="M12 2.5v16.8" stroke="#2D3748" strokeWidth="1.5" className="dark:stroke-white"/>
        </svg>
      );
    }

    // 14. Onyx Pro ERP / Odoo ERP
    if (norm.includes('onyx') || norm.includes('odoo') || norm.includes('erp')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="18" rx="4" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="2"/>
          <path d="M8 8h8M8 12h8M8 16h5" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="2" fill="#D97706"/>
        </svg>
      );
    }

    // 15. Linux / Ubuntu / Nginx
    if (norm.includes('linux') || norm.includes('ubuntu') || norm.includes('nginx')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#009639" fillOpacity="0.2" stroke="#009639" strokeWidth="2"/>
          <path d="M7 17V7l10 10V7" stroke="#009639" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    }

    // 16. AI / Prompt Engineering
    if (norm.includes('ai') || norm.includes('prompt')) {
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" fill="#9333EA"/>
          <circle cx="19" cy="19" r="2" fill="#EC4899"/>
        </svg>
      );
    }

    // Default Tech Tag fallback
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 shadow-2xs hover:border-brand-blue/50 dark:hover:border-sky-400/50 hover:shadow-xs transition-all duration-200">
      {renderIcon()}
      {showLabel && <span className="text-ink dark:text-slate-200 font-mono text-[12px]">{name}</span>}
    </span>
  );
};
