// components/AboutSection.tsx
"use client";

import Image from "next/image";
import { Shield, BookOpen, Users, Globe } from "lucide-react";

const softThemes = [
  { bg: "bg-[#f5f7fa] dark:bg-[#1f1f1f]", accent: "text-[#222222] dark:text-white" }, // Grey soft
  { bg: "bg-[#e6f7f6] dark:bg-[#003c38]", accent: "text-[#00645E] dark:text-[#8AD260]" }, // Teal
  { bg: "bg-[#f2faee] dark:bg-[#1d2d1b]", accent: "text-[#3F7D20] dark:text-[#8AD260]" }, // Green
  { bg: "bg-[#f6f9f3] dark:bg-[#2a3225]", accent: "text-[#546b44] dark:text-[#d6e9c3]" }, // Mint
];

const features = [
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Advance Collaborative Research in India",
    description:
      "Collaborative research on early-life influences on later health outcomes by linking Indian scientists and institutions working in diverse environments and communities",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Apply DOHaD principles in Indian Health Policy",
    description:
      "Promote DOHaD principles in shaping India's health policies, especially the primary prevention of chronic diseases by focusing on promoting health at the earliest life stages",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Strengthen Regional Dialogues Across India",
    description:
      "Organize forums and meetings across India, sharing DOHaD research insights while engaging professionals from multiple relevant sectors",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Build Inclusive Participation in India",
    description:
      "Encourage students, early career researchers, and professionals across Indian regions to join DOHaD initiatives and activities",
  },
];

function FeatureCard({
  icon,
  title,
  description,
  bg,
  accent,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`card-hover relative w-full rounded-2xl ${bg}
        backdrop-blur-sm shadow-sm overflow-hidden
        flex flex-col ${className}`}
    >
      {/* Subtle dotted pattern */}
      <svg
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="dotsLight"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotsLight)" />
      </svg>

      {/* Content */}
      <div className="card-hover-content relative z-10 p-4 sm:p-6 flex flex-col items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4 h-full justify-between">
        <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-3">
          <div
            className={`p-2 sm:p-3 ${accent}/20 rounded-xl flex items-center justify-center transition-transform duration-300`}
          >
            {icon}
          </div>
          <h3 className={`card-hover-title text-lg sm:text-xl font-semibold ${accent} leading-tight`}>
            {title}
          </h3>
        </div>
        <p className="card-hover-text text-sm sm:text-base leading-relaxed text-foreground/80">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Faint background glow blobs */}


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            DOHaD India Regional Society
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-gray-300 text-gray-700 leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
            The DOHaD India Regional Society is committed to advancing the
            science and evidence-based policies and practices based on the
            Developmental Origins of Health and Disease paradigm, rooted in the
            Indian context.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-x-6 lg:gap-y-8 items-stretch">
          {/* Left side cards */}
          <div className="flex flex-col h-full gap-6 sm:gap-8">
            <FeatureCard {...features[0]} {...softThemes[0]} className="flex-1" />
            <FeatureCard {...features[1]} {...softThemes[1]} className="flex-1" />
          </div>

          {/* Center image with hover effect */}
          <div className="flex justify-center px-4 md:px-0">
            <div className="card-hover rounded-3xl overflow-hidden shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-full bg-white/60 backdrop-blur-md">
              <Image
                src="/2151663948.jpg"
                alt="Illustration of DOHaD India activities"
                width={600}
                height={800}
                className="card-hover-image w-full h-full object-cover select-none"
                priority
              />
            </div>
          </div>

          {/* Right side cards */}
          <div className="flex flex-col h-full gap-6 sm:gap-8">
            <FeatureCard {...features[2]} {...softThemes[2]} className="flex-1" />
            <FeatureCard {...features[3]} {...softThemes[3]} className="flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
