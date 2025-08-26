import React from 'react'

export const AboutDOHaD = () => {
  return (
    <section id="about" className="relative bg-white py-12 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        
        {/* Left Box - Content */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            What is DOHaD?
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            The Developmental Origins of Health and Disease (DOHaD) paradigm recognizes that environmental 
            influences during critical periods of development — from preconception through early childhood — 
            can have lasting effects on health throughout life.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            This groundbreaking field of research demonstrates how early life experiences shape long-term 
            health outcomes, making it crucial for understanding and preventing chronic diseases in Indian populations.
          </p>
        </div>

        {/* Right Box - Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/12200.jpg"
            alt="DOHaD Research Professional"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
