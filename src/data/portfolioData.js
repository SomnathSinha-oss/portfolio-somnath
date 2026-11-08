import headshotImg from '../assets/profile.jpeg';

export const personalInfo = {
  name: "Somnath Sinha",
  role: "Full-Stack Web Developer & IoT Engineer",
  tagline: "Bridging scalable software architectures with hardware prototyping.",
  headshot: headshotImg || `${import.meta.env.BASE_URL}WhatsApp Image 2026-11-08 at 1.53.45 PM.jpeg`,
  email: "sinhasomnath740@gmail.com",
  phone: "+91 7003654490",
  location: "Kolkata, India",
  college: "JIS College of Engineering",
  degree: "B.Tech in Electronics and Communication Engineering (ECE)",
  year: "2nd Year",
  socials: {
    linkedin: "https://www.linkedin.com/in/somnath-sinha-b64b76358/",
    github: "https://github.com/SomnathSinha-oss",
    instagram: "https://www.instagram.com/phoenix_s0m?srtk=MWw0b2wyZWI5b25vMw==",
  },
  stats: [
    { label: "B.Tech ECE Year", value: "2nd", detail: "JIS College of Engineering" },
    { label: "Key Projects Built", value: "4+", detail: "Full-Stack & Hardware IoT" },
    { label: "Hackathon Accolades", value: "Top", detail: "Gemma Track Prize Winner" },
    { label: "Hardware & Web Stacks", value: "15+", detail: "ESP32, Arduino, React" }
  ]
};

export const skillsData = {
  web: [
    { name: "React.js", level: 90, category: "Frontend", icon: "react", desc: "Component architecture, hooks, state management, SPA" },
    { name: "Node.js", level: 85, category: "Backend", icon: "node", desc: "RESTful APIs, microservices, asynchronous execution" },
    { name: "Supabase", level: 85, category: "Database/Auth", icon: "database", desc: "Real-time subscriptions, PostgreSQL, Row-Level Security" },
    { name: "JavaScript (ES6+)", level: 92, category: "Language", icon: "code", desc: "Modern syntax, promises, DOM manipulation, modular architecture" },
    { name: "HTML5 & CSS3", level: 95, category: "Design", icon: "layout", desc: "Semantic structure, responsive design, Flexbox & CSS Grid" },
  ],
  hardware: [
    { name: "ESP32 MCU", level: 88, category: "Microcontroller", icon: "cpu", desc: "Dual-core 240MHz, Wi-Fi & BLE stack, deep sleep telemetry" },
    { name: "Arduino (IDE & AVR)", level: 92, category: "Prototyping & MCUs", icon: "cpu", desc: "Rapid microcontroller prototyping, GPIO/PWM interfacing, serial telemetry, AVR architecture" },
    { name: "C / C++", level: 85, category: "Embedded Systems", icon: "terminal", desc: "Direct register manipulation, pointer memory optimization" },
    { name: "PlatformIO", level: 82, category: "IDE & Tooling", icon: "wrench", desc: "Cross-platform embedded development, library dependency management" },
    { name: "Wokwi Simulation", level: 90, category: "Simulation", icon: "monitor", desc: "Virtual breadboard circuit prototyping and real-time firmware debugging" },
    { name: "HC-SR04 Sensors", level: 92, category: "Sensory Interface", icon: "radio", desc: "Ultrasonic pulse timing, obstacle detection, distance mapping" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, category: "Version Control", icon: "git", desc: "Branching strategies, collaborative workflows, CI/CD actions" },
    { name: "Linux Environment", level: 84, category: "OS / Kernel", icon: "terminal", desc: "Bash scripting, system administration, package management" },
    { name: "VirtualBox", level: 80, category: "Virtualization", icon: "box", desc: "VM isolation, network bridging, multi-distro sandboxing" },
    { name: "VS Code", level: 95, category: "Development", icon: "code", desc: "Custom debug configurations, IntelliSense, embedded toolchains" },
  ]
};

export const projectsData = [
  {
    id: "repopilot-ai",
    title: "RepoPilot-AI",
    badge: "AI & DevTools",
    status: "Active Open-Source",
    accent: "green",
    description: "An open-source AI-driven repository management and automation tool engineered to streamline codebase navigation, automated pull-request summaries, and intelligent issue triage.",
    extendedDesc: "RepoPilot-AI connects developer workflows directly to state-of-the-art LLMs, parsing repository structures, generating context-aware commit messages, and flagging potential code debt prior to review.",
    features: [
      "Context-aware codebase indexing and semantic search",
      "Automated Git commit message and PR description generator",
      "Real-time issue classification and tagging pipeline",
      "Developer-friendly CLI and web dashboard interface"
    ],
    tech: ["React.js", "AI / LLM Integration", "Node.js", "Git APIs", "Tailwind CSS"],
    github: "https://github.com/SomnathSinha-oss",
    demo: "#",
    metrics: "Optimized for high-volume open-source repositories"
  },
  {
    id: "chatlixy",
    title: "ChatLixy",
    badge: "Full-Stack Web",
    status: "Production Ready",
    accent: "red",
    description: "A full-stack real-time messaging web application built with React.js, Node.js, and Supabase, featuring instant WebSocket message synchronization and encrypted authentication.",
    extendedDesc: "Engineered from the ground up to support latency-sensitive instant messaging with optimistic UI updates, persistent channel history, online presence detection, and granular row-level security.",
    features: [
      "Sub-50ms WebSocket real-time message broadcast",
      "End-to-end encrypted user authentication via Supabase Auth",
      "Rich media file uploads and link preview parsing",
      "User presence, typing indicators, and read receipts"
    ],
    tech: ["React.js", "Node.js", "Supabase", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/SomnathSinha-oss",
    demo: "#",
    metrics: "< 50ms Message Latency · Supabase RLS Secured"
  },
  {
    id: "proximity-dashboard",
    title: "Real-Time Proximity Dashboard",
    badge: "IoT & Hardware Telemetry",
    status: "Hardware Linked",
    accent: "green",
    description: "An integrated IoT system coupling an ESP32 microcontroller and HC-SR04 ultrasonic sensor with an OLED display and a cloud-synchronized React.js/Supabase frontend for live telemetry.",
    extendedDesc: "Bridges the physical and digital realms: the ESP32 calculates sonic wave reflections, renders live millimeter metrics onto an on-board I2C OLED display, and transmits JSON telemetry packets over Wi-Fi to a Supabase database.",
    features: [
      "Microsecond ultrasonic echo timing with temperature compensation",
      "On-device 128x64 I2C OLED graphical visualizer",
      "Bi-directional telemetry streaming to Supabase cloud",
      "Responsive React.js dashboard with live gauges and audio alert triggers"
    ],
    tech: ["ESP32", "C++ / Arduino", "HC-SR04 Sensor", "OLED Display", "Supabase", "React.js"],
    github: "https://github.com/SomnathSinha-oss",
    demo: "#",
    interactive: true,
    metrics: "Live Sonic Telemetry · Sub-100ms IoT Stream"
  },
  {
    id: "unesco-organ-donation",
    title: "UNESCO Organ Donation App",
    badge: "Social Impact & HealthTech",
    status: "Completed",
    accent: "red",
    description: "A social service matching frontend application engineered for organ donation registries, complete with real-time organ metric displays and donor-recipient compatibility scoring.",
    extendedDesc: "Designed to solve critical donor matching bottlenecks by organizing emergency waitlists, tracking ischemic time limits, and visualizing match compatibility scores with instant alert mechanisms.",
    features: [
      "Real-time medical organ viability metric monitoring",
      "Dynamic donor-to-recipient blood & tissue compatibility scoring",
      "Interactive organ availability heatmaps and status tracking",
      "Accessible, urgent-response UX designed for medical personnel"
    ],
    tech: ["React.js", "Tailwind CSS", "Data Visualization", "Framer Motion", "Real-Time Metrics"],
    github: "https://github.com/SomnathSinha-oss",
    demo: "#",
    metrics: "Rapid Matching UX · Real-Time Health Metrics"
  }
];

export const hackathonsData = [
  {
    id: "hacktoberfest-msit",
    title: "Hacktoberfest MSIT",
    role: "Prize Winner — Gemma Track",
    date: "October 2026",
    organization: "Meghnad Saha Institute of Technology (MSIT)",
    badge: "🏆 1st Prize / Gemma Track Winner",
    accent: "green",
    description: "Clinched top honors in the Google Gemma Track by designing and developing an innovative open-source AI implementation leveraging Google's Gemma model architecture.",
    highlights: [
      "Architected high-efficiency prompt processing pipelines",
      "Recognized by judges for code modularity, AI performance, and open-source documentation",
      "Collaborated in a high-intensity hackathon sprint with developers across institutions"
    ]
  },
  {
    id: "mlh-hack-days-tmsl",
    title: "MLH Hack Days TMSL",
    role: "Open-Source Contributor & Active Participant",
    date: "2026",
    organization: "Techno Main Salt Lake (TMSL) & Major League Hacking (MLH)",
    badge: "⚡ Open-Source Contributor",
    accent: "red",
    description: "Active contributor and participant at Major League Hacking (MLH) Hack Days at TMSL, collaborating on community-driven open-source software, code sprints, and technical workshops.",
    highlights: [
      "Contributed pull requests to featured open-source repositories",
      "Engaged in technical peer reviews and collaborative architecture workshops",
      "Demonstrated rapid full-stack prototyping under competitive time constraints"
    ]
  }
];

export const educationList = [
  {
    id: "college",
    timeline: "2025 — Present",
    institution: "JIS College of Engineering",
    description: "B.Tech in Electronics and Communication Engineering (ECE)",
    status: "Currently Pursuing",
    isPursuing: true,
  },
  {
    id: "school",
    timeline: "2012 — 2023",
    institution: "P. B. Academic School",
    description: "ICSE (Class 10) — 2021 | ISC (Class 12) — 2023",
    status: null,
    isPursuing: false,
  }
];

export const educationData = {
  institution: "JIS College of Engineering",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Electronics and Communication Engineering (ECE)",
  status: "2nd Year Undergraduate",
  location: "Kalyani, West Bengal, India",
  highlights: [
    "Core focus on Embedded Systems, Digital Electronics, and Signal Processing",
    "Combining hardware design principles with modern web application engineering",
    "Active member of tech clubs, open-source initiatives, and robotics forums"
  ]
};
