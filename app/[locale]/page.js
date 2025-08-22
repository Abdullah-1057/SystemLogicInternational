import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ProcessSection } from "@/components/process-section"
import { StatsSection } from "@/components/stats-section"
import { CaseStudySection } from "@/components/case-study-section"
import { CTASection } from "@/components/cta-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <CapabilitiesSection />
      <ProcessSection />
      <StatsSection />
      <CaseStudySection />
      <CTASection />
    </main>
  )
}
