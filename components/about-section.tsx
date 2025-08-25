// components/AboutSection.tsx
import Image from "next/image";
import { BarChart3, Smartphone, FileText, Shield } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="w-7 h-7 text-primary" />,
    title: "Real-time analytics",
    description: "Gain actionable insights with our real-time analytics feature",
  },
  {
    icon: <FileText className="w-7 h-7 text-primary" />,
    title: "Customizable reports",
    description: "Streamline your financial processes with automated workflows",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-primary" />,
    title: "Mobile accessibility",
    description: "Manage your finances on the go with our mobile-friendly platform",
  },
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    title: "Enhanced security",
    description: "Protect your sensitive financial data with our state-of-the-art security measures",
  },
];

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className={`w-full h-[220px] md:h-[240px] lg:h-[260px] 
        bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.08)] 
        overflow-hidden rounded-xl border border-border
        transition-all duration-500 ease-out cursor-pointer relative
        hover:scale-[1.02] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.12)]`}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 relative z-10 h-full">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Core features that set us apart from the competition
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          
          Explore our standout features designed to deliver exceptional performance
          and value, distinguishing us from the competition.
        </p>

        {/* Grid layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Left side */}
          <div className="flex flex-col gap-8">
            <FeatureCard {...features[0]} />
            <FeatureCard {...features[1]} />
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-w-sm">
              <Image
                src="https://specials-images.forbesimg.com/imageserve/66562a0b9d62100aa9915391/women-owned-businesses--UI-UX-design-company--supplier-diversity-programs--peer/960x0.jpg?fit=scale"
                alt="Features"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-8">
            <FeatureCard {...features[2]} />
            <FeatureCard {...features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
