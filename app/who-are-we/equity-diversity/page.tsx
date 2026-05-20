import { Header } from "@/components/header"
import { Users, ShieldCheck, Download, ExternalLink, ArrowRight, Scale, GraduationCap } from "lucide-react"
import Link from "next/link"
import dbConnect from "@/lib/mongodb"
import SiteSettings from "@/lib/models/SiteSettings"

export default async function EquityDiversityPage() {
  await dbConnect();
  const settings = await SiteSettings.findOne({});

  const policies = [
    {
      title: "EDI Policy",
      description: "Our Equity, Diversity, and Inclusion framework guarantees equal opportunities, ensures gender balance, and cultivates a welcoming, collaborative environment for all members.",
      link: settings?.policies?.edi || "/policies/EDI.docx",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      title: "Safeguarding Policy",
      description: "Comprehensive guidelines, procedures, and reporting systems to ensure the safety, protection, and overall well-being of all individuals participating in DOHaD India events and activities.",
      link: settings?.policies?.safeguarding || "/policies/Safeguarding%20Policy.docx",
      icon: ShieldCheck,
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden flex flex-col items-center text-center px-6">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-muted/50 border border-border backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-muted-foreground">Equity &amp; Diversity</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
            Fostering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Inclusivity &amp; Safety</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            DOHaD India is committed to establishing an equitable, diverse, and secure scientific community. We actively support researchers and clinicians from all walks of life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Context Section (Left Column) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Our Core Commitments</h2>
              <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                At the DOHaD India Regional Society, we firmly believe that diversity accelerates scientific discovery. By bringing together professionals with varying backgrounds, regions, and experiences, we cultivate a richer environment for research and action in the developmental origins of health and disease.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach to equity and safety is active, not passive. We hold our leadership, staff, and general members to the highest standards of mutual respect and institutional accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group p-6 bg-card border border-border rounded-2xl flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-105 bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  <Scale className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">Gender &amp; Regional Parity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We actively promote balanced representation in our leadership councils, panels, and expert advisory boards to elevate all voices.
                </p>
              </div>

              <div className="group p-6 bg-card border border-border rounded-2xl flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 group-hover:scale-105 bg-rose-500/10 text-rose-500 border border-rose-500/20">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">Early-Career Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Providing equitable resources, workshops, and travel fellowships specifically designed to uplift young researchers and scientists.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Downloads Section (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-muted/30 border border-border rounded-3xl">
              <h2 className="text-xl font-bold mb-2 tracking-tight">Official Policies</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Download or view our detailed institutional guidelines on equity and safeguarding.
              </p>

              <div className="space-y-6">
                {policies.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={idx}
                      className="group relative bg-card border border-border rounded-2xl p-5 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                        
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-5 pt-4 border-t border-border">
                        <a
                          href={item.link}
                          download
                          title={`Download ${item.title}`}
                          aria-label={`Download ${item.title}`}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-muted hover:bg-primary text-foreground hover:text-white dark:hover:bg-primary font-medium rounded-lg transition-all duration-200 text-sm border border-border hover:border-transparent"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download Document</span>
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Contact Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Safeguarding Concerns?
            </h3>
            <p className="text-white/95 text-sm sm:text-base leading-relaxed">
              If you wish to report a violation, seek clarification on our code, or share feedback regarding inclusion at our events, please contact our confidential committee.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link 
              href="/contact"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-md text-base"
            >
              <span>Contact Safeguarding</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
