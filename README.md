<p align="center">
  <img src="public/favicon.svg" alt="Silicon Lottery Logo" width="80" height="80" />
</p>

<h1 align="center">🎰 The Silicon Lottery</h1>

<p align="center">
  <strong>An immersive, scroll-driven 3D experience exploring semiconductor manufacturing variability, processor binning, and the physics behind why not all chips are created equal.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#live-demo">Live Demo</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#academic-context">Academic Context</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Three.js-r183-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 📖 Overview

**The Silicon Lottery** is an interactive educational web experience that takes users on a cinematic journey through the hidden world of semiconductor manufacturing. Through 12 scroll-driven narrative sections and a hands-on 3D simulation engine, users discover why processors of the *exact same model* can perform vastly differently — a phenomenon known as the **Silicon Lottery**.

The experience combines storytelling, data visualization, and real-time 3D rendering to make complex Computer Organization & Architecture (COA) concepts tangible and engaging.

---

## ✨ Features

### 🎬 Cinematic Scroll Experience
- **12 narrative sections** with GSAP-powered scroll-triggered animations
- Dramatic typography with staggered reveal effects
- Glassmorphic UI panels with ambient glow effects
- Persistent navigation bar with scroll progress indicator

### 🧪 Interactive 3D Simulation Engine
A multi-phase simulation that lets users experience the chip manufacturing pipeline hands-on:

| Phase | Description |
|-------|-------------|
| **🔬 Wafer Inspection** | View a procedurally generated 300mm silicon wafer with 400 dies and Gaussian yield distribution |
| **🎯 Chip Selection** | Pick 3 dies from the wafer to test — each with unique yield, leakage, voltage, and thermal properties |
| **⚡ Stress Testing** | Watch real-time V/F curve analysis and thermal benchmarks with animated progress bars |
| **📊 Binning Allocation** | See your chips sorted into performance tiers: *Extreme*, *Standard*, or *Eco/SFF* |
| **📋 Final Results** | View detailed allocation results including max frequency, leakage class, and estimated market price |

### 🎨 Premium Design System
- Deep space dark theme (`#03050f` background) with cyan/purple accent palette
- Custom typography: **Rajdhani** (display), **Outfit** (body), **Share Tech Mono** (data)
- Glassmorphism panels with gradient borders and backdrop blur
- Glow-pulse and float animations for interactive elements
- Starfield background rendered in WebGL

### 🏗️ Educational Content Sections

| # | Section | Topic |
|---|---------|-------|
| 1 | Hero | "Identical on the Outside" — dramatic intro |
| 2 | Intro | What is the Silicon Lottery? |
| 3 | Identical | Why same-model chips differ |
| 4 | Fabrication | The semiconductor manufacturing process |
| 5 | Variation | Sources of process variation |
| 6 | Transistor | Transistor-level physics |
| 7 | Lab | Testing and quality assurance |
| 8 | Simulation | **Interactive 3D Simulation Engine** |
| 9 | Breakdown | Binning breakdown and tier analysis |
| 10 | COA | Architectural implications (Clock Skew, DVFS, Dark Silicon) |
| 11 | Real World | Practical applications (Gaming, Datacenter, Mobile) |
| 12 | Summary | "Not All Chips Are Created Equal" |

---

## 🚀 Live Demo

🔗 **[silicon-lottery-react.vercel.app](https://silicon-lottery-react.vercel.app)**

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | React 19 + TypeScript | Component architecture & type safety |
| **Build Tool** | Vite 8 | Lightning-fast HMR & optimized builds |
| **3D Engine** | Three.js + React Three Fiber | WebGL-powered 3D wafer & chip rendering |
| **3D Helpers** | React Three Drei | OrbitControls, Float, Stars, Environment presets |
| **Animation** | GSAP (ScrollTrigger) | Scroll-driven section reveal animations |
| **Animation** | Framer Motion | Component-level transitions & micro-interactions |
| **Styling** | Tailwind CSS 3.4 | Utility-first styling with custom design tokens |
| **State** | Zustand | Lightweight global state for simulation engine |
| **Icons** | Lucide React | Consistent icon set |
| **Deployment** | Vercel | Edge-optimized hosting |

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/kashyapnasit109/Silicon-Lottery.git
cd Silicon-Lottery

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
# Type-check and build
npm run build

# Preview the production build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📐 Architecture

```
silicon-lottery-react/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── 3d/                    # WebGL 3D components
│   │   │   ├── SimulationCanvas.tsx    # Main Three.js canvas with lighting & stars
│   │   │   ├── Wafer3D.tsx            # 3D silicon wafer with die grid
│   │   │   ├── Chip3D.tsx             # Individual 3D chip with quality-based coloring
│   │   │   └── BinTrays.tsx           # Binning tier trays for sorting animation
│   │   ├── sections/              # 12 scroll-driven narrative sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Section2Intro.tsx
│   │   │   ├── Section3Identical.tsx
│   │   │   ├── Section4Fab.tsx
│   │   │   ├── Section5Variation.tsx
│   │   │   ├── Section6Transistor.tsx
│   │   │   ├── Section7Lab.tsx
│   │   │   ├── Section9Breakdown.tsx
│   │   │   ├── Section10COA.tsx
│   │   │   └── Section11Summary.tsx
│   │   ├── layout/                # Persistent UI chrome
│   │   │   ├── Navbar.tsx
│   │   │   └── ProgressNav.tsx
│   │   ├── ui/                    # Reusable UI primitives
│   │   │   └── PillTag.tsx
│   │   ├── SimulationController.tsx  # Multi-phase simulation HUD
│   │   └── FinalResults.tsx          # Full-screen results overlay
│   ├── store/
│   │   └── useStore.ts            # Zustand global state (simulation + navigation)
│   ├── utils/
│   │   └── cn.ts                  # clsx + tailwind-merge utility
│   ├── App.tsx                    # Root component with IntersectionObserver + GSAP
│   ├── App.css                    # Legacy/additional styles
│   ├── index.css                  # Global styles & Tailwind directives
│   └── main.tsx                   # React DOM entry point
├── tailwind.config.js             # Custom design system tokens
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Key Design Decisions

- **Layered Rendering**: The 3D canvas is `position: fixed` behind scrollable HTML content, allowing seamless blending of WebGL and DOM elements
- **Zustand State Machine**: The simulation engine uses a simple phase-based state machine (`idle → wafer → selection → stress → binning → results`) managed through Zustand
- **Gaussian Yield Model**: Wafer data is procedurally generated with a radial Gaussian distribution — center dies have higher yield (~1.0), edge dies lower (~0.2), mimicking real-world semiconductor physics
- **GSAP + IntersectionObserver**: Dual approach — IntersectionObserver handles logical section tracking while GSAP ScrollTrigger powers visual animations, preventing coupling between logic and presentation

---

## 🎓 Academic Context

This project was developed as part of a **Computer Organization & Architecture (COA)** curriculum to demonstrate:

| Concept | How It's Demonstrated |
|---------|----------------------|
| **Clock Skew & Jitter** | How nanometer-scale variation limits global clock frequency |
| **Dynamic Voltage & Frequency Scaling (DVFS)** | Why high-Vmin chips need more aggressive power management |
| **Dark Silicon Problem** | Manufacturing variation + power density limits = unusable transistors |
| **Fault Tolerance & Laser Cutting** | How "bad" cores are disabled to sell dies as lower-tier SKUs |
| **Guard-Banding** | Why default voltage/clock settings are conservative across all chips |
| **Processor Binning** | The industrial sorting process that determines a chip's market tier |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Built with ⚡ by <a href="https://github.com/kashyapnasit109">Kashyap</a> • Computer Architecture 2026</sub>
</p>
