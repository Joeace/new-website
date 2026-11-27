import { Inter, Manrope, Playfair_Display } from "next/font/google";

/**
 * Fonts are downloaded at build time and served from our own domain,
 * so visitors never make a request to Google.
 *
 * Playfair Display: editorial headings and display type (font-display),
 *   with its italic used for gold accent words.
 * Manrope: interface type such as the logo wordmark, navigation and
 *   numerals (font-ui).
 * Inter: body copy, labels and buttons (font-sans).
 */
export const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

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
