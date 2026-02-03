"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, DollarSign, Globe2 } from "lucide-react";
import { startups } from "@/data/startups";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function StatsOverview() {
  const totalValuation = startups.reduce((sum, s) => sum + s.currentValuation, 0);
  const totalFunding = startups.reduce((sum, s) => sum + s.totalFunding, 0);
  const avgScore = Math.round(startups.reduce((sum, s) => sum + s.scores.overall, 0) / startups.length);
  const countriesCount = new Set(startups.map(s => s.country)).size;

  const stats = [
    {
      icon: Building2,
      label: "Startups Tracked",
      value: startups.length.toString(),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
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
      label: "Avg Unicorn Score",
      value: avgScore.toString(),
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Globe2,
      label: "Countries",
      value: countriesCount.toString(),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="glass-card rounded-xl p-4"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs text-slate-400">{stat.label}</p>
              <p className={`text-xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
