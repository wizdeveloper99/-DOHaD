"use client"

import Image from "next/image"

const FinanceSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
      
      {/* Heading + Description */}
      <div className="md:col-span-2 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Communication & Outreach
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We actively disseminate knowledge and raise awareness about DOHaD research through various communication channels.
        </p>
      </div>

      {/* Block 1 */}
      <div className="flex flex-col items-start justify-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
          Webinars & Events
        </h3>
        <p className="text-muted-foreground">
          Regular webinars featuring Indian and international experts sharing emerging insights from DOHaD research.
        </p>
        <a
          href="#"
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          View Upcoming Events →
        </a>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/2151663964.jpg" // keep your existing image
          alt="Webinars & Events"
          fill
          className="object-cover"
        />
      </div>

      {/* Block 2 */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md order-2 md:order-1">
        <Image
         src="/2151663964.jpg"// keep your existing image
          alt="Quarterly Newsletter"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center space-y-6 order-1 md:order-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
          Quarterly Newsletter
        </h3>
        <p className="text-muted-foreground">
          Stay updated with recent publications, events, funding opportunities, and member contributions.
        </p>
        <a
          href="#"
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          Subscribe Now →
        </a>
      </div>
    </section>
  )
}

export default FinanceSection
