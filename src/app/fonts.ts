import { Bricolage_Grotesque } from "next/font/google";

export const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});
