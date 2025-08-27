"use client"

const AdvocacySection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-5  text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Advocacy & Policy Impact
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        We work with government agencies, NGOs, and civil society to integrate DOHaD-informed strategies into national health programs.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="rounded-2xl bg-muted px-8 py-12 flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Government Partnerships
          </h3>
          <p className="text-sm text-muted-foreground">
            Collaborating with central and state governments on maternal-child health policies
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-foreground px-8 py-12 flex flex-col items-center justify-center text-center text-background shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Global Representation</h3>
          <p className="text-sm">
            Representing India's voice in global DOHaD policy dialogues and initiatives
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-emerald-100 px-8 py-12 flex flex-col items-center justify-center text-center shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Public Awareness
          </h3>
          <p className="text-sm text-muted-foreground">
            Raising awareness about early-life environments and their impact on health
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdvocacySection
