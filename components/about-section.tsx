import React from 'react';
import Image from "next/image";
import { Globe, Flag } from "lucide-react";

const aboutCards = [
  {
    title: "International DOHaD Society",
    description: "The International DOHaD Society works to coordinate research and advocacy strategies in different countries to promote and support a healthy start to life. We aim specifically to encourage the exchange of ideas, staff, and expertise among institutions, laboratories, and research groups worldwide.",
    type: "large-teal",
    icon: "globe" as const,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    title: "India - Regional Society", 
    description: "The DOHaD India Regional Society is committed to advancing the science and evidence-based policies and practices that are based on the Developmental Origins of Health and Disease (DOHaD) paradigm. Our mission is to catalyse collaborative research, capacity building, knowledge dissemination, and policy engagement.",
    type: "large-light",
    icon: "flag" as const,
    profileImage: "https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?_gl=1*1wkkhsk*_ga*MjE0MDQwNzkyLjE3NTYwNzczMjU.*_ga_8JE65Q40S6*czE3NTYwNzczMjQkbzEkZzEkdDE3NTYwNzczMzAkajU0JGwwJGgw"
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
  
  let cardClasses = "relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group";
  let overlayClasses = "";
  let titleClasses = "text-white text-2xl font-bold mb-3";
  let descriptionClasses = "text-white/90 text-base leading-relaxed";

  if (type === "large-teal") {
    overlayClasses = "bg-gradient-to-t from-black/80 via-black/40 to-transparent";
  } else if (type === "large-light") {
    overlayClasses = "bg-gradient-to-t from-black/80 via-black/40 to-transparent";
  }

  return (
    <div className={cardClasses}>
      {/* Profile Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={profileImage}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${overlayClasses}`}></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        {/* Icon in top corner */}
        {icon && (
          <div className="absolute top-6 right-6 w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            {icon === "globe" && <Globe size={24} className="text-white" />}
            {icon === "flag" && <Flag size={24} className="text-white" />}
          </div>
        )}

        <h3 className={titleClasses}>{title}</h3>
        <p className={`${descriptionClasses} mb-4 max-w-md`}>{description}</p>
      </div>

      {/* Hover effect - additional overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export function AboutSection() {
  return (
    <section className="w-full px-4 md:px-6 py-12 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Global Health Initiative
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">DOHaD</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Advancing research and evidence-based policies rooted in the 
            Developmental Origins of Health and Disease paradigm
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {aboutCards.map((card, index) => (
            <AboutCard 
              key={index}
              title={card.title}
              description={card.description}
              type={card.type}
              icon={card.icon}
              profileImage={card.profileImage}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-card p-4 md:p-6 rounded-2xl shadow-sm text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">45+</div>
            <div className="text-sm md:text-base text-muted-foreground">Countries</div>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-2xl shadow-sm text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm md:text-base text-muted-foreground">Members</div>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-2xl shadow-sm text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm md:text-base text-muted-foreground">Research Projects</div>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-2xl shadow-sm text-center border border-border">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm md:text-base text-muted-foreground">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
}