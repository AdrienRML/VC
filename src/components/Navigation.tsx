"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  BookOpen,
  History,
  User,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Predictor", icon: TrendingUp, description: "View startup rankings" },
  { href: "/methodology", label: "Methodology", icon: BookOpen, description: "How we score startups" },
  { href: "/track-record", label: "Track Record", icon: History, description: "Our prediction history" },
  { href: "/about", label: "About", icon: User, description: "About the creator" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Unicorn Predictor - Home"
          >
            <div className="relative">
              <Sparkles className="w-8 h-8 text-blue-500 group-hover:text-emerald-500 transition-colors" aria-hidden="true" />
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              />
            </div>
            <span className="text-xl font-bold gradient-text">
              Unicorn Predictor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1" role="menubar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    "flex items-center gap-2",
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  )}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  aria-label={link.description}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-blue-600/30 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      aria-hidden="true"
                    />
                  )}
                  <link.icon className="w-4 h-4 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-700/50"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                      isActive
                        ? "bg-blue-600/30 text-white"
                        : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
                    )}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                    aria-label={link.description}
                  >
                    <link.icon className="w-5 h-5" aria-hidden="true" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
