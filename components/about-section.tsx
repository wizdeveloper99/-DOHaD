// components/AboutSection.tsx
import Image from "next/image";
import { BarChart3, Smartphone, FileText, Shield, BookOpen, Users, Globe, Megaphone } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-7 h-7 text-primary" />,
    title: "Advance Collaborative Research in India",
    description:
      "Support research on early-life influences on chronic diseases by connecting Indian scientists and institutions, focusing on India’s diverse social and environmental contexts.",
  },
  {
    icon: <Shield className="w-7 h-7 text-primary" />,
    title: "Apply DOHaD in Indian Health Policy",
    description:
      "Promote the use of DOHaD principles in shaping India’s public health strategies to prevent non-communicable diseases from early life stages.",
  },
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    title: "Strengthen Regional Dialogues Across India",
    description:
      "Organize forums and meetings across India to share DOHaD research and practical solutions, engaging professionals from multiple sectors.",
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Build Inclusive Participation in India",
    description:
      "Encourage involvement of Indian students, researchers, and professionals—especially from underserved regions—in DOHaD activities and capacity-building efforts.",
  },
];



function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.08)] 
        overflow-hidden rounded-xl border border-border
        transition-all duration-500 ease-out cursor-pointer relative
        hover:scale-[1.02] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.12)]
        flex flex-col ${className}`}
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
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
          DOHaD India Regional Society
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl md:max-w-4xl mx-auto">
          The DOHaD India Regional Society is committed to advancing the science
          and evidence-based policies and practices based on the Developmental
          Origins of Health and Disease paradigm, rooted in the Indian context
        </p>

       <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
  {/* Left side cards */}
  <div className="flex flex-col h-full gap-6">
    <FeatureCard {...features[0]} className="flex-1" />
    <FeatureCard {...features[1]} className="flex-1" />
  </div>

  {/* Center image */}
  <div className="flex justify-center">
    <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-[420px] md:max-w-[520px] h-full">
      <Image
        src="/2151663948.jpg"
        alt="About DOHaD"
        width={600}
        height={800}
        className="w-full h-full object-cover select-none"
        priority
      />
    </div>
  </div>

  {/* Right side cards */}
  <div className="flex flex-col h-full gap-6">
    <FeatureCard {...features[2]} className="flex-1" />
    <FeatureCard {...features[3]} className="flex-1" />
  </div>
</div>

      </div>
    </section>
  );
}

