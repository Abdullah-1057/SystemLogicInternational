// i18n/request.js
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const supported = [
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
  ];
  const safeLocale = supported.includes(locale) ? locale : "en";

  return {
    messages: (await import(`../messages/${safeLocale}.json`)).default,
    timeZone: "UTC",
    locale: safeLocale,
    direction: safeLocale === "ur" ? "rtl" : "ltr",
  };
});
