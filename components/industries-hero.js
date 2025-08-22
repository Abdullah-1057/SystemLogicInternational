"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function IndustriesHero() {
  const t = useTranslations("industries")

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
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text">{t("title")}</h1>
          <p className="text-xl text-white/80 leading-relaxed">{t("subtitle")}</p>
        </motion.div>
      </div>
    </section>
  )
}
