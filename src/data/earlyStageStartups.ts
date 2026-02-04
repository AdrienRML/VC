import { Startup } from "./startups";

export const earlyStageStartups: Startup[] = [
  {
    id: "augment",
    name: "Augment",
    logo: "https://logo.clearbit.com/augmentcode.com",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2022,
    currentValuation: 50_000_000,
    totalFunding: 12_000_000,
    lastRound: {
      type: "Seed",
      amount: 12_000_000,
      date: "2023-09",
      investors: ["Index Ventures", "Creandum"]
    },
    scores: {
      team: 88,
      traction: 72,
      market: 90,
      funding: 78,
      momentum: 82,
      overall: 82
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 18,
      customers: 50,
      revenue: "$500K ARR"
    },
    description: "AI-powered code assistant helping developers write better code faster with context-aware suggestions.",
    mission: "To augment developer productivity through intelligent code assistance.",
    products: ["Code Assistant", "IDE Extensions", "Team Analytics"],
    founders: [
      { name: "Founder", role: "CEO", background: "Ex-Google engineer" }
    ],
    highlights: ["Strong AI team", "Growing developer adoption", "Competitive AI coding space"]
  },
  {
    id: "bsport",
    name: "Bsport",
    logo: "https://logo.clearbit.com/bsport.io",
    sector: "SaaS",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 45_000_000,
    totalFunding: 8_000_000,
    lastRound: {
      type: "Series A",
      amount: 6_000_000,
      date: "2023-06",
      investors: ["Frst", "Business Angels"]
    },
    scores: {
      team: 80,
      traction: 78,
      market: 75,
      funding: 72,
      momentum: 76,
      overall: 76
    },
    metrics: {
      teamSize: 40,
      monthlyGrowth: 12,
      customers: 2000,
      revenue: "$3M ARR"
    },
    description: "All-in-one management software for fitness and wellness studios.",
    mission: "To empower fitness studios with the best management tools.",
    products: ["Studio Management", "Booking System", "Payment Processing", "Member App"],
    founders: [
      { name: "Founder", role: "CEO", background: "Fitness industry veteran" }
    ],
    highlights: ["2000+ studios", "Strong retention", "European expansion"]
  },
  {
    id: "catalog",
    name: "Catalog",
    logo: "https://logo.clearbit.com/catalog.io",
    sector: "E-commerce",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 30_000_000,
    totalFunding: 5_000_000,
    lastRound: {
      type: "Seed",
      amount: 5_000_000,
      date: "2023-03",
      investors: ["Seedcamp", "Kima Ventures"]
    },
    scores: {
      team: 78,
      traction: 70,
      market: 80,
      funding: 70,
      momentum: 74,
      overall: 74
    },
    metrics: {
      teamSize: 18,
      monthlyGrowth: 15,
      customers: 150,
      revenue: "$800K ARR"
    },
    description: "Product information management platform for e-commerce brands.",
    mission: "To simplify product data management for modern commerce.",
    products: ["PIM Platform", "Data Enrichment", "Channel Distribution"],
    founders: [
      { name: "Founder", role: "CEO", background: "Ex-e-commerce executive" }
    ],
    highlights: ["Fast-growing PIM market", "Strong product", "B2B focus"]
  },
  {
    id: "comeonlaw",
    name: "ComeOnLaw",
    logo: "https://logo.clearbit.com/comeonlaw.com",
    sector: "LegalTech",
    country: "France",
    city: "Paris",
    founded: 2018,
    currentValuation: 25_000_000,
    totalFunding: 4_500_000,
    lastRound: {
      type: "Series A",
      amount: 3_500_000,
      date: "2023-01",
      investors: ["LegalTech Fund", "Angels"]
    },
    scores: {
      team: 76,
      traction: 72,
      market: 78,
      funding: 68,
      momentum: 70,
      overall: 73
    },
    metrics: {
      teamSize: 22,
      monthlyGrowth: 10,
      customers: 300,
      revenue: "$1.2M ARR"
    },
    description: "Legal practice management software for law firms.",
    mission: "To modernize legal practice with intuitive software.",
    products: ["Case Management", "Time Tracking", "Billing", "Document Management"],
    founders: [
      { name: "Founder", role: "CEO", background: "Former lawyer" }
    ],
    highlights: ["300+ law firms", "Strong NPS", "Vertical SaaS"]
  },
  {
    id: "convelio",
    name: "Convelio",
    logo: "https://logo.clearbit.com/convelio.com",
    sector: "Logistics",
    country: "France",
    city: "Paris",
    founded: 2017,
    currentValuation: 60_000_000,
    totalFunding: 18_000_000,
    lastRound: {
      type: "Series A",
      amount: 12_000_000,
      date: "2022-10",
      investors: ["Alven", "BPI France"]
    },
    scores: {
      team: 82,
      traction: 80,
      market: 76,
      funding: 78,
      momentum: 78,
      overall: 79
    },
    metrics: {
      teamSize: 60,
      monthlyGrowth: 14,
      customers: 500,
      revenue: "$8M ARR"
    },
    description: "Art logistics platform specializing in fine art and collectibles shipping.",
    mission: "To make art logistics simple, transparent, and accessible.",
    products: ["Art Shipping", "Insurance", "Customs", "White Glove Service"],
    founders: [
      { name: "Edouard Gouin", role: "CEO", background: "Art market expert" }
    ],
    highlights: ["Niche market leader", "High-value transactions", "Global network"]
  },
  {
    id: "corma",
    name: "Corma",
    logo: "https://logo.clearbit.com/corma.io",
    sector: "Enterprise Software",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 35_000_000,
    totalFunding: 7_000_000,
    lastRound: {
      type: "Seed",
      amount: 7_000_000,
      date: "2023-05",
      investors: ["Balderton Capital", "La Famiglia"]
    },
    scores: {
      team: 84,
      traction: 74,
      market: 82,
      funding: 76,
      momentum: 80,
      overall: 79
    },
    metrics: {
      teamSize: 20,
      monthlyGrowth: 20,
      customers: 80,
      revenue: "$1M ARR"
    },
    description: "SaaS management platform helping companies optimize their software spend.",
    mission: "To bring visibility and control to SaaS spending.",
    products: ["SaaS Discovery", "License Management", "Cost Optimization"],
    founders: [
      { name: "Founder", role: "CEO", background: "Ex-McKinsey" }
    ],
    highlights: ["Hot SaaS management space", "Strong investors", "Fast growth"]
  },
  {
    id: "dastra",
    name: "Dastra",
    logo: "https://logo.clearbit.com/dastra.eu",
    sector: "Enterprise Software",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 20_000_000,
    totalFunding: 3_000_000,
    lastRound: {
      type: "Seed",
      amount: 3_000_000,
      date: "2022-06",
      investors: ["Axeleo Capital", "Angels"]
    },
    scores: {
      team: 76,
      traction: 74,
      market: 80,
      funding: 66,
      momentum: 72,
      overall: 74
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 12,
      customers: 400,
      revenue: "$1.5M ARR"
    },
    description: "GDPR compliance and data privacy management platform.",
    mission: "To make data privacy compliance simple for all companies.",
    products: ["GDPR Compliance", "Data Mapping", "Cookie Consent", "DPO Tools"],
    founders: [
      { name: "Founder", role: "CEO", background: "Privacy expert" }
    ],
    highlights: ["Growing privacy market", "Regulatory tailwinds", "400+ customers"]
  },
  {
    id: "deskare",
    name: "Deskare",
    logo: "https://logo.clearbit.com/deskare.io",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 25_000_000,
    totalFunding: 5_000_000,
    lastRound: {
      type: "Seed",
      amount: 5_000_000,
      date: "2023-02",
      investors: ["Frst", "Kima Ventures"]
    },
    scores: {
      team: 78,
      traction: 76,
      market: 78,
      funding: 72,
      momentum: 78,
      overall: 76
    },
    metrics: {
      teamSize: 20,
      monthlyGrowth: 15,
      customers: 200,
      revenue: "$1M ARR"
    },
    description: "Hybrid work management platform for desk booking and office planning.",
    mission: "To make hybrid work seamless for modern companies.",
    products: ["Desk Booking", "Meeting Rooms", "Office Analytics", "Employee App"],
    founders: [
      { name: "Founder", role: "CEO", background: "PropTech background" }
    ],
    highlights: ["Hybrid work trend", "Strong retention", "Growing demand"]
  },
  {
    id: "dext",
    name: "Dext",
    logo: "https://logo.clearbit.com/dext.com",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2010,
    currentValuation: 200_000_000,
    totalFunding: 50_000_000,
    lastRound: {
      type: "Growth",
      amount: 30_000_000,
      date: "2022-03",
      investors: ["PSG", "Highland Europe"]
    },
    scores: {
      team: 84,
      traction: 88,
      market: 82,
      funding: 84,
      momentum: 78,
      overall: 83
    },
    metrics: {
      teamSize: 300,
      monthlyGrowth: 8,
      customers: 15000,
      revenue: "$40M ARR"
    },
    description: "Automated bookkeeping and expense management for accountants and businesses.",
    mission: "To automate bookkeeping and empower accountants.",
    products: ["Receipt Capture", "Expense Management", "Accounting Integration"],
    founders: [
      { name: "Founder", role: "CEO", background: "Fintech veteran" }
    ],
    highlights: ["15K+ customers", "Strong accountant network", "Profitable growth"]
  },
  {
    id: "doctrine-legaltech",
    name: "Doctrine",
    logo: "https://logo.clearbit.com/doctrine.fr",
    sector: "LegalTech",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 80_000_000,
    totalFunding: 15_000_000,
    lastRound: {
      type: "Series B",
      amount: 10_000_000,
      date: "2023-06",
      investors: ["Otium Capital", "Bpifrance"]
    },
    scores: {
      team: 82,
      traction: 80,
      market: 78,
      funding: 76,
      momentum: 80,
      overall: 79
    },
    metrics: {
      teamSize: 80,
      monthlyGrowth: 10,
      customers: 2000,
      revenue: "$8M ARR"
    },
    description: "AI-powered legal research platform making case law accessible to lawyers.",
    mission: "To democratize access to legal information.",
    products: ["Legal Search", "Case Law Database", "Legal Analytics"],
    founders: [
      { name: "Nicolas Bustamante", role: "CEO", background: "Lawyer turned entrepreneur" }
    ],
    highlights: ["Market leader in France", "AI-first approach", "Strong moat"]
  },
  {
    id: "e-testing",
    name: "E-testing",
    logo: "https://logo.clearbit.com/e-testing.fr",
    sector: "HR Tech",
    country: "France",
    city: "Lyon",
    founded: 2015,
    currentValuation: 15_000_000,
    totalFunding: 2_500_000,
    lastRound: {
      type: "Seed",
      amount: 2_500_000,
      date: "2022-09",
      investors: ["Regional VCs", "Angels"]
    },
    scores: {
      team: 72,
      traction: 74,
      market: 76,
      funding: 64,
      momentum: 68,
      overall: 71
    },
    metrics: {
      teamSize: 20,
      monthlyGrowth: 8,
      customers: 300,
      revenue: "$1.2M ARR"
    },
    description: "Online assessment platform for recruitment and skill evaluation.",
    mission: "To help companies hire better through objective assessments.",
    products: ["Skills Tests", "Personality Assessments", "Video Interviews"],
    founders: [
      { name: "Founder", role: "CEO", background: "HR technology" }
    ],
    highlights: ["300+ customers", "Niche expertise", "Strong in France"]
  },
  {
    id: "gitguardian",
    name: "GitGuardian",
    logo: "https://logo.clearbit.com/gitguardian.com",
    sector: "Cybersecurity",
    country: "France",
    city: "Paris",
    founded: 2017,
    currentValuation: 250_000_000,
    totalFunding: 56_000_000,
    lastRound: {
      type: "Series B",
      amount: 44_000_000,
      date: "2022-03",
      investors: ["Eurazeo", "Sapphire Ventures", "Balderton"]
    },
    scores: {
      team: 90,
      traction: 86,
      market: 92,
      funding: 86,
      momentum: 88,
      overall: 88
    },
    metrics: {
      teamSize: 120,
      monthlyGrowth: 12,
      customers: 400,
      revenue: "$15M ARR"
    },
    description: "Code security platform detecting secrets and sensitive data in source code.",
    mission: "To help developers secure their code from secrets exposure.",
    products: ["Secret Detection", "Code Security", "Remediation", "CI/CD Integration"],
    founders: [
      { name: "Eric Fourrier", role: "CEO", background: "Security researcher" },
      { name: "Jérémy Thomas", role: "CTO", background: "Developer tools expert" }
    ],
    highlights: ["Leader in secrets detection", "Strong developer adoption", "Growing security market"]
  },
  {
    id: "grace",
    name: "Grace",
    logo: "https://logo.clearbit.com/grace.health",
    sector: "HealthTech",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 20_000_000,
    totalFunding: 4_000_000,
    lastRound: {
      type: "Seed",
      amount: 4_000_000,
      date: "2023-04",
      investors: ["Elaia Partners", "Angels"]
    },
    scores: {
      team: 78,
      traction: 68,
      market: 84,
      funding: 70,
      momentum: 76,
      overall: 75
    },
    metrics: {
      teamSize: 15,
      monthlyGrowth: 20,
      customers: 50,
      revenue: "$300K ARR"
    },
    description: "Digital health platform for women's health and fertility tracking.",
    mission: "To empower women with personalized health insights.",
    products: ["Fertility Tracking", "Health Monitoring", "Telemedicine"],
    founders: [
      { name: "Founder", role: "CEO", background: "Healthcare entrepreneur" }
    ],
    highlights: ["Growing femtech market", "Strong user engagement", "B2B2C model"]
  },
  {
    id: "hello-watt",
    name: "Hello Watt",
    logo: "https://logo.clearbit.com/hellowatt.fr",
    sector: "CleanTech",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 70_000_000,
    totalFunding: 16_000_000,
    lastRound: {
      type: "Series A",
      amount: 12_000_000,
      date: "2023-01",
      investors: ["Ring Capital", "Demeter"]
    },
    scores: {
      team: 82,
      traction: 84,
      market: 88,
      funding: 78,
      momentum: 84,
      overall: 83
    },
    metrics: {
      teamSize: 80,
      monthlyGrowth: 15,
      customers: 100000,
      revenue: "$8M ARR"
    },
    description: "Energy management platform helping households reduce consumption and costs.",
    mission: "To accelerate energy transition for every household.",
    products: ["Energy Analysis", "Solar Installation", "Renovation", "Heat Pump"],
    founders: [
      { name: "Sylvain Le Falher", role: "CEO", background: "Energy sector expert" }
    ],
    highlights: ["100K+ users", "Energy crisis tailwinds", "Full-stack model"]
  },
  {
    id: "impulse-analytics",
    name: "Impulse Analytics",
    logo: "https://logo.clearbit.com/impulse-analytics.com",
    sector: "Analytics",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 18_000_000,
    totalFunding: 3_000_000,
    lastRound: {
      type: "Seed",
      amount: 3_000_000,
      date: "2022-11",
      investors: ["Alven", "Angels"]
    },
    scores: {
      team: 76,
      traction: 72,
      market: 78,
      funding: 68,
      momentum: 74,
      overall: 74
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 12,
      customers: 100,
      revenue: "$1.5M ARR"
    },
    description: "Marketing analytics platform for e-commerce brands.",
    mission: "To help brands make data-driven marketing decisions.",
    products: ["Attribution", "Customer Analytics", "Marketing Mix Modeling"],
    founders: [
      { name: "Founder", role: "CEO", background: "Marketing analytics" }
    ],
    highlights: ["Growing e-commerce analytics market", "Strong product", "100+ brands"]
  },
  {
    id: "jd2m",
    name: "JD2M",
    logo: "https://logo.clearbit.com/jd2m.com",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2015,
    currentValuation: 25_000_000,
    totalFunding: 6_000_000,
    lastRound: {
      type: "Series A",
      amount: 4_000_000,
      date: "2022-06",
      investors: ["Fintech VCs", "Angels"]
    },
    scores: {
      team: 74,
      traction: 76,
      market: 74,
      funding: 70,
      momentum: 70,
      overall: 73
    },
    metrics: {
      teamSize: 35,
      monthlyGrowth: 8,
      customers: 5000,
      revenue: "$3M ARR"
    },
    description: "Accounting and administrative services platform for freelancers.",
    mission: "To simplify the life of independent workers.",
    products: ["Accounting", "Tax Filing", "Administrative Support"],
    founders: [
      { name: "Founder", role: "CEO", background: "Freelance economy expert" }
    ],
    highlights: ["5K+ freelancers", "Strong retention", "Growing gig economy"]
  },
  {
    id: "jobo",
    name: "Jobo",
    logo: "https://logo.clearbit.com/jobo.ai",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 15_000_000,
    totalFunding: 2_500_000,
    lastRound: {
      type: "Seed",
      amount: 2_500_000,
      date: "2023-03",
      investors: ["Seedcamp", "Angels"]
    },
    scores: {
      team: 76,
      traction: 68,
      market: 80,
      funding: 68,
      momentum: 74,
      overall: 73
    },
    metrics: {
      teamSize: 12,
      monthlyGrowth: 18,
      customers: 60,
      revenue: "$400K ARR"
    },
    description: "AI-powered recruitment platform automating candidate sourcing.",
    mission: "To revolutionize talent acquisition with AI.",
    products: ["AI Sourcing", "Candidate Matching", "Outreach Automation"],
    founders: [
      { name: "Founder", role: "CEO", background: "Recruitment tech" }
    ],
    highlights: ["AI-first approach", "Fast early growth", "Hot recruiting market"]
  },
  {
    id: "jod",
    name: "JOD",
    logo: "https://logo.clearbit.com/jod.com",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 20_000_000,
    totalFunding: 4_000_000,
    lastRound: {
      type: "Seed",
      amount: 4_000_000,
      date: "2023-01",
      investors: ["HR Tech Fund", "Angels"]
    },
    scores: {
      team: 78,
      traction: 72,
      market: 78,
      funding: 70,
      momentum: 76,
      overall: 75
    },
    metrics: {
      teamSize: 18,
      monthlyGrowth: 14,
      customers: 100,
      revenue: "$800K ARR"
    },
    description: "Flexible staffing platform connecting businesses with temporary workers.",
    mission: "To make flexible work accessible and fair.",
    products: ["Staffing Platform", "Worker App", "Payroll Integration"],
    founders: [
      { name: "Founder", role: "CEO", background: "Staffing industry" }
    ],
    highlights: ["Growing gig economy", "Two-sided marketplace", "Strong unit economics"]
  },
  {
    id: "kheops",
    name: "Kheops",
    logo: "https://logo.clearbit.com/kheops.ai",
    sector: "HealthTech",
    country: "France",
    city: "Paris",
    founded: 2018,
    currentValuation: 30_000_000,
    totalFunding: 8_000_000,
    lastRound: {
      type: "Series A",
      amount: 6_000_000,
      date: "2023-02",
      investors: ["Elaia", "Serena"]
    },
    scores: {
      team: 82,
      traction: 76,
      market: 86,
      funding: 76,
      momentum: 78,
      overall: 80
    },
    metrics: {
      teamSize: 30,
      monthlyGrowth: 12,
      customers: 80,
      revenue: "$2M ARR"
    },
    description: "Medical imaging platform for secure sharing and AI analysis.",
    mission: "To accelerate medical imaging workflows with AI.",
    products: ["Image Sharing", "AI Diagnostics", "Collaboration Tools"],
    founders: [
      { name: "Founder", role: "CEO", background: "Medical imaging expert" }
    ],
    highlights: ["Strong clinical validation", "Growing AI imaging market", "Hospital adoption"]
  },
  {
    id: "lifeaz",
    name: "Lifeaz",
    logo: "https://logo.clearbit.com/lifeaz.co",
    sector: "HealthTech",
    country: "France",
    city: "Paris",
    founded: 2017,
    currentValuation: 35_000_000,
    totalFunding: 9_000_000,
    lastRound: {
      type: "Series A",
      amount: 7_000_000,
      date: "2022-12",
      investors: ["XAnge", "Isai"]
    },
    scores: {
      team: 80,
      traction: 78,
      market: 82,
      funding: 76,
      momentum: 78,
      overall: 79
    },
    metrics: {
      teamSize: 40,
      monthlyGrowth: 12,
      customers: 5000,
      revenue: "$3M ARR"
    },
    description: "First-aid training platform with connected defibrillators.",
    mission: "To save lives by making first-aid accessible to everyone.",
    products: ["Defibrillators", "Training App", "Emergency Network"],
    founders: [
      { name: "Founder", role: "CEO", background: "Emergency medicine" }
    ],
    highlights: ["Life-saving mission", "B2B2C model", "Strong social impact"]
  },
  {
    id: "lokki",
    name: "Lokki",
    logo: "https://logo.clearbit.com/lokki.rent",
    sector: "SaaS",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 25_000_000,
    totalFunding: 5_000_000,
    lastRound: {
      type: "Seed",
      amount: 5_000_000,
      date: "2023-04",
      investors: ["Partech", "Angels"]
    },
    scores: {
      team: 78,
      traction: 76,
      market: 78,
      funding: 72,
      momentum: 78,
      overall: 76
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 14,
      customers: 300,
      revenue: "$1.5M ARR"
    },
    description: "Rental management software for equipment and vehicle rental businesses.",
    mission: "To digitize the rental industry.",
    products: ["Rental Management", "Booking", "Fleet Tracking", "Payments"],
    founders: [
      { name: "Founder", role: "CEO", background: "Rental industry" }
    ],
    highlights: ["Vertical SaaS", "Underserved market", "Strong product-market fit"]
  },
  {
    id: "maggy",
    name: "Maggy",
    logo: "https://logo.clearbit.com/maggy.ai",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2022,
    currentValuation: 12_000_000,
    totalFunding: 2_000_000,
    lastRound: {
      type: "Pre-Seed",
      amount: 2_000_000,
      date: "2023-06",
      investors: ["Kima Ventures", "Angels"]
    },
    scores: {
      team: 80,
      traction: 64,
      market: 84,
      funding: 66,
      momentum: 78,
      overall: 74
    },
    metrics: {
      teamSize: 8,
      monthlyGrowth: 25,
      customers: 30,
      revenue: "$150K ARR"
    },
    description: "AI assistant for sales teams automating prospecting and outreach.",
    mission: "To supercharge sales teams with AI.",
    products: ["AI Sales Assistant", "Lead Generation", "Email Automation"],
    founders: [
      { name: "Founder", role: "CEO", background: "Sales tech" }
    ],
    highlights: ["Hot AI sales space", "Early traction", "Strong team"]
  },
  {
    id: "mantra",
    name: "Mantra",
    logo: "https://logo.clearbit.com/mantra.ms",
    sector: "Cybersecurity",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 30_000_000,
    totalFunding: 6_000_000,
    lastRound: {
      type: "Seed",
      amount: 6_000_000,
      date: "2023-03",
      investors: ["Partech", "Bpifrance"]
    },
    scores: {
      team: 84,
      traction: 74,
      market: 88,
      funding: 74,
      momentum: 80,
      overall: 80
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 16,
      customers: 100,
      revenue: "$1.5M ARR"
    },
    description: "Cybersecurity awareness and phishing simulation platform.",
    mission: "To make employees the first line of cyber defense.",
    products: ["Phishing Simulation", "Security Training", "Risk Assessment"],
    founders: [
      { name: "Founder", role: "CEO", background: "Cybersecurity expert" }
    ],
    highlights: ["Growing security awareness market", "Strong product", "100+ customers"]
  },
  {
    id: "merciyanis",
    name: "MerciYanis",
    logo: "https://logo.clearbit.com/merciyanis.com",
    sector: "HR Tech",
    country: "France",
    city: "Bordeaux",
    founded: 2018,
    currentValuation: 35_000_000,
    totalFunding: 8_000_000,
    lastRound: {
      type: "Series A",
      amount: 6_000_000,
      date: "2023-02",
      investors: ["OneRagtime", "Frst"]
    },
    scores: {
      team: 78,
      traction: 80,
      market: 76,
      funding: 74,
      momentum: 78,
      overall: 77
    },
    metrics: {
      teamSize: 45,
      monthlyGrowth: 12,
      customers: 400,
      revenue: "$3M ARR"
    },
    description: "Workplace experience platform for facility and service management.",
    mission: "To improve the daily experience of employees at work.",
    products: ["Service Requests", "Facility Management", "Employee App"],
    founders: [
      { name: "Founder", role: "CEO", background: "Facility management" }
    ],
    highlights: ["400+ companies", "Strong retention", "Workplace experience trend"]
  },
  {
    id: "myc",
    name: "MyC",
    logo: "https://logo.clearbit.com/myc.co",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 18_000_000,
    totalFunding: 3_500_000,
    lastRound: {
      type: "Seed",
      amount: 3_500_000,
      date: "2023-01",
      investors: ["Fintech Angels", "Kima"]
    },
    scores: {
      team: 76,
      traction: 72,
      market: 78,
      funding: 68,
      momentum: 74,
      overall: 74
    },
    metrics: {
      teamSize: 18,
      monthlyGrowth: 14,
      customers: 150,
      revenue: "$800K ARR"
    },
    description: "Financial planning and budgeting app for individuals.",
    mission: "To help everyone achieve financial wellness.",
    products: ["Budgeting", "Savings Goals", "Financial Insights"],
    founders: [
      { name: "Founder", role: "CEO", background: "Personal finance" }
    ],
    highlights: ["Growing PFM market", "Strong user engagement", "B2C model"]
  },
  {
    id: "mytraffic",
    name: "MyTraffic",
    logo: "https://logo.clearbit.com/mytraffic.io",
    sector: "Analytics",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 80_000_000,
    totalFunding: 20_000_000,
    lastRound: {
      type: "Series B",
      amount: 15_000_000,
      date: "2023-05",
      investors: ["Highland Europe", "Alven"]
    },
    scores: {
      team: 84,
      traction: 82,
      market: 80,
      funding: 80,
      momentum: 80,
      overall: 81
    },
    metrics: {
      teamSize: 80,
      monthlyGrowth: 10,
      customers: 400,
      revenue: "$10M ARR"
    },
    description: "Location intelligence platform for retail and real estate.",
    mission: "To help businesses make smarter location decisions.",
    products: ["Foot Traffic", "Site Selection", "Competitive Intelligence"],
    founders: [
      { name: "Founder", role: "CEO", background: "Data analytics" }
    ],
    highlights: ["400+ customers", "Strong data moat", "European expansion"]
  },
  {
    id: "najar",
    name: "Najar",
    logo: "https://logo.clearbit.com/najar.io",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2022,
    currentValuation: 15_000_000,
    totalFunding: 3_000_000,
    lastRound: {
      type: "Seed",
      amount: 3_000_000,
      date: "2023-07",
      investors: ["Elaia", "Angels"]
    },
    scores: {
      team: 82,
      traction: 66,
      market: 86,
      funding: 70,
      momentum: 78,
      overall: 76
    },
    metrics: {
      teamSize: 12,
      monthlyGrowth: 20,
      customers: 40,
      revenue: "$300K ARR"
    },
    description: "AI-powered document processing and extraction platform.",
    mission: "To automate document workflows with AI.",
    products: ["Document Processing", "Data Extraction", "Workflow Automation"],
    founders: [
      { name: "Founder", role: "CEO", background: "AI research" }
    ],
    highlights: ["Strong AI team", "Growing IDP market", "Early enterprise traction"]
  },
  {
    id: "neuralk-ai",
    name: "Neuralk-AI",
    logo: "https://logo.clearbit.com/neuralk.ai",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 20_000_000,
    totalFunding: 4_000_000,
    lastRound: {
      type: "Seed",
      amount: 4_000_000,
      date: "2023-04",
      investors: ["Breega", "Kima"]
    },
    scores: {
      team: 84,
      traction: 70,
      market: 88,
      funding: 72,
      momentum: 80,
      overall: 79
    },
    metrics: {
      teamSize: 15,
      monthlyGrowth: 18,
      customers: 50,
      revenue: "$600K ARR"
    },
    description: "Enterprise AI platform for natural language understanding and automation.",
    mission: "To bring AI understanding to enterprise workflows.",
    products: ["NLP Engine", "Conversational AI", "Process Automation"],
    founders: [
      { name: "Founder", role: "CEO", background: "NLP researcher" }
    ],
    highlights: ["Strong technical team", "Enterprise focus", "Growing AI market"]
  },
  {
    id: "nextories",
    name: "Nextories",
    logo: "https://logo.clearbit.com/nextories.com",
    sector: "Logistics",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 25_000_000,
    totalFunding: 5_000_000,
    lastRound: {
      type: "Seed",
      amount: 5_000_000,
      date: "2022-10",
      investors: ["Partech", "Angels"]
    },
    scores: {
      team: 78,
      traction: 76,
      market: 78,
      funding: 72,
      momentum: 74,
      overall: 76
    },
    metrics: {
      teamSize: 30,
      monthlyGrowth: 12,
      customers: 500,
      revenue: "$2M ARR"
    },
    description: "Moving and relocation platform connecting customers with movers.",
    mission: "To make moving stress-free and transparent.",
    products: ["Moving Marketplace", "Quote Comparison", "Booking Platform"],
    founders: [
      { name: "Founder", role: "CEO", background: "Marketplace expert" }
    ],
    highlights: ["Large fragmented market", "Strong network effects", "Growing revenue"]
  },
  {
    id: "paladin",
    name: "Paladin",
    logo: "https://logo.clearbit.com/paladin.security",
    sector: "Cybersecurity",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 22_000_000,
    totalFunding: 4_500_000,
    lastRound: {
      type: "Seed",
      amount: 4_500_000,
      date: "2023-02",
      investors: ["Axeleo", "Bpifrance"]
    },
    scores: {
      team: 80,
      traction: 72,
      market: 86,
      funding: 72,
      momentum: 78,
      overall: 78
    },
    metrics: {
      teamSize: 20,
      monthlyGrowth: 16,
      customers: 80,
      revenue: "$1M ARR"
    },
    description: "Cloud security platform for vulnerability management.",
    mission: "To protect cloud infrastructure from threats.",
    products: ["Vulnerability Scanning", "Cloud Security", "Compliance"],
    founders: [
      { name: "Founder", role: "CEO", background: "Cloud security" }
    ],
    highlights: ["Growing cloud security market", "Strong product", "Fast growth"]
  },
  {
    id: "permute",
    name: "Permute",
    logo: "https://logo.clearbit.com/permute.co",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 18_000_000,
    totalFunding: 3_500_000,
    lastRound: {
      type: "Seed",
      amount: 3_500_000,
      date: "2023-05",
      investors: ["Singular", "Angels"]
    },
    scores: {
      team: 82,
      traction: 68,
      market: 84,
      funding: 70,
      momentum: 78,
      overall: 76
    },
    metrics: {
      teamSize: 14,
      monthlyGrowth: 18,
      customers: 35,
      revenue: "$400K ARR"
    },
    description: "AI platform for automated data transformation and preparation.",
    mission: "To automate data engineering with AI.",
    products: ["Data Transformation", "ETL Automation", "Data Quality"],
    founders: [
      { name: "Founder", role: "CEO", background: "Data engineering" }
    ],
    highlights: ["Hot data engineering space", "AI-first approach", "Strong team"]
  },
  {
    id: "primelis",
    name: "Primelis",
    logo: "https://logo.clearbit.com/primelis.com",
    sector: "Marketing",
    country: "France",
    city: "Paris",
    founded: 2009,
    currentValuation: 40_000_000,
    totalFunding: 8_000_000,
    lastRound: {
      type: "Growth",
      amount: 8_000_000,
      date: "2022-06",
      investors: ["Naxicap", "Management"]
    },
    scores: {
      team: 78,
      traction: 82,
      market: 76,
      funding: 74,
      momentum: 72,
      overall: 77
    },
    metrics: {
      teamSize: 100,
      monthlyGrowth: 8,
      customers: 300,
      revenue: "$12M ARR"
    },
    description: "SEO and digital marketing agency with proprietary technology.",
    mission: "To deliver measurable SEO results for brands.",
    products: ["SEO Services", "Content Strategy", "Analytics Platform"],
    founders: [
      { name: "Founder", role: "CEO", background: "SEO expert" }
    ],
    highlights: ["300+ clients", "Strong expertise", "Profitable"]
  },
  {
    id: "protected",
    name: "Protected",
    logo: "https://logo.clearbit.com/protected.eu",
    sector: "Insurtech",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 20_000_000,
    totalFunding: 4_000_000,
    lastRound: {
      type: "Seed",
      amount: 4_000_000,
      date: "2023-03",
      investors: ["Insurtech VCs", "Angels"]
    },
    scores: {
      team: 78,
      traction: 72,
      market: 80,
      funding: 70,
      momentum: 76,
      overall: 75
    },
    metrics: {
      teamSize: 20,
      monthlyGrowth: 14,
      customers: 200,
      revenue: "$1M ARR"
    },
    description: "Digital insurance platform for professionals and SMEs.",
    mission: "To make professional insurance simple and accessible.",
    products: ["Professional Liability", "Cyber Insurance", "D&O"],
    founders: [
      { name: "Founder", role: "CEO", background: "Insurance industry" }
    ],
    highlights: ["Underserved SME market", "Digital-first", "Growing demand"]
  },
  {
    id: "qobra",
    name: "Qobra",
    logo: "https://logo.clearbit.com/qobra.co",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 40_000_000,
    totalFunding: 10_000_000,
    lastRound: {
      type: "Series A",
      amount: 8_000_000,
      date: "2023-06",
      investors: ["Balderton", "Partech"]
    },
    scores: {
      team: 86,
      traction: 80,
      market: 82,
      funding: 80,
      momentum: 84,
      overall: 82
    },
    metrics: {
      teamSize: 40,
      monthlyGrowth: 15,
      customers: 200,
      revenue: "$4M ARR"
    },
    description: "Sales commission and compensation management platform.",
    mission: "To make sales compensation transparent and motivating.",
    products: ["Commission Tracking", "Plan Design", "Analytics", "Payroll Integration"],
    founders: [
      { name: "Antoine Fort", role: "CEO", background: "Sales operations" }
    ],
    highlights: ["Strong investor backing", "Fast growth", "Hot SPM market"]
  },
  {
    id: "ramify",
    name: "Ramify",
    logo: "https://logo.clearbit.com/ramify.fr",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 35_000_000,
    totalFunding: 7_000_000,
    lastRound: {
      type: "Seed",
      amount: 7_000_000,
      date: "2023-04",
      investors: ["Singular", "New Wave"]
    },
    scores: {
      team: 84,
      traction: 78,
      market: 84,
      funding: 76,
      momentum: 82,
      overall: 81
    },
    metrics: {
      teamSize: 35,
      monthlyGrowth: 18,
      customers: 3000,
      revenue: "$2M ARR"
    },
    description: "Wealth management platform democratizing private investment.",
    mission: "To give everyone access to private investment opportunities.",
    products: ["Private Equity Access", "Real Estate", "Structured Products"],
    founders: [
      { name: "Sami Music", role: "CEO", background: "Investment banking" }
    ],
    highlights: ["Growing wealth tech market", "Strong product", "3K+ clients"]
  },
  {
    id: "satelia",
    name: "Satelia",
    logo: "https://logo.clearbit.com/satelia.health",
    sector: "HealthTech",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 25_000_000,
    totalFunding: 5_000_000,
    lastRound: {
      type: "Seed",
      amount: 5_000_000,
      date: "2023-01",
      investors: ["Elaia", "Health Angels"]
    },
    scores: {
      team: 80,
      traction: 74,
      market: 84,
      funding: 72,
      momentum: 76,
      overall: 77
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 12,
      customers: 100,
      revenue: "$1.5M ARR"
    },
    description: "Remote patient monitoring platform for chronic conditions.",
    mission: "To improve chronic disease management through technology.",
    products: ["Patient Monitoring", "Alerts System", "Clinical Dashboard"],
    founders: [
      { name: "Founder", role: "CEO", background: "Healthcare technology" }
    ],
    highlights: ["Growing remote monitoring market", "Clinical validation", "Hospital partnerships"]
  },
  {
    id: "smart-tribune",
    name: "Smart Tribune",
    logo: "https://logo.clearbit.com/smart-tribune.com",
    sector: "Enterprise Software",
    country: "France",
    city: "Paris",
    founded: 2012,
    currentValuation: 30_000_000,
    totalFunding: 6_000_000,
    lastRound: {
      type: "Series A",
      amount: 4_000_000,
      date: "2022-04",
      investors: ["Isai", "Bpifrance"]
    },
    scores: {
      team: 78,
      traction: 80,
      market: 78,
      funding: 72,
      momentum: 74,
      overall: 76
    },
    metrics: {
      teamSize: 50,
      monthlyGrowth: 8,
      customers: 200,
      revenue: "$4M ARR"
    },
    description: "Customer self-service and knowledge management platform.",
    mission: "To empower customers with instant answers.",
    products: ["Knowledge Base", "Chatbot", "FAQ", "Community"],
    founders: [
      { name: "Founder", role: "CEO", background: "Customer experience" }
    ],
    highlights: ["200+ enterprise clients", "Strong retention", "AI enhancement"]
  },
  {
    id: "spinergie",
    name: "Spinergie",
    logo: "https://logo.clearbit.com/spinergie.com",
    sector: "CleanTech",
    country: "France",
    city: "Nantes",
    founded: 2018,
    currentValuation: 20_000_000,
    totalFunding: 4_000_000,
    lastRound: {
      type: "Seed",
      amount: 4_000_000,
      date: "2023-02",
      investors: ["Demeter", "Bpifrance"]
    },
    scores: {
      team: 80,
      traction: 74,
      market: 86,
      funding: 72,
      momentum: 78,
      overall: 78
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 14,
      customers: 60,
      revenue: "$1.2M ARR"
    },
    description: "Data analytics platform for offshore wind farm operations.",
    mission: "To optimize offshore wind farm performance with data.",
    products: ["Performance Analytics", "Predictive Maintenance", "Operations Dashboard"],
    founders: [
      { name: "Founder", role: "CEO", background: "Offshore wind industry" }
    ],
    highlights: ["Growing offshore wind market", "Strong domain expertise", "Climate impact"]
  },
  {
    id: "tilt-energy",
    name: "Tilt Energy",
    logo: "https://logo.clearbit.com/tilt.energy",
    sector: "CleanTech",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 18_000_000,
    totalFunding: 3_500_000,
    lastRound: {
      type: "Seed",
      amount: 3_500_000,
      date: "2023-05",
      investors: ["Ring Capital", "Angels"]
    },
    scores: {
      team: 80,
      traction: 70,
      market: 88,
      funding: 70,
      momentum: 80,
      overall: 78
    },
    metrics: {
      teamSize: 18,
      monthlyGrowth: 18,
      customers: 80,
      revenue: "$600K ARR"
    },
    description: "Energy procurement and management platform for businesses.",
    mission: "To help businesses navigate the energy transition.",
    products: ["Energy Procurement", "Consumption Analytics", "Green Energy"],
    founders: [
      { name: "Founder", role: "CEO", background: "Energy trading" }
    ],
    highlights: ["Energy crisis tailwinds", "Strong market timing", "B2B focus"]
  },
  {
    id: "trusk",
    name: "Trusk",
    logo: "https://logo.clearbit.com/trusk.com",
    sector: "Logistics",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 60_000_000,
    totalFunding: 15_000_000,
    lastRound: {
      type: "Series A",
      amount: 10_000_000,
      date: "2022-06",
      investors: ["Partech", "Alven"]
    },
    scores: {
      team: 82,
      traction: 84,
      market: 80,
      funding: 78,
      momentum: 78,
      overall: 80
    },
    metrics: {
      teamSize: 80,
      monthlyGrowth: 10,
      customers: 500,
      revenue: "$12M ARR"
    },
    description: "Last-mile delivery platform for bulky items and furniture.",
    mission: "To reinvent large item delivery.",
    products: ["Delivery Platform", "White Label Solution", "Installation Services"],
    founders: [
      { name: "Founder", role: "CEO", background: "Logistics entrepreneur" }
    ],
    highlights: ["500+ retailers", "Strong operations", "Profitable unit economics"]
  },
  {
    id: "united-heroes",
    name: "United Heroes",
    logo: "https://logo.clearbit.com/unitedheroes.com",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2017,
    currentValuation: 40_000_000,
    totalFunding: 10_000_000,
    lastRound: {
      type: "Series A",
      amount: 8_000_000,
      date: "2022-09",
      investors: ["Eurazeo", "Angels"]
    },
    scores: {
      team: 80,
      traction: 82,
      market: 78,
      funding: 78,
      momentum: 80,
      overall: 80
    },
    metrics: {
      teamSize: 60,
      monthlyGrowth: 12,
      customers: 400,
      revenue: "$6M ARR"
    },
    description: "Corporate wellness and employee engagement platform.",
    mission: "To unite companies around health and sports challenges.",
    products: ["Wellness Challenges", "Sports Events", "Employee Engagement"],
    founders: [
      { name: "Founder", role: "CEO", background: "Sports tech" }
    ],
    highlights: ["400+ companies", "Strong engagement", "Wellness trend"]
  },
  {
    id: "upslide",
    name: "UpSlide",
    logo: "https://logo.clearbit.com/upslide.net",
    sector: "Enterprise Software",
    country: "France",
    city: "Paris",
    founded: 2011,
    currentValuation: 50_000_000,
    totalFunding: 12_000_000,
    lastRound: {
      type: "Growth",
      amount: 10_000_000,
      date: "2023-01",
      investors: ["Long Arc Capital", "Existing Investors"]
    },
    scores: {
      team: 82,
      traction: 86,
      market: 78,
      funding: 78,
      momentum: 78,
      overall: 80
    },
    metrics: {
      teamSize: 100,
      monthlyGrowth: 8,
      customers: 800,
      revenue: "$15M ARR"
    },
    description: "Productivity suite for Microsoft Office in finance and consulting.",
    mission: "To make Office documents beautiful and compliant.",
    products: ["PowerPoint Add-in", "Excel Add-in", "Brand Compliance"],
    founders: [
      { name: "Founder", role: "CEO", background: "Consulting background" }
    ],
    highlights: ["800+ enterprise clients", "Strong in finance", "Profitable"]
  },
  {
    id: "via-sana",
    name: "Via Sana",
    logo: "https://logo.clearbit.com/viasana.fr",
    sector: "HealthTech",
    country: "France",
    city: "Lyon",
    founded: 2020,
    currentValuation: 15_000_000,
    totalFunding: 3_000_000,
    lastRound: {
      type: "Seed",
      amount: 3_000_000,
      date: "2023-04",
      investors: ["Elaia", "Health Angels"]
    },
    scores: {
      team: 78,
      traction: 70,
      market: 82,
      funding: 68,
      momentum: 74,
      overall: 74
    },
    metrics: {
      teamSize: 18,
      monthlyGrowth: 14,
      customers: 80,
      revenue: "$500K ARR"
    },
    description: "Digital therapy platform for mental health and chronic conditions.",
    mission: "To make digital therapeutics accessible to all.",
    products: ["Digital Therapy", "Patient App", "Clinical Integration"],
    founders: [
      { name: "Founder", role: "CEO", background: "Digital health" }
    ],
    highlights: ["Growing DTx market", "Clinical validation", "B2B2C model"]
  },
  {
    id: "visuary",
    name: "Visuary",
    logo: "https://logo.clearbit.com/visuary.ai",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2021,
    currentValuation: 12_000_000,
    totalFunding: 2_000_000,
    lastRound: {
      type: "Pre-Seed",
      amount: 2_000_000,
      date: "2023-06",
      investors: ["Seedcamp", "Angels"]
    },
    scores: {
      team: 80,
      traction: 64,
      market: 84,
      funding: 66,
      momentum: 76,
      overall: 74
    },
    metrics: {
      teamSize: 10,
      monthlyGrowth: 22,
      customers: 25,
      revenue: "$200K ARR"
    },
    description: "Computer vision platform for retail analytics and inventory.",
    mission: "To bring AI vision to physical retail.",
    products: ["Shelf Analytics", "Inventory Tracking", "Customer Insights"],
    founders: [
      { name: "Founder", role: "CEO", background: "Computer vision" }
    ],
    highlights: ["Strong CV team", "Retail AI opportunity", "Early traction"]
  },
  {
    id: "vizzia",
    name: "Vizzia",
    logo: "https://logo.clearbit.com/vizzia.eu",
    sector: "Analytics",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 18_000_000,
    totalFunding: 3_500_000,
    lastRound: {
      type: "Seed",
      amount: 3_500_000,
      date: "2023-03",
      investors: ["Alven", "Angels"]
    },
    scores: {
      team: 78,
      traction: 72,
      market: 80,
      funding: 70,
      momentum: 76,
      overall: 75
    },
    metrics: {
      teamSize: 20,
      monthlyGrowth: 14,
      customers: 100,
      revenue: "$1M ARR"
    },
    description: "Business intelligence platform with AI-powered insights.",
    mission: "To democratize data insights for all teams.",
    products: ["BI Dashboard", "AI Insights", "Data Visualization"],
    founders: [
      { name: "Founder", role: "CEO", background: "Data analytics" }
    ],
    highlights: ["Growing BI market", "AI differentiation", "100+ customers"]
  },
  {
    id: "webyn",
    name: "Webyn",
    logo: "https://logo.clearbit.com/webyn.ai",
    sector: "Marketing",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 15_000_000,
    totalFunding: 2_500_000,
    lastRound: {
      type: "Seed",
      amount: 2_500_000,
      date: "2022-10",
      investors: ["Kima", "Angels"]
    },
    scores: {
      team: 76,
      traction: 74,
      market: 78,
      funding: 68,
      momentum: 74,
      overall: 74
    },
    metrics: {
      teamSize: 18,
      monthlyGrowth: 12,
      customers: 150,
      revenue: "$1M ARR"
    },
    description: "AI-powered conversion rate optimization platform.",
    mission: "To help websites convert better with AI.",
    products: ["A/B Testing", "Personalization", "AI Recommendations"],
    founders: [
      { name: "Founder", role: "CEO", background: "CRO expert" }
    ],
    highlights: ["150+ customers", "AI-powered CRO", "Strong ROI for clients"]
  },
  {
    id: "weglot",
    name: "Weglot",
    logo: "https://logo.clearbit.com/weglot.com",
    sector: "SaaS",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 100_000_000,
    totalFunding: 50_000_000,
    lastRound: {
      type: "Series A",
      amount: 45_000_000,
      date: "2022-10",
      investors: ["Partech", "Aglaé Ventures"]
    },
    scores: {
      team: 86,
      traction: 90,
      market: 84,
      funding: 84,
      momentum: 86,
      overall: 86
    },
    metrics: {
      teamSize: 60,
      monthlyGrowth: 10,
      customers: 70000,
      revenue: "$20M ARR"
    },
    description: "Website translation and localization platform for global businesses.",
    mission: "To make websites multilingual in minutes.",
    products: ["Website Translation", "Localization", "SEO Optimization"],
    founders: [
      { name: "Augustin Prot", role: "CEO", background: "Tech entrepreneur" },
      { name: "Rémy Berda", role: "CTO", background: "Developer" }
    ],
    highlights: ["70K+ websites", "Strong PLG motion", "Profitable"]
  },
  {
    id: "yacon-and-co",
    name: "Yacon & Co",
    logo: "https://logo.clearbit.com/yaconandco.com",
    sector: "FoodTech",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 12_000_000,
    totalFunding: 2_000_000,
    lastRound: {
      type: "Seed",
      amount: 2_000_000,
      date: "2023-02",
      investors: ["Food Angels", "Kima"]
    },
    scores: {
      team: 74,
      traction: 70,
      market: 78,
      funding: 66,
      momentum: 72,
      overall: 72
    },
    metrics: {
      teamSize: 15,
      monthlyGrowth: 14,
      customers: 500,
      revenue: "$800K"
    },
    description: "Healthy snacks and food products brand with low sugar alternatives.",
    mission: "To make healthy eating delicious and accessible.",
    products: ["Low Sugar Snacks", "Healthy Spreads", "Natural Sweeteners"],
    founders: [
      { name: "Founder", role: "CEO", background: "Food industry" }
    ],
    highlights: ["Growing health food market", "Retail distribution", "Strong brand"]
  },
  {
    id: "zestmeup",
    name: "ZestMeUp",
    logo: "https://logo.clearbit.com/zestmeup.com",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2015,
    currentValuation: 25_000_000,
    totalFunding: 5_000_000,
    lastRound: {
      type: "Series A",
      amount: 4_000_000,
      date: "2022-06",
      investors: ["HR Tech Fund", "Angels"]
    },
    scores: {
      team: 78,
      traction: 78,
      market: 76,
      funding: 72,
      momentum: 74,
      overall: 76
    },
    metrics: {
      teamSize: 35,
      monthlyGrowth: 10,
      customers: 250,
      revenue: "$3M ARR"
    },
    description: "Employee engagement and performance management platform.",
    mission: "To help companies build engaging workplaces.",
    products: ["Employee Surveys", "Performance Reviews", "OKRs", "Recognition"],
    founders: [
      { name: "Founder", role: "CEO", background: "HR technology" }
    ],
    highlights: ["250+ companies", "Strong retention", "Comprehensive platform"]
  }
];
