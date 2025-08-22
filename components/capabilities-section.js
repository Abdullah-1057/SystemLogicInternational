"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Shield, MessageSquare, FileText, Target, Gem, PenTool, Mail } from "lucide-react"

const capabilityIcons = {
  assetTokenization: Coins,
  multiSigWallet: Shield,
  communication: MessageSquare,
  invoiceFactoring: FileText,
  crowdfunding: Target,
  nfts: Gem,
  digitalSigning: PenTool,
  web3Email: Mail,
}

export function CapabilitiesSection() {
  const t = useTranslations("capabilities")

  const capabilities = [
    "assetTokenization",
    "multiSigWallet",
    "communication",
    "invoiceFactoring",
    "crowdfunding",
    "nfts",
    "digitalSigning",
    "web3Email",
  ]

  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">{t("title")}</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            End-to-end delivery across smart contracts/canisters, policy engines, portals, and mobile/web apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capabilityIcons[capability]
            return (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-effect border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#00d4ff]" />
                    </div>
                    <CardTitle className="text-white text-lg">{t(`${capability}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-4 leading-relaxed">
                      {t(`${capability}.description`)}
                    </CardDescription>
                    <div className="text-sm text-[#14b8a6] font-medium">Example: {t(`${capability}.example`)}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
