"use client";
import React from "react";
import Image from "next/image";
import { Users, Globe, Activity, BookOpen, Network, Lightbulb, ArrowRight, Megaphone, FileHeart, GraduationCap, ChevronRight } from "lucide-react";

export default function AboutSection({ settings }: { settings?: any }) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const title = settings?.title || "DOHaD India Regional Society";
  const content = settings?.content || "The DOHaD India Regional Society is a premier scientific body dedicated to understanding how early-life environments shape lifelong health. We connect researchers, clinicians, and policymakers to transform healthcare through the Developmental Origins of Health and Disease (DOHaD) approach.";

  const aims = [
    {
      title: "Collaborative Research",
      desc: "Promote multi-disciplinary collaborative research to understand developmental origins of health.",
      icon: <Network className="w-4 h-4 shrink-0" />,
    },
    {
      title: "Evidence Dissemination",
      desc: "Disseminate scientific evidence to healthcare stakeholders and clinical practitioners.",
      icon: <Megaphone className="w-4 h-4 shrink-0" />,
    },
    {
      title: "Policy Advocacy",
      desc: "Advocate for evidence-based maternal and child health policies at regional and national levels.",
      icon: <FileHeart className="w-4 h-4 shrink-0" />,
    },
    {
      title: "Capacity Building",
      desc: "Foster capacity building and mentorship for young researchers to drive future innovation.",
      icon: <GraduationCap className="w-4 h-4 shrink-0" />,
    },
  ];

  return (
    <section className="w-full py-8 md:py-10 xl:py-20 2xl:py-28 bg-background">
      <div className="w-full">
        {/* Top Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-16 2xl:gap-20 items-center mb-8 md:mb-10 xl:mb-16 2xl:mb-20">
          
          {/* Left Column: Who We Are */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary-700 dark:text-secondary-300 text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-semibold rounded-full tracking-wide">
                Who We Are
              </div>
              <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground leading-tight">
                {title}
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground leading-relaxed">
              {content}
            </p>
            
            <div className="grid grid-cols-2 gap-2 xl:gap-4 2xl:gap-6 pt-1 xl:pt-3 2xl:pt-4">
              {aims.map((aim, index) => {
                const isActive = activeIndex === index;
                return (
                  <button 
                    key={index} 
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-2.5 p-2 xl:p-3.5 2xl:p-5 rounded-xl border text-left transition-all duration-300 group cursor-pointer ${
                      isActive 
                        ? "bg-secondary/15 dark:bg-secondary/15 border-secondary shadow-md shadow-secondary/5 translate-y-[-2px]" 
                        : "bg-card/60 dark:bg-slate-900/60 backdrop-blur-sm border-secondary/10 hover:border-secondary/40 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className={`p-1 rounded-lg transition-all duration-300 shrink-0 ${
                      isActive 
                        ? "bg-secondary text-white scale-105" 
                        : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                    }`}>
                      {aim.icon}
                    </div>
                    <span className={`font-bold text-[11px] sm:text-xs xl:text-sm 2xl:text-base leading-tight transition-colors ${
                      isActive ? "text-secondary dark:text-secondary-400" : "text-gray-700 dark:text-gray-300 group-hover:text-foreground"
                    }`}>
                      {aim.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Shared Detail Panel */}
            <div className="p-3 xl:p-5 2xl:p-8 rounded-xl bg-secondary/5 dark:bg-slate-900/50 border border-secondary/10 backdrop-blur-sm relative overflow-hidden transition-all duration-300 min-h-[75px] xl:min-h-[100px] 2xl:min-h-[120px] flex items-center">
              {/* Green gradient indicator bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-teal-500" />
              <div className="flex items-start gap-2.5 w-full">
                <div className="p-1.5 bg-secondary/10 rounded-lg text-secondary shrink-0 mt-0.5 animate-pulse">
                  {aims[activeIndex ?? 0].icon}
                </div>
                <div>
                  <h4 className="text-[9px] xl:text-xs 2xl:text-sm font-bold text-secondary uppercase tracking-wider mb-0.5">
                    {aims[activeIndex ?? 0].title}
                  </h4>
                  <p className="text-[11px] xl:text-sm 2xl:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {aims[activeIndex ?? 0].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Map */}
          <div className="relative h-full min-h-[260px] lg:min-h-[300px] xl:min-h-[460px] rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group">
            {/* Map Background */}
            <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
              <Image 
                src="/dohad-india-network-map.png" 
                alt="DOHaD India Network Map" 
                fill 
                className="object-cover object-center opacity-90 dark:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-slate-950 dark:via-slate-950/20" />
            </div>

            {/* Stats Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-3 md:p-4 xl:p-8">
              <div className="grid grid-cols-1 gap-2">
                {/* Hiding stats for now
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">150+</div>
                  <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Active Members</div>
                </div>
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">25,000+</div>
                  <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Visitors</div>
                </div>
                */}
                <div className="bg-secondary/95 backdrop-blur-md p-3 xl:p-5 rounded-xl xl:rounded-2xl shadow-lg text-white border border-white/10 hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 xl:p-2.5 bg-white/20 rounded-lg xl:rounded-xl shrink-0">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm xl:text-lg font-bold leading-none mb-1">National Network</div>
                      <p className="text-secondary-100 text-[10px] sm:text-xs xl:text-sm leading-snug font-medium">
                        Connecting researchers & clinicians across India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {[
            {
              title: "Advance Collaborative Research",
              desc: "Facilitating multi-disciplinary studies to uncover developmental origins of disease and develop preventive strategies.",
              icon: <Network className="w-5 h-5" />
            },
            {
              title: "Knowledge Dissemination",
              desc: "Sharing cutting-edge findings through annual conferences, workshops, and high-impact publications.",
              icon: <BookOpen className="w-5 h-5" />
            },
            {
              title: "Capacity Building",
              desc: "Training the next generation of scientists with specialized workshops, mentorship programs, and grants.",
              icon: <Lightbulb className="w-5 h-5" />
            }
          ].map((card, index) => (
            <div key={index} className="group p-4 sm:p-5 xl:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 xl:w-14 xl:h-14 bg-secondary/10 rounded-xl xl:rounded-2xl flex items-center justify-center text-secondary mb-3 xl:mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-sm sm:text-base xl:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1.5 xl:mb-3 group-hover:text-secondary transition-colors">
                {card.title}
              </h3>
              <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
