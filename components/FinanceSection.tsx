"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const FinanceSection = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Heading + Description */}
        <div className="md:col-span-2 text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Communication & Outreach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We actively disseminate knowledge and raise awareness about DOHaD
            research through various communication channels.
          </p>
        </div>

        {/* Block 1 */}
        <div className="relative aspect-[4/3] rounded-2xl 
                        bg-[#e9f2f8] dark:bg-[#1e293b] 
                        p-6 flex flex-col justify-center space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Webinars & Events
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Regular webinars featuring renowned Indian and international experts
            share emerging insights from DOHaD research, exploring critical topics,
            innovative methodologies, and practical applications to foster
            collaboration and empower researchers, clinicians, and students.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       text-[#1e3a5f] bg-[#c9dbe7] hover:bg-[#b5cedf] 
                       dark:text-[#cbd5e1] dark:bg-[#334155] dark:hover:bg-[#475569]
                       transition-all duration-200 w-fit"
          >
            View Events <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/14534.jpg"
            alt="Webinars & Events"
            fill
            className="object-cover"
          />
        </div>

        {/* Block 2 */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 md:order-1">
          <Image
            src="/2150461353.jpg"
            alt="Quarterly Newsletter"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] rounded-2xl 
                        bg-[#fdecef] dark:bg-[#2f2433] 
                        p-6 flex flex-col justify-center space-y-4 order-1 md:order-2">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Quarterly Newsletter
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Stay updated with carefully curated insights on recent publications,
            significant events, funding opportunities, and valuable member contributions,
            keeping you engaged and connected with the DOHaD community.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       text-[#6d2a36] bg-[#e6cfd4] hover:bg-[#d8b8bf] 
                       dark:text-[#f1f5f9] dark:bg-[#4a3542] dark:hover:bg-[#5c4452]
                       transition-all duration-200 w-fit"
          >
            Subscribe <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinanceSection
