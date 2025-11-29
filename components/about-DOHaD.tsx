"use client";
import { Play } from "lucide-react";
import Image from "next/image";

export default function AboutDOHaD() {
  return (
    <section className="w-full px-4 py-12 md:px-0 md:py-20 relative overflow-hidden flex items-center bg-background">
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center items-start space-y-6 text-left">
              {/* Heading */}
              <div className="w-full">
                <div className="inline-block px-4 py-2 bg-secondary-100 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 text-sm font-medium rounded-full mb-6">
                  Developmental Origin of Health and Disease
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-gray-100">
                  Advancing Health from the Very Beginning of Life
                </h1>
                <p className="mt-6 text-lg text-muted-foreground dark:text-gray-300 leading-relaxed max-w-xl">
                  The Developmental Origins of Health and Disease (DOHaD) explore how early-life experiences from preconception through childhood, influence long-term health outcomes and disease risk in adulthood.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href="#about-pillars-section"
                    className="px-8 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Video Thumbnail Link */}
            <div className="flex flex-col items-center w-full">
              <div className="relative w-full max-w-full sm:max-w-2xl shadow-2xl rounded-2xl overflow-hidden bg-gray-900">
                <a 
                  href="https://www.youtube.com/watch?v=ZCvb8hPb8wM&t=1s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group aspect-video block w-full h-full"
                >
                  <Image
                    src="/video-thumbnail.jpg"
                    alt="DOHaD Introduction Video Thumbnail"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                  {/* Large Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-full text-secondary-600 dark:text-secondary-400 group-hover:bg-white dark:group-hover:bg-slate-700 group-hover:scale-110 transition-all duration-300 shadow-2xl"
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
