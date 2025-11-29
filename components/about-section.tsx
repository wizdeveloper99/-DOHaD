"use client";
import React from "react";
import Image from "next/image";
import { Users, Globe, Activity, BookOpen, Network, Lightbulb, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full pt-12 md:pt-20  bg-background">
      <div className="container mx-auto px-4 md:px-0">
        {/* Top Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column: Who We Are */}
            
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-full tracking-wide">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              DOHaD India Regional Society
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a premier scientific society dedicated to understanding how early-life environment interacts with genetics to shape lifelong health. By bringing together researchers, clinicians, and policymakers, we aim to transform healthcare paradigms through the Developmental Origins of Health and Disease (DOHaD) approach.
            </p>
            
            <ul className="space-y-4">
              {[
                "Promote collaborative research across disciplines",
                "Disseminate scientific knowledge to stakeholders",
                "Advocate for evidence-based health policies",
                "Foster capacity building for young researchers"
              ].map((aim, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{aim}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Stats & Map */}
          <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group">
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
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">150+</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Active Members</div>
                </div>
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">25,000+</div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Visitors</div>
                </div>
                <div className="sm:col-span-2 bg-secondary/95 backdrop-blur-md p-5 rounded-2xl shadow-lg text-white border border-white/10 hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/20 rounded-xl shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold leading-none mb-1">National Network</div>
                      <p className="text-secondary-100 text-sm leading-snug font-medium">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Advance Collaborative Research",
              desc: "Facilitating multi-disciplinary studies to uncover developmental origins of disease and develop preventive strategies.",
              icon: <Network className="w-6 h-6" />
            },
            {
              title: "Knowledge Dissemination",
              desc: "Sharing cutting-edge findings through annual conferences, workshops, and high-impact publications.",
              icon: <BookOpen className="w-6 h-6" />
            },
            {
              title: "Capacity Building",
              desc: "Training the next generation of scientists with specialized workshops, mentorship programs, and grants.",
              icon: <Lightbulb className="w-6 h-6" />
            }
          ].map((card, index) => (
            <div key={index} className="group p-8 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-secondary transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {card.desc}
              </p>
              {/* <div className="flex items-center text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
