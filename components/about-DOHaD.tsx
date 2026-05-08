"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ settings }: { settings?: any }) {
  const headline = settings?.headline || "Advancing Health by Understanding the Earliest Stages of Life";
  const subheadline = settings?.subheadline || "The DOHaD India Regional Society brings together researchers, clinicians, and policymakers to study how early-life environments shape lifelong health—and to translate this evidence into action across India.";
  const ctaText = settings?.ctaText || "Become a Member";
  const ctaLink = settings?.ctaLink || "/join-us";

  return (
    <section className="w-full px-4 py-16 md:px-0 md:py-28 relative overflow-hidden flex items-center bg-background" aria-label="DOHaD India Hero">
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center items-start space-y-8 text-left">
              <div className="w-full space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-foreground">
                  {headline}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  {subheadline}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link 
                    href={ctaLink}
                    className="px-8 py-4 bg-secondary text-white hover:bg-secondary/90 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center min-w-[200px] text-base"
                    aria-label={ctaText}
                  >
                    {ctaText}
                  </Link>
                  <a 
                    href="#learn-section"
                    className="px-8 py-4 bg-white dark:bg-gray-900 border-2 border-secondary text-secondary hover:bg-secondary/5 font-bold rounded-full transition-all hover:scale-105 inline-flex items-center justify-center min-w-[200px] text-base"
                    aria-label="Learn more about DOHaD"
                  >
                    Learn About DOHaD
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Video Thumbnail */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-2xl shadow-2xl rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
                <a 
                  href="https://www.youtube.com/watch?v=ZCvb8hPb8wM&t=1s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-full h-full"
                  aria-label="Watch introduction video about DOHaD"
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
                </a>
              </div>
              <p className="mt-4 text-base text-muted-foreground font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Watch a 2-minute introduction to DOHaD
              </p>
              
              {/* Browser fallback text (visually hidden but accessible if needed, though anchor handles it) */}
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
