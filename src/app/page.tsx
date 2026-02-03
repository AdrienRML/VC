"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock } from "lucide-react";
import { startups } from "@/data/startups";
import { StartupCard } from "@/components/ui/StartupCard";
import { FilterBar } from "@/components/ui/FilterBar";
import { StatsOverview } from "@/components/ui/StatsOverview";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sortBy, setSortBy] = useState("score");

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span className="text-amber-500 font-medium">AI-Powered Analysis</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Find the Next </span>
              <span className="gradient-text">European Unicorns</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Data-driven predictions for which startups are most likely to reach
              $1B+ valuations. Powered by multi-factor analysis of team, traction,
              market, and funding metrics.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <StatsOverview />

          {/* Live Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Unicorn Leaderboard</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
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
          Showing <span className="text-white font-medium">{filteredAndSortedStartups.length}</span> startups
          {(searchQuery || selectedSector || selectedCountry) && (
            <span> matching your filters</span>
          )}
        </div>

        {/* Startup Cards */}
        <div className="space-y-4">
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
              className="glass-card rounded-xl p-12 text-center"
            >
              <p className="text-slate-400">No startups match your search criteria.</p>
              <p className="text-sm text-slate-500 mt-2">Try adjusting your filters.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
