// import { NextIntlClientProvider } from "next-intl"
// import { getMessages } from "next-intl/server"
// import { Inter, Noto_Nastaliq_Urdu } from "next/font/google"
// import "../globals.css"

// const inter = Inter({
//   subsets: ["latin", "cyrillic"],
//   display: "swap",
//   variable: "--font-inter",
// })

// const notoNastaliq = Noto_Nastaliq_Urdu({
//   subsets: ["arabic"],
//   display: "swap",
//   variable: "--font-nastaliq",
// })

// export async function generateMetadata({ params }) {
//   const { locale } = await params;

//   return {
//     title: "Expert Web3 Solutions for Real-World Outcomes",
//     description:
//       "Tokenization, multi-sig treasuries, on-chain finance, user-owned social, and more—built on ICP, Ethereum/Base, and modern web.",
//     generator: "v0.app",
//     alternates: {
//       languages: {
//         en: "/en",
//         sr: "/sr",
//         ur: "/ur",
//         de: "/de",
//         fr: "/fr",
//         es: "/es",
//         it: "/it",
//         pt: "/pt",
//         nl: "/nl",
//         pl: "/pl",
//         ro: "/ro",
//         cs: "/cs",
//         sk: "/sk",
//         bg: "/bg",
//         hr: "/hr",
//         bs: "/bs",
//         mk: "/mk",
//         el: "/el",
//         hu: "/hu",
//         sl: "/sl",
//       },
//     },
//   }
// }

// export default async function LocaleLayout({ children, params }) {
//   const { locale } = await params;
//   const messages = await getMessages()
//   const isRTL = locale === "ur"

//   return (
//     <html
//       lang={locale}
//       dir={isRTL ? "rtl" : "ltr"}
//       className={`${inter.variable} ${notoNastaliq.variable} antialiased dark`}
//     >
//       <head>
//         <style>{`
//           html {
//             font-family: ${locale === "ur" ? notoNastaliq.style.fontFamily : inter.style.fontFamily};
//             --font-sans: ${locale === "ur" ? notoNastaliq.variable : inter.variable};
//           }
//         `}</style>
//       </head>
//       <body className={`${isRTL ? "font-nastaliq" : "font-sans"} bg-[#0B0F14] text-white`}>
//         <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
//       </body>
//     </html>
//   )
// }

// export function generateStaticParams() {
//   return [
//     { locale: "en" },
//     { locale: "sr" },
//     { locale: "ur" },
//     { locale: "de" },
//     { locale: "fr" },
//     { locale: "es" },
//     { locale: "it" },
//     { locale: "pt" },
//     { locale: "nl" },
//     { locale: "pl" },
//     { locale: "ro" },
//     { locale: "cs" },
//     { locale: "sk" },
//     { locale: "bg" },
//     { locale: "hr" },
//     { locale: "bs" },
//     { locale: "mk" },
//     { locale: "el" },
//     { locale: "hu" },
//     { locale: "sl" },
//   ]
// }

// app/[locale]/layout.js
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import { Inter, Noto_Nastaliq_Urdu } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-nastaliq",
});

export async function generateMetadata() {
  const locale = await getLocale();

  return {
    title: "Expert Web3 Solutions for Real-World Outcomes",
    description:
      "Tokenization, multi-sig treasuries, on-chain finance, user-owned social, and more—built on ICP, Ethereum/Base, and modern web.",
    generator: "v0.app",
    alternates: {
      languages: {
        en: "/en",
        sr: "/sr",
        ur: "/ur",
        de: "/de",
        fr: "/fr",
        es: "/es",
        it: "/it",
        pt: "/pt",
        nl: "/nl",
        pl: "/pl",
        ro: "/ro",
        cs: "/cs",
        sk: "/sk",
        bg: "/bg",
        hr: "/hr",
        bs: "/bs",
        mk: "/mk",
        el: "/el",
        hu: "/hu",
        sl: "/sl",
      },
    },
  };
}

// NOTE: Do NOT render <html> or <body> here. Root <html>/<body> must stay in app/layout.(js|tsx)
export default async function LocaleLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRTL = locale === "ur";

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`${inter.variable} ${nastaliq.variable} antialiased dark bg-[#0B0F14] text-white min-h-dvh`}
        style={{
          fontFamily: isRTL
            ? nastaliq.style.fontFamily
            : inter.style.fontFamily,
        }}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "sr" },
    { locale: "ur" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "es" },
    { locale: "it" },
    { locale: "pt" },
    { locale: "nl" },
    { locale: "pl" },
    { locale: "ro" },
    { locale: "cs" },
    { locale: "sk" },
    { locale: "bg" },
    { locale: "hr" },
    { locale: "bs" },
    { locale: "mk" },
    { locale: "el" },
    { locale: "hu" },
    { locale: "sl" },
  ];
}
