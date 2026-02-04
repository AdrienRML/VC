"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  Rocket,
} from "lucide-react";
import { Startup } from "@/data/startups";
import { formatCurrency, cn } from "@/lib/utils";
import { ScoreGauge } from "./ScoreGauge";

interface StartupCardProps {
  startup: Startup;
  rank: number;
  index: number;
  variant?: "default" | "compact";
}

export function StartupCard({ startup, rank, index, variant = "default" }: StartupCardProps) {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500 to-amber-500";
    if (rank === 2) return "bg-gradient-to-r from-slate-300 to-slate-400";
    if (rank === 3) return "bg-gradient-to-r from-amber-600 to-amber-700";
    return "bg-slate-600";
  };

  const isEarlyStage = startup.currentValuation < 100_000_000;

  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.03 }}
      >
        <Link href={`/startup/${startup.id}`}>
          <div className="glass-card rounded-xl p-4 cursor-pointer group hover:border-blue-500/30">
            <div className="flex items-center gap-3">
              {/* Rank */}
              <div
                className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white shrink-0",
                  getRankBadge(rank)
                )}
              >
                {rank}
              </div>

              {/* Logo */}
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={startup.logo}
                  alt={startup.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(startup.name)}&background=1E40AF&color=fff&size=64`;
                  }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white text-sm truncate group-hover:text-blue-400 transition-colors">
                    {startup.name}
                  </h3>
                  {isEarlyStage && (
                    <Rocket className="w-3 h-3 text-amber-500 shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="truncate max-w-[80px]">{startup.sector}</span>
                  <span className="text-slate-600 shrink-0">•</span>
                  <span className="truncate">{startup.city}</span>
                </div>
              </div>

              {/* Score */}
              <div className="shrink-0 ml-2">
                <ScoreGauge score={startup.scores.overall} size="sm" />
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-3 pt-3 border-t border-slate-700/30 flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-emerald-400 font-mono shrink-0">{formatCurrency(startup.totalFunding)}</span>
                <span className="text-slate-400 truncate">{startup.lastRound.type}</span>
              </div>
              <span className="flex items-center gap-1 text-emerald-400 shrink-0">
                <TrendingUp className="w-3 h-3" />
                +{startup.metrics.monthlyGrowth}%
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/startup/${startup.id}`}>
        <div className="glass-card rounded-xl p-4 sm:p-5 cursor-pointer group">
          {/* Header Row */}
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Rank Badge */}
            <div
              className={cn(
                "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm text-white shrink-0",
                getRankBadge(rank)
              )}
            >
              {rank}
            </div>

            {/* Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src={startup.logo}
                alt={startup.name}
                width={40}
                height={40}
                className="object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(startup.name)}&background=1E40AF&color=fff&size=80`;
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white text-sm sm:text-base truncate group-hover:text-blue-400 transition-colors">
                  {startup.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 shrink-0 hidden sm:block" />
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded-full truncate max-w-[100px] sm:max-w-[140px]">
                  {startup.sector}
                </span>
                <span className="flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span className="truncate">{startup.city}, {startup.country}</span>
                </span>
              </div>
            </div>

            {/* Score */}
            <div className="shrink-0 ml-1">
              <ScoreGauge score={startup.scores.overall} size="md" className="!w-12 !h-12 sm:!w-16 sm:!h-16" />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-4 pt-4 border-t border-slate-700/50 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-500 shrink-0" />
              <div className="min-w-0 overflow-hidden">
                <p className="text-slate-400 text-[10px] sm:text-xs">Valuation</p>
                <p className="text-white font-mono font-medium text-xs sm:text-sm truncate">
                  {formatCurrency(startup.currentValuation)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-500 shrink-0" />
              <div className="min-w-0 overflow-hidden">
                <p className="text-slate-400 text-[10px] sm:text-xs">Funding</p>
                <p className="text-white font-mono font-medium text-xs sm:text-sm truncate">
                  {formatCurrency(startup.totalFunding)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-500 shrink-0" />
              <div className="min-w-0">
                <p className="text-slate-400 text-[10px] sm:text-xs">Team</p>
                <p className="text-white font-mono font-medium text-xs sm:text-sm">
                  {startup.metrics.teamSize}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="min-w-0">
                <p className="text-slate-400 text-[10px] sm:text-xs">Founded</p>
                <p className="text-white font-mono font-medium text-xs sm:text-sm">
                  {startup.founded}
                </p>
              </div>
            </div>
          </div>

          {/* Last Round */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-500 truncate">
              <span className="text-slate-300">{startup.lastRound.type}</span>
              {" · "}
              <span className="text-emerald-400 font-mono">{formatCurrency(startup.lastRound.amount)}</span>
              {" · "}
              <span className="text-slate-400">{startup.lastRound.date}</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400 shrink-0">
              <TrendingUp className="w-3 h-3" />
              +{startup.metrics.monthlyGrowth}%/mo
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
