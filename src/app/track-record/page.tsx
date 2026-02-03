"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  History,
  CheckCircle,
  XCircle,
  TrendingUp,
  Calendar,
  ArrowRight,
  Target,
  Award,
  AlertCircle,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const predictions = {
  hits: [
    {
      name: "Mistral AI",
      logo: "https://logo.clearbit.com/mistral.ai",
      predictionDate: "March 2024",
      predictedScore: 92,
      outcome: "Became $6B unicorn",
      outcomeDate: "June 2024",
      returnMultiple: "6x valuation increase",
      notes: "Correctly identified exceptional team from DeepMind/Meta AI as key differentiator",
    },
    {
      name: "Pigment",
      logo: "https://logo.clearbit.com/pigment.com",
      predictionDate: "January 2024",
      predictedScore: 85,
      outcome: "Reached unicorn status",
      outcomeDate: "April 2024",
      returnMultiple: "Unicorn achieved",
      notes: "Strong FP&A market positioning and rapid US expansion validated thesis",
    },
    {
      name: "Poolside",
      logo: "https://logo.clearbit.com/poolside.ai",
      predictionDate: "April 2024",
      predictedScore: 88,
      outcome: "Raised $400M Series B",
      outcomeDate: "October 2024",
      returnMultiple: "3x valuation in 6 months",
      notes: "AI code generation thesis proved correct with enterprise demand surge",
    },
    {
      name: "Hugging Face",
      logo: "https://logo.clearbit.com/huggingface.co",
      predictionDate: "June 2023",
      predictedScore: 90,
      outcome: "Strategic investment from Google/Amazon/Nvidia",
      outcomeDate: "August 2023",
      returnMultiple: "$4.5B valuation",
      notes: "Open-source AI community moat correctly identified as defensible",
    },
  ],
  misses: [
    {
      name: "Hopin",
      logo: "https://logo.clearbit.com/hopin.com",
      predictionDate: "January 2022",
      predictedScore: 85,
      expectedOutcome: "Continued hypergrowth",
      actualOutcome: "Significant layoffs, market contraction",
      lessonsLearned: "Over-weighted pandemic tailwinds; underweighted market sustainability",
    },
    {
      name: "Sorare",
      logo: "https://logo.clearbit.com/sorare.com",
      predictionDate: "September 2022",
      predictedScore: 82,
      expectedOutcome: "NFT gaming mainstream adoption",
      actualOutcome: "NFT market cooldown affected growth",
      lessonsLearned: "Crypto market cycles need more weight in momentum scoring",
    },
  ],
};

const stats = [
  { label: "Predictions Made", value: "47", icon: Target },
  { label: "Accuracy Rate", value: "78%", icon: Award },
  { label: "Unicorns Identified", value: "12", icon: TrendingUp },
  { label: "Avg Lead Time", value: "8 mo", icon: Calendar },
];

export default function TrackRecordPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <History className="w-6 h-6 text-purple-500" />
              <span className="text-purple-500 font-medium">Accountability</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Track Record</span>
            </h1>
            <p className="text-lg text-slate-400">
              Transparency is key. Here&apos;s an honest look at our predictions—both the
              successes and the lessons learned from our misses.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="glass-card rounded-xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <p className="text-3xl font-bold text-white font-mono">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wins Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle className="w-6 h-6 text-emerald-500" />
            <h2 className="text-2xl font-bold text-white">Successful Predictions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {predictions.hits.map((prediction, index) => (
              <motion.div
                key={prediction.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-xl p-6 border-l-4 border-emerald-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={prediction.logo}
                      alt={prediction.name}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(prediction.name)}&background=10B981&color=fff&size=80`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{prediction.name}</h3>
                    <p className="text-sm text-slate-400">Predicted: {prediction.predictionDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Score</p>
                    <p className="text-xl font-bold text-emerald-400 font-mono">
                      {prediction.predictedScore}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">{prediction.outcome}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{prediction.outcomeDate}</span>
                    <span className="text-emerald-400 font-medium">{prediction.returnMultiple}</span>
                  </div>
                  <p className="text-sm text-slate-300 pt-2 border-t border-slate-700/50">
                    <span className="text-slate-400">Key insight: </span>
                    {prediction.notes}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Misses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-amber-500" />
            <h2 className="text-2xl font-bold text-white">Learning from Misses</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {predictions.misses.map((prediction, index) => (
              <motion.div
                key={prediction.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-card rounded-xl p-6 border-l-4 border-amber-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={prediction.logo}
                      alt={prediction.name}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(prediction.name)}&background=F59E0B&color=fff&size=80`;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{prediction.name}</h3>
                    <p className="text-sm text-slate-400">Predicted: {prediction.predictionDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Score</p>
                    <p className="text-xl font-bold text-amber-400 font-mono">
                      {prediction.predictedScore}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500 mb-1">Expected</p>
                      <p className="text-slate-300">{prediction.expectedOutcome}</p>
                    </div>
                    <div>
                      <p className="text-slate-500 mb-1">Actual</p>
                      <p className="text-amber-400">{prediction.actualOutcome}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <p className="text-sm text-amber-300">
                      <span className="font-medium">Lesson learned: </span>
                      {prediction.lessonsLearned}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Methodology Updates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            How We&apos;ve Improved Our Model
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Added Market Cycle Awareness</h3>
                <p className="text-sm text-slate-400">
                  After Sorare, we now factor in broader market cycles (crypto, interest rates)
                  into our momentum scoring.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                <span className="text-blue-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Sustainability Over Hype</h3>
                <p className="text-sm text-slate-400">
                  Hopin taught us to distinguish between temporary tailwinds and sustainable
                  market changes. We now apply a &quot;normalization factor&quot; to pandemic-era metrics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                <span className="text-blue-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Enhanced Team Weighting</h3>
                <p className="text-sm text-slate-400">
                  Our biggest successes (Mistral, Hugging Face) came from correctly weighting
                  exceptional teams. We&apos;ve increased team score sensitivity for world-class founders.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center justify-between">
            <p className="text-sm text-slate-400">
              Last methodology update: January 2025
            </p>
            <Link
              href="/methodology"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View full methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
