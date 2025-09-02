type VariantType = 'primary' | 'sage' | 'rose';

const FeatherCard = ({
  title = "Gentle Whispers",
  subtitle = "Nature's Poetry",
  content = "Like feathers dancing on a gentle breeze, this card embodies the soft elegance and tranquil beauty found in nature's most delicate creations. Each element flows harmoniously, creating a serene experience that soothes the soul.",
  variant = "primary" as VariantType,
  imageQuery = "delicate white feather floating on soft breeze", // Added image query prop
}) => {
  const variants = {
    primary: {
      bg: "bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30",
      darkBg: "dark:from-slate-900 dark:via-slate-800/50 dark:to-purple-900/20",
      accent: "text-slate-700 dark:text-slate-300",
      title: "text-slate-800 dark:text-slate-200",
      featherColor: "stroke-slate-400/60 dark:stroke-slate-500/40",
    },
    sage: {
      bg: "bg-gradient-to-br from-green-50 via-emerald-50/40 to-teal-50/30",
      darkBg: "dark:from-emerald-950 dark:via-green-900/50 dark:to-teal-900/20",
      accent: "text-green-700 dark:text-green-300",
      title: "text-emerald-800 dark:text-emerald-200",
      featherColor: "stroke-green-400/50 dark:stroke-green-500/30",
    },
    rose: {
      bg: "bg-gradient-to-br from-rose-50 via-pink-50/40 to-orange-50/30",
      darkBg: "dark:from-rose-950 dark:via-pink-900/50 dark:to-orange-900/20",
      accent: "text-rose-700 dark:text-rose-300",
      title: "text-pink-800 dark:text-pink-200",
      featherColor: "stroke-rose-400/50 dark:stroke-rose-500/30",
    },
  }

  const currentVariant = variants[variant] || variants.primary

  return (
    <div
      className={`
      card-hover relative w-full max-w-md mx-auto rounded-3xl overflow-hidden
      ${currentVariant.bg} ${currentVariant.darkBg}
      backdrop-blur-sm border border-white/20 dark:border-white/10
      shadow-xl shadow-black/5 dark:shadow-black/20
    `}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={`/abstract-geometric-shapes.png?height=192&width=384&query=${encodeURIComponent(imageQuery)}`}
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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
          {/* Large floating feather */}
          <g transform="translate(280, 250) rotate(15)">
            <path
              d="M20 10 Q30 5, 40 10 Q45 15, 40 25 Q35 35, 30 45 Q25 55, 20 65 Q15 75, 10 85 Q5 95, 0 105 Q-2 100, 0 95 Q2 85, 5 75 Q8 65, 10 55 Q12 45, 15 35 Q18 25, 20 15 Z"
              className={`${currentVariant.featherColor} fill-none stroke-1`}
            />
            <path
              d="M20 15 Q25 20, 30 25 M20 25 Q23 28, 26 32 M20 35 Q22 38, 24 42"
              className={`${currentVariant.featherColor} stroke-1`}
            />
          </g>

          {/* Medium feather */}
          <g transform="translate(50, 400) rotate(-10)">
            <path
              d="M15 8 Q22 4, 28 8 Q32 12, 28 20 Q25 28, 20 35 Q15 42, 10 50 Q5 58, 0 65 Q-1 62, 0 58 Q2 50, 4 42 Q6 35, 8 28 Q10 20, 12 12 Z"
              className={`${currentVariant.featherColor} fill-none stroke-1`}
            />
            <path d="M15 12 Q18 15, 21 18 M15 20 Q17 22, 19 25" className={`${currentVariant.featherColor} stroke-1`} />
          </g>

          {/* Small floating feathers */}
          <g transform="translate(320, 500) rotate(25)">
            <path
              d="M10 5 Q15 3, 18 5 Q20 8, 18 12 Q16 16, 13 20 Q10 24, 7 28 Q4 32, 1 36 Q0 34, 1 32 Q2 28, 3 24 Q4 20, 5 16 Q6 12, 7 8 Z"
              className={`${currentVariant.featherColor} fill-none stroke-1`}
            />
          </g>
        </svg>
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
          card-hover-title text-3xl font-light mb-4 leading-relaxed
          font-sans tracking-wide
          ${currentVariant.title}
        `}
        >
          {title}
        </h3>

        {/* Content */}
        <p
          className={`
          card-hover-text text-base leading-relaxed font-light mb-6
          ${currentVariant.accent}
        `}
        >
          {content}
        </p>

        {/* Decorative line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 mb-6" />

        {/* Action area */}
        <div className="flex items-center justify-between">
          <span className={`text-sm font-light ${currentVariant.accent} opacity-60`}>Discover more</span>
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
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-sans font-light text-slate-800 dark:text-slate-200 mb-4">
            Feather Card Collection
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
            Elegant cards inspired by the delicate beauty of feathers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary variant */}
          <FeatherCard
            title="Serenity"
            subtitle="Peaceful Moments"
            content="Embrace the gentle rhythm of nature as soft whispers of wind carry dreams across tranquil landscapes, where every breath brings clarity and peace."
            variant="primary"
            imageQuery="delicate white feather floating on soft blue sky background"
          />

          {/* Sage variant */}
          <FeatherCard
            title="Growth"
            subtitle="Natural Wisdom"
            content="In the quiet spaces between heartbeats, wisdom grows like morning dew on delicate leaves, nurturing the soul with gentle understanding."
            variant="sage"
            imageQuery="elegant green feather with dewdrops on natural forest background"
          />

          {/* Rose variant */}
          <FeatherCard
            title="Warmth"
            subtitle="Gentle Touch"
            content="Like the first blush of dawn painting the sky in soft hues, warmth spreads through moments of connection and shared tenderness."
            variant="rose"
            imageQuery="soft pink feather against warm sunset golden hour lighting"
          />
        </div>

    
      </div>
    </div>
  )
}

export default FeatherCardDemo
