import { Navigation } from "@/components/navigation"
import { IndustriesHero } from "@/components/industries-hero"
import { IndustriesGrid } from "@/components/industries-grid"
import { AdditionalIndustries } from "@/components/additional-industries"
import { CTASection } from "@/components/cta-section"

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: "Industries We Serve - Web3 Solutions Across Verticals",
    description:
      "Specialized Web3 solutions for Real Estate, SME Finance, Creators & Media, Supply Chain, NGOs/DAOs, and more.",
    alternates: {
      languages: {
        en: "/en/industries",
        sr: "/sr/industries",
        ur: "/ur/industries",
        de: "/de/industries",
        fr: "/fr/industries",
        es: "/es/industries",
        it: "/it/industries",
        pt: "/pt/industries",
        nl: "/nl/industries",
        pl: "/pl/industries",
        ro: "/ro/industries",
        cs: "/cs/industries",
        sk: "/sk/industries",
        bg: "/bg/industries",
        hr: "/hr/industries",
        bs: "/bs/industries",
        mk: "/mk/industries",
        el: "/el/industries",
        hu: "/hu/industries",
        sl: "/sl/industries",
      },
    },
  }
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white overflow-x-hidden">
      <Navigation />
      <IndustriesHero />
      <IndustriesGrid />
      <AdditionalIndustries />
      <CTASection />
    </main>
  )
}
