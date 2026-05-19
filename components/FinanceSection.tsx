"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Banknote, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  CircleDollarSign,
  HandCoins
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Financial Transparency",
    description: "Real-time tracking of all society funds and research grants with full audit trails.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Grant Management",
    description: "Streamlined process for applying, tracking, and reporting on DOHaD research grants.",
    icon: Banknote,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Budget Analytics",
    description: "Visual insights into resource allocation across different regional projects.",
    icon: PieChart,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "Growth Tracking",
    description: "Monitor the financial sustainability and growth of the DOHaD India network.",
    icon: TrendingUp,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
]

export default function FinanceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-8 md:py-10 xl:py-20 2xl:py-28 relative overflow-hidden bg-background">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-6 md:gap-8 xl:gap-12 w-full">
          {/* Content Side: Split Left and Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 xl:gap-12 w-full">
            <div className="space-y-4 xl:space-y-6 text-left max-w-3xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-semibold text-[10px] sm:text-xs xl:text-sm tracking-wide">
                  <CircleDollarSign className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span>Financial Stewardship</span>
                </div>
              </div>
              
              <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Ensuring Integrity in <span className="text-secondary">Research Funding</span>
              </h2>
              
              <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg text-muted-foreground leading-relaxed">
                DOHaD India maintains the highest standards of financial accountability. We manage resources dedicated to advancing developmental origins research with complete transparency and strategic focus.
              </p>

              <div className="space-y-3 xl:space-y-5 pt-2">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 bg-secondary/10 p-1.5 xl:p-2.5 rounded-lg shrink-0">
                    <HandCoins className="w-4 h-4 xl:w-5 xl:h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm xl:text-base 2xl:text-lg text-foreground">Member-Supported Initiative</h4>
                    <p className="text-[10px] sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground leading-normal">Our activities are sustained through member contributions and institutional grants.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pb-2 shrink-0">
              <Button className="rounded-full px-5 py-2.5 sm:px-6 sm:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 h-auto text-xs sm:text-sm xl:text-base 2xl:text-lg bg-secondary text-white hover:bg-secondary/90 font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 gap-2 group whitespace-nowrap">
                View Financial Reports
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Grid Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 2xl:gap-8 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full flex w-full"
              >
                <Card className={cn(
                  "w-full h-full border-border transition-all duration-300 group flex flex-col justify-between",
                  hoveredIndex === idx ? "shadow-xl -translate-y-2 border-secondary/20 bg-card" : "shadow-sm bg-card"
                )}>
                  <CardContent className="p-4 sm:p-5 xl:p-8 2xl:p-10 flex flex-col justify-between h-full flex-grow gap-3 xl:gap-4">
                    <div className="space-y-3 xl:space-y-4">
                      <div className={cn(
                        "w-10 h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16 rounded-xl xl:rounded-2xl flex items-center justify-center transition-transform duration-500",
                        feature.bg,
                        hoveredIndex === idx ? "scale-110 rotate-3" : ""
                      )}>
                        <feature.icon className={cn("w-5 h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8", feature.color)} />
                      </div>
                      <h3 className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-bold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-[11px] sm:text-xs xl:text-sm 2xl:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="pt-2 flex items-center text-secondary text-[11px] sm:text-xs xl:text-sm 2xl:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ChevronRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
