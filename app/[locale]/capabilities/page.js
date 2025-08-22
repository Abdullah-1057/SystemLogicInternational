import { Navigation } from "@/components/navigation"
import { CapabilitiesHero } from "@/components/capabilities-hero"
import { CapabilitiesDetail } from "@/components/capabilities-detail"
import { ProcessDetail } from "@/components/process-detail"
import { CTASection } from "@/components/cta-section"

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: "Web3 Capabilities - Expert Blockchain Solutions",
    description:
      "Comprehensive Web3 development services including asset tokenization, multi-sig wallets, DeFi, NFTs, and more.",
    alternates: {
      languages: {
        en: "/en/capabilities",
        sr: "/sr/capabilities",
        ur: "/ur/capabilities",
        de: "/de/capabilities",
        fr: "/fr/capabilities",
        es: "/es/capabilities",
        it: "/it/capabilities",
        pt: "/pt/capabilities",
        nl: "/nl/capabilities",
        pl: "/pl/capabilities",
        ro: "/ro/capabilities",
        cs: "/cs/capabilities",
        sk: "/sk/capabilities",
        bg: "/bg/capabilities",
        hr: "/hr/capabilities",
        bs: "/bs/capabilities",
        mk: "/mk/capabilities",
        el: "/el/capabilities",
        hu: "/hu/capabilities",
        sl: "/sl/capabilities",
      },
    },
  }
}

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white overflow-x-hidden">
      <Navigation />
      <CapabilitiesHero />
      <CapabilitiesDetail />
      <ProcessDetail />
      <CTASection />
    </main>
  )
}
