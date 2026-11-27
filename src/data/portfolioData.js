export const personalInfo = {
  name: "Sai Kumar Shetty",
  headline: "Software Engineer | Full-Stack Developer | AI & Cybersecurity Enthusiast",
  subheading: "Final-year Information Technology engineer building intelligent, secure, and production-ready applications with modern web stacks and autonomous AI systems.",
  location: "Hyderabad, Telangana, India",
  email: "shettysaikumar20@gmail.com",
  github: "https://github.com/shettysaikumar20",
  linkedin: "https://www.linkedin.com/in/shetty-sai-kumar/",
  status: "Open to opportunities",
  availability: "Available for SDE / Full-Stack / Backend / AI Engineering roles",
  bio: `I am a final-year Information Technology engineering student at Vignana Bharathi Institute of Technology (VBIT) with a hands-on track record of building production-grade full-stack web applications, AI-driven automation systems, scalable backend services, and automated web vulnerability assessment platforms.

Having started my technical journey with an Automobile Engineering diploma from Government Polytechnic Masab Tank before entering B.Tech through lateral entry, I bring a strong multidisciplinary systems-thinking approach to software engineering. Whether engineering an AI security penetration tester with 149 test suites, deploying a live AI notes platform with multi-LLM fallbacks, or winning 3rd place in college research for an AI-powered E-Waste management system, I focus on practical, secure, and scalable solutions that deliver measurable value.`,
  stats: [
    { label: "Research Award", value: "3rd Prize", subtext: "VBIT Real-Time Research Project" },
    { label: "Hacktoberfest 2026", value: "1st Place", subtext: "Out of 150+ participants" },
    { label: "Major Projects Built", value: "6+", subtext: "Full-Stack, AI & Security" },
    { label: "Security Test Suites", value: "149+", subtext: "Passed on Flagship Agent" },
  ]
};

export const educationData = [
  {
    id: "btech",
    degree: "B.Tech in Information Technology",
    institution: "Vignana Bharathi Institute of Technology (VBIT)",
    location: "Hyderabad, India",
    period: "2023 – 2027",
    cgpa: "8.15 / 10",
    status: "Final Year · Expected May 2027",
    note: "Joined through lateral entry after completing Diploma with academic excellence.",
    highlights: [
      "Secured 3rd Prize in VBIT Real-Time Research Project for 'E-Waste Management System' under Dr. K. Kalaiwani.",
      "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Computer Networks, Operating Systems, Information Security.",
      "Active participant in Smart India Hackathon (Team Amogha) and national coding challenges."
    ]
  },
  {
    id: "diploma",
    degree: "Diploma in Automobile Engineering",
    institution: "Government Polytechnic College, Masab Tank",
    location: "Hyderabad, India",
    period: "2021 – 2024",
    cgpa: "8.20 / 10",
    status: "Completed with Distinction",
    note: "Strong foundation in applied mathematics, structural mechanics, electrical diagnostics, and systems engineering.",
    highlights: [
      "Consistently achieved top-tier grades (8.2 CGPA) across technical curricula.",
      "Completed rigorous diagnostic internships and hands-on mechanical & electro-mechanical troubleshooting.",
      "Successfully transitioned analytical problem-solving skills into software engineering and computer science."
    ]
  }
];

export const experienceData = [
  {
    id: "mercedes",
    role: "Technical Intern",
    company: "Silver Star Mercedes-Benz – Raam Groups",
    location: "Hyderabad, India",
    period: "June 2023 – November 2023",
    type: "Internship",
    badge: "Automotive Tech & Analytics",
    responsibilities: [
      "Spearheaded technical battery-health diagnostic reporting and quality assurance pipelines for ~3,000 luxury vehicles.",
      "Designed and implemented Google Sheets and automated data workflows to track vehicle diagnostic intake, service lifecycle, and battery condition benchmarks.",
      "Collaborated with workshop technical leads to streamline reporting protocols, resulting in an estimated ~25% improvement in diagnostic tracking reliability and report turnaround time.",
      "Maintained meticulous compliance logs conforming to German luxury automotive diagnostic standards."
    ],
    skills: ["Automotive Diagnostics", "Data Workflow Automation", "Quality Assurance", "Process Optimization", "Battery Health Telemetry"]
  },
  {
    id: "supraja",
    role: "Technology Intern",
    company: "Supraja Technologies",
    location: "Hyderabad, India",
    period: "2024",
    type: "Technical Project Internship",
    badge: "Software & Security Exploration",
    responsibilities: [
      "Completed focused offline modules covering computer security fundamentals, network scanning methodologies, and software verification.",
      "Drafted and submitted detailed technical documentation, project architecture blueprints, and experimental analysis reports.",
      "Independently expanded on practical security concepts to build the foundation for subsequent autonomous security testing projects."
    ],
    skills: ["Network Basics", "Application Security", "Technical Documentation", "Software Verification"]
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code",
    description: "Core languages used for backend algorithms, systems, and frontend logic.",
    skills: [
      { name: "Java", level: "Core OOP, Collections, Multithreading" },
      { name: "Python", level: "FastAPI, Automation, AI Integrations, Scripting" },
      { name: "JavaScript (ES6+)", level: "Modern Async/Await, DOM, Functional JS" },
      { name: "SQL", level: "Complex Queries, Joins, Indexing, Schema Design" },
      { name: "C", level: "Pointers, Memory Fundamentals, Systems Concepts" }
    ]
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, accessible, high-performance web applications.",
    skills: [
      { name: "React.js", level: "Hooks, Context, Custom Components, State Management" },
      { name: "Vite", level: "Next-gen tooling, Fast HMR, Build Optimization" },
      { name: "Tailwind CSS", level: "Modern utility-first styling, Dark mode, Design systems" },
      { name: "HTML5 & CSS3", level: "Semantic Markup, Flexbox, Grid, CSS Animations" },
      { name: "Bootstrap", level: "Rapid prototyping, Responsive grids" }
    ]
  },
  {
    title: "Backend Development",
    icon: "Server",
    description: "Robust RESTful APIs, asynchronous services, and secure controllers.",
    skills: [
      { name: "Node.js", level: "Event-driven runtime, NPM ecosystem, Server workflows" },
      { name: "Express.js", level: "Middleware, Routing, JWT Auth, API endpoints" },
      { name: "FastAPI", level: "High-performance Python APIs, Pydantic, OpenAPI docs" },
      { name: "RESTful APIs", level: "Clean API contract design, Status codes, Error handling" }
    ]
  },
  {
    title: "Databases & Storage",
    icon: "Database",
    description: "Relational, document, and embedded databases for diverse workloads.",
    skills: [
      { name: "MongoDB", level: "NoSQL schemas, Aggregation pipelines, Mongoose" },
      { name: "PostgreSQL", level: "Relational modeling, Constraints, SQLAlchemy ORM" },
      { name: "MySQL", level: "Relational schemas, Stored procedures, Admin" },
      { name: "SQLite", level: "Lightweight local DB, Embedded application storage" },
      { name: "Firebase", level: "Firestore, Realtime data, Cloud authentication" }
    ]
  },
  {
    title: "AI & Generative AI",
    icon: "Bot",
    description: "Multi-modal LLMs, speech-to-text, agentic workflows, and fallback pipelines.",
    skills: [
      { name: "Google Gemini API", level: "Gemini 1.5/2.0 multimodal vision, Function calling" },
      { name: "OpenRouter & Backboard", level: "Multi-model orchestration, Cost & latency routing" },
      { name: "Ollama (Local LLMs)", level: "Offline inference, Llama 3/Mistral fallback engines" },
      { name: "Whisper AI", level: "Audio transcription, Speech-to-text integration" },
      { name: "Autonomous AI Agents", level: "Policy engines, Safe tool execution, Structured output" },
      { name: "KaTeX / Math Formulae", level: "Dynamic LaTeX mathematical rendering in chat" }
    ]
  },
  {
    title: "Cybersecurity & AppSec",
    icon: "ShieldAlert",
    description: "Web application vulnerability scanning, OWASP standards, and safe probing.",
    skills: [
      { name: "OWASP Top 10", level: "Core threat vectors, Injection, Broken access, Misconfig" },
      { name: "SQLi & Reflected XSS", level: "Heuristic payloads, Contextual response detection" },
      { name: "SSRF & LFI Probes", level: "Server-side request forgery & file inclusion testing" },
      { name: "Web Security Auditing", level: "TCP scanning, HTTP header fingerprinting, Crawling" },
      { name: "Policy Enforcement", level: "Restricted sandbox execution for AI actions" }
    ]
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: "Cloud",
    description: "Version control, containerization, cloud fundamentals, and workflow tools.",
    skills: [
      { name: "Git & GitHub", level: "Branching strategies, Pull requests, Release tagging" },
      { name: "Docker", level: "Containerizing services, Dockerfiles, Local environments" },
      { name: "Microsoft Azure", level: "AZ-900 certified, Azure Portal, VM & App services" },
      { name: "AWS Basics", level: "Cloud fundamentals, S3 storage, Compute basics" },
      { name: "Postman", level: "API test collections, Environment vars, Mocking" },
      { name: "VS Code & Jira", level: "Agile task tracking, GitLens, Debugging" }
    ]
  }
];

export const projectsData = [
  {
    id: "pentester-agent",
    title: "AI-Powered Security Agent for Web Applications",
    subtitle: "Autonomous Vulnerability Assessment & Remediation Advisor",
    category: "Cybersecurity & AI",
    type: "Flagship Major Project",
    isFlagship: true,
    isAward: false,
    featured: true,
    filterTags: ["all", "cybersecurity", "ai", "backend"],
    summary: "An enterprise-grade automated web application penetration testing platform that pairs heuristic security probes with an AI Security Advisor to detect critical OWASP vulnerabilities and generate policy-validated mitigation roadmaps.",
    metrics: [
      { label: "Milestone Backend Tests", value: "149 Passed" },
      { label: "Frontend UI Tests", value: "25 Passed" },
      { label: "OWASP Probes", value: "6+ Vectors" },
      { label: "Policy Guardrails", value: "100% Validated" }
    ],
    techStack: ["Python", "FastAPI", "React", "Vite", "SQLite", "Claude AI Integration", "Tailwind CSS", "Security Testing Plugins"],
    features: [
      "Authorized Target Validation: Strict DNS, localhost, and IP domain whitelisting to eliminate unapproved scanning.",
      "Multi-Vector Vulnerability Probes: Heuristic testing for SQL Injection, Reflected XSS, LFI (Local File Inclusion), SSRF, and Command Injection.",
      "Discovery & Fingerprinting Engine: TCP port scanning, service identification, HTTP response header fingerprinting, and dynamic directory crawling.",
      "AI Security Advisor: Translates raw probe anomalies into human-readable risk assessments and remediation patches.",
      "Policy Validation Sandbox: Enforces strict safety rules on AI-generated recommendations to prevent destructive actions.",
      "Auditor-Ready Reporting: Generates exportable, standardized JSON and styled HTML reports with CVSS severity scoring."
    ],
    architecture: {
      frontend: "React + Vite dashboard with real-time scan progress indicators, vulnerability breakdown charts, and target management.",
      backend: "Asynchronous Python FastAPI service executing modular probe plugins with non-blocking concurrency.",
      aiEngine: "Claude LLM prompt-engineered with AppSec best practices and filtered through a deterministic validator.",
      storage: "SQLite database logging scans, raw request/response payloads, and audit trails."
    },
    githubUrl: null, // "Not yet publicly uploaded"
    liveUrl: null,
    statusNotice: "Proprietary research project · Currently undergoing advanced verification · Source code available upon request."
  },
  {
    id: "ewaste-management",
    title: "E-Waste Management System",
    subtitle: "AI-Powered Electronic Waste Collection & Hyderabad Recycling Hub",
    category: "Award-Winning Research · Web & AI",
    type: "Award Winner · 3rd Prize VBIT",
    isFlagship: false,
    isAward: true,
    featured: true,
    awardBadge: "🥉 3rd Prize – Real-Time Research Project",
    filterTags: ["all", "award", "ai", "fullstack"],
    summary: "An award-winning platform integrating Node.js and Google Gemini Vision AI to streamline electronic waste collection, customer appointment scheduling, live service dispatching, and intelligent Hyderabad recycling center recommendations.",
    metrics: [
      { label: "Research Award", value: "3rd Place" },
      { label: "Institution", value: "VBIT Hyderabad" },
      { label: "AI Engine", value: "Gemini Vision" },
      { label: "Domain", value: "Sustainable Tech" }
    ],
    techStack: ["Node.js", "Google Gemini AI", "JavaScript", "HTML5", "CSS3", "Express", "REST APIs"],
    features: [
      "Customer Appointment Booking: User-friendly scheduling system for door-to-door electronic waste pickup.",
      "Pickup Request & Live Tracking: Transparent progress tracking for customers while field workers update collection milestones.",
      "Comprehensive Admin Dashboard: Enables administrators to assign pickup routes, monitor field agents, and oversee waste volume.",
      "Gemini Multimodal E-Waste Recognition: Users upload photographs of discarded electronics; Google Gemini classifies item type, hazardous components, and recyclability index.",
      "Hyderabad Recycling Center Intelligence: AI-powered location matcher recommending authorized e-waste recyclers and drop-off hubs across Hyderabad."
    ],
    awardDetails: {
      title: "THIRD PRIZE – Real-Time Research Project",
      institution: "Vignana Bharathi Institute of Technology (VBIT)",
      department: "Department of Information Technology",
      guide: "Dr. K. Kalaiwani",
      recognition: "Certificate of Appreciation awarded for excellence in socially impactful applied research and web development.",
      date: "VBIT Academic Research Exhibition"
    },
    githubUrl: null,
    liveUrl: null,
    statusNotice: "Awarded Certificate of Appreciation by VBIT Department of Information Technology."
  },
  {
    id: "need-a-help",
    title: "Need-a-Help – AI Notes Assistant",
    subtitle: "Intelligent Document Q&A with Multi-LLM Redundancy",
    category: "Generative AI & Full-Stack",
    type: "Live Production Application",
    isFlagship: false,
    isAward: false,
    featured: true,
    filterTags: ["all", "ai", "fullstack"],
    summary: "A production AI-powered study workspace where students upload course materials, PDFs, and notes to interact via intelligent contextual dialogue, mathematical formula rendering, and syntax-highlighted code generation.",
    metrics: [
      { label: "Deployment", value: "Live on Render" },
      { label: "Multi-Model", value: "3+ Providers" },
      { label: "Math Rendering", value: "KaTeX Powered" },
      { label: "Speech AI", value: "Whisper Ready" }
    ],
    techStack: ["React.js", "Google Gemini API", "Backboard AI", "OpenRouter", "Ollama (Local)", "Whisper", "KaTeX", "Tailwind CSS"],
    features: [
      "Multi-Format Document Upload: Ingests educational PDFs and notes for instant indexing and semantic query answering.",
      "Contextual Study Q&A: Natural language study assistant explaining intricate concepts, step-by-step algorithms, and summaries.",
      "Mathematical LaTeX Rendering: Flawless display of complex equations and scientific notations via KaTeX.",
      "Code Syntax Highlighting: Auto-formatting for snippets in Python, C++, Java, and JavaScript with 1-click copy.",
      "High-Availability AI Pipeline: OpenRouter routing with Google Gemini, Backboard AI, and local Ollama redundancy."
    ],
    githubUrl: "https://github.com/shettysaikumar20/need-a-help",
    liveUrl: "https://need-a-help.onrender.com",
    statusNotice: "Live and accessible for recruiters and students to test."
  },
  {
    id: "labelsure-sih",
    title: "LabelSure – Legal Metrology Compliance",
    subtitle: "Smart India Hackathon 2026 Innovation Platform",
    category: "AI & Regulatory Technology",
    type: "Hackathon Innovation · Team Amogha",
    isFlagship: false,
    isAward: false,
    featured: false,
    filterTags: ["all", "ai", "fullstack", "backend"],
    summary: "A digital regulatory compliance solution designed for the Smart India Hackathon to inspect packaged commodity declarations, extracting fine print via PaddleOCR and verifying compliance against Legal Metrology rules.",
    metrics: [
      { label: "Hackathon", value: "SIH 2026" },
      { label: "Team", value: "Team Amogha" },
      { label: "Vision Tech", value: "PaddleOCR" },
      { label: "Backend", value: "FastAPI + PG" }
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "SQLite Fallback", "PaddleOCR"],
    features: [
      "PaddleOCR Extraction: Automated parsing of MRP, net quantity, batch numbers, manufacturer details, and expiration dates from packaging images.",
      "Rule-Based Legal Metrology Engine: Automated compliance verification detecting missing statutory declarations and font size violations.",
      "Inspector Dashboard: Specialized interface for enforcement officers to record inspections, attach photographic evidence, and export formal violation notices.",
      "Role-Based Access Control: Granular permissions separating field inspectors, review officers, and system administrators."
    ],
    githubUrl: null,
    liveUrl: null,
    statusNotice: "Smart India Hackathon 2026 Project by Team Amogha (formerly Apex)."
  },
  {
    id: "friendforge",
    title: "FriendForge – AI Study Companion",
    subtitle: "Conversational Voice-Enabled Learning Partner",
    category: "AI Application & Voice Tech",
    type: "AI Interactive Application",
    isFlagship: false,
    isAward: false,
    featured: false,
    filterTags: ["all", "ai"],
    summary: "An interactive AI companion that transforms study sessions into dynamic audio-visual dialogues, utilizing Llama 3.1 8B for reasoned explanations and ElevenLabs for realistic voice synthesis.",
    metrics: [
      { label: "Reasoning Model", value: "Llama 3.1 8B" },
      { label: "Voice Synthesis", value: "ElevenLabs" },
      { label: "SDK", value: "Backboard" },
      { label: "Pipeline", value: "End-to-End" }
    ],
    techStack: ["React", "Backboard SDK", "OpenRouter", "Llama 3.1 8B", "ElevenLabs Voice API", "Tailwind CSS"],
    features: [
      "Dynamic Voice Playback: Renders AI responses into natural, expressive speech streamed directly to the browser.",
      "Curriculum Study Assistance: Helps students break down complex coursework into bite-sized conversational chapters.",
      "Verified Deployment Pipeline: Render → Study UI → Llama response generation → ElevenLabs synthesis → Low-latency audio playback."
    ],
    githubUrl: "https://github.com/shettysaikumar20/FriendForge",
    liveUrl: null,
    statusNotice: "Codebase available on GitHub with complete architecture pipeline documentation."
  },
  {
    id: "sai-web-studio",
    title: "Sai Web Studio – Digital Agency Platform",
    subtitle: "Client-Facing Web Development & Digital Showcase",
    category: "Web Development & Product Design",
    type: "Commercial Web Platform",
    isFlagship: false,
    isAward: false,
    featured: false,
    filterTags: ["all", "fullstack"],
    summary: "A high-conversion commercial website built to showcase web development capabilities, presenting 4 production template demos (EduPrime, FitCore, UrbanGlow, LaunchNest) and transparent service tiering.",
    metrics: [
      { label: "Showcase Demos", value: "4 Custom Sites" },
      { label: "Service Tiers", value: "₹5k / ₹8k / ₹15k" },
      { label: "Integration", value: "WhatsApp & SEO" },
      { label: "Optimization", value: "100% Responsive" }
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO Architecture", "WhatsApp API"],
    features: [
      "Multi-Industry Interactive Demos: EduPrime (Education), FitCore (Fitness), UrbanGlow (Lifestyle), and LaunchNest (Startup landing).",
      "Tiered Service Pricing: Transparent pricing packages tailored for small businesses and independent brands.",
      "Direct Conversion Funnel: Instant WhatsApp consultation triggers and inquiry forms."
    ],
    githubUrl: null,
    liveUrl: null,
    statusNotice: "Production design showcasing client-oriented digital craftsmanship."
  }
];

export const achievementsData = [
  {
    id: "vbit-ewaste",
    title: "3rd Prize – Real-Time Research Project",
    subtitle: "E-Waste Management System with Gemini AI",
    category: "Institutional Research Award",
    badge: "🥉 THIRD PLACE",
    date: "Academic Year 2024–2025",
    organization: "Vignana Bharathi Institute of Technology (VBIT)",
    department: "Department of Information Technology",
    guide: "Dr. K. Kalaiwani",
    isFeatured: true,
    certificateAvailable: true,
    description: "Secured Third Prize in the Real-Time Research Project competition at Vignana Bharathi Institute of Technology for conceptualizing and developing an E-Waste Management System integrating modern web technologies and Google Gemini AI. The project focuses on simplifying e-waste collection, improving pickup coordination, and helping citizens in Hyderabad identify authorized recycling facilities.",
    takeaways: [
      "Engineered real-time tracking architecture for pickup workers and clients.",
      "Integrated Google Gemini Multimodal Vision API for automated item classification.",
      "Presented rigorous research defense to senior faculty and department heads."
    ]
  },
  {
    id: "hacktoberfest-2026",
    title: "1st Place Winner – Hacktoberfest 2026",
    subtitle: "Hack Day Hyderabad Open-Source & AI Challenge",
    category: "Hackathon Championship",
    badge: "🥇 1ST OUT OF 150+",
    date: "October 25, 2026",
    organization: "Hacktoberfest / Open Source Community Hyderabad",
    location: "Hyderabad, India",
    isFeatured: true,
    certificateAvailable: false,
    description: "Secured 1st Place out of 150 participating software engineers and open-source contributors at the Hacktoberfest 2026 Hack Day in Hyderabad. Recognized for rapid prototyping, clean code architecture, and high-impact problem solving.",
    prize: "Won official Arduino UNO Q development board and exclusive Hacktoberfest honors."
  },
  {
    id: "sih-2026",
    title: "Smart India Hackathon 2026 Project Finalist",
    subtitle: "LabelSure Automated Legal Metrology Inspection Platform",
    category: "National Hackathon",
    badge: "TEAM AMOGHA",
    date: "2026",
    organization: "Ministry of Education & AICTE",
    description: "Collaborated in Team Amogha (formerly Apex) to engineer LabelSure, an AI and PaddleOCR-powered platform automating packaged commodity declaration audits for Legal Metrology officers."
  },
  {
    id: "az-900",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    subtitle: "Cloud Architecture, Security, Governance & Compliance",
    category: "Industry Certification",
    badge: "MICROSOFT CERTIFIED",
    date: "Passed July 1, 2026",
    organization: "Microsoft",
    description: "Validated foundational knowledge of cloud concepts, Azure core services, security management, network infrastructure, governance policies, and cost management."
  },
  {
    id: "azure-applied-skills",
    title: "Microsoft Applied Skills: Azure Management",
    subtitle: "Hands-on Cloud Infrastructure Assessment",
    category: "Technical Assessment",
    badge: "SCORE: 78%",
    date: "2026",
    organization: "Microsoft",
    description: "Successfully passed practical, performance-based laboratory assessment demonstrating hands-on competency in configuring, monitoring, and managing Azure resources."
  },
  {
    id: "google-genai",
    title: "Google Cloud Gen AI Academy – APAC Cohort 3",
    subtitle: "Cloud Run, ADK, BigQuery & Gemma Architectures",
    category: "Advanced AI Specialization",
    badge: "GOOGLE CLOUD",
    date: "2026",
    organization: "Google Cloud",
    description: "Completed intensive technical cohort focusing on deploying production GenAI applications with Cloud Run, Agent Development Kit (ADK), BigQuery analytics, and Gemma open-weights models."
  }
];

export const certificationsList = [
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    issueDate: "July 1, 2026",
    credentialId: "AZ-900 Verified",
    badgeColor: "from-blue-600 to-cyan-500",
    skills: ["Cloud Concepts", "Azure Compute & Storage", "Azure Security & Identity", "SLA & Governance"]
  },
  {
    title: "Microsoft Applied Skills – Azure Management",
    issuer: "Microsoft",
    issueDate: "2026",
    credentialId: "Score: 78%",
    badgeColor: "from-indigo-600 to-blue-500",
    skills: ["Resource Groups", "Virtual Networking", "Azure Monitor & Logs", "Cost Optimization"]
  },
  {
    title: "Google Cloud Gen AI Academy – APAC Cohort 3",
    issuer: "Google Cloud",
    issueDate: "2026",
    credentialId: "APAC Cohort 3 Graduate",
    badgeColor: "from-amber-500 to-red-500",
    skills: ["Cloud Run", "ADK (Agent Dev Kit)", "BigQuery ML", "Gemma AI Models"]
  }
];
