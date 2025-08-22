import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: [
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
  ],

  // Used when no locale matches
  defaultLocale: "en",

  // Always use a locale prefix
  localePrefix: "always",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en|sr|ur|fr|es|it|pt|nl|pl|ro|cs|sk|bg|hr|bs|mk|el|hu|sl)/:path*"],
}
