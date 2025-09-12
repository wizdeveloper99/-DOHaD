import { HeroSection } from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import { AnimatedSection } from "@/components/animated-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProofStats } from "@/components/social-proof"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import  CapacityBuilding  from "@/components/CapacityBuilding"
import FinanceSection from "@/components/FinanceSection"
import AdvocacySection from "@/components/AdvocacySection"
import { BentoSection } from "@/components/bento-section"
import { BentoCarousel } from "@/components/four-pillars-section"
import ContentDesign from "@/components/ui/contentDesgin"
import { Header } from "@/components/header"
import AboutDOHaD from "@/components/about-DOHaD"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      <div className="relative z-10">
        <main className="relative z-10">
          {/* <HeroSection /> */}
          {/* Dashboard Preview Wrapper */}
          {/* <div className="absolute bottom-[-230px] md:bottom-[-420px] left-1/2 transform -translate-x-1/2 z-30">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div> */}
        </main>
        
        {/* Social Proof with consistent container */}
        {/* <AnimatedSection
          className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 md:mt-[320px]"
          delay={0.1}
        >
          <SocialProofStats />
        </AnimatedSection> */}

        {/* About DOHaD Section */}
        <AnimatedSection
          id="about-section"
          className="relative z-10"
          delay={0.2}
        >
          <AboutDOHaD />
        </AnimatedSection>
          
        {/* Main content sections with standardized spacing */}
        <div className="space-y-11 md:space-y-16">
          {/* About Section */}
          <AnimatedSection
            id="about-pillars-section"
            className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
            delay={0.2}
          >
            <AboutSection />
          </AnimatedSection>
          
          {/* Four Pillars/Bento Section */}
          <AnimatedSection 
            id="features-section" 
            className="relative z-10 max-w-7xl mx-auto px-4 md:px-6" 
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
            <FinanceSection />
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
            className="relative z-10 max-w-7xl mx-auto px-4 md:px-6" 
            delay={0.2}
          >
            <FAQSection />
          </AnimatedSection>
          
          {/* CTA Section */}
          <AnimatedSection 
            className="relative z-10 w-full" 
            delay={0.2}
          >
            <CTASection />
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
