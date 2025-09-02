"use client"
import React from "react"

export const AboutDOHaD = () => {
  return (
    <section id="about" className="relative bg-background pt-12 pb-7 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 md:px-6">
        {/* Left Box - Content with Subtle Hover Effects */}
        <div className="group relative rounded-2xl p-8 md:p-12 flex flex-col justify-center text-center md:text-left border border-border shadow-sm overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-xl">
          
          {/* Base background */}
          <div className="absolute inset-0 bg-primary/5 dark:bg-muted/10 rounded-2xl transition-all duration-500 group-hover:bg-muted/20" />
          
          {/* Subtle border enhancement */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-2xl border-2 border-foreground/20" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 transform transition-all duration-400 group-hover:translate-y-[-1px]">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 transition-all duration-400 group-hover:opacity-90">
              What is DOHaD?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 transition-all duration-400 group-hover:text-foreground/80">
              The Developmental Origins of Health and Disease (DOHaD) paradigm recognizes that environmental
              influences during critical periods of development — from preconception through early childhood —
              can have lasting effects on health throughout life.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed transition-all duration-400 group-hover:text-foreground/80">
              This groundbreaking field of research demonstrates how early life experiences shape long-term
              health outcomes, making it crucial for understanding and preventing chronic diseases in Indian populations.
            </p>
          </div>
        </div>

        {/* Right Box - Portrait with Subtle Effects */}
        <div className="group relative overflow-hidden flex items-center justify-center rounded-2xl transition-all duration-500 hover:scale-[1.01]">
          
          {/* Background SVG with subtle effects */}
          <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105">
            <img
              src="/1019996_OJO4YQ1.svg"
              alt="World Map background"
              className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none dark:invert transition-all duration-500 group-hover:opacity-35"
            />
          </div>
          
          {/* Foreground Portrait */}
          <div className="relative transform transition-all duration-500 group-hover:scale-102 group-hover:-translate-y-1">
            <img
              src="/portrait-indian-pregnant-woman.png"
              alt="DOHaD Research Professional"
              className="relative w-full max-w-sm md:max-w-sm mx-auto object-contain transition-all duration-500 group-hover:drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .group:hover .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </section>
  )
}