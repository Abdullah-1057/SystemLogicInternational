"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Send, Clock, MapPin, Phone } from "lucide-react"

export function ContactMethods() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Quick Contact */}
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#00d4ff]" />
            Quick Contact
          </CardTitle>
          <CardDescription className="text-white/80">Get in touch instantly via your preferred method.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full bg-[#25D366] hover:bg-[#25D366]/80 text-white font-semibold"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Chat
          </Button>
          <Button
            variant="outline"
            className="w-full border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc]/10 bg-transparent"
            onClick={() => window.open("https://t.me/yourusername", "_blank")}
          >
            <Send className="w-4 h-4 mr-2" />
            Telegram Chat
          </Button>
        </CardContent>
      </Card>

      {/* Schedule a Call */}
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#8b5cf6]" />
            Schedule a Discovery Call
          </CardTitle>
          <CardDescription className="text-white/80">
            Book a 30-minute consultation to discuss your project in detail.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Calendly Embed Placeholder */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
            <Calendar className="w-12 h-12 text-[#8b5cf6] mx-auto mb-4" />
            <h4 className="text-white font-semibold mb-2">Calendly Integration</h4>
            <p className="text-white/70 text-sm mb-4">
              Select your preferred time slot for a personalized consultation.
            </p>
            <Button
              className="bg-[#8b5cf6] hover:bg-[#8b5cf6]/80 text-white font-semibold glow-purple"
              onClick={() => window.open("https://calendly.com/yourcompany/discovery-call", "_blank")}
            >
              Book Discovery Call
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 text-white/80">
            <Clock className="w-5 h-5 text-[#14b8a6]" />
            <div>
              <div className="font-medium text-white">Response Time</div>
              <div className="text-sm">Within 24 hours</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <MapPin className="w-5 h-5 text-[#14b8a6]" />
            <div>
              <div className="font-medium text-white">Global Coverage</div>
              <div className="text-sm">Remote-first, worldwide support</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <Phone className="w-5 h-5 text-[#14b8a6]" />
            <div>
              <div className="font-medium text-white">Availability</div>
              <div className="text-sm">24/7 emergency support</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Happens Next */}
      <Card className="glass-effect border-white/10">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">What Happens Next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] font-bold text-sm">
                1
              </div>
              <div>
                <div className="font-medium text-white">Initial Review</div>
                <div className="text-white/70 text-sm">We analyze your requirements and prepare a custom response</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] font-bold text-sm">
                2
              </div>
              <div>
                <div className="font-medium text-white">Discovery Call</div>
                <div className="text-white/70 text-sm">30-minute consultation to discuss your project in detail</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#14b8a6]/20 flex items-center justify-center text-[#14b8a6] font-bold text-sm">
                3
              </div>
              <div>
                <div className="font-medium text-white">Custom Proposal</div>
                <div className="text-white/70 text-sm">Detailed roadmap, timeline, and pricing for your solution</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
