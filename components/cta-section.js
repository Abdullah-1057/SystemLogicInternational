"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const t = useTranslations("navigation")

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 border border-white/10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Ready to Build the Future?</h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Let's discuss how Web3 can transform your business. Book a discovery call and get a custom roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#00d4ff] hover:bg-[#00d4ff]/80 text-black font-semibold px-8 py-4 text-lg glow-cyan transform hover:scale-105 transition-all duration-200"
            >
              {t("bookCall")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#8b5cf6] text-[#8b5cf6] hover:bg-[#8b5cf6]/10 px-8 py-4 text-lg glow-purple transform hover:scale-105 transition-all duration-200 bg-transparent"
            >
              {t("requestProposal")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
