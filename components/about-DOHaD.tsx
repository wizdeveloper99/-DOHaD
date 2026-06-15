"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ settings }: { settings?: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const headline = settings?.headline || "Advancing Health by Understanding the Earliest Stages of Life";
  const subheadline = settings?.subheadline || "The DOHaD India Regional Society brings together researchers, clinicians, and policymakers to study how early-life environments shape lifelong health—and to translate this evidence into action across India.";
  const ctaText = settings?.ctaText || "Become a Member";
  const ctaLink = settings?.ctaLink || "/join-us";

  return (
    <section className="w-full px-4 pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-10 lg:pt-6 lg:pb-10 xl:pt-16 xl:pb-20 2xl:pt-28 2xl:pb-28 relative overflow-hidden flex items-center bg-background" aria-label="DOHaD India Hero">
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-16 2xl:gap-24 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
              <div className="w-full space-y-3 sm:space-y-4 xl:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight tracking-tighter text-foreground">
                  {headline}
                </h1>
                <p className="text-xs sm:text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground leading-relaxed max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0">
                  {subheadline}
                </p>
                
                <div className="flex flex-col md:flex-row md:flex-nowrap w-full gap-3 sm:gap-4 md:w-auto md:items-center xl:gap-6 2xl:gap-8 pt-1 sm:pt-2 xl:pt-4 2xl:pt-6">
                  <Link 
                     href={ctaLink}
                     className="w-full md:w-auto shrink-0 px-4 py-2.5 sm:px-5 sm:py-2.5 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-secondary text-white hover:bg-secondary/90 font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center text-xs sm:text-sm xl:text-base 2xl:text-lg whitespace-nowrap"
                     aria-label={ctaText}
                  >
                    {ctaText}
                  </Link>
                  <a 
                    href="#learn-section"
                    className="w-full md:w-auto shrink-0 px-4 py-2.5 sm:px-5 sm:py-2.5 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-white dark:bg-gray-900 border-2 border-secondary text-secondary hover:bg-secondary/5 font-bold rounded-full transition-all hover:scale-105 flex items-center justify-center text-xs sm:text-sm xl:text-base 2xl:text-lg whitespace-nowrap"
                    aria-label="Learn more about DOHaD"
                  >
                    Learn About DOHaD
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Video Thumbnail / Player */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-2xl shadow-2xl rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
                {isPlaying ? (
                  <iframe
                    src="https://www.youtube.com/embed/ZCvb8hPb8wM?autoplay=1&rel=0"
                    title="DOHaD Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-2xl"
                  />
                ) : (
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="relative block w-full h-full"
                    aria-label="Play introduction video inline"
                  >
                    <Image
                      src="/video-thumbnail.jpg"
                      alt="DOHaD Introduction Video Thumbnail"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-6 rounded-full text-secondary group-hover:scale-110 transition-all duration-300 shadow-2xl"
                        aria-hidden="true"
                      >
                        <Play size={36} className="ml-1 fill-current" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
              
              {/* Description and YouTube Link */}
              <a 
                href="https://www.youtube.com/watch?v=ZCvb8hPb8wM&t=1s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 xl:mt-4 2xl:mt-6 text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground hover:text-secondary hover:underline font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-colors cursor-pointer group/link whitespace-nowrap"
                aria-label="Watch a 2-minute introduction to DOHaD on YouTube (opens in new tab)"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse shrink-0" />
                <span className="whitespace-nowrap">Watch a 2-minute introduction to DOHaD</span>
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0 opacity-60 group-hover/link:opacity-100 transition-opacity ml-0.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline strokeLinecap="round" strokeLinejoin="round" points="15 3 21 3 21 9" />
                  <line strokeLinecap="round" strokeLinejoin="round" x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="sr-only">(opens in new tab)</span>
              </a>
              
              {/* Browser fallback text */}
              <div className="sr-only">
                If the video player does not load, please visit our YouTube channel to watch the introduction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
