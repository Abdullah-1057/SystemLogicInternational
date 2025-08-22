"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Code, Plug, Monitor, ArrowRight, Clock, Users, Shield } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Architecture & Discovery",
    description: "Deep dive into your requirements, technical constraints, and business objectives.",
    duration: "1-2 weeks",
    deliverables: [
      "Technical architecture document",
      "Smart contract specifications",
      "Integration requirements",
      "Security assessment",
    ],
    color: "#00d4ff",
  },
  {
    icon: Shield,
    title: "Compliance & KYC Setup",
    description: "Implement regulatory compliance, KYC/AML processes, and legal framework integration.",
    duration: "1-3 weeks",
    deliverables: ["Compliance framework", "KYC/AML integration", "Legal documentation", "Regulatory reporting setup"],
    color: "#8b5cf6",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Rapid development with continuous testing, security audits, and quality assurance.",
    duration: "2-6 weeks",
    deliverables: ["Smart contracts/canisters", "Frontend applications", "API integrations", "Security audit reports"],
    color: "#14b8a6",
  },
  {
    icon: Plug,
    title: "Integration & Deployment",
    description: "Seamless integration with existing systems and deployment to production networks.",
    duration: "1-2 weeks",
    deliverables: [
      "Production deployment",
      "System integrations",
      "Performance optimization",
      "User training materials",
    ],
    color: "#f59e0b",
  },
  {
    icon: Monitor,
    title: "Monitoring & Support",
    description: "Ongoing monitoring, maintenance, and support to ensure optimal performance.",
    duration: "Ongoing",
    deliverables: ["24/7 monitoring setup", "Performance dashboards", "Maintenance protocols", "Support documentation"],
    color: "#ef4444",
  },
]

export function ProcessDetail() {
  const t = useTranslations("process")

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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">Our Development Process</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A proven methodology that delivers secure, compliant, and scalable Web3 solutions on time and within budget.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 max-w-2xl w-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: step.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                            style={{ backgroundColor: step.color }}
                          >
                            {index + 1}
                          </div>
                          <CardTitle className="text-xl font-bold text-white">{step.title}</CardTitle>
                        </div>
                        <CardDescription className="text-white/80 text-base leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" style={{ color: step.color }} />
                      <span className="text-white/70">Duration: </span>
                      <span className="font-medium" style={{ color: step.color }}>
                        {step.duration}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" style={{ color: step.color }} />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center gap-2 text-white/80 text-sm">
                            <ArrowRight className="w-3 h-3" style={{ color: step.color }} />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-effect border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">End-to-End Timeline</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Most projects complete within <span className="text-[#00d4ff] font-semibold">4-12 weeks</span> from
                initial consultation to production deployment, depending on complexity and scope.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00d4ff] mb-2">&lt; 30 days</div>
                  <div className="text-white/70">MVP Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8b5cf6] mb-2">100%</div>
                  <div className="text-white/70">Audit Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#14b8a6] mb-2">24/7</div>
                  <div className="text-white/70">Support Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
