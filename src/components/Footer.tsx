"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Heart,
  ExternalLink,
  TrendingUp,
  BookOpen,
  History,
  User,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Predictor", icon: TrendingUp },
    { href: "/methodology", label: "Methodology", icon: BookOpen },
    { href: "/track-record", label: "Track Record", icon: History },
    { href: "/about", label: "About", icon: User },
  ],
  resources: [
    { href: "https://crunchbase.com", label: "Crunchbase", external: true },
    { href: "https://dealroom.co", label: "Dealroom", external: true },
    { href: "https://pitchbook.com", label: "PitchBook", external: true },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-slate-700/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Sparkles className="w-6 h-6 text-blue-500 group-hover:text-emerald-500 transition-colors" />
              <span className="text-lg font-bold gradient-text">
                Unicorn Predictor
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              AI-powered predictions for European unicorn startups. Data-driven analysis
              of team, traction, market, and funding to identify the next billion-dollar companies.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/adrien-rimmelin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700/50 rounded-lg hover:bg-blue-600/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://github.com/AdrienRML"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="mailto:adrien.rimmelin@edhec.com"
                className="p-2 bg-slate-700/50 rounded-lg hover:bg-emerald-600/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Data Sources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              {currentYear} Unicorn Predictor. Built with{" "}
              <Heart className="w-3 h-3 inline text-red-500" /> by{" "}
              <a
                href="https://linkedin.com/in/adrien-rimmelin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Adrien Rimmelin
              </a>
            </p>
            <p className="text-xs text-slate-500">
              For educational purposes only. Not investment advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
