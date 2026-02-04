"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Building2,
  Lightbulb,
  Target,
  Award,
  DollarSign,
  ChevronRight,
  Rocket,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { startups, Startup } from "@/data/startups";
import { earlyStageStartups } from "@/data/earlyStageStartups";
import { formatCurrency, cn } from "@/lib/utils";
import { ScoreGauge } from "@/components/ui/ScoreGauge";

// Combine all startups for lookup
const allStartups = [...startups, ...earlyStageStartups];

export default function StartupDetailPage() {
  const params = useParams();
  const startup = allStartups.find((s) => s.id === params.id);
  const isEarlyStage = startup ? earlyStageStartups.some((s) => s.id === startup.id) : false;

  const similarStartups = useMemo(() => {
    if (!startup) return [];
    return allStartups
      .filter((s) => s.id !== startup.id && s.sector === startup.sector)
      .slice(0, 3);
  }, [startup]);

  if (!startup) {
    return (
      <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-white mb-4">Startup not found</h1>
          <p className="text-slate-400 mb-6">
            The startup you&apos;re looking for doesn&apos;t exist in our database.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to leaderboard
          </Link>
        </motion.div>
      </div>
    );
  }

  const radarData = [
    { metric: "Team", value: startup.scores.team, fullMark: 100 },
    { metric: "Traction", value: startup.scores.traction, fullMark: 100 },
    { metric: "Market", value: startup.scores.market, fullMark: 100 },
    { metric: "Funding", value: startup.scores.funding, fullMark: 100 },
    { metric: "Momentum", value: startup.scores.momentum, fullMark: 100 },
  ];

  const scoreBreakdown = [
    { name: "Team", score: startup.scores.team, weight: 30, color: "#3B82F6" },
    { name: "Traction", score: startup.scores.traction, weight: 25, color: "#10B981" },
    { name: "Market", score: startup.scores.market, weight: 20, color: "#F59E0B" },
    { name: "Funding", score: startup.scores.funding, weight: 15, color: "#8B5CF6" },
    { name: "Momentum", score: startup.scores.momentum, weight: 10, color: "#EC4899" },
  ];

  // Generate realistic funding history based on last round
  const generateFundingHistory = (startup: Startup) => {
    const roundTypes = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C", "Series D"];
    const lastRoundIndex = roundTypes.indexOf(startup.lastRound.type);

    if (lastRoundIndex === -1) {
      return [{ round: startup.lastRound.type, amount: startup.lastRound.amount }];
    }

    const history: { round: string; amount: number }[] = [];
    let remainingFunding = startup.totalFunding;

    for (let i = lastRoundIndex; i >= 0; i--) {
      const roundType = roundTypes[i];
      if (roundType === startup.lastRound.type) {
        history.unshift({ round: roundType, amount: startup.lastRound.amount });
        remainingFunding -= startup.lastRound.amount;
      } else if (remainingFunding > 0) {
        const portion = remainingFunding * (i === 0 ? 1 : 0.4);
        if (portion > 100_000) {
          history.unshift({ round: roundType, amount: Math.round(portion) });
          remainingFunding -= portion;
        }
      }
    }

    return history;
  };

  const fundingHistory = generateFundingHistory(startup);

  const investmentThesis = `${startup.name} shows ${startup.scores.overall >= 85 ? "exceptional" : startup.scores.overall >= 70 ? "strong" : "promising"} unicorn potential with an overall score of ${startup.scores.overall}/100.
  The company's ${startup.scores.team >= 90 ? "exceptional" : startup.scores.team >= 80 ? "strong" : "solid"} team score (${startup.scores.team})
  combined with ${startup.scores.traction >= 85 ? "impressive" : "growing"} traction metrics position it well in the ${startup.sector} sector.
  With ${formatCurrency(startup.totalFunding)} raised and a ${formatCurrency(startup.currentValuation)} valuation,
  ${startup.name} is ${startup.currentValuation >= 1_000_000_000 ? "already a unicorn and scaling further" : "on a clear trajectory toward unicorn status"}.`;

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <section className="relative overflow-hidden py-8 sm:py-12">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b via-transparent to-transparent",
          isEarlyStage ? "from-amber-600/10" : "from-blue-600/10"
        )} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
              aria-label="Back to Leaderboard"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Leaderboard
            </Link>
          </motion.div>

          {/* Main Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row items-start gap-6"
          >
            {/* Logo & Name */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden">
                <Image
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(startup.name)}&background=1E40AF&color=fff&size=128`;
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    {startup.name}
                  </h1>
                  {isEarlyStage && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium">
                      <Rocket className="w-3 h-3" />
                      Early Stage
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">
                    {startup.sector}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    {startup.city}, {startup.country}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    Founded {startup.founded}
                  </span>
                </div>
              </div>
            </div>

            {/* Score Card */}
            <div className="lg:ml-auto flex items-center gap-6">
              <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                <ScoreGauge score={startup.scores.overall} size="lg" />
                <div>
                  <p className="text-sm text-slate-400">Unicorn Score</p>
                  <p className="text-2xl font-bold text-white">
                    {startup.scores.overall}
                    <span className="text-sm text-slate-400">/100</span>
                  </p>
                  <p className={cn(
                    "text-xs font-medium",
                    startup.scores.overall >= 85 ? "text-emerald-400" :
                    startup.scores.overall >= 70 ? "text-blue-400" : "text-amber-400"
                  )}>
                    {startup.scores.overall >= 85 ? "Highly Likely" :
                     startup.scores.overall >= 70 ? "Strong Potential" : "Emerging"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-500" aria-hidden="true" />
                Overview
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                {startup.description}
              </p>
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Mission:</strong> {startup.mission}
              </p>

              {/* Key Products */}
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-sm text-slate-400 mb-2">Key Products</p>
                <div className="flex flex-wrap gap-2">
                  {startup.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Score Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-500" aria-hidden="true" />
                Score Breakdown
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="h-64" role="img" aria-label="Radar chart showing score breakdown">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#334155" />
                      <PolarAngleAxis
                        dataKey="metric"
                        tick={{ fill: "#94A3B8", fontSize: 12 }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={{ fill: "#64748B", fontSize: 10 }}
                      />
                      <Radar
                        name="Score"
                        dataKey="value"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Score Bars */}
                <div className="space-y-4">
                  {scoreBreakdown.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-300">
                          {item.name}
                          <span className="text-slate-500 ml-1">({item.weight}%)</span>
                        </span>
                        <span className="font-mono" style={{ color: item.color }}>
                          {item.score}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden" role="progressbar" aria-valuenow={item.score} aria-valuemin={0} aria-valuemax={100}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Funding History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-500" aria-hidden="true" />
                Funding History
              </h2>

              <div className="h-48" role="img" aria-label="Bar chart showing funding history">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fundingHistory}>
                    <XAxis
                      dataKey="round"
                      tick={{ fill: "#94A3B8", fontSize: 12 }}
                      axisLine={{ stroke: "#334155" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#64748B", fontSize: 10 }}
                      axisLine={{ stroke: "#334155" }}
                      tickLine={false}
                      tickFormatter={(value) =>
                        value >= 1_000_000_000
                          ? `$${(value / 1_000_000_000).toFixed(1)}B`
                          : `$${(value / 1_000_000).toFixed(0)}M`
                      }
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1E293B",
                        border: "1px solid #334155",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#F8FAFC" }}
                      formatter={(value) => [formatCurrency(value as number), "Amount"]}
                    />
                    <Bar
                      dataKey="amount"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Last Round Details */}
              <div className="mt-6 pt-4 border-t border-slate-700/50 grid sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-slate-400">Last Round</p>
                  <p className="text-lg font-semibold text-white">{startup.lastRound.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Amount Raised</p>
                  <p className="text-lg font-semibold text-emerald-400 font-mono">
                    {formatCurrency(startup.lastRound.amount)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Key Investors</p>
                  <p className="text-sm text-white">
                    {startup.lastRound.investors.slice(0, 2).join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Investment Thesis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" aria-hidden="true" />
                Investment Thesis
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {investmentThesis}
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Valuation</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">
                    {formatCurrency(startup.currentValuation)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Total Funding</span>
                  <span className="text-lg font-semibold text-white font-mono">
                    {formatCurrency(startup.totalFunding)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Team Size</span>
                  <span className="text-lg font-semibold text-white font-mono">
                    {startup.metrics.teamSize}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Monthly Growth</span>
                  <span className="text-lg font-semibold text-emerald-400 font-mono">
                    +{startup.metrics.monthlyGrowth}%
                  </span>
                </div>
                {startup.metrics.revenue && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Revenue</span>
                    <span className="text-lg font-semibold text-white">
                      {startup.metrics.revenue}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Founders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" aria-hidden="true" />
                Leadership Team
              </h3>
              <div className="space-y-4">
                {startup.founders.map((founder) => (
                  <div key={founder.name} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                      {founder.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium text-white">{founder.name}</p>
                      <p className="text-sm text-blue-400">{founder.role}</p>
                      <p className="text-xs text-slate-400">{founder.background}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {startup.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                    <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Similar Startups */}
            {similarStartups.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Similar Startups</h3>
                <div className="space-y-3">
                  {similarStartups.map((s) => (
                    <Link
                      key={s.id}
                      href={`/startup/${s.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                        <Image
                          src={s.logo}
                          alt={`${s.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1E40AF&color=fff&size=48`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-white text-sm truncate">{s.name}</p>
                        <p className="text-xs text-slate-400">{s.country}</p>
                      </div>
                      <div className="text-sm font-mono text-emerald-400">{s.scores.overall}</div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
