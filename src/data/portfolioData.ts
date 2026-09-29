export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Mobile" | "SaaS" | "Frontend";
  description: string;
  highlights: string[];
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "Completed" | "Active Development" | "Production";
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    headline: string;
    bio: string[];
    email: string;
    phone: string;
    location: string;
    preferredLocations: string[];
    availability: string;
    profileImage?: string;
    resumeUrl: string;
    socials: {
      github: string;
      linkedin: string;
      email: string;
      phone: string;
      twitter?: string;
    };
  };
  metrics: { label: string; value: string; description: string }[];
  skills: {
    category: string;
    items: { name: string; level?: string; icon?: string }[];
  }[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Education[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Atin Sahu",
    title: "Full Stack Developer",
    headline: "Frontend-focused Full Stack Developer crafting scalable web & mobile experiences.",
    bio: [
      "I am a Full Stack Developer with 4 years of experience designing, developing, and scaling high-performance web and mobile applications.",
      "My core strengths lie in React.js, Next.js, React Native (Expo), TypeScript, Node.js, Express.js, NestJS, MongoDB, and PostgreSQL.",
      "From crafting intuitive component architectures to designing resilient database models, RESTful APIs, and CI/CD deployment pipelines, I deliver end-to-end digital solutions that drive business results."
    ],
    email: "jayshiv7171@gmail.com",
    phone: "+91 6391977171",
    location: "India (Open to Noida, Gurugram, Hyderabad, Bengaluru, Pune & Remote)",
    preferredLocations: [
      "Noida",
      "Gurugram",
      "Hyderabad",
      "Bengaluru",
      "Pune",
      "Remote"
    ],
    availability: "Available for Full-time Roles & High-impact Contracts",
    profileImage: "https://res.cloudinary.com/mdd0kut0/image/upload/v1790671528/profile_pic.jpg",
    resumeUrl: "/resume.pdf",
    socials: {
      github: "https://github.com/atin-sahu",
      linkedin: "https://linkedin.com/in/atin-sahu-7b7045219",
      twitter: "https://twitter.com/JayshivSahu",
      email: "mailto:jayshiv7171@gmail.com",
      phone: "tel:+916391977171"
    }
  },
  metrics: [
    { label: "Experience", value: "4+ Years", description: "Production web & mobile apps" },
    { label: "User Roles Handled", value: "8+ Roles", description: "In complex AgriTech platform" },
    { label: "Core Technologies", value: "15+ Techs", description: "Full-stack ecosystem" },
    { label: "Architecture", value: "End-to-End", description: "Frontend, APIs, DB & Deployments" }
  ],
  skills: [
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "React Native" },
        { name: "Expo" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "Tailwind CSS" },
        { name: "Shadcn UI" },
        { name: "Material UI" },
        { name: "HTML5 / CSS3" }
      ]
    },
    {
      category: "State Management",
      items: [
        { name: "Redux Toolkit" },
        { name: "RTK Query" },
        { name: "Zustand" },
        { name: "Context API" }
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "NestJS" },
        { name: "RESTful APIs" },
        { name: "Redis" },
        { name: "Strapi CMS" },
        { name: "FastAPI (Learning)" },
        { name: "Python (Learning)" }
      ]
    },
    {
      category: "Databases & ORMs",
      items: [
        { name: "MongoDB" },
        { name: "PostgreSQL" },
        { name: "Prisma" },
        { name: "TypeORM" },
        { name: "SQLAlchemy" },
        { name: "MongoDB Compass" },
        { name: "pgAdmin" },
        { name: "MySQL" }
      ]
    },
    {
      category: "DevOps & Cloud",
      items: [
        { name: "Docker" },
        { name: "Vercel" },
        { name: "Netlify" },
        { name: "Cloudinary" },
        { name: "Google Play Console" },
        { name: "Android App Bundle (AAB)" },
        { name: "OTA Updates" },
        { name: "Git & GitHub / Bitbucket" }
      ]
    },
    {
      category: "AI & Modern Tooling",
      items: [
        { name: "Cursor AI" },
        { name: "GitHub Copilot" },
        { name: "Claude" },
        { name: "ChatGPT" },
        { name: "Postman" },
        { name: "Swagger UI" },
        { name: "RAG & AI Workflows" }
      ]
    }
  ],
  experiences: [
    {
      company: "Tene Agricultural Solutions Pvt. Ltd.",
      role: "Software Developer (Full Stack)",
      location: "Bangalore",
      period: "04/2025 – 07/2026",
      type: "Full-Time",
      responsibilities: [
        "Architected and maintained full-stack web and mobile applications for a high-scale AgriTech platform supporting 8+ distinct user roles.",
        "Built responsive, accessible frontends using React.js, Next.js, React Native (Expo), TypeScript, Redux Toolkit, and RTK Query.",
        "Engineered robust backend microservices and APIs with Node.js, Express.js, MongoDB, and Strapi CMS for business-critical workflows.",
        "Implemented role-based access control (RBAC), multi-factor authentication, notification services, and automated crop payment pipelines.",
        "Integrated Razorpay payment gateway and third-party location intelligence using Google Maps APIs.",
        "Championed Docker-based development workflows, standardized CI/CD pipelines, and mentored junior engineers on clean architectural patterns."
      ],
      skills: ["React.js", "Next.js", "React Native", "Expo", "TypeScript", "Node.js", "Express.js", "MongoDB", "Strapi", "Razorpay", "Docker"]
    },
    {
      company: "Value Creatives",
      role: "Analyst Developer (Full Stack)",
      location: "Amritsar, Punjab",
      period: "10/2022 – 03/2025",
      type: "Full-Time",
      responsibilities: [
        "Developed full-stack web and enterprise platforms utilizing React.js, Next.js, React Native, Node.js, Express.js, NestJS, MongoDB, and PostgreSQL.",
        "Engineered reusable UI component systems and integrated scalable REST APIs for multiple high-profile client projects.",
        "Designed relational and NoSQL database schemas utilizing TypeORM, Prisma, and SQLAlchemy for optimized query execution.",
        "Implemented authentication mechanisms, secure subscription billing, payment integrations, and content management systems.",
        "Analyzed application telemetry, resolved production bottlenecks, and cut query latency across backend services."
      ],
      skills: ["React.js", "Next.js", "NestJS", "Node.js", "PostgreSQL", "MongoDB", "Redis", "TypeORM", "Prisma", "TypeScript"]
    }
  ],
  projects: [
    {
      id: "farmer-advisory",
      title: "Farmer Advisory Mobile Application",
      subtitle: "Multilingual AgriTech Advisory & Marketplace Ecosystem",
      category: "Mobile",
      image: "/projects/farmer_advisory.jpg",
      description: "A comprehensive multilingual mobile application enabling seamless farmer onboarding, localized advisory access, agricultural service subscriptions, and real-time fertilizer/pesticide orders.",
      highlights: [
        "Multilingual localized onboarding with Google Maps API location geofencing and single-device secure authentication.",
        "Dynamic advisory engine delivering text, audio, video, and image-based crop intelligence in real time.",
        "In-app Razorpay payment gateway integration for subscription packages and farm supply ordering.",
        "Multi-profile build automation configured for staging and production release cycles."
      ],
      technologies: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "RTK Query", "MongoDB", "Razorpay", "Google Maps API", "REST APIs"],
      status: "Production",
      featured: true
    },
    {
      id: "greetpool",
      title: "GreetPool - Collaborative Greeting Card Platform",
      subtitle: "Multi-Contributor Digital SaaS Platform",
      category: "SaaS",
      image: "/projects/greetpool.jpg",
      description: "A collaborative digital card SaaS platform empowering users to create customized digital greeting cards and invite unlimited friends, families, or colleagues to co-create and sign in real-time.",
      highlights: [
        "Engineered responsive collaborative canvas workflows with React.js, Next.js, TypeScript, and Tailwind CSS.",
        "Implemented secure tiered subscription access flows, automated billing, and user access control.",
        "Built backend microservices using NestJS and PostgreSQL with optimized relational query architecture.",
        "Architected reusable component systems that reduced new feature delivery turnaround by 35%."
      ],
      technologies: ["Next.js", "React.js", "NestJS", "PostgreSQL", "TypeScript", "Tailwind CSS", "Redux", "TypeORM"],
      status: "Production",
      featured: true
    },
    {
      id: "helping-hands",
      title: "Helping Hands - Workforce Management Platform",
      subtitle: "On-Demand Labor & Talent Matching Marketplace",
      category: "Full-Stack",
      image: "/projects/workforce.jpg",
      description: "A complete dual-sided marketplace connecting employers with skilled and unskilled workers across diverse job sectors with instant booking, verification, and automated dispatching.",
      highlights: [
        "Full-stack cross-platform ecosystem built with React Native (Expo) and scalable Node.js/Express backend.",
        "Granular 3-tier Role-Based Access Control (RBAC) separating employers, workers, and administrators.",
        "Worker onboarding, profile credibility verification, job posting, application matching, and real-time push notifications.",
        "Dockerized infrastructure with Swagger API documentation, MongoDB database schemas, and AI-accelerated workflows."
      ],
      technologies: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB", "JWT", "Zustand", "Docker", "Swagger UI"],
      status: "Active Development",
      featured: true
    }
  ],
  education: [
    {
      institution: "The Study Hall College",
      degree: "Bachelor of Computer Application (BCA)",
      location: "Lucknow, Uttar Pradesh",
      period: "07/2018 – 07/2021",
      details: ["Solid academic foundation in computer science, software engineering principles, algorithms, and database systems."]
    }
  ],
  certifications: [
    {
      institution: "Masai School",
      degree: "Full Stack Web Development Certification",
      location: "Bengaluru, Karnataka",
      period: "11/2021 – 07/2022",
      details: [
        "Intensive curriculum in JavaScript, React.js, Node.js, Express.js, MongoDB, REST APIs, and DSA.",
        "Selected as Student Guide for 2 months to mentor peers on software design and debug complex issues.",
        "Completed rigorous professional training on agile execution and teamwork."
      ]
    }
  ]
};
