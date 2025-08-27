"use client"

import Image from "next/image"

const FinanceSection = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Heading + Description */}
        <div className="md:col-span-2 text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Communication & Outreach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We actively disseminate knowledge and raise awareness about DOHaD
            research through various communication channels.
          </p>
        </div>

        {/* Block 1 */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold text-foreground leading-tight">
            Webinars & Events
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Regular webinars featuring renowned Indian and international experts share emerging insights from DOHaD research, exploring critical topics, innovative methodologies, and practical applications to foster collaboration, enhance understanding, and empower researchers, clinicians, and students in advancing the science of developmental origins of health and disease.

          </p>
          
          <a
  href="#"
  className="border border-primary text-primary text-sm md:text-base px-5 py-2 rounded-full font-medium hover:bg-primary/10 transition-all duration-200 inline-flex items-center gap-2"
>
   View Upcoming Events →
</a>

        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
          <Image
            src="/14534.jpg"
            alt="Webinars & Events"
            fill
            className="object-cover"
          />
        </div>

        {/* Block 2 */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow order-2 md:order-1">
          <Image
            src="/2150461353.jpg"
            alt="Quarterly Newsletter"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start space-y-4 order-1 md:order-2">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold text-foreground leading-tight">
            Quarterly Newsletter
          </h3>
        
<p className="text-muted-foreground text-sm md:text-base">
Stay updated with carefully curated insights on recent publications, significant events, funding opportunities, and valuable member contributions, keeping you informed, engaged, and connected with the dynamic DOHaD community while fostering collaboration and awareness of the latest advancements in the field.
</p>
         <a
  href="#"
  className="border border-primary text-primary text-sm md:text-base px-5 py-2 rounded-full font-medium hover:bg-primary/10 transition-all duration-200 inline-flex items-center gap-2"
>
  Subscribe Now →
</a>


        </div>
      </div>
    </section>
  )
}

export default FinanceSection
