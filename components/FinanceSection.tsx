'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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

const FeatherCard: React.FC<FeatherCardProps> = ({
  title = "Gentle Whispers",
  subtitle = "Nature's Poetry",
  content = "Like feathers dancing on a gentle breeze, this card embodies the soft elegance and tranquil beauty found in nature's most delicate creations.",
  variant = "primary" as VariantType,
  image = "abstract-geometric-shapes.png",
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
        card-hover relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden
        ${currentVariant.bg} ${currentVariant.darkBg}
        backdrop-blur-sm border border-white/20 dark:border-white/10
        shadow-xl shadow-black/5 dark:shadow-black/20
        h-full ${className || ''}
        ${isClickable ? 'cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300' : ''}
      `}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={`/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
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
      <div className="card-hover-content relative z-10 p-8">
        {/* Subtitle */}
        {subtitle && (
          <p
            className={`
              text-sm font-light tracking-widest uppercase mb-2 opacity-70
              ${currentVariant.accent}
            `}
          >
            {subtitle}
          </p>
        )}

        {/* Title with flowing typography */}
        <h3
          className={`
            card-hover-title mb-4 text-xl font-semibold
            ${currentVariant.title}
          `}
        >
          {title}
        </h3>

        {/* Content */}
        <div
          className={`
            card-hover-text text-sm mb-4
            ${currentVariant.accent}
          `}
        >
          {content}
        </div>

        {/* Bullet Points */}
        {bulletPoints.length > 0 && (
          <ul className="space-y-2 mb-6 ml-4">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary dark:text-primary/80 mr-2">•</span>
                <span className="text-sm text-muted-foreground">{point}</span>
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
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full 
                     hover:bg-primary/90 transition-all duration-300 
                     shadow-lg hover:shadow-xl font-medium text-sm
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

// Newsletter Subscription Modal
interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-background border border-border rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get quarterly updates on DOHaD research, events, and opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                           text-foreground placeholder:text-muted-foreground transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-full 
                         hover:bg-primary/90 transition-all duration-300 
                         shadow-lg hover:shadow-xl font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:-translate-y-0.5"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Successfully Subscribed!
            </h3>
            <p className="text-muted-foreground">
              Thank you for subscribing to our newsletter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const CommunicationOutreach = () => {
  const router = useRouter();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-12 text-center bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Communication & Outreach
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We actively promote and disseminate DOHaD research across India and globally through multiple communication platforms
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1: Webinars & Events - Clickable */}
            <div className="flex">
              <FeatherCard
                title="Webinars & Events"
                subtitle=""
                content={
                  <p className="text-muted-foreground text-base mt-3 font-normal">
                    Regular webinars featuring renowned Indian and international experts to share emerging insights from DOHaD research.
                  </p>
                }
                bulletPoints={[
                  "Expert talks on emerging DOHaD research",
                  "Methods workshops for practical skills",
                  "Policy roundtables for collaborative discussions"
                ]}
                variant="primary"
                image="2150461353.jpg"
                className="flex-1"
                isClickable={true}
                onClick={() => router.push('/events')}
              />
            </div>

            {/* Card 2: Quarterly Newsletter - with CTA */}
            <div className="flex">
              <FeatherCard
                title="Quarterly Newsletter"
                subtitle=""
                content={
                  <p className="text-muted-foreground text-base mt-3 font-normal">
                    Stay updated with carefully curated insights on recent publications, events, funding opportunities, and valuable member contributions.
                  </p>
                }
                variant="sage"
                image="14534.jpg"
                className="flex-1"
                showCTA={true}
                ctaText="Subscribe to Newsletter"
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
