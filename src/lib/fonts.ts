import { Geist, Instrument_Serif } from "next/font/google";

/**
 * Fonts are downloaded at build time and served from our own domain,
 * so visitors never make a request to Google.
 *
 * Geist: primary sans for UI, body and headlines.
 * Instrument Serif: editorial accent for selected words and statements.
 */
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
