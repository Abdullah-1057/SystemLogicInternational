"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Coins,
  Shield,
  MessageSquare,
  FileText,
  Target,
  Gem,
  PenTool,
  Mail,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

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

const capabilityBenefits = {
  assetTokenization: [
    "Fractional ownership enables broader investment access",
    "Automated compliance and regulatory reporting",
    "Instant settlement and transparent transactions",
    "Programmable rules for dividends and governance",
  ],
  multiSigWallet: [
    "Eliminate single points of failure",
    "Customizable approval workflows",
    "Complete audit trail for all transactions",
    "Role-based access controls",
  ],
  communication: [
    "End-to-end encrypted messaging",
    "User-owned data sovereignty",
    "Token-gated access controls",
    "Cross-platform compatibility",
  ],
  invoiceFactoring: [
    "Immediate cash flow improvement",
    "Transparent risk assessment",
    "Automated escrow and settlement",
    "Lower fees than traditional factoring",
  ],
  crowdfunding: [
    "Milestone-based fund releases",
    "Automated refund mechanisms",
    "Governance token distribution",
    "Global KYC/AML compliance",
  ],
  nfts: [
    "Membership and loyalty programs",
    "Automated royalty distribution",
    "Anti-bot protection systems",
    "Advanced analytics and insights",
  ],
  digitalSigning: [
    "Legally binding blockchain proof",
    "Immutable document integrity",
    "Multi-party signature workflows",
    "Integration with existing systems",
  ],
  web3Email: [
    "Identity-linked communication",
    "Portable inbox ownership",
    "Programmable message filtering",
    "Encrypted storage and backup",
  ],
}

export function CapabilitiesDetail() {
  const t = useTranslations("capabilities")
  const [activeTab, setActiveTab] = useState("assetTokenization")

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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 h-auto p-2 bg-transparent">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[capability]
              return (
                <TabsTrigger
                  key={capability}
                  value={capability}
                  className="flex flex-col items-center gap-2 p-4 h-auto data-[state=active]:bg-[#00d4ff]/20 data-[state=active]:text-[#00d4ff] glass-effect border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium text-center leading-tight">{t(`${capability}.title`)}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          <div className="mt-12">
            {capabilities.map((capability) => {
              const Icon = capabilityIcons[capability]
              return (
                <TabsContent key={capability} value={capability} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="glass-effect border-white/10">
                      <CardHeader>
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-[#00d4ff]" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-3xl font-bold text-white mb-4">
                              {t(`${capability}.title`)}
                            </CardTitle>
                            <CardDescription className="text-lg text-white/80 leading-relaxed">
                              {t(`${capability}.description`)}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* What You Get */}
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-[#14b8a6]" />
                              What You Get
                            </h4>
                            <ul className="space-y-3">
                              {capabilityBenefits[capability].map((benefit, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: index * 0.1 }}
                                  className="flex items-start gap-3 text-white/80"
                                >
                                  <ArrowRight className="w-4 h-4 text-[#00d4ff] mt-0.5 flex-shrink-0" />
                                  {benefit}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Example */}
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-4">Real-World Example</h4>
                            <div className="p-6 rounded-xl bg-gradient-to-br from-[#14b8a6]/10 to-[#00d4ff]/10 border border-[#14b8a6]/20">
                              <p className="text-[#14b8a6] font-medium text-lg leading-relaxed">
                                {t(`${capability}.example`)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Technical Stack */}
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">Technical Implementation</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="bg-[#8b5cf6]/20 text-[#8b5cf6] border-[#8b5cf6]/30">
                              Smart Contracts
                            </Badge>
                            <Badge variant="secondary" className="bg-[#00d4ff]/20 text-[#00d4ff] border-[#00d4ff]/30">
                              ICP Canisters
                            </Badge>
                            <Badge variant="secondary" className="bg-[#14b8a6]/20 text-[#14b8a6] border-[#14b8a6]/30">
                              Web3 APIs
                            </Badge>
                            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                              Frontend Integration
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
