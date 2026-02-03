export interface Startup {
  id: string;
  name: string;
  logo: string;
  sector: string;
  country: string;
  city: string;
  founded: number;
  currentValuation: number;
  totalFunding: number;
  lastRound: {
    type: string;
    amount: number;
    date: string;
    investors: string[];
  };
  scores: {
    team: number;
    traction: number;
    market: number;
    funding: number;
    momentum: number;
    overall: number;
  };
  metrics: {
    teamSize: number;
    monthlyGrowth: number;
    customers: number;
    revenue?: string;
  };
  description: string;
  mission: string;
  products: string[];
  founders: {
    name: string;
    role: string;
    background: string;
  }[];
  highlights: string[];
}

export const startups: Startup[] = [
  {
    id: "mistral-ai",
    name: "Mistral AI",
    logo: "https://logo.clearbit.com/mistral.ai",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2023,
    currentValuation: 6_000_000_000,
    totalFunding: 1_000_000_000,
    lastRound: {
      type: "Series B",
      amount: 640_000_000,
      date: "2024-06",
      investors: ["General Catalyst", "Lightspeed", "Andreessen Horowitz"]
    },
    scores: {
      team: 98,
      traction: 92,
      market: 95,
      funding: 96,
      momentum: 94,
      overall: 95
    },
    metrics: {
      teamSize: 60,
      monthlyGrowth: 25,
      customers: 500,
      revenue: "$30M ARR"
    },
    description: "Leading European AI startup building state-of-the-art open-source and commercial LLMs competing with OpenAI and Anthropic.",
    mission: "To make AI models open and accessible while pushing the frontier of AI capabilities.",
    products: ["Mistral Large", "Mistral Small", "Codestral", "Le Chat"],
    founders: [
      { name: "Arthur Mensch", role: "CEO", background: "Ex-DeepMind researcher" },
      { name: "Guillaume Lample", role: "Chief Scientist", background: "Ex-Meta AI researcher" },
      { name: "Timothée Lacroix", role: "CTO", background: "Ex-Meta AI engineer" }
    ],
    highlights: ["Fastest European startup to unicorn", "Strategic partnership with Microsoft", "Open-source leadership"]
  },
  {
    id: "poolside",
    name: "Poolside",
    logo: "https://logo.clearbit.com/poolside.ai",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2023,
    currentValuation: 3_000_000_000,
    totalFunding: 500_000_000,
    lastRound: {
      type: "Series B",
      amount: 400_000_000,
      date: "2024-10",
      investors: ["Bain Capital Ventures", "DST Global", "Redpoint"]
    },
    scores: {
      team: 94,
      traction: 85,
      market: 92,
      funding: 94,
      momentum: 90,
      overall: 91
    },
    metrics: {
      teamSize: 45,
      monthlyGrowth: 20,
      customers: 150,
      revenue: "$15M ARR"
    },
    description: "AI-powered software development platform that writes and maintains code autonomously.",
    mission: "To build AI systems that can write and maintain software at superhuman levels.",
    products: ["Poolside Assistant", "Code Generation API", "Enterprise Platform"],
    founders: [
      { name: "Jason Warner", role: "CEO", background: "Ex-GitHub CTO" },
      { name: "Eiso Kant", role: "Co-founder", background: "Ex-Athenian CEO" }
    ],
    highlights: ["Backed by top-tier VCs", "Strong enterprise traction", "World-class AI team"]
  },
  {
    id: "pigment",
    name: "Pigment",
    logo: "https://logo.clearbit.com/pigment.com",
    sector: "Enterprise Software",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 1_200_000_000,
    totalFunding: 393_000_000,
    lastRound: {
      type: "Series D",
      amount: 145_000_000,
      date: "2024-04",
      investors: ["ICONIQ Growth", "Meritech Capital", "IVP"]
    },
    scores: {
      team: 88,
      traction: 90,
      market: 85,
      funding: 92,
      momentum: 86,
      overall: 88
    },
    metrics: {
      teamSize: 400,
      monthlyGrowth: 12,
      customers: 800,
      revenue: "$50M ARR"
    },
    description: "Business planning platform that helps companies model, forecast, and collaborate on strategic decisions.",
    mission: "To transform how companies plan and make strategic decisions through real-time collaboration.",
    products: ["Financial Planning", "Revenue Planning", "Workforce Planning", "Strategic Planning"],
    founders: [
      { name: "Eléonore Crespo", role: "Co-CEO", background: "Ex-Google, Index Ventures" },
      { name: "Romain Niccoli", role: "Co-CEO", background: "Ex-Criteo CTO" }
    ],
    highlights: ["Unicorn status achieved", "Strong US expansion", "Category leader in FP&A"]
  },
  {
    id: "qonto",
    name: "Qonto",
    logo: "https://logo.clearbit.com/qonto.com",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 5_000_000_000,
    totalFunding: 622_000_000,
    lastRound: {
      type: "Series D",
      amount: 486_000_000,
      date: "2022-01",
      investors: ["Tiger Global", "TCV", "DST Global"]
    },
    scores: {
      team: 90,
      traction: 94,
      market: 88,
      funding: 95,
      momentum: 82,
      overall: 90
    },
    metrics: {
      teamSize: 1400,
      monthlyGrowth: 8,
      customers: 500000,
      revenue: "$200M ARR"
    },
    description: "Business finance management platform for SMEs and freelancers across Europe.",
    mission: "To create the finance solution that energizes SMEs and freelancers.",
    products: ["Business Accounts", "Expense Management", "Invoicing", "Accounting Integration"],
    founders: [
      { name: "Alexandre Prot", role: "CEO", background: "Ex-Inspecteur des Finances" },
      { name: "Steve Anavi", role: "President", background: "Ex-Rocket Internet" }
    ],
    highlights: ["500K+ business customers", "Pan-European expansion", "Profitable unit economics"]
  },
  {
    id: "alan",
    name: "Alan",
    logo: "https://logo.clearbit.com/alan.com",
    sector: "Insurtech",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 2_700_000_000,
    totalFunding: 496_000_000,
    lastRound: {
      type: "Series E",
      amount: 183_000_000,
      date: "2022-05",
      investors: ["Coatue", "Dragoneer", "Index Ventures"]
    },
    scores: {
      team: 89,
      traction: 88,
      market: 86,
      funding: 90,
      momentum: 84,
      overall: 87
    },
    metrics: {
      teamSize: 600,
      monthlyGrowth: 10,
      customers: 25000,
      revenue: "$150M ARR"
    },
    description: "Digital health insurance company revolutionizing employee benefits with a tech-first approach.",
    mission: "To make health insurance simple, transparent, and caring for everyone.",
    products: ["Health Insurance", "Alan Mind", "Telemedicine", "Prevention Programs"],
    founders: [
      { name: "Jean-Charles Samuelian", role: "CEO", background: "Ex-Expliseat founder" },
      { name: "Charles Gorintin", role: "CTO", background: "Ex-Criteo engineer" }
    ],
    highlights: ["First digital health insurer license in France", "25K+ companies insured", "Expansion to Spain & Belgium"]
  },
  {
    id: "payfit",
    name: "PayFit",
    logo: "https://logo.clearbit.com/payfit.com",
    sector: "HR Tech",
    country: "France",
    city: "Paris",
    founded: 2015,
    currentValuation: 2_100_000_000,
    totalFunding: 479_000_000,
    lastRound: {
      type: "Series E",
      amount: 254_000_000,
      date: "2022-01",
      investors: ["General Atlantic", "Eurazeo", "Bpifrance"]
    },
    scores: {
      team: 86,
      traction: 89,
      market: 84,
      funding: 88,
      momentum: 80,
      overall: 86
    },
    metrics: {
      teamSize: 1000,
      monthlyGrowth: 7,
      customers: 17000,
      revenue: "$120M ARR"
    },
    description: "Payroll and HR management platform simplifying complex employment regulations.",
    mission: "To simplify payroll and empower employees.",
    products: ["Payroll Automation", "Leave Management", "Expense Management", "HR Analytics"],
    founders: [
      { name: "Firmin Zocchetto", role: "CEO", background: "Serial entrepreneur" },
      { name: "Ghislain de Fontenay", role: "CTO", background: "Software engineer" }
    ],
    highlights: ["17K+ companies", "Pan-European expansion", "Strong SMB market position"]
  },
  {
    id: "lydia",
    name: "Lydia",
    logo: "https://logo.clearbit.com/lydia-app.com",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2013,
    currentValuation: 1_100_000_000,
    totalFunding: 433_000_000,
    lastRound: {
      type: "Series C",
      amount: 100_000_000,
      date: "2023-12",
      investors: ["Tencent", "Accel", "Founders Fund"]
    },
    scores: {
      team: 85,
      traction: 88,
      market: 82,
      funding: 86,
      momentum: 84,
      overall: 85
    },
    metrics: {
      teamSize: 350,
      monthlyGrowth: 8,
      customers: 8000000,
      revenue: "$40M ARR"
    },
    description: "Super app for personal finance targeting Gen Z and millennials with payments, banking, and investing.",
    mission: "To reinvent personal finance for the mobile generation.",
    products: ["P2P Payments", "Banking", "Investing", "Crypto"],
    founders: [
      { name: "Cyril Chiche", role: "CEO", background: "Ex-banking executive" },
      { name: "Antoine Porte", role: "CPO", background: "Product leader" }
    ],
    highlights: ["8M+ users", "Popular with young demographics", "Super app strategy"]
  },
  {
    id: "dust",
    name: "Dust",
    logo: "https://logo.clearbit.com/dust.tt",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2023,
    currentValuation: 200_000_000,
    totalFunding: 55_000_000,
    lastRound: {
      type: "Series A",
      amount: 50_000_000,
      date: "2024-09",
      investors: ["Sequoia Capital", "XYZ Ventures"]
    },
    scores: {
      team: 92,
      traction: 78,
      market: 90,
      funding: 82,
      momentum: 88,
      overall: 86
    },
    metrics: {
      teamSize: 25,
      monthlyGrowth: 30,
      customers: 100,
      revenue: "$3M ARR"
    },
    description: "Enterprise AI assistant platform enabling companies to build custom AI workflows.",
    mission: "To augment every knowledge worker with AI.",
    products: ["AI Assistants", "Workflow Builder", "Knowledge Integration"],
    founders: [
      { name: "Stanislas Polu", role: "CEO", background: "Ex-Stripe, OpenAI researcher" },
      { name: "Gabriel Hubert", role: "CTO", background: "Ex-Alan engineer" }
    ],
    highlights: ["Founded by ex-OpenAI researcher", "Sequoia-backed", "Rapid enterprise adoption"]
  },
  {
    id: "manomano",
    name: "ManoMano",
    logo: "https://logo.clearbit.com/manomano.fr",
    sector: "E-commerce",
    country: "France",
    city: "Paris",
    founded: 2013,
    currentValuation: 2_600_000_000,
    totalFunding: 725_000_000,
    lastRound: {
      type: "Series F",
      amount: 355_000_000,
      date: "2021-07",
      investors: ["Dragoneer", "General Atlantic", "Eurazeo"]
    },
    scores: {
      team: 84,
      traction: 86,
      market: 80,
      funding: 88,
      momentum: 76,
      overall: 83
    },
    metrics: {
      teamSize: 900,
      monthlyGrowth: 5,
      customers: 7000000,
      revenue: "$1.5B GMV"
    },
    description: "European leader in online DIY, home improvement, and gardening marketplace.",
    mission: "To empower everyone to easily improve their home.",
    products: ["Marketplace", "Pro Platform", "Installation Services"],
    founders: [
      { name: "Philippe de Chanville", role: "Co-CEO", background: "Ex-Price Minister" },
      { name: "Christian Raisson", role: "Co-CEO", background: "Ex-Price Minister" }
    ],
    highlights: ["European market leader", "7M+ customers", "B2B expansion"]
  },
  {
    id: "alma",
    name: "Alma",
    logo: "https://logo.clearbit.com/getalma.eu",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2018,
    currentValuation: 700_000_000,
    totalFunding: 209_000_000,
    lastRound: {
      type: "Series C",
      amount: 115_000_000,
      date: "2022-02",
      investors: ["Eurazeo", "Bpifrance", "Cathay Innovation"]
    },
    scores: {
      team: 84,
      traction: 86,
      market: 82,
      funding: 84,
      momentum: 82,
      overall: 84
    },
    metrics: {
      teamSize: 400,
      monthlyGrowth: 10,
      customers: 15000,
      revenue: "$80M ARR"
    },
    description: "Buy Now Pay Later solution for European merchants with a focus on responsible lending.",
    mission: "To make commerce more accessible through flexible payments.",
    products: ["BNPL", "Pay in 2/3/4x", "Merchant Dashboard", "Consumer App"],
    founders: [
      { name: "Louis Chatriot", role: "CEO", background: "Ex-Stupeflix (acquired by GoPro)" }
    ],
    highlights: ["15K+ merchant partners", "Responsible BNPL approach", "Strong unit economics"]
  },
  {
    id: "spendesk",
    name: "Spendesk",
    logo: "https://logo.clearbit.com/spendesk.com",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 1_200_000_000,
    totalFunding: 260_000_000,
    lastRound: {
      type: "Series C",
      amount: 100_000_000,
      date: "2022-01",
      investors: ["Tiger Global", "General Atlantic", "Eight Roads"]
    },
    scores: {
      team: 85,
      traction: 87,
      market: 83,
      funding: 86,
      momentum: 80,
      overall: 84
    },
    metrics: {
      teamSize: 500,
      monthlyGrowth: 8,
      customers: 4000,
      revenue: "$60M ARR"
    },
    description: "All-in-one spend management platform for finance teams.",
    mission: "To bring spending clarity to every business.",
    products: ["Corporate Cards", "Expense Management", "Invoice Management", "Budgets"],
    founders: [
      { name: "Rodolphe Ardant", role: "CEO", background: "Ex-Wipolo founder" }
    ],
    highlights: ["Unicorn status achieved", "Strong mid-market presence", "Comprehensive platform"]
  },
  {
    id: "doctrine",
    name: "Doctrine",
    logo: "https://logo.clearbit.com/doctrine.fr",
    sector: "LegalTech",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 250_000_000,
    totalFunding: 42_000_000,
    lastRound: {
      type: "Series B",
      amount: 25_000_000,
      date: "2022-06",
      investors: ["Bpifrance", "Otium Capital"]
    },
    scores: {
      team: 82,
      traction: 80,
      market: 78,
      funding: 76,
      momentum: 82,
      overall: 80
    },
    metrics: {
      teamSize: 150,
      monthlyGrowth: 12,
      customers: 1500,
      revenue: "$15M ARR"
    },
    description: "AI-powered legal research platform making case law accessible to lawyers.",
    mission: "To democratize access to legal information.",
    products: ["Legal Search Engine", "Case Law Database", "Analytics"],
    founders: [
      { name: "Nicolas Bustamante", role: "CEO", background: "Ex-lawyer" },
      { name: "Raphaël Champeimont", role: "CTO", background: "Software engineer" }
    ],
    highlights: ["Market leader in France", "AI-first approach", "Strong legal community"]
  },
  {
    id: "swile",
    name: "Swile",
    logo: "https://logo.clearbit.com/swile.co",
    sector: "HR Tech",
    country: "France",
    city: "Montpellier",
    founded: 2018,
    currentValuation: 1_000_000_000,
    totalFunding: 286_000_000,
    lastRound: {
      type: "Series D",
      amount: 200_000_000,
      date: "2022-01",
      investors: ["SoftBank Vision Fund", "Eurazeo", "Index Ventures"]
    },
    scores: {
      team: 84,
      traction: 85,
      market: 80,
      funding: 86,
      momentum: 78,
      overall: 83
    },
    metrics: {
      teamSize: 600,
      monthlyGrowth: 8,
      customers: 30000,
      revenue: "$80M ARR"
    },
    description: "Employee benefits super app including meal vouchers, gift cards, and more.",
    mission: "To improve the daily lives of employees through better benefits.",
    products: ["Meal Vouchers", "Gift Cards", "Mobility", "Expense Management"],
    founders: [
      { name: "Loïc Soubeyrand", role: "CEO", background: "Serial entrepreneur" }
    ],
    highlights: ["SoftBank-backed unicorn", "30K+ companies", "Super app for benefits"]
  },
  {
    id: "ankorstore",
    name: "Ankorstore",
    logo: "https://logo.clearbit.com/ankorstore.com",
    sector: "B2B Marketplace",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 1_750_000_000,
    totalFunding: 450_000_000,
    lastRound: {
      type: "Series C",
      amount: 250_000_000,
      date: "2022-01",
      investors: ["Tiger Global", "Bond", "Coatue"]
    },
    scores: {
      team: 82,
      traction: 78,
      market: 80,
      funding: 84,
      momentum: 70,
      overall: 79
    },
    metrics: {
      teamSize: 400,
      monthlyGrowth: 4,
      customers: 30000,
      revenue: "$50M ARR"
    },
    description: "B2B marketplace connecting independent retailers with brands across Europe.",
    mission: "To empower independent retailers against big chains.",
    products: ["Wholesale Marketplace", "Brand Discovery", "Payment Solutions"],
    founders: [
      { name: "Nicolas Cohen", role: "CEO", background: "Ex-entrepreneur" },
      { name: "Pierre-Louis Lacoste", role: "COO", background: "Ex-Bain & Company" }
    ],
    highlights: ["300K+ retailers connected", "Pan-European presence", "Supporting local retail"]
  },
  {
    id: "sorare",
    name: "Sorare",
    logo: "https://logo.clearbit.com/sorare.com",
    sector: "Gaming/Web3",
    country: "France",
    city: "Paris",
    founded: 2018,
    currentValuation: 4_300_000_000,
    totalFunding: 739_000_000,
    lastRound: {
      type: "Series B",
      amount: 680_000_000,
      date: "2021-09",
      investors: ["SoftBank Vision Fund", "Atomico", "Benchmark"]
    },
    scores: {
      team: 86,
      traction: 75,
      market: 78,
      funding: 90,
      momentum: 68,
      overall: 80
    },
    metrics: {
      teamSize: 350,
      monthlyGrowth: 3,
      customers: 3000000,
      revenue: "$150M"
    },
    description: "Fantasy sports platform using NFT collectibles for football, NBA, and MLB.",
    mission: "To bring sports fans closer to the game through digital collectibles.",
    products: ["Fantasy Football", "Fantasy NBA", "Fantasy MLB", "NFT Marketplace"],
    founders: [
      { name: "Nicolas Julia", role: "CEO", background: "Ex-Stratumn" },
      { name: "Adrien Montfort", role: "COO", background: "Ex-Benchmarking" }
    ],
    highlights: ["3M+ registered users", "Partnerships with top leagues", "Pioneer in sports NFTs"]
  },
  {
    id: "contentsquare",
    name: "Contentsquare",
    logo: "https://logo.clearbit.com/contentsquare.com",
    sector: "Analytics",
    country: "France",
    city: "Paris",
    founded: 2012,
    currentValuation: 5_600_000_000,
    totalFunding: 1_400_000_000,
    lastRound: {
      type: "Series F",
      amount: 600_000_000,
      date: "2022-07",
      investors: ["Sixth Street", "SoftBank Vision Fund", "Bpifrance"]
    },
    scores: {
      team: 88,
      traction: 90,
      market: 85,
      funding: 94,
      momentum: 82,
      overall: 88
    },
    metrics: {
      teamSize: 1800,
      monthlyGrowth: 6,
      customers: 1000,
      revenue: "$250M ARR"
    },
    description: "Digital experience analytics platform providing insights into customer behavior.",
    mission: "To make the digital world more human.",
    products: ["Experience Analytics", "Session Replay", "Heatmaps", "AI Insights"],
    founders: [
      { name: "Jonathan Cherki", role: "CEO", background: "Serial entrepreneur" }
    ],
    highlights: ["Top 100 global brands as clients", "Multiple acquisitions", "Category leader"]
  },
  {
    id: "back-market",
    name: "Back Market",
    logo: "https://logo.clearbit.com/backmarket.com",
    sector: "E-commerce",
    country: "France",
    city: "Paris",
    founded: 2014,
    currentValuation: 5_700_000_000,
    totalFunding: 884_000_000,
    lastRound: {
      type: "Series E",
      amount: 510_000_000,
      date: "2022-01",
      investors: ["General Atlantic", "Sprints Capital", "Eurazeo"]
    },
    scores: {
      team: 87,
      traction: 92,
      market: 88,
      funding: 92,
      momentum: 84,
      overall: 89
    },
    metrics: {
      teamSize: 650,
      monthlyGrowth: 5,
      customers: 10000000,
      revenue: "$700M"
    },
    description: "Leading marketplace for refurbished electronics promoting sustainable consumption.",
    mission: "To make refurbished tech the first choice, not the second.",
    products: ["Refurbished Phones", "Laptops", "Tablets", "Quality Certification"],
    founders: [
      { name: "Thibaud Hug de Larauze", role: "CEO", background: "Ex-Price Minister" },
      { name: "Quentin Le Brouster", role: "COO", background: "Ex-consultant" }
    ],
    highlights: ["10M+ customers", "Global expansion", "Sustainability leader"]
  },
  {
    id: "ledger",
    name: "Ledger",
    logo: "https://logo.clearbit.com/ledger.com",
    sector: "Crypto/Hardware",
    country: "France",
    city: "Paris",
    founded: 2014,
    currentValuation: 1_500_000_000,
    totalFunding: 552_000_000,
    lastRound: {
      type: "Series C",
      amount: 380_000_000,
      date: "2021-06",
      investors: ["10T Holdings", "Tekne Capital", "Uphold"]
    },
    scores: {
      team: 86,
      traction: 84,
      market: 80,
      funding: 86,
      momentum: 72,
      overall: 82
    },
    metrics: {
      teamSize: 700,
      monthlyGrowth: 4,
      customers: 6000000,
      revenue: "$100M"
    },
    description: "Global leader in hardware wallets for cryptocurrency security.",
    mission: "To secure the new disruptive class of crypto assets.",
    products: ["Ledger Nano X", "Ledger Nano S Plus", "Ledger Live", "Enterprise Solutions"],
    founders: [
      { name: "Pascal Gauthier", role: "CEO", background: "Ex-Afrika Internet Holding" },
      { name: "Eric Larchevêque", role: "Founder", background: "Crypto pioneer" }
    ],
    highlights: ["6M+ devices sold", "Market leader in hardware wallets", "B2B expansion"]
  },
  {
    id: "dataiku",
    name: "Dataiku",
    logo: "https://logo.clearbit.com/dataiku.com",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2013,
    currentValuation: 3_700_000_000,
    totalFunding: 646_000_000,
    lastRound: {
      type: "Series F",
      amount: 200_000_000,
      date: "2022-12",
      investors: ["Wellington Management", "Tiger Global", "ICONIQ"]
    },
    scores: {
      team: 88,
      traction: 91,
      market: 90,
      funding: 90,
      momentum: 86,
      overall: 89
    },
    metrics: {
      teamSize: 1000,
      monthlyGrowth: 7,
      customers: 500,
      revenue: "$200M ARR"
    },
    description: "Enterprise AI platform enabling organizations to build and deploy AI at scale.",
    mission: "To democratize access to AI.",
    products: ["DSS Platform", "MLOps", "Generative AI", "Enterprise AI"],
    founders: [
      { name: "Florian Douetteau", role: "CEO", background: "Ex-Exalead" },
      { name: "Marc Batty", role: "COO", background: "Ex-Exalead" }
    ],
    highlights: ["Gartner Leader", "Fortune 500 clients", "Strong enterprise position"]
  },
  {
    id: "mirakl",
    name: "Mirakl",
    logo: "https://logo.clearbit.com/mirakl.com",
    sector: "E-commerce",
    country: "France",
    city: "Paris",
    founded: 2012,
    currentValuation: 3_500_000_000,
    totalFunding: 948_000_000,
    lastRound: {
      type: "Series E",
      amount: 555_000_000,
      date: "2021-09",
      investors: ["Silver Lake", "GIC", "Permira"]
    },
    scores: {
      team: 87,
      traction: 89,
      market: 86,
      funding: 92,
      momentum: 80,
      overall: 87
    },
    metrics: {
      teamSize: 700,
      monthlyGrowth: 6,
      customers: 450,
      revenue: "$150M ARR"
    },
    description: "Enterprise marketplace SaaS platform powering online marketplaces for retailers and B2B.",
    mission: "To provide the technology powering the platform economy.",
    products: ["Marketplace Platform", "Dropship", "Platform Tools"],
    founders: [
      { name: "Adrien Nussenbaum", role: "Co-CEO", background: "Ex-SplitGames founder" },
      { name: "Philippe Corrot", role: "Co-CEO", background: "Ex-entrepreneur" }
    ],
    highlights: ["Powers 450+ marketplaces", "Enterprise-grade platform", "B2B marketplace leader"]
  },
  {
    id: "ynsect",
    name: "Ynsect",
    logo: "https://logo.clearbit.com/ynsect.com",
    sector: "AgriTech",
    country: "France",
    city: "Paris",
    founded: 2011,
    currentValuation: 900_000_000,
    totalFunding: 425_000_000,
    lastRound: {
      type: "Series C",
      amount: 224_000_000,
      date: "2022-09",
      investors: ["Astanor Ventures", "Upfront Ventures", "FootPrint Coalition"]
    },
    scores: {
      team: 82,
      traction: 75,
      market: 85,
      funding: 84,
      momentum: 78,
      overall: 81
    },
    metrics: {
      teamSize: 400,
      monthlyGrowth: 8,
      customers: 50,
      revenue: "$20M"
    },
    description: "Insect protein company producing sustainable ingredients for food and agriculture.",
    mission: "To revolutionize the food chain with insect-based solutions.",
    products: ["Animal Feed", "Plant Nutrition", "Pet Food Ingredients"],
    founders: [
      { name: "Antoine Hubert", role: "CEO", background: "Environmental engineer" }
    ],
    highlights: ["World's largest insect farm", "Sustainability pioneer", "B Corp certified"]
  },
  {
    id: "memo-bank",
    name: "Memo Bank",
    logo: "https://logo.clearbit.com/memo.bank",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2017,
    currentValuation: 200_000_000,
    totalFunding: 63_000_000,
    lastRound: {
      type: "Series B",
      amount: 33_000_000,
      date: "2023-04",
      investors: ["BlackFin Capital Partners", "Bpifrance"]
    },
    scores: {
      team: 80,
      traction: 72,
      market: 82,
      funding: 74,
      momentum: 76,
      overall: 77
    },
    metrics: {
      teamSize: 80,
      monthlyGrowth: 15,
      customers: 500,
      revenue: "$5M ARR"
    },
    description: "Independent digital bank for SMEs with full banking license and credit capabilities.",
    mission: "To be the trusted banking partner for growing SMEs.",
    products: ["Business Banking", "Credit Lines", "Treasury Management"],
    founders: [
      { name: "Jean-Daniel Guyot", role: "CEO", background: "Ex-Captain Train founder" }
    ],
    highlights: ["Full banking license", "Focus on SME lending", "Tech-first approach"]
  },
  {
    id: "pennylane",
    name: "Pennylane",
    logo: "https://logo.clearbit.com/pennylane.com",
    sector: "Fintech",
    country: "France",
    city: "Paris",
    founded: 2020,
    currentValuation: 500_000_000,
    totalFunding: 84_000_000,
    lastRound: {
      type: "Series B",
      amount: 40_000_000,
      date: "2023-04",
      investors: ["Sequoia Capital", "Global Founders Capital"]
    },
    scores: {
      team: 86,
      traction: 84,
      market: 82,
      funding: 82,
      momentum: 86,
      overall: 84
    },
    metrics: {
      teamSize: 350,
      monthlyGrowth: 12,
      customers: 3500,
      revenue: "$25M ARR"
    },
    description: "All-in-one financial management platform connecting businesses with accountants.",
    mission: "To transform financial management for SMEs and their accountants.",
    products: ["Accounting", "Invoicing", "Bank Aggregation", "Accountant Portal"],
    founders: [
      { name: "Arthur Waller", role: "CEO", background: "Ex-Roland Berger" },
      { name: "Félix Blanco", role: "CTO", background: "Ex-Algolia engineer" }
    ],
    highlights: ["Sequoia-backed", "Strong accountant network", "Fast-growing revenue"]
  },
  {
    id: "ivalua",
    name: "Ivalua",
    logo: "https://logo.clearbit.com/ivalua.com",
    sector: "Enterprise Software",
    country: "France",
    city: "Paris",
    founded: 2000,
    currentValuation: 1_500_000_000,
    totalFunding: 210_000_000,
    lastRound: {
      type: "Private Equity",
      amount: 60_000_000,
      date: "2021-05",
      investors: ["Ardian", "PSG"]
    },
    scores: {
      team: 84,
      traction: 88,
      market: 84,
      funding: 82,
      momentum: 78,
      overall: 84
    },
    metrics: {
      teamSize: 800,
      monthlyGrowth: 5,
      customers: 300,
      revenue: "$180M ARR"
    },
    description: "Procurement platform helping enterprises manage spend and supplier relationships.",
    mission: "To transform procurement into a source of value creation.",
    products: ["Source-to-Pay", "Supplier Management", "Procurement Analytics"],
    founders: [
      { name: "David Khuat-Duy", role: "CEO", background: "Procurement expert" }
    ],
    highlights: ["Gartner Leader", "300+ enterprise clients", "Strong North American growth"]
  },
  {
    id: "shift-technology",
    name: "Shift Technology",
    logo: "https://logo.clearbit.com/shift-technology.com",
    sector: "Insurtech",
    country: "France",
    city: "Paris",
    founded: 2014,
    currentValuation: 1_000_000_000,
    totalFunding: 320_000_000,
    lastRound: {
      type: "Series D",
      amount: 220_000_000,
      date: "2021-05",
      investors: ["Advent International", "Accel", "General Atlantic"]
    },
    scores: {
      team: 85,
      traction: 86,
      market: 84,
      funding: 86,
      momentum: 80,
      overall: 84
    },
    metrics: {
      teamSize: 500,
      monthlyGrowth: 6,
      customers: 100,
      revenue: "$60M ARR"
    },
    description: "AI-powered fraud detection and claims automation for insurance companies.",
    mission: "To help insurers make better decisions with AI.",
    products: ["Fraud Detection", "Claims Automation", "Underwriting AI"],
    founders: [
      { name: "Jeremy Jawish", role: "CEO", background: "Ex-Data scientist" },
      { name: "Eric Sibony", role: "COO", background: "Ex-McKinsey" }
    ],
    highlights: ["100+ insurance clients", "AI-first approach", "Global expansion"]
  },
  {
    id: "vestiaire-collective",
    name: "Vestiaire Collective",
    logo: "https://logo.clearbit.com/vestiairecollective.com",
    sector: "E-commerce",
    country: "France",
    city: "Paris",
    founded: 2009,
    currentValuation: 1_700_000_000,
    totalFunding: 572_000_000,
    lastRound: {
      type: "Series F",
      amount: 210_000_000,
      date: "2022-03",
      investors: ["SoftBank Vision Fund", "Kering", "Tiger Global"]
    },
    scores: {
      team: 84,
      traction: 86,
      market: 85,
      funding: 88,
      momentum: 80,
      overall: 85
    },
    metrics: {
      teamSize: 800,
      monthlyGrowth: 5,
      customers: 23000000,
      revenue: "$300M"
    },
    description: "Leading resale platform for pre-owned luxury fashion.",
    mission: "To transform fashion for a more sustainable future.",
    products: ["Luxury Resale Marketplace", "Authentication Service", "Direct Shipping"],
    founders: [
      { name: "Fanny Moizant", role: "Co-founder", background: "Fashion industry" },
      { name: "Sophie Hersan", role: "Co-founder", background: "Luxury retail" }
    ],
    highlights: ["23M members", "Strategic partnership with Kering", "Sustainability leader"]
  },
  {
    id: "klarna",
    name: "Klarna",
    logo: "https://logo.clearbit.com/klarna.com",
    sector: "Fintech",
    country: "Sweden",
    city: "Stockholm",
    founded: 2005,
    currentValuation: 14_600_000_000,
    totalFunding: 4_500_000_000,
    lastRound: {
      type: "Series H",
      amount: 800_000_000,
      date: "2024-09",
      investors: ["Sequoia Capital", "Silver Lake", "Mubadala"]
    },
    scores: {
      team: 92,
      traction: 94,
      market: 90,
      funding: 96,
      momentum: 90,
      overall: 93
    },
    metrics: {
      teamSize: 5000,
      monthlyGrowth: 5,
      customers: 150000000,
      revenue: "$2B"
    },
    description: "Global payments and shopping platform, leader in Buy Now Pay Later.",
    mission: "To make paying as simple, safe, and smooth as possible.",
    products: ["BNPL", "Klarna App", "Payments Processing", "Banking"],
    founders: [
      { name: "Sebastian Siemiatkowski", role: "CEO", background: "Entrepreneur" },
      { name: "Niklas Adalberth", role: "Co-founder", background: "Entrepreneur" }
    ],
    highlights: ["150M+ consumers", "Global BNPL leader", "IPO imminent"]
  },
  {
    id: "spotify",
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    sector: "Music/Media",
    country: "Sweden",
    city: "Stockholm",
    founded: 2006,
    currentValuation: 100_000_000_000,
    totalFunding: 2_600_000_000,
    lastRound: {
      type: "Public",
      amount: 0,
      date: "2018-04",
      investors: ["Public"]
    },
    scores: {
      team: 95,
      traction: 98,
      market: 92,
      funding: 98,
      momentum: 92,
      overall: 95
    },
    metrics: {
      teamSize: 9000,
      monthlyGrowth: 3,
      customers: 600000000,
      revenue: "$14B"
    },
    description: "World's most popular audio streaming subscription service.",
    mission: "To unlock the potential of human creativity by giving creators the opportunity to live off their art.",
    products: ["Music Streaming", "Podcasts", "Audiobooks", "Artist Tools"],
    founders: [
      { name: "Daniel Ek", role: "CEO", background: "Serial entrepreneur" },
      { name: "Martin Lorentzon", role: "Chairman", background: "Tradedoubler co-founder" }
    ],
    highlights: ["600M+ users", "Category creator", "Profitable at scale"]
  },
  {
    id: "revolut",
    name: "Revolut",
    logo: "https://logo.clearbit.com/revolut.com",
    sector: "Fintech",
    country: "UK",
    city: "London",
    founded: 2015,
    currentValuation: 45_000_000_000,
    totalFunding: 1_700_000_000,
    lastRound: {
      type: "Series E",
      amount: 800_000_000,
      date: "2024-08",
      investors: ["Tiger Global", "Coatue", "SoftBank Vision Fund"]
    },
    scores: {
      team: 94,
      traction: 96,
      market: 92,
      funding: 96,
      momentum: 94,
      overall: 94
    },
    metrics: {
      teamSize: 8000,
      monthlyGrowth: 4,
      customers: 45000000,
      revenue: "$2.2B"
    },
    description: "Global financial super app offering banking, crypto, trading, and more.",
    mission: "To create a global financial super app.",
    products: ["Banking", "Crypto", "Stock Trading", "Travel", "Business Accounts"],
    founders: [
      { name: "Nikolay Storonsky", role: "CEO", background: "Ex-Credit Suisse trader" },
      { name: "Vlad Yatsenko", role: "CTO", background: "Ex-Deutsche Bank" }
    ],
    highlights: ["45M+ customers", "Profitable", "UK banking license"]
  },
  {
    id: "wise",
    name: "Wise",
    logo: "https://logo.clearbit.com/wise.com",
    sector: "Fintech",
    country: "UK",
    city: "London",
    founded: 2011,
    currentValuation: 12_000_000_000,
    totalFunding: 1_300_000_000,
    lastRound: {
      type: "Public",
      amount: 0,
      date: "2021-07",
      investors: ["Public"]
    },
    scores: {
      team: 92,
      traction: 94,
      market: 88,
      funding: 92,
      momentum: 88,
      overall: 91
    },
    metrics: {
      teamSize: 5000,
      monthlyGrowth: 4,
      customers: 16000000,
      revenue: "$1.2B"
    },
    description: "International money transfer service offering low-cost currency exchange.",
    mission: "Money without borders - instant, convenient, transparent and eventually free.",
    products: ["International Transfers", "Multi-currency Account", "Business Account", "API"],
    founders: [
      { name: "Kristo Käärmann", role: "CEO", background: "Ex-Deloitte, Skype" },
      { name: "Taavet Hinrikus", role: "Co-founder", background: "Skype's first employee" }
    ],
    highlights: ["16M+ customers", "Public company", "Profitable"]
  },
  {
    id: "deliveroo",
    name: "Deliveroo",
    logo: "https://logo.clearbit.com/deliveroo.com",
    sector: "Food Delivery",
    country: "UK",
    city: "London",
    founded: 2013,
    currentValuation: 3_800_000_000,
    totalFunding: 1_700_000_000,
    lastRound: {
      type: "Public",
      amount: 0,
      date: "2021-03",
      investors: ["Public"]
    },
    scores: {
      team: 86,
      traction: 88,
      market: 82,
      funding: 90,
      momentum: 76,
      overall: 84
    },
    metrics: {
      teamSize: 3000,
      monthlyGrowth: 3,
      customers: 8000000,
      revenue: "$2B"
    },
    description: "On-demand food delivery platform connecting consumers with restaurants.",
    mission: "To transform the way people eat.",
    products: ["Food Delivery", "Grocery Delivery", "Deliveroo Plus", "Restaurant Tools"],
    founders: [
      { name: "Will Shu", role: "CEO", background: "Ex-Morgan Stanley" }
    ],
    highlights: ["8M+ active users", "Public company", "Strong UK market position"]
  },
  {
    id: "checkout-com",
    name: "Checkout.com",
    logo: "https://logo.clearbit.com/checkout.com",
    sector: "Fintech",
    country: "UK",
    city: "London",
    founded: 2012,
    currentValuation: 11_000_000_000,
    totalFunding: 1_800_000_000,
    lastRound: {
      type: "Series D",
      amount: 1_000_000_000,
      date: "2022-01",
      investors: ["Tiger Global", "Coatue", "DST Global"]
    },
    scores: {
      team: 90,
      traction: 92,
      market: 88,
      funding: 94,
      momentum: 84,
      overall: 90
    },
    metrics: {
      teamSize: 2000,
      monthlyGrowth: 5,
      customers: 50000,
      revenue: "$500M ARR"
    },
    description: "Cloud-based payment processing platform for enterprise merchants.",
    mission: "To enable businesses and their communities to thrive in the digital economy.",
    products: ["Payment Processing", "Fraud Detection", "Issuing", "Unified Payments"],
    founders: [
      { name: "Guillaume Pousaz", role: "CEO", background: "Serial entrepreneur" }
    ],
    highlights: ["50K+ merchants", "Enterprise focus", "Global presence"]
  },
  {
    id: "n26",
    name: "N26",
    logo: "https://logo.clearbit.com/n26.com",
    sector: "Fintech",
    country: "Germany",
    city: "Berlin",
    founded: 2013,
    currentValuation: 3_000_000_000,
    totalFunding: 1_800_000_000,
    lastRound: {
      type: "Series E",
      amount: 900_000_000,
      date: "2021-10",
      investors: ["Third Point Ventures", "Coatue", "Dragoneer"]
    },
    scores: {
      team: 86,
      traction: 85,
      market: 84,
      funding: 90,
      momentum: 76,
      overall: 84
    },
    metrics: {
      teamSize: 1500,
      monthlyGrowth: 4,
      customers: 8000000,
      revenue: "$250M"
    },
    description: "Mobile-first bank offering checking accounts, savings, and financial products.",
    mission: "To build a bank the world loves to use.",
    products: ["Mobile Banking", "Savings", "Insurance", "Crypto"],
    founders: [
      { name: "Valentin Stalf", role: "CEO", background: "Ex-consultant" },
      { name: "Maximilian Tayenthal", role: "CFO", background: "Lawyer" }
    ],
    highlights: ["8M+ customers", "Full EU banking license", "Pan-European presence"]
  },
  {
    id: "celonis",
    name: "Celonis",
    logo: "https://logo.clearbit.com/celonis.com",
    sector: "Enterprise Software",
    country: "Germany",
    city: "Munich",
    founded: 2011,
    currentValuation: 13_000_000_000,
    totalFunding: 1_400_000_000,
    lastRound: {
      type: "Series D",
      amount: 1_000_000_000,
      date: "2021-06",
      investors: ["Durable Capital Partners", "T. Rowe Price", "Arena Holdings"]
    },
    scores: {
      team: 92,
      traction: 94,
      market: 90,
      funding: 94,
      momentum: 88,
      overall: 92
    },
    metrics: {
      teamSize: 3000,
      monthlyGrowth: 5,
      customers: 2000,
      revenue: "$500M ARR"
    },
    description: "Process mining and execution management platform for enterprise operations.",
    mission: "To help companies realize their full execution capacity.",
    products: ["Process Mining", "Execution Management", "Process Intelligence", "Action Flows"],
    founders: [
      { name: "Alexander Rinke", role: "Co-CEO", background: "TU Munich graduate" },
      { name: "Bastian Nominacher", role: "Co-CEO", background: "TU Munich graduate" }
    ],
    highlights: ["Category leader", "2K+ enterprise customers", "Profitable"]
  },
  {
    id: "trade-republic",
    name: "Trade Republic",
    logo: "https://logo.clearbit.com/traderepublic.com",
    sector: "Fintech",
    country: "Germany",
    city: "Berlin",
    founded: 2015,
    currentValuation: 5_000_000_000,
    totalFunding: 1_300_000_000,
    lastRound: {
      type: "Series C",
      amount: 900_000_000,
      date: "2022-06",
      investors: ["Sequoia Capital", "TCV", "Ontario Teachers"]
    },
    scores: {
      team: 88,
      traction: 90,
      market: 86,
      funding: 92,
      momentum: 86,
      overall: 88
    },
    metrics: {
      teamSize: 700,
      monthlyGrowth: 6,
      customers: 4000000,
      revenue: "$150M"
    },
    description: "Commission-free trading app democratizing wealth building in Europe.",
    mission: "To enable everyone to invest in the capital markets.",
    products: ["Stock Trading", "ETF Savings Plans", "Crypto", "Bonds"],
    founders: [
      { name: "Christian Hecker", role: "CEO", background: "Entrepreneur" },
      { name: "Thomas Pischke", role: "Co-founder", background: "Finance" }
    ],
    highlights: ["4M+ users", "Pan-European expansion", "Full banking license"]
  },
  {
    id: "personio",
    name: "Personio",
    logo: "https://logo.clearbit.com/personio.com",
    sector: "HR Tech",
    country: "Germany",
    city: "Munich",
    founded: 2015,
    currentValuation: 8_500_000_000,
    totalFunding: 700_000_000,
    lastRound: {
      type: "Series E",
      amount: 200_000_000,
      date: "2022-06",
      investors: ["Greenoaks Capital", "Altimeter Capital", "Index Ventures"]
    },
    scores: {
      team: 90,
      traction: 92,
      market: 88,
      funding: 92,
      momentum: 86,
      overall: 90
    },
    metrics: {
      teamSize: 2000,
      monthlyGrowth: 5,
      customers: 10000,
      revenue: "$300M ARR"
    },
    description: "All-in-one HR software for small and medium-sized businesses.",
    mission: "To become the leading HR platform for SMEs.",
    products: ["HR Management", "Recruiting", "Payroll", "Performance"],
    founders: [
      { name: "Hanno Renner", role: "CEO", background: "Entrepreneur" },
      { name: "Jonas Rieke", role: "COO", background: "Consultant" }
    ],
    highlights: ["10K+ companies", "European HR leader", "Strong profitability path"]
  },
  {
    id: "wefox",
    name: "wefox",
    logo: "https://logo.clearbit.com/wefox.com",
    sector: "Insurtech",
    country: "Germany",
    city: "Berlin",
    founded: 2015,
    currentValuation: 4_500_000_000,
    totalFunding: 1_100_000_000,
    lastRound: {
      type: "Series D",
      amount: 400_000_000,
      date: "2022-07",
      investors: ["Mubadala", "LGT", "Target Global"]
    },
    scores: {
      team: 84,
      traction: 82,
      market: 84,
      funding: 88,
      momentum: 74,
      overall: 82
    },
    metrics: {
      teamSize: 1400,
      monthlyGrowth: 4,
      customers: 2000000,
      revenue: "$350M"
    },
    description: "Digital insurance platform combining tech and personal advisory services.",
    mission: "To reimagine insurance through personalized, digital-first experiences.",
    products: ["Insurance Platform", "wefox Insurance", "Advisor Network"],
    founders: [
      { name: "Julian Teicke", role: "CEO", background: "Serial entrepreneur" }
    ],
    highlights: ["2M+ customers", "Pan-European expansion", "Full-stack insurer"]
  },
  {
    id: "scalable-capital",
    name: "Scalable Capital",
    logo: "https://logo.clearbit.com/scalable.capital",
    sector: "Fintech",
    country: "Germany",
    city: "Munich",
    founded: 2014,
    currentValuation: 1_400_000_000,
    totalFunding: 266_000_000,
    lastRound: {
      type: "Series E",
      amount: 180_000_000,
      date: "2021-06",
      investors: ["Tencent", "BlackRock", "HV Capital"]
    },
    scores: {
      team: 86,
      traction: 88,
      market: 84,
      funding: 84,
      momentum: 82,
      overall: 85
    },
    metrics: {
      teamSize: 350,
      monthlyGrowth: 6,
      customers: 1000000,
      revenue: "$100M ARR"
    },
    description: "Digital investment platform offering wealth management and trading services.",
    mission: "To empower everyone to become an investor.",
    products: ["Wealth Management", "Trading Broker", "Robo-Advisor", "Crypto"],
    founders: [
      { name: "Erik Podzuweit", role: "Co-CEO", background: "Ex-Goldman Sachs" },
      { name: "Florian Prucker", role: "Co-CEO", background: "Ex-Goldman Sachs" }
    ],
    highlights: ["1M+ clients", "€20B+ AUM", "Profitable"]
  },
  {
    id: "adyen",
    name: "Adyen",
    logo: "https://logo.clearbit.com/adyen.com",
    sector: "Fintech",
    country: "Netherlands",
    city: "Amsterdam",
    founded: 2006,
    currentValuation: 50_000_000_000,
    totalFunding: 266_000_000,
    lastRound: {
      type: "Public",
      amount: 0,
      date: "2018-06",
      investors: ["Public"]
    },
    scores: {
      team: 94,
      traction: 96,
      market: 92,
      funding: 96,
      momentum: 90,
      overall: 94
    },
    metrics: {
      teamSize: 4000,
      monthlyGrowth: 3,
      customers: 5000,
      revenue: "$1.8B"
    },
    description: "Global payment platform providing end-to-end infrastructure for enterprises.",
    mission: "To help businesses achieve their ambitions faster.",
    products: ["Online Payments", "POS", "Issuing", "Financial Products"],
    founders: [
      { name: "Pieter van der Does", role: "CEO", background: "Ex-Bibit founder" },
      { name: "Arnout Schuijff", role: "CTO", background: "Ex-Bibit" }
    ],
    highlights: ["Public company", "Profitable at scale", "Enterprise focus"]
  },
  {
    id: "mollie",
    name: "Mollie",
    logo: "https://logo.clearbit.com/mollie.com",
    sector: "Fintech",
    country: "Netherlands",
    city: "Amsterdam",
    founded: 2004,
    currentValuation: 6_500_000_000,
    totalFunding: 800_000_000,
    lastRound: {
      type: "Series C",
      amount: 665_000_000,
      date: "2021-06",
      investors: ["Blackstone", "TCV", "General Atlantic"]
    },
    scores: {
      team: 88,
      traction: 90,
      market: 86,
      funding: 92,
      momentum: 84,
      overall: 88
    },
    metrics: {
      teamSize: 800,
      monthlyGrowth: 5,
      customers: 200000,
      revenue: "$200M ARR"
    },
    description: "Payment service provider focused on European SMEs and mid-market companies.",
    mission: "To simplify payments and money management for businesses.",
    products: ["Payment Processing", "Checkout", "Terminal", "Capital"],
    founders: [
      { name: "Adriaan Mol", role: "CEO", background: "Serial entrepreneur" }
    ],
    highlights: ["200K+ merchants", "European payment leader", "SME focus"]
  },
  {
    id: "messagebird",
    name: "MessageBird",
    logo: "https://logo.clearbit.com/messagebird.com",
    sector: "Communications",
    country: "Netherlands",
    city: "Amsterdam",
    founded: 2011,
    currentValuation: 3_000_000_000,
    totalFunding: 1_100_000_000,
    lastRound: {
      type: "Series D",
      amount: 800_000_000,
      date: "2021-09",
      investors: ["Tiger Global", "Eurazeo", "NewView Capital"]
    },
    scores: {
      team: 86,
      traction: 84,
      market: 82,
      funding: 88,
      momentum: 78,
      overall: 84
    },
    metrics: {
      teamSize: 800,
      monthlyGrowth: 5,
      customers: 25000,
      revenue: "$500M"
    },
    description: "Omnichannel communications platform for customer engagement.",
    mission: "To make communicating with businesses as easy as talking to friends.",
    products: ["SMS", "Voice", "Chat Apps", "Email", "Inbox"],
    founders: [
      { name: "Robert Vis", role: "CEO", background: "Serial entrepreneur" }
    ],
    highlights: ["25K+ customers", "Omnichannel leader", "Global presence"]
  },
  {
    id: "bolt",
    name: "Bolt",
    logo: "https://logo.clearbit.com/bolt.eu",
    sector: "Mobility",
    country: "Estonia",
    city: "Tallinn",
    founded: 2013,
    currentValuation: 8_400_000_000,
    totalFunding: 2_200_000_000,
    lastRound: {
      type: "Series E",
      amount: 711_000_000,
      date: "2022-01",
      investors: ["Sequoia Capital", "Fidelity", "Naya Capital"]
    },
    scores: {
      team: 90,
      traction: 92,
      market: 88,
      funding: 92,
      momentum: 88,
      overall: 90
    },
    metrics: {
      teamSize: 5000,
      monthlyGrowth: 6,
      customers: 150000000,
      revenue: "$1.5B"
    },
    description: "Super app for mobility and delivery services across Europe and Africa.",
    mission: "To make urban transportation more affordable and sustainable.",
    products: ["Ride-hailing", "Food Delivery", "Grocery", "Scooters", "Car-sharing"],
    founders: [
      { name: "Markus Villig", role: "CEO", background: "Entrepreneur at 19" }
    ],
    highlights: ["150M+ users", "45+ countries", "Path to profitability"]
  },
  {
    id: "pipedrive",
    name: "Pipedrive",
    logo: "https://logo.clearbit.com/pipedrive.com",
    sector: "SaaS",
    country: "Estonia",
    city: "Tallinn",
    founded: 2010,
    currentValuation: 1_500_000_000,
    totalFunding: 90_000_000,
    lastRound: {
      type: "Acquired by Vista Equity",
      amount: 0,
      date: "2020-11",
      investors: ["Vista Equity Partners"]
    },
    scores: {
      team: 86,
      traction: 88,
      market: 84,
      funding: 84,
      momentum: 80,
      overall: 84
    },
    metrics: {
      teamSize: 1000,
      monthlyGrowth: 5,
      customers: 100000,
      revenue: "$200M ARR"
    },
    description: "Sales CRM and pipeline management software for small businesses.",
    mission: "To help small businesses grow.",
    products: ["CRM", "Email Marketing", "Lead Generation", "Automation"],
    founders: [
      { name: "Timo Rein", role: "Co-founder", background: "Sales expert" },
      { name: "Ragnar Sass", role: "Co-founder", background: "Entrepreneur" }
    ],
    highlights: ["100K+ companies", "Global SMB CRM leader", "Profitable"]
  },
  {
    id: "uipath",
    name: "UiPath",
    logo: "https://logo.clearbit.com/uipath.com",
    sector: "Enterprise Software",
    country: "Romania",
    city: "Bucharest",
    founded: 2005,
    currentValuation: 10_000_000_000,
    totalFunding: 2_000_000_000,
    lastRound: {
      type: "Public",
      amount: 0,
      date: "2021-04",
      investors: ["Public"]
    },
    scores: {
      team: 92,
      traction: 94,
      market: 90,
      funding: 94,
      momentum: 86,
      overall: 91
    },
    metrics: {
      teamSize: 4000,
      monthlyGrowth: 4,
      customers: 10000,
      revenue: "$1.3B ARR"
    },
    description: "Enterprise automation platform for robotic process automation (RPA).",
    mission: "To accelerate human achievement through the power of automation.",
    products: ["RPA Platform", "AI Automation", "Process Mining", "Test Automation"],
    founders: [
      { name: "Daniel Dines", role: "CEO", background: "Software engineer" }
    ],
    highlights: ["10K+ enterprise customers", "RPA market leader", "Public company"]
  },
  {
    id: "vinted",
    name: "Vinted",
    logo: "https://logo.clearbit.com/vinted.com",
    sector: "E-commerce",
    country: "Lithuania",
    city: "Vilnius",
    founded: 2008,
    currentValuation: 4_500_000_000,
    totalFunding: 562_000_000,
    lastRound: {
      type: "Series F",
      amount: 303_000_000,
      date: "2021-05",
      investors: ["EQT Growth", "Accel", "Insight Partners"]
    },
    scores: {
      team: 88,
      traction: 92,
      market: 86,
      funding: 90,
      momentum: 88,
      overall: 89
    },
    metrics: {
      teamSize: 1000,
      monthlyGrowth: 5,
      customers: 80000000,
      revenue: "$400M"
    },
    description: "Europe's largest online marketplace for second-hand fashion.",
    mission: "To make second-hand the first choice worldwide.",
    products: ["C2C Marketplace", "Shipping Integration", "Buyer Protection"],
    founders: [
      { name: "Milda Mitkute", role: "Co-founder", background: "Entrepreneur" },
      { name: "Justas Janauskas", role: "CEO", background: "Tech entrepreneur" }
    ],
    highlights: ["80M+ members", "Profitable", "European market leader"]
  },
  {
    id: "hopin",
    name: "Hopin",
    logo: "https://logo.clearbit.com/hopin.com",
    sector: "Events",
    country: "UK",
    city: "London",
    founded: 2019,
    currentValuation: 1_000_000_000,
    totalFunding: 1_000_000_000,
    lastRound: {
      type: "Series D",
      amount: 450_000_000,
      date: "2021-08",
      investors: ["Andreessen Horowitz", "IVP", "Tiger Global"]
    },
    scores: {
      team: 80,
      traction: 70,
      market: 75,
      funding: 88,
      momentum: 60,
      overall: 74
    },
    metrics: {
      teamSize: 400,
      monthlyGrowth: 2,
      customers: 100000,
      revenue: "$50M ARR"
    },
    description: "Virtual and hybrid events platform for businesses.",
    mission: "To help create live experiences that people love.",
    products: ["Virtual Events", "Hybrid Events", "Webinars", "Event Analytics"],
    founders: [
      { name: "Johnny Boufarhat", role: "CEO", background: "Entrepreneur" }
    ],
    highlights: ["Rapid pandemic growth", "Multiple acquisitions", "Market consolidation"]
  },
  {
    id: "glovo",
    name: "Glovo",
    logo: "https://logo.clearbit.com/glovoapp.com",
    sector: "Food Delivery",
    country: "Spain",
    city: "Barcelona",
    founded: 2015,
    currentValuation: 2_300_000_000,
    totalFunding: 1_200_000_000,
    lastRound: {
      type: "Acquired by Delivery Hero",
      amount: 0,
      date: "2022-07",
      investors: ["Delivery Hero"]
    },
    scores: {
      team: 84,
      traction: 86,
      market: 82,
      funding: 86,
      momentum: 78,
      overall: 83
    },
    metrics: {
      teamSize: 3000,
      monthlyGrowth: 4,
      customers: 15000000,
      revenue: "$1B"
    },
    description: "On-demand delivery platform for food, groceries, and more.",
    mission: "To give everyone easy access to anything in their city.",
    products: ["Food Delivery", "Q-Commerce", "Glovo Prime"],
    founders: [
      { name: "Oscar Pierre", role: "CEO", background: "Entrepreneur" },
      { name: "Sacha Michaud", role: "Co-founder", background: "Entrepreneur" }
    ],
    highlights: ["15M+ users", "25+ countries", "Part of Delivery Hero"]
  },
  {
    id: "exotrail",
    name: "Exotrail",
    logo: "https://logo.clearbit.com/exotrail.com",
    sector: "SpaceTech",
    country: "France",
    city: "Massy",
    founded: 2017,
    currentValuation: 150_000_000,
    totalFunding: 54_000_000,
    lastRound: {
      type: "Series B",
      amount: 38_000_000,
      date: "2023-07",
      investors: ["Bpifrance", "Expansion", "Karista"]
    },
    scores: {
      team: 84,
      traction: 76,
      market: 88,
      funding: 78,
      momentum: 82,
      overall: 82
    },
    metrics: {
      teamSize: 120,
      monthlyGrowth: 10,
      customers: 30,
      revenue: "$10M"
    },
    description: "Space mobility company providing electric propulsion systems for satellites.",
    mission: "To make space logistics accessible for all satellite operators.",
    products: ["Electric Propulsion", "Mission Software", "Orbital Services"],
    founders: [
      { name: "David Henri", role: "CEO", background: "Space engineer" },
      { name: "Jean-Luc Maria", role: "CTO", background: "Propulsion expert" }
    ],
    highlights: ["30+ missions signed", "European space leader", "Full-stack space mobility"]
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    logo: "https://logo.clearbit.com/huggingface.co",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2016,
    currentValuation: 4_500_000_000,
    totalFunding: 395_000_000,
    lastRound: {
      type: "Series D",
      amount: 235_000_000,
      date: "2023-08",
      investors: ["Google", "Amazon", "Salesforce", "Nvidia"]
    },
    scores: {
      team: 94,
      traction: 92,
      market: 95,
      funding: 92,
      momentum: 94,
      overall: 93
    },
    metrics: {
      teamSize: 200,
      monthlyGrowth: 15,
      customers: 50000,
      revenue: "$70M ARR"
    },
    description: "The GitHub of machine learning, providing tools and a hub for AI models.",
    mission: "To democratize good machine learning.",
    products: ["Transformers Library", "Model Hub", "Datasets", "Spaces", "Enterprise"],
    founders: [
      { name: "Clément Delangue", role: "CEO", background: "Serial entrepreneur" },
      { name: "Julien Chaumond", role: "CTO", background: "Ex-Google engineer" }
    ],
    highlights: ["500K+ models hosted", "AI community leader", "Strategic investors"]
  },
  {
    id: "photoroom",
    name: "PhotoRoom",
    logo: "https://logo.clearbit.com/photoroom.com",
    sector: "AI/ML",
    country: "France",
    city: "Paris",
    founded: 2019,
    currentValuation: 500_000_000,
    totalFunding: 65_000_000,
    lastRound: {
      type: "Series B",
      amount: 43_000_000,
      date: "2023-09",
      investors: ["Balderton Capital", "Aglaé Ventures"]
    },
    scores: {
      team: 86,
      traction: 88,
      market: 84,
      funding: 82,
      momentum: 90,
      overall: 86
    },
    metrics: {
      teamSize: 70,
      monthlyGrowth: 12,
      customers: 150000000,
      revenue: "$50M ARR"
    },
    description: "AI-powered photo editing app for e-commerce and content creation.",
    mission: "To make professional product photography accessible to everyone.",
    products: ["Background Removal", "AI Photo Editor", "Batch Processing", "API"],
    founders: [
      { name: "Matthieu Rouif", role: "CEO", background: "Ex-Google AI" },
      { name: "Eliot Andres", role: "CTO", background: "ML engineer" }
    ],
    highlights: ["150M+ downloads", "Profitable", "AI-first mobile app"]
  }
];

export const sectors = [
  "AI/ML",
  "Fintech",
  "Enterprise Software",
  "HR Tech",
  "E-commerce",
  "Insurtech",
  "LegalTech",
  "B2B Marketplace",
  "Gaming/Web3",
  "Analytics",
  "Crypto/Hardware",
  "AgriTech",
  "Communications",
  "Mobility",
  "SaaS",
  "Events",
  "Food Delivery",
  "SpaceTech",
  "Music/Media"
];

export const countries = [
  "France",
  "UK",
  "Germany",
  "Sweden",
  "Netherlands",
  "Estonia",
  "Romania",
  "Lithuania",
  "Spain"
];

export const fundingStages = [
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series E",
  "Series F",
  "Public",
  "Private Equity"
];
