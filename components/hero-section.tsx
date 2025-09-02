import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { DashboardPreview } from "./dashboard-preview"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <>
      <section
        className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-visible py-0 px-4
           w-full h-[500px] md:w-[1380px] md:h-[600px] lg:h-[810px] md:px-0 "
      >
        {/* Background Image */}
       <div className="absolute inset-0 z-0">
  {/* Desktop Background Image */}
  <Image
    src="freepik_assistant_1756798058367(1).png"
    alt="Family enjoying time together"
    fill
    className="hidden md:block object-cover scale-100 md:scale-90"
    priority
  />

  {/* Mobile Background Image */}
  <Image
    src="freepik__background__54517.png"
    alt="Family enjoying time together"
    fill
    className="block md:hidden object-cover scale-100"
    priority
  />

  {/* Top/Bottom fade to white */}
  {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" /> */}

</div>


        {/* Header positioned at top of hero container */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Header />
        </div>

        {/* Hero text */}
        <div
          className="relative z-50 space-y-4 md:space-y-5 lg:space-y-6 mb-2 
            max-w-sm md:max-w-[700px] lg:max-w-[800px] 
            mt-28 md:mt-[120px] lg:mt-[180px] 
            px-4 md:px-6 text-center mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            A Healthy Start, A Productive Life
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            The DOHaD India Regional Society advances science and policy to
            improve the health of the Indian population from the earliest stages
            of life
          </p>
        </div>

        {/* Buttons moved just below the hero text */}
        <div className="relative z-50 flex flex-row justify-center items-center gap-3 sm:gap-5 mt-4 w-full px-8 max-w-screen-md mx-auto">
          {/* Primary Green Button */}
          <Link href="/join-us" target="_self" rel="noopener noreferrer" className="flex-1">
            <Button variant="primary" size="fullWidth" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" > 
              Join the Waitlist
            </Button>
          </Link>

          {/* White Button with Green Border */}
        <Link
  href="https://www.youtube.com/watch?v=ZCvb8hPb8wM"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1"
>
  <Button
    variant="secondary"
    size="fullWidth"
    className="border-foreground text-foreground hover:bg-muted hover:text-foreground bg-foreground/5"
  >
    Watch Video
  </Button>
</Link>

        </div>




        {/* Dashboard Preview overlay */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[60%] z-20 w-[calc(100%-32px)] md:w-[1060px]">
          <DashboardPreview />
        </div>
      </section>

      {/* Mobile-only preview below hero */}
      <div className="block md:hidden w-[calc(100%-32px)] mx-auto -mt-14">
        <DashboardPreview />
      </div>
    </>
  )
}
