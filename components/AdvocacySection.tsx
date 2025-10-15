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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="rounded-full px-8 py-12 flex flex-col items-center justify-center text-center shadow-sm
                        bg-gray-300 text-slate-900
                        dark:bg-slate-800 dark:text-slate-100">
          <h3 className="text-xl font-semibold mb-3">
            Policy & Practice
          </h3>
          <p className="text-sm">
            Translating evidence into clinical guidelines, policies and programs
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-full px-8 py-12 flex flex-col items-center justify-center text-center shadow-sm
                        bg-[#006d68] text-white
                        dark:bg-indigo-600 dark:text-white">
          <h3 className="text-xl font-semibold mb-3">
            Government Partnerships
          </h3>
          <p className="text-sm opacity-90">
            Collaborating with central and state governments to promote adolescent health, maternal-child health, and NCD policies and programs
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-full px-8 py-12 flex flex-col items-center justify-center text-center shadow-sm
                        bg-[#d4e2cc] text-slate-900
                        dark:bg-teal-700 dark:text-white">
          <h3 className="text-xl font-semibold mb-3">
            Global Representation
          </h3>
          <p className="text-sm">
            Representing India's voice in global DOHaD policy dialogues and initiatives
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-full px-8 py-12 flex flex-col items-center justify-center text-center shadow-sm
                        bg-[#e6f7f6] text-slate-900
                        dark:bg-slate-700 dark:text-white">
          <h3 className="text-xl font-semibold mb-3">
            Public Awareness
          </h3>
          <p className="text-sm">
            Raising awareness about early-life environments and their impact on health
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdvocacySection
