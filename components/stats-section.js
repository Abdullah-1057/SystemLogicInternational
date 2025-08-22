"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

export function StatsSection() {
  const t = useTranslations("stats")

  const stats = [
    { value: t("mvpTime"), label: "Rapid Development" },
    { value: t("auditReady"), label: "Security First" },
    { value: t("globalKyc"), label: "Compliance Ready" },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass-effect rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-4">{stat.value}</div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
