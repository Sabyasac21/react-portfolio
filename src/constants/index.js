import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import ecommerceBanner from "../assets/projects/EcommerceBanner.png";
import goferWorker from "../assets/projects/gofer-worker.png";

export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Impact", href: "#impact" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { label: "Years shipping production software", value: "2+" },
  { label: "Primary focus", value: "Full Stack" },
  { label: "Core systems", value: "React + FastAPI" },
  { label: "Preferred operating model", value: "Product + Platform" },
];

export const EXPERIENCE = [
  {
    company: "Vengage.AI",
    role: "Software Development Engineer (Full Stack)",
    duration: "Oct 2024 - Present",
    summary:
      "Owning user-facing platform improvements and backend service delivery for conversational AI workflows, admin tooling, and observability.",
    metrics: [
      "Improved platform UI/UX, contributing to an estimated 25% increase in user satisfaction.",
      "Reduced manual admin operations by roughly 90% through Auth0 migration tooling and bulk role workflows.",
      "Improved debugging turnaround time by about 40% by centralizing logs through the ELK Stack.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "MySQL",
      "Auth0",
      "Docker",
      "ELK Stack",
      "REST APIs",
    ],
    architecture: {
      headline: "Platform and internal operations layer",
      points: [
        "Built React + TypeScript interfaces for workflow-heavy product surfaces and internal admin paths.",
        "Implemented FastAPI services backed by MySQL for role management, operational workflows, and platform data access.",
        "Containerized services with Docker and pushed logs into ELK to make debugging and incident tracing materially faster.",
      ],
    },
  },
  {
    company: "Almonds.ai",
    role: "Frontend Developer",
    duration: "Apr 2024 - Sep 2024",
    summary:
      "Delivered responsive campaign experiences and reusable UI modules for a referral and rewards platform operating across multiple campaigns.",
    metrics: [
      "Shipped reusable React components to support campaign-specific reward flows.",
      "Built responsive modules that held up across different campaign configurations and device sizes.",
      "Worked in a product-facing delivery loop where iteration speed and UI consistency mattered.",
    ],
    technologies: ["React", "JavaScript", "Responsive UI", "Component Design", "Git", "GitHub"],
    architecture: {
      headline: "Campaign-oriented frontend system",
      points: [
        "Structured frontend modules so campaign logic could be adapted without rewriting core UI primitives.",
        "Focused on responsive layouts and consistent interaction patterns for user-facing promotional flows.",
        "Contributed to a codebase optimized for repeat launches across multiple campaign variants.",
      ],
    },
  },
];

export const IMPACT_CARDS = [
  {
    id: "ui-ux-improvement",
    value: "25%",
    title: "UI/UX improvement",
    description:
      "Reworked key React product experiences to make platform flows clearer, faster, and easier for end users to complete.",
    accent: "from-indigo-500/30 to-violet-500/10",
    storyTitle: "How the platform UI became more stable and usable",
    storySteps: [
      {
        title: "Stabilized the admin portal experience",
        detail:
          "Cleaned up problem areas in the admin portal where the interface felt unreliable and inconsistent during daily operational use.",
      },
      {
        title: "Removed friction from slow and blocked states",
        detail:
          "Addressed UI issues tied to slow rendering, weak error handling, and startup states where screens could get stuck and force a manual refresh.",
      },
      {
        title: "Made loading behavior explicit for users",
        detail:
          "Improved interaction safety by enabling and disabling functional UI elements like buttons and text inputs while APIs were fetching or the page was loading.",
      },
      {
        title: "Turned fragile flows into predictable workflows",
        detail:
          "The result was a cleaner and more dependable interface that reduced confusion, prevented invalid actions, and made the platform feel faster even during async operations.",
      },
    ],
  },
  {
    id: "admin-operations",
    value: "90%",
    title: "Admin operations reduced",
    description:
      "Automated Auth0 migration and role assignment workflows through internal tooling instead of manual operational handling.",
    accent: "from-emerald-500/30 to-teal-500/10",
    storyTitle: "How admin access management moved from manual work to bulk operations",
    storySteps: [
      {
        title: "Removed one-by-one access management in Auth0",
        detail:
          "Earlier, admins had to open Auth0, select each user individually, and assign access one at a time. The same manual process existed for organizations, where permissions were granted separately for every org.",
      },
      {
        title: "Migrated existing Auth0 data into the local system",
        detail:
          "To remove that operational bottleneck without losing existing information, we migrated users and organizations already present in Auth0 into our local database while retaining the previous data structure.",
      },
      {
        title: "Enabled bulk access updates for users and organizations",
        detail:
          "Once the data was available locally, admins could grant or remove access in bulk for both users and organizations instead of repeating the same workflow one record at a time.",
      },
      {
        title: "Simplified metadata operations into single-click actions",
        detail:
          "Metadata management was also streamlined, so adding or updating metadata for users or organizations became a much faster action that could be completed in a single click.",
      },
    ],
  },
  {
    id: "debugging-turnaround",
    value: "40%",
    title: "Debugging turnaround faster",
    description:
      "Centralized application logs with ELK so issues could be located quickly across services and environments.",
    accent: "from-sky-500/30 to-indigo-500/10",
    storyTitle: "How debugging moved from container-by-container checks to centralized visibility",
    storySteps: [
      {
        title: "Moved beyond manual Docker-based log checks",
        detail:
          "Earlier, debugging depended on running Docker commands to inspect container health and read logs service by service, which made issue investigation slower and more fragmented.",
      },
      {
        title: "Introduced a centralized logging system",
        detail:
          "We implemented a centralized logging setup so logs from multiple services could be collected and viewed in one place instead of being checked separately at the container level.",
      },
      {
        title: "Made log analysis easier through time-based organization",
        detail:
          "Because logs were sorted by time, it became much easier to trace incidents, follow request flow across services, and understand what happened during failures.",
      },
      {
        title: "Reduced debugging effort and improved operational clarity",
        detail:
          "This change reduced debugging effort by about 40% and made day-to-day troubleshooting faster, clearer, and more reliable for engineers working across services.",
      },
    ],
  },
];

export const TECH_GROUPS = [
  {
    title: "Frontend",
    description: "Interfaces that prioritize clarity, interaction quality, and scalable component composition.",
    items: [
      {
        name: "React",
        detail: "Primary UI framework for product interfaces and campaign experiences.",
      },
      {
        name: "TypeScript",
        detail: "Used to keep larger interfaces predictable as product complexity grows.",
      },
      {
        name: "TailwindCSS",
        detail: "Fast visual iteration for polished interfaces with consistent spacing and tokens.",
      },
    ],
  },
  {
    title: "Backend",
    description: "Service design focused on clarity, operational reliability, and clean API contracts.",
    items: [
      {
        name: "FastAPI",
        detail: "Used for backend services, admin workflows, and role-management tooling.",
      },
      {
        name: "Node.js",
        detail: "Comfortable building REST services and full-stack application backends.",
      },
      {
        name: "REST APIs",
        detail: "Designed and integrated service boundaries for frontend and backend collaboration.",
      },
    ],
  },
  {
    title: "Data",
    description: "Datastores selected based on product shape, query needs, and operational simplicity.",
    items: [
      {
        name: "MySQL",
        detail: "Used in structured backend services and operational dashboards.",
      },
      {
        name: "MongoDB",
        detail: "Used in full-stack project work where schema flexibility supported iteration speed.",
      },
    ],
  },
  {
    title: "DevOps",
    description: "Production readiness through containerization, observability, and repeatable delivery.",
    items: [
      {
        name: "Docker",
        detail: "Containerized services to standardize environments and deployment behavior.",
      },
      {
        name: "ELK Stack",
        detail: "Centralized logs for troubleshooting, visibility, and faster incident response.",
      },
      {
        name: "Auth0",
        detail: "Implemented migration and role-based access workflows for internal operations.",
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Gofer Worker",
    image: goferWorker,
    downloadUrl: "/downloads/gofer-worker-v1.0.11.apk",
    downloadName: "gofer-worker-v1.0.11.apk",
    summary:
      "An Android worker app that connects nearby helpers with customers who need reliable, on-demand assistance at their doorstep.",
    architecture:
      "Flutter mobile client connected to real-time task services, worker availability, job lifecycle tracking, notifications, and backend-backed earnings history.",
    features: [
      "Receive and respond to nearby work requests",
      "Track active jobs from acceptance through completion",
      "Maintain worker availability, job history, and earnings",
      "Direct Android download — no email or tester approval required",
    ],
    stack: ["Flutter", "Android", "Real-time APIs", "Notifications"],
    releaseMeta: "Android 7.0+ · Version 1.0.11 · 59 MB",
  },
  {
    title: "Full-Stack Ecommerce Platform",
    image: ecommerceBanner,
    liveUrl: "https://frontend-orcin-pi.vercel.app/",
    repoUrl: "https://github.com/Sabyasac21?tab=repositories",
    summary:
      "A commerce application focused on browsing, conversion flows, cart state, and full-stack data handling.",
    architecture:
      "React frontend driving product discovery and cart workflows, backed by API services and MongoDB persistence for product and order data.",
    features: [
      "Product listing and detail flows",
      "Cart and purchase-oriented interactions",
      "Authentication-aware shopping experience",
    ],
    stack: ["React", "MongoDB", "Node.js", "REST APIs"],
  },
  {
    title: "Finance / Task Management Application",
    image: project1,
    liveUrl: "https://financetracker-woad.vercel.app",
    repoUrl: "https://github.com/Sabyasac21?tab=repositories",
    summary:
      "A productivity-oriented application that combines financial tracking with structured task and workflow management.",
    architecture:
      "React-driven dashboard experience with stateful workflow interactions, backed by service endpoints and persistent data storage.",
    features: [
      "Task and workflow organization",
      "Finance tracking views and dashboards",
      "Operational UI designed for frequent repeat usage",
    ],
    stack: ["React", "Node.js", "MongoDB", "Ant Design"],
  },
  {
    title: "Engineering Portfolio System",
    image: project3,
    liveUrl: "#top",
    repoUrl: "https://github.com/Sabyasac21",
    summary:
      "A portfolio rebuilt as a product-grade engineering narrative with technical storytelling, motion design, and architecture visualization.",
    architecture:
      "Vite + React foundation, motion-driven interactions, sectioned storytelling, and a visual system optimized for speed and clarity.",
    features: [
      "Experience timeline with deep technical context",
      "Interactive stack and architecture visualizations",
      "Production-style design language with restrained animation",
    ],
    stack: ["React", "Vite", "TailwindCSS", "Framer Motion"],
  },
];

export const ARCHITECTURE_FLOW = [
  {
    title: "React Frontend",
    description: "Interactive product surfaces, dashboards, and admin tooling.",
  },
  {
    title: "FastAPI Services",
    description: "Typed API contracts and backend workflows powering product operations.",
  },
  {
    title: "MySQL Persistence",
    description: "Structured storage for operational data, roles, and service state.",
  },
  {
    title: "Docker Runtime",
    description: "Consistent packaging and deployment behavior across environments.",
  },
  {
    title: "ELK Observability",
    description: "Centralized logging for visibility, debugging, and incident response.",
  },
];

export const ACHIEVEMENTS = [
  "Built internal operational tooling instead of relying on repetitive manual admin work.",
  "Worked across frontend experience, backend services, authentication, and observability in production-oriented systems.",
  "Balanced user-facing polish with technical depth, especially in workflow-heavy product surfaces.",
  "Operated comfortably in React ecosystems while shipping backend APIs and infrastructure-adjacent improvements.",
];

export const CONTACT = {
  email: "sabyasachinishant100@gmail.com",
  location: "Gurugram, Haryana, India",
  github: "https://github.com/Sabyasac21",
  linkedin: "https://www.linkedin.com/in/sabyasachi-nishant-1843761b1",
  resume: "/sabyasachi-nishant-resume.html",
};
