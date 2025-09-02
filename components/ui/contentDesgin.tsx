import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from './button'

const ContentDesign = () => {
  return (
    <section className="relative w-full min-h-[400px] h-[50vh] md:h-[60vh] flex items-end md:items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Untitled design(2).png" // change t
          alt="Background Shape"
          fill
          className="object-cover object-top md:object-fill" 
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pb-8 md:pb-0 mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Building a Healthier Future, Together
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4 md:mb-5">
          Join DOHaD India to improve lifelong health from the start of life
        </p>
        <Link href="/join-us" passHref>
          <Button
            className="px-6 md:px-8 py-2.5 md:py-3 bg-secondary text-secondary-foreground text-sm md:text-base font-medium rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 ring-4 ring-offset-0 ring-primary/10"
            size="lg"
          >
            Become a Member Today
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default ContentDesign