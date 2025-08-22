"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function CaseStudySection() {
  const t = useTranslations("caseStudy")

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Featured Case Study</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <Card className="glass-effect border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl font-bold gradient-text">{t("quokka.title")}</CardTitle>
                <ExternalLink className="w-6 h-6 text-[#00d4ff]" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/80 text-lg leading-relaxed mb-6">
                {t("quokka.description")}
              </CardDescription>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-[#00d4ff]/10">
                  <div className="text-2xl font-bold text-[#00d4ff] mb-2">DAO Governance</div>
                  <div className="text-sm text-white/70">Community-driven decisions</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[#8b5cf6]/10">
                  <div className="text-2xl font-bold text-[#8b5cf6] mb-2">NFT Rewards</div>
                  <div className="text-sm text-white/70">Fan engagement system</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[#14b8a6]/10">
                  <div className="text-2xl font-bold text-[#14b8a6] mb-2">Scam Protection</div>
                  <div className="text-sm text-white/70">Built-in security measures</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
