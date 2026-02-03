"use client";

import { useState } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sectors, countries } from "@/data/startups";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const sortOptions = [
  { value: "score", label: "Unicorn Score" },
  { value: "valuation", label: "Valuation" },
  { value: "funding", label: "Total Funding" },
  { value: "team", label: "Team Score" },
  { value: "momentum", label: "Momentum" },
  { value: "founded", label: "Founded Year" },
];

export function FilterBar({
  searchQuery,
  setSearchQuery,
  selectedSector,
  setSelectedSector,
  selectedCountry,
  setSelectedCountry,
  sortBy,
  setSortBy,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = selectedSector || selectedCountry;

  const clearFilters = () => {
    setSelectedSector("");
    setSelectedCountry("");
    setSearchQuery("");
  };

  return (
    <div className="glass rounded-xl p-4 mb-6">
      {/* Search and Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search startups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-colors",
            showFilters || hasActiveFilters
              ? "bg-blue-600/20 border-blue-500/50 text-blue-400"
              : "bg-slate-800/50 border-slate-700/50 text-slate-300 hover:text-white"
          )}
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="w-5 h-5 bg-blue-500 rounded-full text-xs flex items-center justify-center text-white">
              {(selectedSector ? 1 : 0) + (selectedCountry ? 1 : 0)}
            </span>
          )}
          <ChevronDown className={cn("w-4 h-4 transition-transform", showFilters && "rotate-180")} />
        </button>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-slate-800">
                Sort: {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* Expanded Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-slate-700/50 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sector Filter */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">Sector</label>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
                >
                  <option value="" className="bg-slate-800">All Sectors</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector} className="bg-slate-800">
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country Filter */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer"
                >
                  <option value="" className="bg-slate-800">All Countries</option>
                  {countries.map((country) => (
                    <option key={country} value={country} className="bg-slate-800">
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
