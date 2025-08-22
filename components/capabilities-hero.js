"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function CapabilitiesHero() {
  const t = useTranslations("capabilities")

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#1a1f2e] to-[#0B0F14]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text">Our Capabilities</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            End-to-end delivery across smart contracts/canisters, policy engines, portals, and mobile/web apps. We build
            secure, compliant, and scalable Web3 solutions tailored to your business needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
