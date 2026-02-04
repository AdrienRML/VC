import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Unicorn Predictor | Find the Next European Unicorns",
  description: "AI-powered predictions for which European startups are most likely to reach $1B+ valuations. Multi-factor analysis of team, traction, market, and funding. Built by Adrien Rimmelin.",
  keywords: ["unicorn", "startup", "prediction", "venture capital", "Europe", "investment", "AI", "French startups", "European tech", "VC", "funding"],
  authors: [{ name: "Adrien Rimmelin" }],
  creator: "Adrien Rimmelin",
  publisher: "Unicorn Predictor",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Unicorn Predictor | Find the Next European Unicorns",
    description: "AI-powered predictions for European unicorn startups. Data-driven analysis of team, traction, market, and funding.",
    type: "website",
    locale: "en_US",
    siteName: "Unicorn Predictor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unicorn Predictor | Find the Next European Unicorns",
    description: "AI-powered predictions for European unicorn startups",
    creator: "@AdrienRimmelin",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
