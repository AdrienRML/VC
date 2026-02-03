"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  GraduationCap,
  Briefcase,
  Target,
  Code,
  TrendingUp,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  ChevronRight,
  Building2,
  Calculator,
  Lightbulb,
} from "lucide-react";

const timeline = [
  {
    year: "2020-2023",
    title: "Accountant & Financial Analyst",
    company: "Chabert Expertise",
    description: "Built strong foundation in financial analysis, auditing, and company valuation. Worked with 50+ SMEs on financial reporting and strategic planning.",
    icon: Calculator,
  },
  {
    year: "2023",
    title: "Bocconi VC/PE Certification",
    company: "SDA Bocconi School of Management",
    description: "Intensive program covering deal structuring, due diligence, portfolio management, and exit strategies in venture capital and private equity.",
    icon: GraduationCap,
  },
  {
    year: "2024-Present",
    title: "Master in Management",
    company: "EDHEC Business School",
    description: "Specializing in entrepreneurship and finance. Building technical skills while deepening VC/startup ecosystem knowledge.",
    icon: Building2,
  },
];

const skills = [
  { category: "Finance", items: ["Financial Modeling", "Valuation", "Due Diligence", "M&A Analysis"] },
  { category: "Technical", items: ["Python", "React/Next.js", "Data Analysis", "SQL"] },
  { category: "VC Knowledge", items: ["Deal Sourcing", "Portfolio Strategy", "Market Sizing", "Startup Metrics"] },
];

const interests = [
  "AI/ML Startups",
  "European Tech Ecosystem",
  "Deep Tech",
  "SaaS Business Models",
  "Climate Tech",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-4xl font-bold">
                AR
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Adrien Rimmelin</h1>
                <p className="text-xl text-slate-400">
                  Finance Professional → Aspiring VC
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
                  <a
                    href="https://linkedin.com/in/adrien-rimmelin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700/50 rounded-lg hover:bg-blue-600/30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href="https://github.com/AdrienRML"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-slate-300" />
                  </a>
                  <a
                    href="mailto:adrien.rimmelin@edhec.com"
                    className="p-2 bg-slate-700/50 rounded-lg hover:bg-emerald-600/30 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-500" />
                About Me
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  I&apos;m a finance professional transitioning into venture capital, combining a strong
                  foundation in accounting and financial analysis with a growing passion for
                  technology and startups.
                </p>
                <p>
                  <strong className="text-white">Why an accountant built a VC prediction tool?</strong>{" "}
                  My background in financial analysis gives me a unique perspective on evaluating
                  companies. I understand the numbers behind successful businesses—unit economics,
                  cash flow dynamics, and the financial signals that indicate sustainable growth.
                </p>
                <p>
                  This project combines my analytical skills with my interest in the startup
                  ecosystem. By building Unicorn Predictor, I&apos;m demonstrating both technical
                  capabilities and my understanding of what makes startups succeed.
                </p>
              </div>
            </motion.div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-500" />
                My Journey
              </h2>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative flex gap-4">
                    {/* Timeline Line */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-5 top-12 w-0.5 h-full bg-slate-700" />
                    )}

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 z-10">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>

                    {/* Content */}
                    <div className="pb-6">
                      <span className="text-sm text-blue-400 font-medium">{item.year}</span>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.company}</p>
                      <p className="text-slate-300 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why VC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-500" />
                Why Venture Capital?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-white">Impact at Scale</h3>
                    <p className="text-sm text-slate-400">
                      VC enables me to support founders building transformative companies that
                      shape the future of industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-white">Intersection of Finance & Tech</h3>
                    <p className="text-sm text-slate-400">
                      Combining deep financial analysis with understanding cutting-edge technology
                      and market dynamics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-white">European Tech Renaissance</h3>
                    <p className="text-sm text-slate-400">
                      Excited to be part of Europe&apos;s growing startup ecosystem, especially in
                      France with companies like Mistral AI leading the way.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* This Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-500" />
                About This Project
              </h2>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Unicorn Predictor is a showcase project that demonstrates my ability to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Build production-quality web applications with modern tech stack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Apply financial analysis frameworks to startup evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Research and synthesize data on European startup ecosystem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                    <span>Create intuitive data visualizations for complex metrics</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-blue-600/10 rounded-lg border border-blue-500/30">
                  <h3 className="font-medium text-white mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Tech Stack
                  </h3>
                  <p className="text-sm text-slate-300">
                    Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Recharts · Vercel
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <p className="text-sm text-slate-400 mb-2">{skillGroup.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                Investment Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6 border border-blue-500/30"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Let&apos;s Connect</h3>
              <p className="text-sm text-slate-300 mb-4">
                Interested in discussing deals, startup opportunities, or potential
                collaboration? I&apos;d love to hear from you.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:adrien.rimmelin@edhec.com"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://linkedin.com/in/adrien-rimmelin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-500" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-white">EDHEC Business School</p>
                  <p className="text-sm text-slate-400">Master in Management</p>
                  <p className="text-xs text-slate-500">2024 - Present</p>
                </div>
                <div>
                  <p className="font-medium text-white">SDA Bocconi</p>
                  <p className="text-sm text-slate-400">VC/PE Certification</p>
                  <p className="text-xs text-slate-500">2023</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
