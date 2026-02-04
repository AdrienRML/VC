"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, Rocket, ChevronDown, ChevronUp } from "lucide-react";
import { startups } from "@/data/startups";
import { earlyStageStartups } from "@/data/earlyStageStartups";
import { StartupCard } from "@/components/ui/StartupCard";
import { FilterBar } from "@/components/ui/FilterBar";
import { StatsOverview } from "@/components/ui/StatsOverview";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sortBy, setSortBy] = useState("score");
  const [showAllEarlyStage, setShowAllEarlyStage] = useState(false);

  const filteredAndSortedStartups = useMemo(() => {
    let filtered = [...startups];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.sector.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      );
    }

    // Sector filter
    if (selectedSector) {
      filtered = filtered.filter((s) => s.sector === selectedSector);
    }

    // Country filter
    if (selectedCountry) {
      filtered = filtered.filter((s) => s.country === selectedCountry);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "score":
          return b.scores.overall - a.scores.overall;
        case "valuation":
          return b.currentValuation - a.currentValuation;
        case "funding":
          return b.totalFunding - a.totalFunding;
        case "team":
          return b.scores.team - a.scores.team;
        case "momentum":
          return b.scores.momentum - a.scores.momentum;
        case "founded":
          return b.founded - a.founded;
        default:
          return b.scores.overall - a.scores.overall;
      }
    });

    return filtered;
  }, [searchQuery, selectedSector, selectedCountry, sortBy]);

  const filteredEarlyStage = useMemo(() => {
    let filtered = [...earlyStageStartups];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.sector.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query)
      );
    }

    // Sector filter
    if (selectedSector) {
      filtered = filtered.filter((s) => s.sector === selectedSector);
    }

    // Country filter
    if (selectedCountry) {
      filtered = filtered.filter((s) => s.country === selectedCountry);
    }

    // Sort by score
    filtered.sort((a, b) => b.scores.overall - a.scores.overall);

    return filtered;
  }, [searchQuery, selectedSector, selectedCountry]);

  const displayedEarlyStage = showAllEarlyStage
    ? filteredEarlyStage
    : filteredEarlyStage.slice(0, 10);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 sm:py-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
              <span className="text-amber-500 font-medium text-sm sm:text-base">AI-Powered Analysis</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Find the Next </span>
              <span className="gradient-text">European Unicorns</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4">
              Data-driven predictions for which startups are most likely to reach
              $1B+ valuations. Multi-factor analysis of team, traction, market, and funding.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <StatsOverview />

          {/* Live Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live data · Updated February 2025</span>
          </motion.div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Unicorn Leaderboard</h2>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Clock className="w-4 h-4" />
            <span>Top 50 European Startups</span>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Results Count */}
        <div className="text-sm text-slate-400 mb-4">
          Showing <span className="text-white font-medium">{filteredAndSortedStartups.length}</span> scale-ups
          {(searchQuery || selectedSector || selectedCountry) && (
            <span> matching your filters</span>
          )}
        </div>

        {/* Startup Cards */}
        <div className="space-y-3 sm:space-y-4">
          {filteredAndSortedStartups.length > 0 ? (
            filteredAndSortedStartups.map((startup, index) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                rank={index + 1}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card rounded-xl p-8 sm:p-12 text-center"
            >
              <p className="text-slate-400">No startups match your search criteria.</p>
              <p className="text-sm text-slate-500 mt-2">Try adjusting your filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Early Stage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 mt-8 pt-8 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Early Stage Gems</h2>
            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium">
              French Startups
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <span>{earlyStageStartups.length} Emerging Startups</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-6 max-w-3xl">
          Promising early-stage French startups with high potential. These companies are at Seed to Series A stage,
          showing strong fundamentals and growth trajectories.
        </p>

        {/* Results Count */}
        <div className="text-sm text-slate-400 mb-4">
          Showing <span className="text-white font-medium">{displayedEarlyStage.length}</span> of{" "}
          <span className="text-white font-medium">{filteredEarlyStage.length}</span> early-stage startups
        </div>

        {/* Early Stage Cards - Grid Layout */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {displayedEarlyStage.length > 0 ? (
            displayedEarlyStage.map((startup, index) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                rank={index + 1}
                index={index}
                variant="compact"
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card rounded-xl p-8 text-center col-span-2"
            >
              <p className="text-slate-400">No early-stage startups match your filters.</p>
            </motion.div>
          )}
        </div>

        {/* Show More/Less Button */}
        {filteredEarlyStage.length > 10 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAllEarlyStage(!showAllEarlyStage)}
            className="mt-6 mx-auto flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            {showAllEarlyStage ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show All {filteredEarlyStage.length} Startups
              </>
            )}
          </motion.button>
        )}
      </section>
    </div>
  );
}
