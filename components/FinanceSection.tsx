import React from 'react';

type VariantType = 'primary' | 'sage' | 'rose';

interface FeatherCardProps {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  variant?: VariantType;
  image?: string;
   className?: string;
}

const FeatherCard: React.FC<FeatherCardProps> = ({
  title = "Gentle Whispers",
  subtitle = "Nature's Poetry",
  content = "Like feathers dancing on a gentle breeze, this card embodies the soft elegance and tranquil beauty found in nature's most delicate creations. Each element flows harmoniously, creating a serene experience that soothes the soul.",
  variant = "primary" as VariantType,
  image = "abstract-geometric-shapes.png", // Default image
  className,
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
    className={`
      card-hover relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden
      ${currentVariant.bg} ${currentVariant.darkBg}
      backdrop-blur-sm border border-white/20 dark:border-white/10
      shadow-xl shadow-black/5 dark:shadow-black/20
      h-full ${className || ''} // full height + optional external class
    `}
  >
      <div className="relative h-48 overflow-hidden">
        <img
          src={`/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Floating feather overlay on image */}
        <div className="absolute top-4 right-4 opacity-60">
          <svg className="w-8 h-8" viewBox="0 0 40 60" fill="none">
            <path
              d="M20 10 Q25 8, 30 10 Q32 12, 30 18 Q28 24, 25 30 Q22 36, 20 42 Q18 48, 15 54 Q12 50, 15 46 Q17 40, 18 34 Q19 28, 20 22 Q21 16, 20 10 Z"
              className="fill-white/80 stroke-white/60 stroke-1"
            />
            <path d="M20 16 Q22 18, 24 20 M20 22 Q21 24, 22 26" className="stroke-white/60 stroke-1" />
          </svg>
        </div>
      </div>

      {/* Feather SVG Background Pattern */}
     <div className="absolute inset-0 opacity-20 pointer-events-none pt-20">
  <img
    src="/grey scale logo.svg" // place your image in the public folder
     alt="feather background"
    className="w-full h-full object-cover -translate-y-8" // moves image down slightly
    style={{ transform: 'translateY(20px)' }} // optional: fine-tune if needed
  />
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
        <p
          className={`
          text-sm font-light tracking-widest uppercase mb-2 opacity-70
          ${currentVariant.accent}
        `}
        >
          {subtitle}
        </p>

        {/* Title with flowing typography */}
        <h3
          className={`
          card-hover-title mb-4  text-xl font-semibold
          ${currentVariant.title}
        `}
        >
          {title}
        </h3>

        {/* Content */}
        <h4
          className={`
          card-hover-text text-sm mb-6
          ${currentVariant.accent}
        `}
        >
          {content}
        </h4>

        {/* Decorative line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-6" />

        {/* Action area */}
        <div className="flex items-center justify-between">
          <span className={`text-sm  ${currentVariant.accent} opacity-60`}>Discover more</span>
          <div
            className={`
            w-8 h-8 rounded-full border border-current opacity-40
            flex items-center justify-center transition-all duration-300
            hover:opacity-80 hover:scale-110 cursor-pointer
            ${currentVariant.accent}
          `}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5" />
      </div>
    </div>
  )
}

// Demo showing multiple variants
const FeatherCardDemo = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                       Communication & Outreach


          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
           We actively disseminate knowledge and raise awareness about DOHaD
            research through various communication channels
          </p>
        </div>

     <div className="grid gap-4 md:grid-cols-2">
  {/* Primary variant */}
  <div className="flex">
    <FeatherCard
      title="Webinars & Events"
      subtitle=""
      content={
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
          Regular webinars featuring renowned Indian and international experts
          share emerging insights from DOHaD research, exploring critical topics,
          innovative methodologies, and practical applications to foster
          collaboration and empower researchers, clinicians, and students.
        </p>
      }
      variant="primary"
      image="2150461353.jpg"
      className="flex-1" // ensures card stretches full height
    />
  </div>

  {/* Sage variant */}
  <div className="flex">
    <FeatherCard
      title="Quarterly Newsletter"
      subtitle=""
      content={
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
          Stay updated with carefully curated insights on recent publications,
          significant events, funding opportunities, and valuable member contributions,
          keeping you engaged and connected with the DOHaD community.
        </p>
      }
      variant="sage"
      image="14534.jpg"
      className="flex-1" // ensures card stretches full height
    />
  </div>
</div>




    
      </div>
    </div>
  )
}

export default FeatherCardDemo
