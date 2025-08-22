"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Banknote, Users, Truck, Heart, ArrowRight, TrendingUp, Shield } from "lucide-react"

const industryIcons = {
  realEstate: Building2,
  smeFinance: Banknote,
  creators: Users,
  supplyChain: Truck,
  ngos: Heart,
}

const industryDetails = {
  realEstate: {
    outcomes: [
      "Fractional ownership democratizes real estate investment",
      "Automated rent distribution reduces management overhead",
    ],
    useCases: ["Property tokenization", "REIT management", "Rental income automation"],
    example:
      "A $5M commercial property tokenized into 50,000 shares, enabling $100 minimum investments with monthly dividend distributions.",
    metrics: ["90% reduction in transaction costs", "24/7 global trading", "Instant settlement"],
    color: "#00d4ff",
  },
  smeFinance: {
    outcomes: [
      "On-chain invoice factoring improves cash flow",
      "Community-driven working capital reduces borrowing costs",
    ],
    useCases: ["Invoice factoring", "Supply chain financing", "Peer-to-peer lending"],
    example:
      "SME converts $50k invoice to immediate $42.5k cash through decentralized factoring pool with transparent risk assessment.",
    metrics: ["15% lower fees vs traditional", "48-hour funding", "Transparent risk scoring"],
    color: "#8b5cf6",
  },
  creators: {
    outcomes: [
      "NFT memberships create sustainable revenue streams",
      "Token-gated content builds exclusive communities",
    ],
    useCases: ["Creator monetization", "Fan engagement", "Content distribution"],
    example:
      "Music artist launches 1,000 NFT memberships at $200 each, providing exclusive content access and concert ticket priority.",
    metrics: ["300% higher engagement", "Recurring revenue model", "Direct fan relationships"],
    color: "#14b8a6",
  },
  supplyChain: {
    outcomes: ["Tokenized inventory enables real-time tracking", "Milestone payments reduce counterparty risk"],
    useCases: ["Supply chain transparency", "Inventory management", "Trade finance"],
    example:
      "Electronics manufacturer tokenizes component inventory, enabling suppliers to track parts and receive automated payments upon delivery confirmation.",
    metrics: ["99% traceability accuracy", "50% faster payments", "Reduced fraud risk"],
    color: "#f59e0b",
  },
  ngos: {
    outcomes: ["Transparent donations increase donor confidence", "Multi-sig spending ensures accountability"],
    useCases: ["Donation management", "Impact tracking", "Governance systems"],
    example:
      "Environmental NGO receives $100k donation with smart contract releasing funds based on verified tree-planting milestones.",
    metrics: ["100% donation transparency", "Real-time impact tracking", "Reduced administrative costs"],
    color: "#ef4444",
  },
}

export function IndustriesGrid() {
  const t = useTranslations("industries")

  const industries = ["realEstate", "smeFinance", "creators", "supplyChain", "ngos"]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industryIcons[industry]
            const details = industryDetails[industry]
            return (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${details.color}20` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: details.color }} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-white mb-2">{t(`${industry}.title`)}</CardTitle>
                        <CardDescription className="text-white/80 text-base leading-relaxed">
                          {t(`${industry}.description`)}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Outcomes */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" style={{ color: details.color }} />
                        Key Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {details.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start gap-2 text-white/80">
                            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: details.color }} />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Common Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {details.useCases.map((useCase, useCaseIndex) => (
                          <Badge
                            key={useCaseIndex}
                            variant="secondary"
                            className="text-white border-white/20"
                            style={{ backgroundColor: `${details.color}20`, borderColor: `${details.color}30` }}
                          >
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Real-World Example */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Real-World Example</h4>
                      <div
                        className="p-4 rounded-lg border"
                        style={{
                          backgroundColor: `${details.color}10`,
                          borderColor: `${details.color}30`,
                        }}
                      >
                        <p className="text-white/90 leading-relaxed">{details.example}</p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" style={{ color: details.color }} />
                        Impact Metrics
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {details.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: details.color }} />
                            <span className="text-white/80 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
