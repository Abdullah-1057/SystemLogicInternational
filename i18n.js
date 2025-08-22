import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

// Can be imported from a shared config
const locales = [
  "en",
  "sr",
  "ur",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "nl",
  "pl",
  "ro",
  "cs",
  "sk",
  "bg",
  "hr",
  "bs",
  "mk",
  "el",
  "hu",
  "sl",
]

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
