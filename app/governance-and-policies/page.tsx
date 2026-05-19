"use client"

import { FileText, Download, ShieldCheck, Scale, FileCheck, Landmark, Users, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const policies = [
  {
    id: "governance",
    category: "Governance",
    description: "Frameworks and structures defining the operational guidelines of the society.",
    items: [
      {
        title: "Constitution",
        description: "The foundational rules and principles governing DOHaD India, detailing our core mission, structure, and operational directives.",
        link: "/policies/Constitution.docx",
        icon: Landmark,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
      },
      {
        title: "Governance",
        description: "Detailed structural and operational governance guidelines ensuring transparency and accountability across the society.",
        link: "/policies/Governance.docx",
        icon: Scale,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
      },
    ],
  },
  {
    id: "ethics",
    category: "Ethics & Conduct",
    description: "Standards and expectations for professional behavior.",
    items: [
      {
        title: "Code of Conduct",
        description: "Expected behavior and ethical standards for all members, affiliates, and participants in DOHaD India activities.",
        link: "/policies/Code%20of%20Conduct.docx",
        icon: FileCheck,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
      },
    ],
  },
  {
    id: "inclusion",
    category: "Inclusion & Safety",
    description: "Commitments to equity, diversity, and participant well-being.",
    items: [
      {
        title: "EDI Policy",
        description: "Equity, Diversity, and Inclusion framework ensuring equal opportunities and a welcoming environment for all.",
        link: "/policies/EDI.docx",
        icon: Users,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
      },
      {
        title: "Safeguarding Policy",
        description: "Procedures and guidelines to ensure the safety, protection, and well-being of all individuals involved with the society.",
        link: "/policies/Safeguarding%20Policy.docx",
        icon: ShieldCheck,
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
        borderColor: "border-rose-500/20",
      },
    ],
  },
]

export default function GovernanceAndPoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-60 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-200">Official Documents &amp; Guidelines</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Governance &amp; <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Institutional Policies
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Access DOHaD India’s foundational rules, ethical standards, and safeguarding frameworks. We are committed to transparency and accountability.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
        <div className="space-y-20 md:space-y-32">
          {policies.map((section, idx) => (
            <div key={section.id} className="scroll-mt-32" id={section.id}>
              
              {/* Category Header */}
              <div className="mb-10 md:mb-14">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-8 w-1.5 bg-gradient-to-b from-primary to-secondary rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {section.category}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl pl-5 md:pl-6 border-l border-transparent">
                  {section.description}
                </p>
              </div>
              
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon
                  return (
                    <div 
                      key={itemIdx}
                      className="group relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      {/* Decorative Background gradient */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-current to-transparent opacity-[0.03] dark:opacity-[0.05] rounded-bl-full pointer-events-none ${item.color}`} />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 md:mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                          <Icon className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 md:mb-10 flex-1 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-50 hover:bg-primary text-gray-700 hover:text-white dark:bg-white/5 dark:hover:bg-primary dark:text-gray-300 font-medium rounded-xl transition-all duration-200 text-sm border border-gray-200 dark:border-white/5 hover:border-transparent group/btn"
                          >
                            <span>View Document</span>
                            <ExternalLink className="h-4 w-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                          </a>
                          
                          <a
                            href={item.link}
                            download
                            title={`Download ${item.title}`}
                            aria-label={`Download ${item.title}`}
                            className="w-full sm:w-auto inline-flex items-center justify-center p-3 bg-gray-50 hover:bg-gray-200 text-gray-600 dark:bg-white/5 dark:hover:bg-white/15 dark:text-gray-300 rounded-xl transition-colors border border-gray-200 dark:border-white/5"
                          >
                            <Download className="h-5 w-5" />
                            <span className="sm:hidden ml-2 font-medium text-sm">Download</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact/FAQ Banner */}
        <div className="mt-24 md:mt-32 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 lg:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Clarification?
            </h3>
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              If you have any questions regarding our organizational policies, governance structure, or ethical guidelines, please don't hesitate to reach out to our administration team.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link 
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg text-lg"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
