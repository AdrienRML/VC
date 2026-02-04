"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, DollarSign, Rocket } from "lucide-react";
import { startups } from "@/data/startups";
import { earlyStageStartups } from "@/data/earlyStageStartups";
import { formatCurrency } from "@/lib/utils";

export function StatsOverview() {
  const allStartups = [...startups, ...earlyStageStartups];
  const totalValuation = startups.reduce((sum, s) => sum + s.currentValuation, 0);
  const avgScore = Math.round(allStartups.reduce((sum, s) => sum + s.scores.overall, 0) / allStartups.length);

  const stats = [
    {
      icon: Building2,
      label: "Scale-ups",
      value: startups.length.toString(),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Rocket,
      label: "Early Stage",
      value: earlyStageStartups.length.toString(),
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: DollarSign,
      label: "Total Valuation",
      value: formatCurrency(totalValuation),
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      icon: TrendingUp,
      label: "Avg Score",
      value: avgScore.toString(),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="glass-card rounded-xl p-3 sm:p-4"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`p-1.5 sm:p-2 rounded-lg ${stat.bgColor} shrink-0`}>
              <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs text-slate-400 truncate">{stat.label}</p>
              <p className={`text-lg sm:text-xl font-bold font-mono ${stat.color} truncate`}>{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
