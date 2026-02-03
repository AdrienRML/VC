"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScoreGaugeProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function ScoreGauge({ score, size = "md", showLabel = true, className }: ScoreGaugeProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-lg",
    lg: "w-24 h-24 text-2xl",
  };

  const strokeWidth = size === "sm" ? 3 : size === "md" ? 4 : 5;
  const radius = size === "sm" ? 20 : size === "md" ? 28 : 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 85) return { stroke: "#10B981", bg: "rgba(16, 185, 129, 0.1)" };
    if (score >= 70) return { stroke: "#3B82F6", bg: "rgba(59, 130, 246, 0.1)" };
    if (score >= 50) return { stroke: "#F59E0B", bg: "rgba(245, 158, 11, 0.1)" };
    return { stroke: "#EF4444", bg: "rgba(239, 68, 68, 0.1)" };
  };

  const colors = getScoreColor(score);
  const viewBoxSize = (radius + strokeWidth) * 2;
  const center = radius + strokeWidth;

  return (
    <div className={cn("relative flex items-center justify-center", sizeClasses[size], className)}>
      <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill={colors.bg}
          stroke="rgba(51, 65, 85, 0.5)"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={colors.stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      {showLabel && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center font-bold font-mono"
          style={{ color: colors.stroke }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {score}
        </motion.div>
      )}
    </div>
  );
}
