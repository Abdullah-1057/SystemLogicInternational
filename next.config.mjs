// import createNextIntlPlugin from "next-intl/plugin";

// // 👇 Point this to where your request config actually lives.
// // If it's at /src/i18n/request.js, change the path accordingly.
// const withNextIntl = createNextIntlPlugin("./i18n/request.js");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // i18n locales (EN default + SR/UR + EU set)
//   i18n: {
//     locales: [
//       "en",
//       "sr",
//       "ur",
//       "de",
//       "fr",
//       "es",
//       "it",
//       "pt",
//       "nl",
//       "pl",
//       "ro",
//       "cs",
//       "sk",
//       "bg",
//       "hr",
//       "bs",
//       "mk",
//       "el",
//       "hu",
//       "sl",
//     ],
//     defaultLocale: "en",
//   },

//   eslint: { ignoreDuringBuilds: true },
//   typescript: { ignoreBuildErrors: true }, // ok even though project is JS-only
//   images: { unoptimized: true },

//   experimental: {
//     optimizePackageImports: [
//       "framer-motion",
//       "@react-three/fiber",
//       "@react-three/drei",
//     ],
//   },
// };

// export default withNextIntl(nextConfig);
import createNextIntlPlugin from 'next-intl/plugin';

// Point to your request config (adjust path if needed)
const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }, // fine even if project is JS-only
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei']
  }
};

export default withNextIntl(nextConfig);
