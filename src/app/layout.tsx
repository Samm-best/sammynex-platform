import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import SiteEffects from "@/components/SiteEffects";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", weight: ["500", "700"] });

export const metadata: Metadata = {
  title: { default: "SammyNex — Learn • Build • Grow", template: "%s · SammyNex" },
  description: "SammyNex by Sammy: software projects, technology services, and practical learning.",
  openGraph: { title: "SammyNex — Learn • Build • Grow", description: "Software projects, technology services, and practical learning by Sammy.", images: ["/images/sammynex-profile.jpg"] },
};

export const viewport: Viewport = { themeColor: "#050b1f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal animations only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SiteEffects />
        {children}
      </body>
    </html>
  );
}
