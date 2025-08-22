"use client"

import { useState, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const t = useTranslations("navigation")
  const locale = useLocale()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isRTL = locale === "ur"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center space-x-8 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
            <div className="text-2xl font-bold gradient-text">Web3 Solutions</div>
            <div className={`hidden md:flex items-center space-x-6 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
              <a href={`/${locale}`} className="text-white/80 hover:text-white transition-colors">
                {t("home")}
              </a>
              <a href={`/${locale}/capabilities`} className="text-white/80 hover:text-white transition-colors">
                {t("capabilities")}
              </a>
              <a href={`/${locale}/industries`} className="text-white/80 hover:text-white transition-colors">
                {t("industries")}
              </a>
              <a href={`/${locale}/contact`} className="text-white/80 hover:text-white transition-colors">
                {t("contact")}
              </a>
            </div>
          </div>

          <div className={`flex items-center space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
            <LanguageSwitcher />
            <Button className="bg-[#00d4ff] hover:bg-[#00d4ff]/80 text-black font-semibold glow-cyan hidden sm:flex">
              {t("bookCall")}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10"
          >
            <div className={`flex flex-col space-y-4 pt-4 ${isRTL ? "items-end" : "items-start"}`}>
              <a
                href={`/${locale}`}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("home")}
              </a>
              <a
                href={`/${locale}/capabilities`}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("capabilities")}
              </a>
              <a
                href={`/${locale}/industries`}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("industries")}
              </a>
              <a
                href={`/${locale}/contact`}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </a>
              <Button
                className="bg-[#00d4ff] hover:bg-[#00d4ff]/80 text-black font-semibold glow-cyan w-full sm:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("bookCall")}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
