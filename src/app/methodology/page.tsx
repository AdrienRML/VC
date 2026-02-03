"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  TrendingUp,
  Globe2,
  DollarSign,
  Zap,
  Calculator,
  Database,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const factors = [
  {
    name: "Team Score",
    weight: 30,
    icon: Users,
    color: "#3B82F6",
    description: "Evaluates founder and team quality",
    criteria: [
      "Previous startup exits or successful ventures",
      "Years of industry experience",
      "Team growth rate over time",
      "Educational background (tier 1 institutions bonus)",
      "LinkedIn presence and professional network",
    ],
    example: "A founder with a previous $100M exit and 10+ years in the industry scores 95+",
  },
  {
    name: "Traction Score",
    weight: 25,
    icon: TrendingUp,
    color: "#10B981",
    description: "Measures product-market fit and growth",
    criteria: [
      "Revenue growth rate (YoY or MoM)",
      "User/customer growth trajectory",
      "Product launches and feature velocity",
      "Enterprise customer logos",
      "Retention and engagement metrics",
    ],
    example: "100%+ YoY revenue growth with Fortune 500 customers scores 90+",
  },
  {
    name: "Market Score",
    weight: 20,
    icon: Globe2,
    color: "#F59E0B",
    description: "Assesses market opportunity and positioning",
    criteria: [
      "Total Addressable Market (TAM) size",
      "Market growth rate (CAGR)",
      "Competitive intensity (inverse scoring)",
      "Geographic expansion potential",
      "Regulatory environment",
    ],
    example: "A $50B+ TAM in a growing market with low competition scores 85+",
  },
  {
    name: "Funding Score",
    weight: 15,
    icon: DollarSign,
    color: "#8B5CF6",
    description: "Evaluates capital efficiency and investor quality",
    criteria: [
      "Total capital raised",
      "Quality of investors (tier 1 VCs = higher score)",
      "Funding velocity (time between rounds)",
      "Valuation trajectory",
      "Capital efficiency ratios",
    ],
    example: "Series C from Sequoia with 3x valuation step-up scores 90+",
  },
  {
    name: "Momentum Score",
    weight: 10,
    icon: Zap,
    color: "#EC4899",
    description: "Captures recent buzz and growth signals",
    criteria: [
      "News sentiment analysis",
      "Hiring velocity (job postings)",
      "Partnership announcements",
      "Social media engagement",
      "Award recognitions",
    ],
    example: "Major partnership announcement + 50% team growth in 6 months scores 88+",
  },
];

const pieData = factors.map((f) => ({ name: f.name, value: f.weight }));
const COLORS = factors.map((f) => f.color);

const dataSources = [
  { name: "Crunchbase", type: "Funding & Company Data", coverage: "Global" },
  { name: "LinkedIn", type: "Team & Hiring Data", coverage: "Professional Networks" },
  { name: "PitchBook", type: "Valuations & Deals", coverage: "Private Markets" },
  { name: "Dealroom", type: "European Startups", coverage: "Europe Focus" },
  { name: "Google News", type: "News Sentiment", coverage: "Media Coverage" },
  { name: "Company Websites", type: "Product & Mission", coverage: "Direct Sources" },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-emerald-500" />
              <span className="text-emerald-500 font-medium">Transparent Scoring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How We Predict <span className="gradient-text">Unicorns</span>
            </h1>
            <p className="text-lg text-slate-400">
              Our multi-factor scoring model combines quantitative metrics with qualitative
              assessments to identify startups with the highest probability of reaching
              $1B+ valuations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formula Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">The Scoring Formula</h2>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 font-mono text-center mb-8">
            <p className="text-slate-400 text-sm mb-2">Unicorn Probability Score =</p>
            <p className="text-lg sm:text-xl text-white">
              (<span className="text-blue-400">Team × 0.30</span>) +
              (<span className="text-emerald-400">Traction × 0.25</span>) +
              (<span className="text-amber-400">Market × 0.20</span>) +
              (<span className="text-purple-400">Funding × 0.15</span>) +
              (<span className="text-pink-400">Momentum × 0.10</span>)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pie Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, value }) => `${(name || "").toString().split(" ")[0]} ${value}%`}
                    labelLine={{ stroke: "#64748B" }}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1E293B",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {factors.map((factor) => (
                <div key={factor.name} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: factor.color }}
                  />
                  <span className="text-slate-300">{factor.name}</span>
                  <span className="text-slate-500 ml-auto font-mono">{factor.weight}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Factor Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          Factor Deep Dive
        </h2>

        <div className="space-y-6">
          {factors.map((factor, index) => (
            <motion.div
              key={factor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${factor.color}20` }}
                    >
                      <factor.icon className="w-6 h-6" style={{ color: factor.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{factor.name}</h3>
                      <p className="text-sm text-slate-400">Weight: {factor.weight}%</p>
                    </div>
                  </div>
                  <p className="text-slate-300">{factor.description}</p>
                </div>

                {/* Criteria */}
                <div className="lg:w-1/3">
                  <h4 className="text-sm font-medium text-slate-400 mb-3">
                    Evaluation Criteria
                  </h4>
                  <ul className="space-y-2">
                    {factor.criteria.map((criterion, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: factor.color }}
                        />
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Example */}
                <div className="lg:w-1/3">
                  <h4 className="text-sm font-medium text-slate-400 mb-3">
                    Example Scoring
                  </h4>
                  <div
                    className="p-4 rounded-lg text-sm"
                    style={{ backgroundColor: `${factor.color}10` }}
                  >
                    <p className="text-slate-300">{factor.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Example Calculation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Info className="w-6 h-6 text-blue-500" />
            Example: Mistral AI Score Calculation
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Factor</th>
                  <th className="text-center py-3 px-4 text-slate-400 font-medium">Raw Score</th>
                  <th className="text-center py-3 px-4 text-slate-400 font-medium">Weight</th>
                  <th className="text-center py-3 px-4 text-slate-400 font-medium">Weighted</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-blue-400">Team</td>
                  <td className="py-3 px-4 text-center font-mono text-white">98</td>
                  <td className="py-3 px-4 text-center text-slate-400">30%</td>
                  <td className="py-3 px-4 text-center font-mono text-white">29.4</td>
                  <td className="py-3 px-4 text-slate-300">Ex-DeepMind & Meta AI founders</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-emerald-400">Traction</td>
                  <td className="py-3 px-4 text-center font-mono text-white">92</td>
                  <td className="py-3 px-4 text-center text-slate-400">25%</td>
                  <td className="py-3 px-4 text-center font-mono text-white">23.0</td>
                  <td className="py-3 px-4 text-slate-300">Rapid enterprise adoption, API usage</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-amber-400">Market</td>
                  <td className="py-3 px-4 text-center font-mono text-white">95</td>
                  <td className="py-3 px-4 text-center text-slate-400">20%</td>
                  <td className="py-3 px-4 text-center font-mono text-white">19.0</td>
                  <td className="py-3 px-4 text-slate-300">$100B+ AI market, explosive growth</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-purple-400">Funding</td>
                  <td className="py-3 px-4 text-center font-mono text-white">96</td>
                  <td className="py-3 px-4 text-center text-slate-400">15%</td>
                  <td className="py-3 px-4 text-center font-mono text-white">14.4</td>
                  <td className="py-3 px-4 text-slate-300">$1B raised, tier 1 investors</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="py-3 px-4 text-pink-400">Momentum</td>
                  <td className="py-3 px-4 text-center font-mono text-white">94</td>
                  <td className="py-3 px-4 text-center text-slate-400">10%</td>
                  <td className="py-3 px-4 text-center font-mono text-white">9.4</td>
                  <td className="py-3 px-4 text-slate-300">Major press coverage, partnerships</td>
                </tr>
                <tr className="bg-blue-600/10">
                  <td className="py-3 px-4 font-bold text-white" colSpan={3}>
                    Final Unicorn Score
                  </td>
                  <td className="py-3 px-4 text-center font-mono text-2xl font-bold text-emerald-400">
                    95.2
                  </td>
                  <td className="py-3 px-4 text-emerald-400 font-medium">Highly Likely</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Data Sources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-white">Data Sources</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataSources.map((source) => (
              <div key={source.name} className="p-4 bg-slate-800/50 rounded-lg">
                <p className="font-semibold text-white">{source.name}</p>
                <p className="text-sm text-slate-400">{source.type}</p>
                <p className="text-xs text-slate-500 mt-1">{source.coverage}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card rounded-xl p-6 border-amber-500/30"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Important Disclaimer</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This tool is for educational and informational purposes only. The Unicorn
                Predictor score is an experimental metric based on publicly available data
                and should not be considered investment advice. Startup investing involves
                significant risks, and past performance does not guarantee future results.
                Always conduct your own due diligence before making any investment decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
