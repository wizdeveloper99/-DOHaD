"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function LearnAboutDOHaD({ settings }: { settings?: any }) {
  const showCard = settings?.showCard !== false && Boolean(settings?.cardImage);
  const cardImage = settings?.cardImage;
  const cardName = settings?.cardName || "Prof. David Barker";
  const cardRole = settings?.cardRole || "Pioneer of the DOHaD paradigm";
  
  const badge = settings?.badge || "Learn About DOHaD";
  const title = settings?.title || "What is DOHaD?";
  const contentParagraph1 = settings?.contentParagraph1 || "The Developmental Origins of Health and Disease (DOHaD) is a multidisciplinary field that examines how the environment during early development (conception, fetal life, infancy, and early childhood) interacts with genetic and other factors to shape lifelong health and the risk of non-communicable diseases (NCDs) like diabetes, heart disease, and obesity.";
  const contentParagraph2 = settings?.contentParagraph2 || "This paradigm shift moves health focus from adult lifestyle choices alone to the critical importance of early-life environments, providing a powerful framework for preventing chronic diseases across generations.";
  const ctaText = settings?.ctaText || "Learn more about the International Society.";
  const ctaLink = settings?.ctaLink || "https://dohadsoc.org/";

  return (
    <section className="w-full py-8 md:py-10 xl:py-20 2xl:py-28 bg-background" id="learn-dohad">
      <div className="w-full">
        <div className={
          showCard 
            ? "grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] 2xl:grid-cols-[360px_1fr] gap-4 md:gap-6 lg:gap-8 xl:gap-16 2xl:gap-20 items-center"
            : "max-w-4xl mx-auto px-8 sm:px-0 text-left space-y-4"
        }>

          {/* Left Column: Dr. David Barker Photo */}
          {showCard && (
            <div className="relative group w-full mx-auto sm:mx-0 sm:max-w-[200px] xl:max-w-[280px] 2xl:max-w-[340px]">
              <div className="relative aspect-[4/5] w-full rounded-none sm:rounded-3xl overflow-hidden shadow-none sm:shadow-2xl">
                <Image
                  src={cardImage}
                  alt={cardName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 px-5 pb-5 pt-12 sm:bottom-4 sm:inset-x-auto sm:left-4 sm:right-4 sm:px-0 sm:pb-0 sm:pt-0">
                  <p className="text-white font-bold text-sm md:text-base 2xl:text-lg leading-tight drop-shadow-md">{cardName}</p>
                  <p className="text-white/90 text-xs sm:text-[10px] 2xl:text-xs mt-0.5 drop-shadow-md">{cardRole}</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl hidden sm:block" />
            </div>
          )}

          {/* Right Column: Content */}
          <div className="space-y-4 px-8 sm:px-0">
            <div className="space-y-1.5">
              <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary-700 dark:text-secondary-300 text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-semibold rounded-full tracking-wide">
                {badge}
              </div>
              <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground leading-tight">
                {title}
              </h2>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground leading-relaxed">
              {contentParagraph1 && <p>{contentParagraph1}</p>}
              {contentParagraph2 && <p>{contentParagraph2}</p>}
            </div>

            <div className="pt-1.5">
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 xl:px-6 xl:py-3 2xl:px-8 2xl:py-4 bg-secondary/10 text-secondary hover:bg-secondary hover:text-white font-bold rounded-full transition-all text-xs sm:text-sm xl:text-base 2xl:text-lg group"
              >
                {ctaText}
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
