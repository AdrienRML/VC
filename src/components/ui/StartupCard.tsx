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
} from "lucide-react";
import { Startup } from "@/data/startups";
import { formatCurrency, cn } from "@/lib/utils";
import { ScoreGauge } from "./ScoreGauge";

interface StartupCardProps {
  startup: Startup;
  rank: number;
  index: number;
}

export function StartupCard({ startup, rank, index }: StartupCardProps) {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-500 to-amber-500";
    if (rank === 2) return "bg-gradient-to-r from-slate-300 to-slate-400";
    if (rank === 3) return "bg-gradient-to-r from-amber-600 to-amber-700";
    return "bg-slate-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/startup/${startup.id}`}>
        <div className="glass-card rounded-xl p-5 cursor-pointer group">
          <div className="flex items-start gap-4">
            {/* Rank Badge */}
            <div
              className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white shrink-0",
                getRankBadge(rank)
              )}
            >
              {rank}
            </div>

            {/* Logo */}
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
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
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
                  {startup.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded-full">
                  {startup.sector}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {startup.city}, {startup.country}
                </span>
              </div>
            </div>

            {/* Score */}
            <ScoreGauge score={startup.scores.overall} size="md" />
          </div>

          {/* Metrics */}
          <div className="mt-4 pt-4 border-t border-slate-700/50 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              <div>
                <p className="text-slate-400 text-xs">Valuation</p>
                <p className="text-white font-mono font-medium">
                  {formatCurrency(startup.currentValuation)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <div>
                <p className="text-slate-400 text-xs">Funding</p>
                <p className="text-white font-mono font-medium">
                  {formatCurrency(startup.totalFunding)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-purple-500" />
              <div>
                <p className="text-slate-400 text-xs">Team Size</p>
                <p className="text-white font-mono font-medium">
                  {startup.metrics.teamSize}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-amber-500" />
              <div>
                <p className="text-slate-400 text-xs">Founded</p>
                <p className="text-white font-mono font-medium">
                  {startup.founded}
                </p>
              </div>
            </div>
          </div>

          {/* Last Round */}
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              Last Round: <span className="text-slate-300">{startup.lastRound.type}</span>
              {" · "}
              <span className="text-emerald-400">{formatCurrency(startup.lastRound.amount)}</span>
              {" · "}
              <span className="text-slate-400">{startup.lastRound.date}</span>
            </span>
            <span className="flex items-center gap-1 text-emerald-400">
              <TrendingUp className="w-3 h-3" />
              +{startup.metrics.monthlyGrowth}%/mo
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
