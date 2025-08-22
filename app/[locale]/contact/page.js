import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactMethods } from "@/components/contact-methods"

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: "Contact Us - Get Your Web3 Project Started",
    description:
      "Ready to build your Web3 solution? Contact our expert team for a free consultation and custom roadmap.",
    alternates: {
      languages: {
        en: "/en/contact",
        sr: "/sr/contact",
        ur: "/ur/contact",
        de: "/de/contact",
        fr: "/fr/contact",
        es: "/es/contact",
        it: "/it/contact",
        pt: "/pt/contact",
        nl: "/nl/contact",
        pl: "/pl/contact",
        ro: "/ro/contact",
        cs: "/cs/contact",
        sk: "/sk/contact",
        bg: "/bg/contact",
        hr: "/hr/contact",
        bs: "/bs/contact",
        mk: "/mk/contact",
        el: "/el/contact",
        hu: "/hu/contact",
        sl: "/sl/contact",
      },
    },
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white overflow-x-hidden">
      <Navigation />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-20">
        <ContactForm />
        <ContactMethods />
      </div>
    </main>
  )
}
