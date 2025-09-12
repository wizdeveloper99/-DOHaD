"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface MembershipCategory {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
}

interface MembershipCardsProps {
  categories: MembershipCategory[]
}

export function MembershipCards({ categories }: MembershipCardsProps) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
        Membership Tiers and Fees
      </h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-card border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition ${
              category.popular ? "border-primary/20 ring-2 ring-primary/20" : ""
            }`}
          >
            {category.popular && (
              <div className="mb-4">
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <h4 className="text-xl font-semibold text-foreground mb-2">{category.title}</h4>
            <p className="text-3xl font-bold text-primary mb-2">{category.price}</p>
            <p className="text-muted-foreground mb-4">{category.period}</p>
            <p className="text-sm text-muted-foreground mb-6">{category.description}</p>
            <ul className="text-left text-sm space-y-2 mb-6">
              {category.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-muted-foreground mb-4">
          A portion of membership fees supports regional initiatives in India. To join, visit the International DOHaD Society website and select DOHaD India as your regional society.
        </p>
      </div>
    </div>
  )
}
