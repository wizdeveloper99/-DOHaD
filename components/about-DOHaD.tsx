"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutDOHaD() {
  return (
    <section className="w-full px-4 py-12 md:px-0 md:py-24 relative overflow-hidden flex items-center bg-background" aria-label="Introduction to DOHaD India">
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center items-start space-y-8 text-left">
              {/* Heading */}
              <div className="w-full space-y-6">
                <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-full tracking-wide">
                  What is DOHaD?
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-gray-100">
                  Advancing Health by Understanding the Earliest Stages of Life
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed max-w-xl">
                  The DOHaD India Regional Society brings together researchers, clinicians, and policymakers to study how early-life environments shape lifelong health—and to translate this evidence into action across India.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link 
                    href="/join-us"
                    className="px-8 py-3.5 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center min-w-[180px]"
                    aria-label="Become a Member of DOHaD India"
                  >
                    Become a Member
                  </Link>
                  <a 
                    href="#about-pillars-section"
                    className="px-8 py-3.5 bg-white dark:bg-gray-800 border-2 border-secondary text-secondary hover:bg-secondary/5 font-semibold rounded-full transition-all inline-flex items-center justify-center min-w-[180px]"
                    aria-label="Learn more about DOHaD"
                  >
                    Learn About DOHaD
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Video Thumbnail Link */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-full sm:max-w-2xl shadow-2xl rounded-2xl overflow-hidden bg-gray-900 aspect-video">
                <a 
                  href="https://www.youtube.com/watch?v=ZCvb8hPb8wM&t=1s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group block w-full h-full"
                  aria-label="Watch introduction video about DOHaD"
                >
                  <Image
                    src="/video-thumbnail.jpg"
                    alt="Illustration representing adolescent and maternal health research in India"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Large Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-full text-secondary-600 dark:text-secondary-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:scale-110 transition-all duration-300 shadow-2xl"
                      aria-hidden="true"
                    >
                      <Play size={32} className="ml-1" />
                    </div>
                  </div>
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                Watch a 2-minute introduction to DOHaD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
