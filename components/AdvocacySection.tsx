"use client"

const AdvocacySection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8 md:py-10 xl:py-20 2xl:py-28 text-center bg-background">
      {/* Heading */}
      <div className="text-center mb-4 md:mb-5 xl:mb-6 [@media(min-height:768px)]:mb-12 [@media(min-height:850px)]:2xl:mb-20">
        <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground mb-1 xl:mb-2 [@media(min-height:768px)]:mb-4 [@media(min-height:850px)]:mb-6">
          National Impact through Engagement
        </h2>
        <p className="text-[10px] sm:text-xs xl:text-sm [@media(min-height:768px)]:xl:text-lg [@media(min-height:850px)]:2xl:text-xl text-muted-foreground max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
          We bridge the gap between scientific discovery and public health action, collaborating with stakeholders across India to ensure early-life health is a national priority.
        </p>
      </div>

      {/* Policy Cards - 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 xl:gap-8 2xl:gap-10">

        {/* Card 1: Policy & Practice */}
        <div className="rounded-3xl px-4 py-5 sm:px-5 sm:py-6 xl:px-8 xl:py-10 2xl:px-10 2xl:py-12 flex flex-col text-left shadow-md hover:shadow-lg transition-shadow
                        bg-gradient-to-br from-gray-200 to-gray-300 text-slate-900
                        dark:from-slate-800 dark:to-slate-900 dark:text-slate-100">
          <h3 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold mb-2 xl:mb-4 2xl:mb-6">
            Policy & Practice
          </h3>
          <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
            Translating evidence into clinical guidelines, policies and programs that make a real-world impact on maternal and child health outcomes.
          </p>
        </div>

        {/* Card 2: Government Partnerships */}
        <div className="rounded-3xl px-4 py-5 sm:px-5 sm:py-6 xl:px-8 xl:py-10 2xl:px-10 2xl:py-12 flex flex-col text-left shadow-md hover:shadow-lg transition-shadow
                        bg-gradient-to-br from-[#006d68] to-[#004d4a] text-white
                        dark:from-indigo-600 dark:to-indigo-800 dark:text-white">
          <h3 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold mb-2 xl:mb-4 2xl:mb-6">
            Government Partnerships
          </h3>
          <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed opacity-95">
            Collaborating with central and state governments to promote adolescent health, maternal-child health, and NCD prevention policies and programs.
          </p>
        </div>

        {/* Card 3: Global Representation */}
        <div className="rounded-3xl px-4 py-5 sm:px-5 sm:py-6 xl:px-8 xl:py-10 2xl:px-10 2xl:py-12 flex flex-col text-left shadow-md hover:shadow-lg transition-shadow
                        bg-gradient-to-br from-[#d4e2cc] to-[#c0d4b5] text-slate-900
                        dark:from-teal-700 dark:to-teal-900 dark:text-white">
          <h3 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold mb-2 xl:mb-4 2xl:mb-6">
            Global Representation
          </h3>
          <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
            Representing India's voice in global DOHaD policy dialogues and initiatives, bringing local insights to international platforms.
          </p>
        </div>

        {/* Card 4: Public Awareness */}
        <div className="rounded-3xl px-4 py-5 sm:px-5 sm:py-6 xl:px-8 xl:py-10 2xl:px-10 2xl:py-12 flex flex-col text-left shadow-md hover:shadow-lg transition-shadow
                        bg-gradient-to-br from-[#e6f7f6] to-[#d0ebe9] text-slate-900
                        dark:from-slate-700 dark:to-slate-800 dark:text-white">
          <h3 className="text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-bold mb-2 xl:mb-4 2xl:mb-6">
            Public Awareness
          </h3>
          <p className="text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
            Raising awareness about how early-life environments shape lifelong health, empowering communities with evidence-based knowledge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdvocacySection
