import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";
import { Splash } from "@/components/splash";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://löwengold-calw.de"),
  title: {
    default: "Löwengold Calw – Gold & Silberankauf im Schwarzwald",
    template: "%s · Löwengold Calw",
  },
  description:
    "Ihr Experte für den Ankauf von Gold, Silber, Edelsteinen, Antiquitäten und Münzen in Calw. Kostenlose Bewertung an Aktionstagen, sofortige Barauszahlung.",
  keywords: [
    "Goldankauf Calw",
    "Silberankauf Calw",
    "Antiquitäten Calw",
    "Schmuckankauf",
    "Löwengold",
    "Altgold",
    "Bruchgold",
    "Münzankauf",
    "Schwarzwald",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://löwengold-calw.de",
    title: "Löwengold Calw – Gold & Silberankauf im Schwarzwald",
    description:
      "Kostenlose Bewertung & sofortige Barauszahlung für Gold, Silber, Edelsteine und Antiquitäten – mitten in Calw.",
    siteName: "Löwengold Calw",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper grain">
        <Splash />
        <SmoothScroll>
          <CursorGlow />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
