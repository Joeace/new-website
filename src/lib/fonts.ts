import { Inter, Manrope } from "next/font/google";

/**
 * Fonts are downloaded at build time and served from our own domain,
 * so visitors never make a request to Google.
 *
 * Manrope: headings and display type (font-display).
 * Inter: body copy and interface text (font-sans).
 */
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
