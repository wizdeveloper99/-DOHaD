"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function LearnAboutDOHaD() {
  return (
    <section className="w-full py-16 md:py-24 bg-background" id="learn-dohad">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Dr. David Barker Photo */}
          <div className="relative group">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder-user.jpg" // REPLACE with Dr. David Barker's photo when available
                alt="Prof. David Barker"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">Prof. David Barker</p>
                <p className="text-white/80 text-sm">Pioneer of the DOHaD paradigm</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-full tracking-wide">
                Learn About DOHaD
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                What is DOHaD?
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Developmental Origins of Health and Disease (DOHaD) is a multidisciplinary field that examines how the environment during early development (conception, fetal life, infancy, and early childhood) interacts with genetic and other factors to shape lifelong health and the risk of non-communicable diseases (NCDs) like diabetes, heart disease, and obesity.
              </p>
              <p>
                This paradigm shift moves health focus from adult lifestyle choices alone to the critical importance of early-life environments, providing a powerful framework for preventing chronic diseases across generations.
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://dohadsoc.org/about-dohad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary hover:bg-secondary hover:text-white font-bold rounded-full transition-all group"
              >
                Learn More at the International Society
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
