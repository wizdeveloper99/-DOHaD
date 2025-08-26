"use client"

const AdvocacySection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading + CTA */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug max-w-2xl mb-2">
            Advocacy & Policy Impact
            Partnering with governments, NGOs, and communities to advance DOHaD strategies in health programs.
          </h2>
        </div>
        <div className="mt-6 md:mt-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-foreground px-6 py-3 rounded-full text-foreground hover:bg-foreground hover:text-background transition"
          >
            Partner With Us →
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Card 1 */}
        <div className="rounded-2xl bg-muted px-8 py-12 flex flex-col items-center justify-center shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Government Partnerships
          </h3>
          <p className="text-sm text-muted-foreground">
            Collaborating with central and state governments on maternal-child health policies
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-foreground px-8 py-12 flex flex-col items-center justify-center text-background shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Global Representation</h3>
          <p className="text-sm">
            Representing India's voice in global DOHaD policy dialogues and initiatives
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-emerald-100 px-8 py-12 flex flex-col items-center justify-center shadow-sm">
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
