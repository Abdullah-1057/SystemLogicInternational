"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Suspense, lazy } from "react"

// Lazy load the 3D scene
const TokenizedNetwork3D = lazy(() => import("@/components/tokenized-network-3d"))

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14] via-[#1a1f2e] to-[#0B0F14]" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-noise" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">{t("headline")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
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
          </motion.div>
        </motion.div>

        {/* Right side - 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-[600px] w-full"
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/abstract-tokenized-network.png"
                  alt="Tokenized Network Visualization"
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            }
          >
            <TokenizedNetwork3D />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-[#00d4ff] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
