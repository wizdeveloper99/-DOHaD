import AboutSection from "@/components/about-section"
import { AnimatedSection } from "@/components/animated-section"
import { FAQSection } from "@/components/faq-section"
import CapacityBuilding from "@/components/CapacityBuilding"
import CommunicationOutreach from "@/components/CommunicationOutreach"
import AdvocacySection from "@/components/AdvocacySection"
import { BentoCarousel } from "@/components/four-pillars-section"
import { Header } from "@/components/header"
import Hero from "@/components/about-DOHaD"
import LearnAboutDOHaD from "@/components/learn-dohad"

import dbConnect from "@/lib/mongodb"
import SiteSettings from "@/lib/models/SiteSettings"

async function getSiteSettings() {
  try {
    await dbConnect();
    const settings = await SiteSettings.findOne();
    return JSON.parse(JSON.stringify(settings));
  } catch (error) {
    return null;
  }
}

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <div className="relative z-10">
        <main className="relative z-10">
          <AnimatedSection
            id="hero-section"
            className="relative"
            delay={0.1}
          >
            <Hero settings={settings?.hero} />
          </AnimatedSection>
        </main>

        {/* Learn About DOHaD Section */}
        <AnimatedSection
          id="learn-section"
          className="relative max-w-7xl mx-auto px-0 sm:px-8 md:px-12"
          delay={0.2}
        >
          <LearnAboutDOHaD settings={settings?.learnDohad} />
        </AnimatedSection>

        {/* Main content sections with standardized spacing */}
        <div className="relative">
          {/* About Section (Who We Are) */}
          <AnimatedSection
            id="about-pillars-section"
            className="relative z-10 max-w-7xl mx-auto px-8 md:px-12"
            delay={0.2}
          >
            <AboutSection settings={settings?.about} />
          </AnimatedSection>

          {/* Four Pillars/Bento Section (Research Focus) */}
          <AnimatedSection
            id="features-section"
            className="relative z-10 max-w-7xl mx-auto px-8 md:px-12"
            delay={0.2}
          >
            <BentoCarousel />
          </AnimatedSection>

          {/* Capacity Building Section */}
          <AnimatedSection
            id="capacity-building-section"
            className="relative z-10"
            delay={0.2}
          >
            <CapacityBuilding />
          </AnimatedSection>

          {/* Communication & Outreach Section */}
          <AnimatedSection
            id="communication-section"
            className="relative z-10"
            delay={0.2}
          >
            <CommunicationOutreach />
          </AnimatedSection>

          {/* Advocacy Section */}
          <AnimatedSection
            id="advocacy-section"
            className="relative z-10"
            delay={0.2}
          >
            <AdvocacySection />
          </AnimatedSection>

          {/* FAQ Section */}
          <AnimatedSection
            id="faq-section"
            className="relative z-10 max-w-7xl mx-auto px-8 md:px-12"
            delay={0.2}
          >
            <FAQSection />
          </AnimatedSection>

        </div>
      </div>
    </div>
  )
}
