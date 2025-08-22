"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

const useCaseOptions = [
  "Asset Tokenization",
  "Multi-Signature Wallet",
  "DeFi Platform",
  "NFT Marketplace",
  "DAO Governance",
  "Supply Chain",
  "Digital Identity",
  "Other",
]

export function ContactForm() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    useCases: [],
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range"
    }

    if (!formData.timeline) {
      newErrors.timeline = "Please select a timeline"
    }

    if (formData.useCases.length === 0) {
      newErrors.useCases = "Please select at least one use case"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        timeline: "",
        useCases: [],
        message: "",
      })
    }, 3000)
  }

  const handleUseCaseChange = (useCase, checked) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        useCases: [...prev.useCases, useCase],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        useCases: prev.useCases.filter((item) => item !== useCase),
      }))
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="glass-effect border-[#14b8a6]/50">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-[#14b8a6] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
            <p className="text-white/80 leading-relaxed">
              Thank you for reaching out. We'll review your requirements and get back to you within 24 hours with a
              custom roadmap and next steps.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Get Started</CardTitle>
          <CardDescription className="text-white/80">
            Fill out the form below and we'll get back to you with a custom proposal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                {t("form.name")} *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                placeholder="Your full name"
              />
              {errors.name && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                {t("form.email")} *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                placeholder="your@email.com"
              />
              {errors.email && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </div>
              )}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                {t("form.company")} *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                placeholder="Your company name"
              />
              {errors.company && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.company}
                </div>
              )}
            </div>

            {/* Budget and Timeline */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">{t("form.budget")} *</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                >
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1f2e] border-white/20">
                    <SelectItem value="under50k">{t("budgetOptions.under50k")}</SelectItem>
                    <SelectItem value="50k100k">{t("budgetOptions.50k100k")}</SelectItem>
                    <SelectItem value="100k250k">{t("budgetOptions.100k250k")}</SelectItem>
                    <SelectItem value="over250k">{t("budgetOptions.over250k")}</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.budget}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-white">{t("form.timeline")} *</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                >
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1f2e] border-white/20">
                    <SelectItem value="asap">{t("timelineOptions.asap")}</SelectItem>
                    <SelectItem value="1month">{t("timelineOptions.1month")}</SelectItem>
                    <SelectItem value="3months">{t("timelineOptions.3months")}</SelectItem>
                    <SelectItem value="6months">{t("timelineOptions.6months")}</SelectItem>
                  </SelectContent>
                </Select>
                {errors.timeline && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.timeline}
                  </div>
                )}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-2">
              <Label className="text-white">{t("form.useCase")} *</Label>
              <div className="grid grid-cols-2 gap-3">
                {useCaseOptions.map((useCase) => (
                  <div key={useCase} className="flex items-center space-x-2">
                    <Checkbox
                      id={useCase}
                      checked={formData.useCases.includes(useCase)}
                      onCheckedChange={(checked) => handleUseCaseChange(useCase, checked)}
                      className="border-white/20 data-[state=checked]:bg-[#00d4ff] data-[state=checked]:border-[#00d4ff]"
                    />
                    <Label htmlFor={useCase} className="text-white/80 text-sm">
                      {useCase}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.useCases && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.useCases}
                </div>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                {t("form.message")} *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                placeholder="Tell us about your project, goals, and any specific requirements..."
              />
              {errors.message && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00d4ff] hover:bg-[#00d4ff]/80 text-black font-semibold py-3 glow-cyan"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  {t("form.submit")}
                </div>
              )}
            </Button>

            {/* Privacy Note */}
            <p className="text-white/60 text-sm text-center">{t("form.privacy")}</p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
