"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Vote, Rocket, Zap } from "lucide-react"

const additionalIndustries = [
  {
    icon: Vote,
    title: "DAOs",
    description: "On-chain governance, community decision-making, and transparent treasury management.",
    color: "#00d4ff",
  },
  {
    icon: Rocket,
    title: "Community Crypto Launch",
    description: "Fair launchpads, token vesting schedules, and regulatory compliance frameworks.",
    color: "#8b5cf6",
  },
  {
    icon: Zap,
    title: "Quokka Platform",
    description: "Web3 platform for influencers/streamers & fans with rewards, NFTs, and DAO governance on ICP.",
    color: "#14b8a6",
  },
]

export function AdditionalIndustries() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Additional Specializations</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Beyond our core industries, we also provide specialized solutions for emerging Web3 sectors and innovative
            platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalIndustries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${industry.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: industry.color }} />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/80 text-center leading-relaxed">
                      {industry.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Industry Expansion Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-effect border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Industry?</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                We're constantly expanding into new verticals and use cases. Our flexible architecture and deep Web3
                expertise allow us to adapt our solutions to virtually any industry requiring blockchain integration.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#00d4ff] mb-1">50+</div>
                  <div className="text-white/70 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#8b5cf6] mb-1">15+</div>
                  <div className="text-white/70 text-sm">Industries Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#14b8a6] mb-1">100%</div>
                  <div className="text-white/70 text-sm">Custom Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#f59e0b] mb-1">24/7</div>
                  <div className="text-white/70 text-sm">Global Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
