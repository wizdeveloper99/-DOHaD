'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { LinkedInIcon } from '@/components/linkedin-icon';

type VariantType = 'primary' | 'sage' | 'rose';

interface FeatherCardProps {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  variant?: VariantType;
  image?: string;
  className?: string;
  onClick?: () => void;
  isClickable?: boolean;
  bulletPoints?: string[];
  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
}

const WebinarsVector: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden group select-none">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow balls */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />

      {/* Main Illustration: A modern abstract webinar setup */}
      <svg
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[85%] object-contain transition-transform duration-700 group-hover:scale-105 z-10"
      >
        {/* Modern monitor/screen */}
        <rect x="80" y="40" width="240" height="130" rx="12" fill="currentColor" className="text-background/80" stroke="currentColor" strokeWidth="2" />
        <rect x="85" y="45" width="230" height="120" rx="8" fill="currentColor" className="text-muted/10" />
        
        {/* Video stream container */}
        <rect x="95" y="55" width="130" height="100" rx="6" fill="currentColor" className="text-secondary/15" />
        {/* Lecturer silhouette/avatar */}
        <circle cx="160" cy="90" r="18" fill="currentColor" className="text-primary/40" />
        <path d="M 135 130 C 135 112, 185 112, 185 130 Z" fill="currentColor" className="text-primary/40" />
        {/* Virtual Presentation slides */}
        <rect x="235" y="55" width="70" height="45" rx="4" fill="currentColor" className="text-accent/20" />
        <line x1="242" y1="65" x2="280" y2="65" stroke="currentColor" strokeWidth="2" className="text-accent" />
        <line x1="242" y1="75" x2="295" y2="75" stroke="currentColor" strokeWidth="2" className="text-accent/60" />
        <line x1="242" y1="85" x2="265" y2="85" stroke="currentColor" strokeWidth="2" className="text-accent/40" />

        {/* Live chat / notes */}
        <rect x="235" y="110" width="70" height="45" rx="4" fill="currentColor" className="text-primary/10" />
        <rect x="242" y="118" width="56" height="6" rx="2" fill="currentColor" className="text-primary/30" />
        <rect x="242" y="128" width="40" height="6" rx="2" fill="currentColor" className="text-primary/30" />
        <rect x="242" y="138" width="48" height="6" rx="2" fill="currentColor" className="text-primary/20" />

        {/* Stand and base for screen */}
        <path d="M 180 170 L 170 195 L 230 195 L 220 170 Z" fill="currentColor" className="text-muted-foreground/30" />
        <rect x="150" y="195" width="100" height="6" rx="3" fill="currentColor" className="text-muted-foreground/30" />

        {/* Floating elements */}
        {/* Play Icon/Signal */}
        <circle cx="160" cy="90" r="22" stroke="currentColor" strokeWidth="1.5" className="text-primary animate-ping opacity-25" />
        
        {/* Sparkles / Connection lines */}
        <path d="M 60 70 A 15 15 0 0 1 75 85" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary/40 animate-pulse" />
        <path d="M 50 65 A 25 25 0 0 1 75 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary/20 animate-pulse delay-500" />
        
        {/* Audio/Mic waves */}
        <path d="M 330 75 A 15 15 0 0 1 330 105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-secondary/40 animate-pulse delay-300" />
        <path d="M 340 70 A 25 25 0 0 1 340 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-secondary/20 animate-pulse delay-700" />
      </svg>
    </div>
  );
};

const NewsletterVector: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 relative overflow-hidden group select-none">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-secondary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      {/* Glow balls */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />

      {/* Main Illustration: A modern envelope with floating news pages */}
      <svg
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[85%] object-contain transition-transform duration-700 group-hover:scale-105 z-10"
      >
        {/* Floating Page 2 (behind) */}
        <g className="animate-bounce" style={{ animationDuration: '4s' }}>
          <rect x="210" y="35" width="80" height="110" rx="8" transform="rotate(8 210 35)" fill="currentColor" className="text-background/90" stroke="currentColor" strokeWidth="2" />
          <path d="M 225 55 L 275 62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-secondary/40" />
          <path d="M 223 68 L 263 74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/30" />
          <path d="M 221 81 L 266 87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/30" />
        </g>

        {/* Floating Page 1 (main newsletter sheet) */}
        <g className="animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
          <rect x="120" y="25" width="90" height="120" rx="8" fill="currentColor" className="text-background" stroke="currentColor" strokeWidth="2" />
          {/* Header block of page */}
          <rect x="132" y="38" width="66" height="16" rx="4" fill="currentColor" className="text-primary/15" />
          <circle cx="142" cy="46" r="4" fill="currentColor" className="text-primary" />
          <line x1="152" y1="46" x2="188" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
          
          {/* Article lines */}
          <line x1="132" y1="68" x2="198" y2="68" stroke="currentColor" strokeWidth="2.5" className="text-foreground/80" />
          <line x1="132" y1="78" x2="190" y2="78" stroke="currentColor" strokeWidth="2.5" className="text-foreground/80" />
          
          <rect x="132" y="88" width="66" height="12" rx="2" fill="currentColor" className="text-accent/15" />
          <line x1="138" y1="94" x2="188" y2="94" stroke="currentColor" strokeWidth="2" className="text-accent" />
          
          <line x1="132" y1="112" x2="185" y2="112" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/40" />
          <line x1="132" y1="120" x2="175" y2="120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/30" />
          <line x1="132" y1="128" x2="192" y2="128" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted-foreground/20" />
        </g>

        {/* Envelope back panel */}
        <path d="M 100 130 L 100 200 C 100 205, 105 210, 110 210 L 290 210 C 295 210, 300 205, 300 200 L 300 130 Z" fill="currentColor" className="text-secondary/20" stroke="currentColor" strokeWidth="2" />
        
        {/* Envelope flap open behind pages */}
        <path d="M 100 130 L 200 70 L 300 130 Z" fill="currentColor" className="text-secondary/10" stroke="currentColor" strokeWidth="2" />

        {/* Envelope front fold (isometric overlap) */}
        <path d="M 100 135 L 200 175 L 300 135" stroke="currentColor" strokeWidth="2" className="text-secondary/40" />
        <path d="M 100 210 L 200 175 L 300 210" stroke="currentColor" strokeWidth="2" className="text-secondary/40" />

        {/* Sparkles / dynamic floaties */}
        {/* Sparkle 1 */}
        <path d="M 90 60 L 95 65 L 90 70 L 85 65 Z" fill="currentColor" className="text-accent animate-pulse" />
        {/* Sparkle 2 */}
        <path d="M 315 45 L 318 48 L 315 51 L 312 48 Z" fill="currentColor" className="text-primary animate-pulse delay-500" />
        {/* Circle accent */}
        <circle cx="310" cy="110" r="3.5" fill="currentColor" className="text-secondary animate-ping opacity-40" />
        <circle cx="75" cy="120" r="4.5" fill="currentColor" className="text-accent animate-ping opacity-45" />
      </svg>
    </div>
  );
};

const FeatherCard: React.FC<FeatherCardProps> = ({
  title = "Gentle Whispers",
  subtitle = "Nature's Poetry",
  content = "Like feathers dancing on a gentle breeze, this card embodies the soft elegance and tranquil beauty found in nature's most delicate creations.",
  variant = "primary" as VariantType,
  image,
  className,
  onClick,
  isClickable = false,
  bulletPoints = [],
  showCTA = false,
  ctaText = "Learn More",
  onCTAClick,
}) => {
  const variants = {
    primary: {
      bg: "bg-gradient-to-br from-primary/8 via-accent/12 to-secondary/6",
      darkBg: "dark:from-primary/12 dark:via-accent/8 dark:to-secondary/4",
      accent: "text-foreground",
      title: "text-foreground",
      featherColor: "stroke-primary/70 dark:stroke-primary/50",
    },
    sage: {
      bg: "bg-gradient-to-br from-secondary/10 via-primary/8 to-accent/14",
      darkBg: "dark:from-secondary/15 dark:via-primary/6 dark:to-accent/10",
      accent: "text-foreground",
      title: "text-foreground",
      featherColor: "stroke-secondary/70 dark:stroke-secondary/50",
    },
    rose: {
      bg: "bg-gradient-to-br from-accent/12 via-secondary/8 to-primary/10",
      darkBg: "dark:from-accent/15 dark:via-secondary/6 dark:to-primary/8",
      accent: "text-foreground",
      title: "text-foreground",
      featherColor: "stroke-accent/70 dark:stroke-accent/50",
    },
  }

  const currentVariant = variants[variant] || variants.primary

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      className={`
        card-hover relative w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl overflow-hidden
        ${currentVariant.bg} ${currentVariant.darkBg}
        backdrop-blur-sm border border-white/20 dark:border-white/10
        shadow-xl shadow-black/5 dark:shadow-black/20
        h-full ${className || ''}
        ${isClickable ? 'cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300' : ''}
      `}
    >
      <div className="relative h-24 sm:h-28 lg:h-32 xl:h-64 2xl:h-72 [@media(max-height:640px)]:h-20 [@media(max-height:640px)]:xl:h-24 [@media(max-height:640px)]:2xl:h-28 overflow-hidden">
        {image === 'webinars-vector' ? (
          <WebinarsVector />
        ) : image === 'newsletter-vector' ? (
          <NewsletterVector />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
        )}
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Floating animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-60 left-10 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-72 right-16 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="card-hover-content relative z-10 p-4 sm:p-5 xl:p-6 [@media(min-height:768px)]:xl:p-8 [@media(min-height:850px)]:2xl:p-10">
        {/* Subtitle */}
        {subtitle && (
          <p
            className={`
              text-[9px] xl:text-xs [@media(min-height:768px)]:xl:text-sm [@media(min-height:850px)]:2xl:text-base font-light tracking-widest uppercase mb-1 [@media(min-height:768px)]:xl:mb-2 [@media(min-height:850px)]:2xl:mb-3 opacity-70
              ${currentVariant.accent}
            `}
          >
            {subtitle}
          </p>
        )}

        {/* Title with flowing typography */}
        <h3
          className={`
            card-hover-title mb-1 [@media(min-height:768px)]:xl:mb-3 [@media(min-height:850px)]:2xl:mb-4 text-sm sm:text-base xl:text-xl font-bold
            ${currentVariant.title}
          `}
        >
          {title}
        </h3>

        {/* Content */}
        <div
          className={`
            card-hover-text text-[11px] sm:text-xs xl:text-sm mb-2 [@media(min-height:768px)]:xl:mb-3 [@media(min-height:850px)]:2xl:mb-4
            ${currentVariant.accent}
          `}
        >
          {content}
        </div>

        {/* Bullet Points */}
        {bulletPoints.length > 0 && (
          <ul className="space-y-1 xl:space-y-1.5 mb-2 [@media(min-height:768px)]:xl:mb-4 [@media(min-height:850px)]:2xl:mb-6 ml-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary dark:text-primary/80 mr-2 shrink-0">•</span>
                <span className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        {showCTA && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCTAClick?.();
            }}
            className="mt-1.5 [@media(min-height:768px)]:xl:mt-3 px-4 py-2 sm:px-5 sm:py-2.5 xl:px-6 xl:py-2.5 [@media(min-height:768px)]:xl:px-8 [@media(min-height:768px)]:xl:py-3 [@media(min-height:850px)]:2xl:px-10 [@media(min-height:850px)]:2xl:py-4 bg-primary text-primary-foreground rounded-full 
                     hover:bg-primary/90 transition-all duration-300 
                     shadow-md hover:shadow-xl font-medium text-[10px] sm:text-xs xl:text-sm 2xl:text-base
                     transform hover:-translate-y-0.5"
          >
            {ctaText}
          </button>
        )}
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      </div>
    </div>
  )
}

// Social & Official Links Connect Modal
interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const links = [
    {
      title: "Connect on LinkedIn",
      subtitle: "DOHaD India Regional Society",
      href: "https://www.linkedin.com/in/dohad-india-regional-society-2b784240b/",
      icon: <LinkedInIcon className="w-5 h-5" />,
      color: "bg-sky-600/10 text-sky-600 dark:text-sky-400 border-sky-600/20 hover:bg-sky-600/15",
    },
  ];

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-background/95 border border-white/20 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 [@media(min-height:640px)]:p-8 max-w-xl w-full relative overflow-y-auto max-h-[92vh] sm:max-h-[90vh] backdrop-blur-xl animate-in fade-in zoom-in duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 [@media(min-height:640px)]:top-5 [@media(min-height:640px)]:right-5 text-muted-foreground hover:text-foreground bg-secondary/15 hover:bg-secondary/30 rounded-full p-1.5 transition-all z-10"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4 [@media(min-height:640px)]:w-5 [@media(min-height:640px)]:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-4 [@media(min-height:640px)]:mb-6 [@media(min-height:768px)]:mb-8 pr-6 [@media(min-height:640px)]:pr-0">
          <div className="hidden [@media(min-height:600px)]:inline-flex p-2.5 [@media(min-height:768px)]:p-3 rounded-2xl bg-primary/10 text-primary mb-2 [@media(min-height:768px)]:mb-3 animate-bounce" style={{ animationDuration: '3s' }}>
            <svg className="w-6 h-6 [@media(min-height:768px)]:w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-lg [@media(min-height:640px)]:text-xl [@media(min-height:768px)]:text-2xl font-bold text-foreground mb-1 [@media(min-height:640px)]:mb-1.5 tracking-tight">
            Follow Us
          </h3>
          <p className="text-[11px] [@media(min-height:640px)]:text-xs [@media(min-height:768px)]:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Follow DOHaD India on LinkedIn for the latest updates.
          </p>
        </div>

        <div className="grid gap-2 [@media(min-height:640px)]:gap-3 grid-cols-1 max-w-sm mx-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center space-x-2.5 [@media(min-height:640px)]:space-x-3.5 p-2.5 [@media(min-height:640px)]:p-3.5 rounded-xl [@media(min-height:768px)]:rounded-2xl border transition-all duration-300
                ${link.color} hover:shadow-md hover:scale-[1.01] group
              `}
            >
              <div className="p-1.5 [@media(min-height:640px)]:p-2 [@media(min-height:768px)]:p-2.5 rounded-lg [@media(min-height:768px)]:rounded-xl bg-background shadow-sm border border-black/5 dark:border-white/5 transition-transform group-hover:scale-110 flex-shrink-0">
                {link.icon}
              </div>
              <div className="text-left overflow-hidden flex-1">
                <p className="text-xs [@media(min-height:640px)]:text-xs [@media(min-height:768px)]:text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {link.title}
                </p>
                <p className="text-[10px] [@media(min-height:640px)]:text-[10px] [@media(min-height:768px)]:text-xs text-muted-foreground truncate font-mono">
                  {link.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-4 [@media(min-height:640px)]:mt-6 [@media(min-height:768px)]:mt-8 pt-3 [@media(min-height:640px)]:pt-4 [@media(min-height:768px)]:pt-6 border-t border-white/10 dark:border-white/5 text-center flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 [@media(min-height:640px)]:px-6 [@media(min-height:640px)]:py-2.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full font-medium text-xs [@media(min-height:640px)]:text-sm transition-all"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// Main Component
const CommunicationOutreach = () => {
  const router = useRouter();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 xl:py-20 2xl:py-28 text-center bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 md:mb-5 xl:mb-6 [@media(min-height:768px)]:mb-12 [@media(min-height:850px)]:2xl:mb-20">
            <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground mb-1 xl:mb-2 [@media(min-height:768px)]:mb-4 [@media(min-height:850px)]:mb-6">
              Communication & Outreach
            </h2>
            <p className="text-[10px] sm:text-xs xl:text-sm [@media(min-height:768px)]:xl:text-lg [@media(min-height:850px)]:2xl:text-xl text-muted-foreground max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
              We actively promote and disseminate DOHaD research across India and globally through multiple communication platforms
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4 xl:gap-8 2xl:gap-10 md:grid-cols-2">
            {/* Card 1: Webinars & Events - Clickable */}
            <div className="flex">
              <FeatherCard
                title="Webinars & Events"
                subtitle=""
                content={
                  <p className="text-muted-foreground text-[11px] sm:text-xs xl:text-sm mt-3 font-normal">
                    Regular webinars featuring renowned Indian and international experts to share emerging insights from DOHaD research.
                  </p>
                }
                bulletPoints={[
                  "Expert talks on emerging DOHaD research",
                  "Methods workshops for practical skills",
                  "Policy roundtables for collaborative discussions"
                ]}
                variant="primary"
                image="webinars-vector"
                className="flex-1"
                isClickable={true}
                onClick={() => router.push('/events')}
              />
            </div>

            {/* Card 2: Quarterly Newsletter - with CTA */}
            <div className="flex">
              <FeatherCard
                title="Follow Us"
                subtitle=""
                content={
                  <p className="text-muted-foreground text-[11px] sm:text-xs xl:text-sm mt-3 font-normal">
                    Stay updated with carefully curated insights on recent publications, events, funding opportunities, and valuable member contributions.
                  </p>
                }
                variant="sage"
                image="newsletter-vector"
                className="flex-1"
                showCTA={true}
                ctaText="Follow Us"
                onCTAClick={() => setIsNewsletterModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen} 
        onClose={() => setIsNewsletterModalOpen(false)} 
      />
    </>
  )
}

export default CommunicationOutreach
