import React from "react"

export const AboutDOHaD = () => {
  return (
    <section id="about" className="relative bg-background pt-12 pb-7 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Left Box - Content */}
        <div className="relative rounded-2xl p-8 md:p-12 flex flex-col justify-center text-center md:text-left border border-border shadow-sm overflow-hidden">
          {/* Soft background accent */}
          <div className="absolute inset-0 bg-primary/5 dark:bg-muted/10 rounded-2xl" />
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
        </div>

        {/* Right Box - Portrait with World Map Background */}
        <div className="relative  overflow-hidden flex items-center justify-center  ">
          {/* Background SVG (transparent version) */}
          <img
            src="/1019996_OJO4YQ1.svg"
            alt="World Map background"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none dark:invert"
          />

          {/* Foreground Portrait */}
          <img
            src="/portrait-indian-pregnant-woman.png"
            alt="DOHaD Research Professional"
            className="relative w-full max-w-sm md:max-w-sm mx-auto object-contain"
          />
        </div>

      </div>
    </section>
  )
}
