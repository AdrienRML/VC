import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Unicorn Predictor | Find the Next European Unicorns",
  description: "AI-powered predictions for which European startups are most likely to reach $1B+ valuations. Built by Adrien Rimmelin.",
  keywords: ["unicorn", "startup", "prediction", "venture capital", "Europe", "investment"],
  authors: [{ name: "Adrien Rimmelin" }],
  openGraph: {
    title: "Unicorn Predictor",
    description: "AI-powered predictions for European unicorn startups",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
