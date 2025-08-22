"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"

const languages = {
  en: "English",
  sr: "Српски",
  ur: "اردو",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  nl: "Nederlands",
  pl: "Polski",
  ro: "Română",
  cs: "Čeština",
  sk: "Slovenčina",
  bg: "Български",
  hr: "Hrvatski",
  bs: "Bosanski",
  mk: "Македонски",
  el: "Ελληνικά",
  hu: "Magyar",
  sl: "Slovenščina",
}

const languageRegions = {
  en: "🇺🇸",
  sr: "🇷🇸",
  ur: "🇵🇰",
  de: "🇩🇪",
  fr: "🇫🇷",
  es: "🇪🇸",
  it: "🇮🇹",
  pt: "🇵🇹",
  nl: "🇳🇱",
  pl: "🇵🇱",
  ro: "🇷🇴",
  cs: "🇨🇿",
  sk: "🇸🇰",
  bg: "🇧🇬",
  hr: "🇭🇷",
  bs: "🇧🇦",
  mk: "🇲🇰",
  el: "🇬🇷",
  hu: "🇭🇺",
  sl: "🇸🇮",
}

const rtlLanguages = ["ur"]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const isRTL = rtlLanguages.includes(locale)

  const handleLanguageChange = (newLocale) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, "")
    const newPath = `/${newLocale}${pathWithoutLocale}`

    // Store locale preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    if (rtlLanguages.includes(newLocale) !== isRTL) {
      document.documentElement.style.transition = "all 0.3s ease"
      setTimeout(() => {
        document.documentElement.style.transition = ""
      }, 300)
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languages[locale]}</span>
          <span className="sm:hidden">{languageRegions[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isRTL ? "start" : "end"}
        className="glass-effect max-h-80 overflow-y-auto"
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        <div className="px-2 py-1.5 text-xs font-semibold text-white/60 uppercase tracking-wider">Primary</div>
        {["en", "sr", "ur"].map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`${locale === code ? "bg-primary/20 text-[#00d4ff]" : ""} ${
              rtlLanguages.includes(code) ? "flex-row-reverse justify-start" : ""
            }`}
          >
            <span className="mr-2">{languageRegions[code]}</span>
            <span className="flex-1">{languages[code]}</span>
            {locale === code && <Check className="w-4 h-4 ml-2" />}
          </DropdownMenuItem>
        ))}

        <div className="px-2 py-1.5 text-xs font-semibold text-white/60 uppercase tracking-wider border-t border-white/10 mt-1">
          European
        </div>
        {["de", "fr", "es", "it", "pt", "nl", "pl", "ro", "cs", "sk", "bg", "hr", "bs", "mk", "el", "hu", "sl"].map(
          (code) => (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={locale === code ? "bg-primary/20 text-[#00d4ff]" : ""}
            >
              <span className="mr-2">{languageRegions[code]}</span>
              <span className="flex-1">{languages[code]}</span>
              {locale === code && <Check className="w-4 h-4 ml-2" />}
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
