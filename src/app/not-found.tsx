"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="text-9xl font-bold gradient-text">404</span>
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-amber-500" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Startup Not Found
          </h1>
          <p className="text-slate-400 mb-8">
            Looks like this unicorn hasn&apos;t been discovered yet. The page you&apos;re
            looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <Search className="w-4 h-4" />
              Browse Startups
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-700/50"
        >
          <p className="text-sm text-slate-500">
            Think this is a mistake?{" "}
            <a
              href="mailto:adrien.rimmelin@edhec.com"
              className="text-blue-400 hover:underline"
            >
              Let us know
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
