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
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Side */}
          <div className="flex-1 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm">
              <CircleDollarSign className="w-4 h-4" />
              <span>Financial Stewardship</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
              Ensuring Integrity in <span className="text-secondary">Research Funding</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              DOHaD India maintains the highest standards of financial accountability. We manage resources dedicated to advancing developmental origins research with complete transparency and strategic focus.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-secondary/10 p-2 rounded-lg">
                  <HandCoins className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Member-Supported Initiative</h4>
                  <p className="text-sm text-muted-foreground">Our activities are sustained through member contributions and institutional grants.</p>
                </div>
              </div>
            </div>

            <Button className="rounded-full px-8 py-6 h-auto text-base gap-2 group">
              View Financial Reports
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Grid Side */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className={cn(
                  "h-full border-border transition-all duration-300",
                  hoveredIndex === idx ? "shadow-xl -translate-y-2 border-secondary/20" : "shadow-sm"
                )}>
                  <CardContent className="p-8 space-y-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500",
                      feature.bg,
                      hoveredIndex === idx ? "scale-110 rotate-3" : ""
                    )}>
                      <feature.icon className={cn("w-6 h-6", feature.color)} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="pt-2 flex items-center text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
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
