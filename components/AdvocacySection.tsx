"use client"

const AdvocacySection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center bg-background">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Advocacy & Policy
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We aim to work with government agencies, NGOs, and civil society to integrate DOHaD-informed strategies into national health programs.
      </p>

      {/* Policy Cards - 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

        {/* Card 1: Policy & Practice */}
        <div className="rounded-3xl px-6 py-8 flex flex-col text-left shadow-lg hover:shadow-xl transition-shadow
                        bg-gradient-to-br from-gray-200 to-gray-300 text-slate-900
                        dark:from-slate-800 dark:to-slate-900 dark:text-slate-100">
          <h3 className="text-2xl font-bold mb-4">
            Policy & Practice
          </h3>
          <p className="text-base leading-relaxed">
            Translating evidence into clinical guidelines, policies and programs that make a real-world impact on maternal and child health outcomes.
          </p>
        </div>

        {/* Card 2: Government Partnerships */}
        <div className="rounded-3xl px-6 py-8 flex flex-col text-left shadow-lg hover:shadow-xl transition-shadow
                        bg-gradient-to-br from-[#006d68] to-[#004d4a] text-white
                        dark:from-indigo-600 dark:to-indigo-800 dark:text-white">
          <h3 className="text-2xl font-bold mb-4">
            Government Partnerships
          </h3>
          <p className="text-base leading-relaxed opacity-95">
            Collaborating with central and state governments to promote adolescent health, maternal-child health, and NCD prevention policies and programs.
          </p>
        </div>

        {/* Card 3: Global Representation */}
        <div className="rounded-3xl px-6 py-8 flex flex-col text-left shadow-lg hover:shadow-xl transition-shadow
                        bg-gradient-to-br from-[#d4e2cc] to-[#c0d4b5] text-slate-900
                        dark:from-teal-700 dark:to-teal-900 dark:text-white">
          <h3 className="text-2xl font-bold mb-4">
            Global Representation
          </h3>
          <p className="text-base leading-relaxed">
            Representing India's voice in global DOHaD policy dialogues and initiatives, bringing local insights to international platforms.
          </p>
        </div>

        {/* Card 4: Public Awareness */}
        <div className="rounded-3xl px-6 py-8 flex flex-col text-left shadow-lg hover:shadow-xl transition-shadow
                        bg-gradient-to-br from-[#e6f7f6] to-[#d0ebe9] text-slate-900
                        dark:from-slate-700 dark:to-slate-800 dark:text-white">
          <h3 className="text-2xl font-bold mb-4">
            Public Awareness
          </h3>
          <p className="text-base leading-relaxed">
            Raising awareness about how early-life environments shape lifelong health, empowering communities with evidence-based knowledge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdvocacySection
