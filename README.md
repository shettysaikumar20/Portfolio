# Sai Kumar Shetty — Professional Developer Portfolio

A production-quality personal portfolio website engineered with **React 19**, **Vite**, **Tailwind CSS**, and **Lucide Icons** highlighting strengths in **Full-Stack Software Engineering**, **Applied AI Systems**, and **Cybersecurity**.

---

## 🌟 Key Features

- **Flagship Project Showcase**:
  - **AI-Powered Security Agent for Web Applications**: Detailed case study modal exploring the 149-test milestone, active OWASP probes (SQLi, XSS, SSRF, LFI, Command Injection), deterministic safety policy sandboxing, and CVSS severity reporting.
  - **E-Waste Management System (3rd Prize Winner)**: Dedicated feature spotlight celebrating the **Third Prize in Real-Time Research Project** at Vignana Bharathi Institute of Technology (VBIT) under guide Dr. K. Kalaiwani, complete with an interactive official Certificate of Appreciation modal, confetti celebration, and an instant "Upload Scanned Certificate" feature.
  - **Need-a-Help**: Live production study workspace with multi-LLM redundancy (Gemini API, Backboard AI, OpenRouter, Ollama) and KaTeX mathematical formula rendering.
  - **LabelSure (SIH 2026)**: Legal Metrology regulatory compliance inspection tool with PaddleOCR and FastAPI.
  - **FriendForge**: Voice-enabled AI study partner powered by Llama 3.1 8B and ElevenLabs speech synthesis.
  - **Sai Web Studio**: High-converting web design studio showcasing production demos and tiered offerings.

- **Verified Achievements & Honors**:
  - 🥉 **3rd Prize** – Real-Time Research Project (VBIT Department of Information Technology)
  - 🥇 **1st Place** – Hacktoberfest 2026 Hack Day Hyderabad (1st of 150+ software developers)
  - ☁️ **Microsoft Azure Fundamentals (AZ-900)** Certification
  - 🛡️ **Microsoft Applied Skills – Azure Management** (78% Score)
  - 🧠 **Google Cloud Gen AI Academy – APAC Cohort 3**

- **Interactive Capabilities**:
  - **Certificate Modal**: Inspect the high-fidelity parchment certificate with seal and signatures, print/save as PDF, or upload a real photo scan with local persistence.
  - **Interactive Resume Modal**: Print or save a clean, recruiter-friendly single/two-page resume with standard CSS print rules.
  - **Working Skills Inventory**: Filterable and searchable capability matrix organized across 7 categories without artificial percentage bars.
  - **Interactive Contact Form**: Direct pre-filled email client launcher (`mailto:`) with one-click copy fallback.

---

## 🛠️ Tech Stack

- **Framework**: React.js 19
- **Bundler & Tooling**: Vite 8 with `@tailwindcss/vite`
- **Styling**: Tailwind CSS v4 (Deep dark theme `#060913`, electric blue, violet & cyan accents)
- **Icons**: Lucide React + custom precision SVG brand icons
- **Effects**: Canvas Confetti for awards celebration

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm` / `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/shettysaikumar20/my-portfolio.git

# Navigate into directory
cd my-portfolio

# Install dependencies
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

Create an optimized production bundle in the `dist` folder:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/              # Static media & uploaded images
│   └── favicon.svg          # Custom SVG favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed blurred navigation header & mobile drawer
│   │   ├── Hero.jsx             # Hero section with status pill & terminal snippet
│   │   ├── StatsBanner.jsx      # Verified metrics & research award highlights
│   │   ├── About.jsx            # Academic background & engineering philosophy
│   │   ├── Skills.jsx           # Filterable & searchable skills matrix
│   │   ├── Projects.jsx         # Flagship spotlights & project cards
│   │   ├── Achievements.jsx     # VBIT 3rd Prize showcase & certifications
│   │   ├── Experience.jsx       # Silver Star Mercedes-Benz internship timeline
│   │   ├── Education.jsx        # B.Tech IT & Automobile Engineering Diploma
│   │   ├── Contact.jsx          # Direct email & validated message form
│   │   ├── Footer.jsx           # Links, copyright, and back-to-top button
│   │   ├── CertificateModal.jsx # Fullscreen VBIT Certificate viewer
│   │   ├── CaseStudyModal.jsx   # Deep dive architecture diagrams & flows
│   │   ├── ResumeModal.jsx      # Recruiter-friendly printable resume
│   │   └── Icons.jsx            # Precision GitHub & LinkedIn SVG components
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content & stats
│   ├── App.jsx                  # Main root layout & modal state management
│   ├── App.css                  # Print stylesheets & animations
│   ├── index.css                # Tailwind imports & custom dark theme styles
│   └── main.jsx                 # React root mount
├── index.html                   # HTML entry point with Google Fonts
├── vite.config.js               # Vite & Tailwind configuration
├── package.json                 # Project scripts & dependencies
└── README.md
```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sai Kumar Shetty portfolio"
   git remote add origin https://github.com/shettysaikumar20/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.

### Deploying to Netlify

1. Push your repository to GitHub.
2. Sign in to [Netlify](https://netlify.com) and choose **"Add new site"** → **"Import an existing project"**.
3. Select your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy site**.

---

## 📬 Contact & Connect

- **Name**: Sai Kumar Shetty
- **Location**: Hyderabad, Telangana, India
- **Email**: [shettysaikumar20@gmail.com](mailto:shettysaikumar20@gmail.com)
- **LinkedIn**: [linkedin.com/in/shetty-sai-kumar](https://www.linkedin.com/in/shetty-sai-kumar/)
- **GitHub**: [github.com/shettysaikumar20](https://github.com/shettysaikumar20)
