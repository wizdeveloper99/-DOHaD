import React from 'react';
import Image from "next/image";
import { Globe, Flag } from "lucide-react";

const aboutCards: AboutCardProps[] = [
  {
    title: "International DOHaD Society",
    description: "The International DOHaD Society works to coordinate research and advocacy strategies in different countries to promote and support a healthy start to life. We aim specifically to encourage the exchange of ideas, staff, and expertise among institutions, laboratories, and research groups worldwide.",
    type: "large-teal",
    icon: "globe",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    title: "India - Regional Society", 
    description: "The DOHaD India Regional Society is committed to advancing the science and evidence-based policies and practices that are based on the Developmental Origins of Health and Disease (DOHaD) paradigm. Our mission is to catalyse collaborative research, capacity building, knowledge dissemination, and policy engagement.",
    type: "large-light",
    icon: "flag",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face"
  }
];

interface AboutCardProps {
  title: string;
  description: string;
  type: string;
  icon?: "globe" | "flag";
  profileImage: string;
}

const AboutCard = ({ title, description, type, icon, profileImage }: AboutCardProps) => {
  const isLargeCard = type.startsWith("large");
  
  let cardClasses = "relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group";
  let overlayClasses = "";
  let titleClasses = "text-white text-2xl font-bold mb-2";
  let descriptionClasses = "text-white/90 text-sm leading-relaxed line-clamp-4";

  if (type === "large-teal") {
    overlayClasses = "bg-gradient-to-t from-teal-900/80 via-teal-700/40 to-transparent";
  } else if (type === "large-light") {
    overlayClasses = "bg-gradient-to-t from-emerald-900/80 via-emerald-700/40 to-transparent";
  }

  return (
    <div className={cardClasses}>
      {/* Profile Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={profileImage}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses}`}></div>

      {/* Blur overlay at bottom for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-sm"></div>

      {/* Icon in top corner */}
      {icon && (
        <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          {icon === "globe" && <Globe size={24} className="text-white opacity-90" />}
          {icon === "flag" && <Flag size={24} className="text-white opacity-90" />}
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
      </div>

      {/* Hover effect - additional overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export function AboutSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-16">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            About DOHaD
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed max-w-2xl">
            {"Advancing research and evidence-based policies rooted in"} <br />
            {"the Developmental Origins of Health and Disease paradigm"}
          </p>
        </div>
      </div>
      
      {/* Cards Grid */}
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-6 lg:gap-8 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start">
          <AboutCard {...aboutCards[0]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start">
          <AboutCard {...aboutCards[1]} />
        </div>
      </div>
    </section>
  );
}