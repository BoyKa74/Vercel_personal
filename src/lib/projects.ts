export type Platform = 'web' | 'mobile' | 'ai' | 'other';
export type Audience = 'client' | 'enterprise' | 'personal' | 'academic' | 'learning';

export interface Project {
  name: string;
  description: string;
  platform: Platform;
  audience: Audience;
  tech: string[];
  github?: string;
  demo?: string;
  team?: boolean;
  featured?: boolean;
  isPrivate?: boolean;
  year: number;
}

export const projects: Project[] = [
  // ================================================================
  // PUBLIC — WEB
  // ================================================================
  {
    name: "PaperWorking — Architecture Migration",
    description: "Production architecture migration workspace for a large real-estate investment platform — Firebase, Google Cloud and Docker.",
    platform: "web",
    audience: "enterprise",
    tech: ["TypeScript", "Firebase", "Google Cloud", "Docker"],
    github: "https://github.com/YvesDarbouze/PaperWorking",
    demo: "https://paperworking.co/",
    team: true,
    featured: true,
    year: 2026
  },
  {
    name: "TruyenArt LLC",
    description: "Company website for an architectural visualization studio, rebuilt with Next.js and a 3D slideshow.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React", "Three.js", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/truyenartllc",
    demo: "https://truyenartllc.vercel.app",
    featured: true,
    year: 2026
  },
  {
    name: "Anata Digital",
    description: "Pixel-faithful clone of anata.digital — a freelance task built with Next.js App Router and Tailwind CSS v4.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_anata_digital",
    demo: "https://job-upwork-anata-digital.vercel.app",
    year: 2026
  },
  {
    name: "Paws & Petals",
    description: "3-page marketing site for a premium organic pet boutique, refactored from static HTML into Next.js.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_3pages_pet_shop",
    demo: "https://job-upwork-3pages-pet-shop.vercel.app",
    year: 2026
  },
  {
    name: "TeenUp Product Builder",
    description: "Full-stack product builder for teens — React + Vite frontend with an Express/PostgreSQL API, containerized with Docker.",
    platform: "web",
    audience: "client",
    tech: ["React", "Vite", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/BoyKa74/fuzzy-octo-couscous",
    year: 2026
  },
  {
    name: "iCloud Project",
    description: "E-commerce style web app with product, cart and search APIs.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "React", "Supabase", "Express"],
    github: "https://github.com/NguyenQuyHoang/iCloudProject",
    demo: "https://i-cloud-project.vercel.app",
    team: true,
    featured: true,
    year: 2025
  },
  {
    name: "Vlux Company",
    description: "Corporate website for VluxAI, deployed on Vercel.",
    platform: "web",
    audience: "enterprise",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/BoyKa74/Vlux_Company",
    demo: "https://vlux-company.vercel.app",
    featured: true,
    year: 2025
  },
  {
    name: "Portfolio — Mai Vủ",
    description: "The site you are viewing — Next.js, Tailwind CSS, Framer Motion and Firebase, deployed on Vercel.",
    platform: "web",
    audience: "personal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/BoyKa74/Vercel_personal",
    demo: "https://maivananhvu.vercel.app",
    year: 2025
  },
  {
    name: "Personal Portfolio v2",
    description: "Portfolio built with Next.js, Tailwind CSS, Firebase and a working EmailJS contact form.",
    platform: "web",
    audience: "personal",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "EmailJS"],
    github: "https://github.com/BoyKa74/personal",
    demo: "https://personal-sable-iota.vercel.app",
    year: 2026
  },
  {
    name: "fish_dev — Portfolio Experiment",
    description: "Portfolio template experiment with Firebase and EmailJS.",
    platform: "web",
    audience: "personal",
    tech: ["Next.js", "TypeScript", "Firebase"],
    github: "https://github.com/BoyKa74/fish_dev",
    year: 2025
  },
  {
    name: "Car Service Shop",
    description: "Website for a car repair and maintenance shop with service list, filters, contact form and admin page.",
    platform: "web",
    audience: "client",
    tech: ["React", "Bootstrap", "Axios"],
    github: "https://github.com/BoyKa74/Job_car_service",
    year: 2025
  },
  {
    name: "Privée Restaurant",
    description: "Luxury restaurant website reproduced from a Framer template for a freelance job.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_ui_Restaurant",
    demo: "https://job-ui-restaurant.vercel.app",
    year: 2025
  },
  {
    name: "SoulSync AI Landing",
    description: "Landing page UI for an AI companion product, implemented from Figma designs.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_ui_SoulSync_AI",
    year: 2025
  },
  {
    name: "NFA Landing",
    description: "Landing page built with Next.js for a freelance job.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React"],
    github: "https://github.com/BoyKa74/Job_nf-a-2.0",
    year: 2025
  },
  {
    name: "Full Stack Blog",
    description: "Blog application with authentication, CRUD posts and admin functionality.",
    platform: "web",
    audience: "client",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/BoyKa74/Job_Details",
    year: 2025
  },
  {
    name: "Full Stack Blog — Test Assignment",
    description: "Take-home assignment: React + Node blog with auth and post management.",
    platform: "web",
    audience: "client",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/BoyKa74/Job_test_assignment",
    year: 2025
  },
  {
    name: "Restaurant Deals",
    description: "Responsive restaurant deals site built with Tailwind CSS and vanilla JavaScript.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Restaurant",
    year: 2025
  },
  {
    name: "Zeus Tools",
    description: "Dashboard UI for a tools product, built with React and Tailwind CSS.",
    platform: "web",
    audience: "client",
    tech: ["React", "Tailwind CSS", "Headless UI"],
    github: "https://github.com/BoyKa74/Job_ui_Zeus",
    year: 2025
  },
  {
    name: "Library Management API",
    description: "Library management backend with GraphQL, JWT authentication and role guards.",
    platform: "web",
    audience: "enterprise",
    tech: ["NestJS", "GraphQL", "TypeORM", "MySQL"],
    github: "https://github.com/BigTech2/library-managment-nestjs",
    team: true,
    year: 2025
  },
  {
    name: "Library Management UI",
    description: "React + Apollo Client UI for a library management API, with JWT auth.",
    platform: "web",
    audience: "learning",
    tech: ["React", "Apollo GraphQL", "JWT"],
    github: "https://github.com/BoyKa74/Nestjs_ui_lbr",
    year: 2025
  },
  {
    name: "Library Users UI",
    description: "React + Vite UI for managing library users.",
    platform: "web",
    audience: "learning",
    tech: ["React", "Vite", "Framer Motion"],
    github: "https://github.com/BoyKa74/ui-reactjs-lb",
    year: 2025
  },
  {
    name: "NestJS GraphQL",
    description: "NestJS API exploring GraphQL with Apollo, TypeORM and MySQL.",
    platform: "web",
    audience: "learning",
    tech: ["NestJS", "GraphQL", "TypeORM", "MySQL"],
    github: "https://github.com/BoyKa74/NestJS_GraphQL",
    year: 2025
  },
  {
    name: "NestJS JWT",
    description: "Authentication practice with NestJS, JWT and guards.",
    platform: "web",
    audience: "learning",
    tech: ["NestJS", "JWT", "TypeScript"],
    github: "https://github.com/BoyKa74/NestJS_JWT",
    year: 2025
  },
  {
    name: "NestJS Category & Product",
    description: "CRUD practice with NestJS, TypeORM, MySQL and EJS views.",
    platform: "web",
    audience: "learning",
    tech: ["NestJS", "TypeORM", "MySQL", "EJS"],
    github: "https://github.com/BoyKa74/NestJS_Category_product",
    year: 2025
  },
  {
    name: "Library Management Frontend",
    description: "Library management frontend (React + Vite + Tailwind) practicing a NestJS stack.",
    platform: "web",
    audience: "learning",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/NestJS_QLTV",
    year: 2025
  },
  {
    name: "Booking API",
    description: "Coworking space booking API built with NestJS, MongoDB and JWT.",
    platform: "web",
    audience: "learning",
    tech: ["NestJS", "MongoDB", "JWT"],
    github: "https://github.com/BoyKa74/Booking",
    year: 2025
  },
  {
    name: "shop_Spring",
    description: "Spring Boot e-commerce practice project.",
    platform: "web",
    audience: "learning",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com/BoyKa74/shop_Spring",
    year: 2025
  },
  {
    name: "learn_SpringBoot",
    description: "Spring Boot fundamentals practice.",
    platform: "web",
    audience: "learning",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com/BoyKa74/learn_SpringBoot",
    year: 2025
  },
  {
    name: "learn_nodejs_F8",
    description: "Node.js + Express blog built while following the F8 course.",
    platform: "web",
    audience: "learning",
    tech: ["Node.js", "Express", "Handlebars"],
    github: "https://github.com/BoyKa74/learn_nodejs_F8",
    year: 2025
  },
  {
    name: "learn_nodejs_tek4",
    description: "Node.js and Express practice repository.",
    platform: "web",
    audience: "learning",
    tech: ["Node.js", "Express"],
    github: "https://github.com/BoyKa74/learn_nodejs_tek4",
    year: 2025
  },
  {
    name: "Nhom1 — Spring Boot Group Project",
    description: "Spring Boot group project (Team 1) skeleton for a software engineering course.",
    platform: "web",
    audience: "academic",
    tech: ["Java", "Spring Boot"],
    github: "https://github.com/BoyKa74/Nhom1",
    year: 2025
  },
  {
    name: "Reactjs — Todo App",
    description: "React todo app practicing components, search and filters.",
    platform: "web",
    audience: "learning",
    tech: ["React"],
    github: "https://github.com/BoyKa74/Reactjs",
    year: 2023
  },
  {
    name: "DA — HTML/CSS/JS Exercise",
    description: "HTML/CSS/JavaScript exercise (Bài tập 2.2).",
    platform: "web",
    audience: "learning",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/DA",
    year: 2023
  },

  // ================================================================
  // PUBLIC — MOBILE APP
  // ================================================================
  {
    name: "X Social App",
    description: "Flutter social network app — final course project.",
    platform: "mobile",
    audience: "academic",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/BoyKa74/Flutter_DACK",
    year: 2025
  },
  {
    name: "Fire Hydrant Management",
    description: "Flutter app for managing fire hydrants — student research project (NCKH).",
    platform: "mobile",
    audience: "academic",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/BoyKa74/NCKH_mobile",
    year: 2025
  },
  {
    name: "T-Books",
    description: "Flutter book app with a Node.js test server — software engineering course project.",
    platform: "mobile",
    audience: "academic",
    tech: ["Flutter", "Dart", "Node.js"],
    github: "https://github.com/BoyKa74/KTPM-T-book",
    year: 2025
  },
  {
    name: "Flight Booking App",
    description: "Flutter flight booking application — team course project.",
    platform: "mobile",
    audience: "academic",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/BoyKa74/BanVeMayBay",
    year: 2024
  },
  {
    name: "Flight Booking App — Team Repo",
    description: "Team repository (hosted by a teammate) of the Flutter flight booking app.",
    platform: "mobile",
    audience: "academic",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/kimchunku09/Banvemaybay",
    team: true,
    year: 2024
  },

  // ================================================================
  // PUBLIC — AI
  // ================================================================
  {
    name: "Face Detection & Image Processing",
    description: "Face detection (HOG, Haar, DNN), gender classification and image colorization in a Flask MVC app — final project.",
    platform: "ai",
    audience: "academic",
    tech: ["Python", "Flask", "OpenCV", "SQLite"],
    github: "https://github.com/BoyKa74/Python_DACK",
    year: 2025
  },
  {
    name: "Face Detection Playground",
    description: "Comparing HOG, DNN and Haar Cascade face detection models with OpenCV.",
    platform: "ai",
    audience: "academic",
    tech: ["Python", "OpenCV", "Flask"],
    github: "https://github.com/BoyKa74/Python_face_detection",
    year: 2025
  },
  {
    name: "Face Recognition — HOG / DNN / Haar",
    description: "Face detection algorithms practice with OpenCV.",
    platform: "ai",
    audience: "learning",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/BoyKa74/face-recognition-hog-dnn-haar",
    year: 2025
  },
  {
    name: "Image Colorizer",
    description: "Tool that turns black-and-white photos into color with OpenCV.",
    platform: "ai",
    audience: "personal",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/BoyKa74/image_colorzier",
    year: 2025
  },

  // ================================================================
  // PUBLIC — OTHER
  // ================================================================
  {
    name: "CI/CD with Docker & GitHub Actions",
    description: "Practice repo for CI/CD pipelines with Docker and GitHub Actions.",
    platform: "other",
    audience: "learning",
    tech: ["Docker", "GitHub Actions", "TypeScript"],
    github: "https://github.com/NguyenQuyHoang/learn-ci-cd-with-docker-and-githup-action",
    demo: "https://learn-ci-cd-with-docker-and-githup.vercel.app",
    team: true,
    year: 2025
  },
  {
    name: "Cloud Computing",
    description: "Cloud computing course repository (UDA).",
    platform: "other",
    audience: "academic",
    tech: ["HTML"],
    github: "https://github.com/BoyKa74/UDA_Cloud_Computing",
    year: 2025
  },
  {
    name: "Cloud Computing Lab 2",
    description: "Cloud computing lab 2 — Node.js deployment practice.",
    platform: "other",
    audience: "academic",
    tech: ["Node.js", "JavaScript"],
    github: "https://github.com/BoyKa74/UDA_Cloud_Computing_Lab2",
    year: 2025
  },
  {
    name: "Cloud Computing Lab 2 — Team Repo",
    description: "Team repository (hosted by a teammate) for the cloud computing lab.",
    platform: "other",
    audience: "academic",
    tech: ["JavaScript"],
    github: "https://github.com/NguyenQuyHoang/Lap2_CloudComputin_NguyenQuyHoang",
    team: true,
    year: 2025
  },
  {
    name: "Learn C / C++",
    description: "C/C++ fundamentals — day-by-day exercises.",
    platform: "other",
    audience: "learning",
    tech: ["C++"],
    github: "https://github.com/BoyKa74/learn_C",
    year: 2025
  },
  {
    name: "Learn Java",
    description: "Java fundamentals practice repository.",
    platform: "other",
    audience: "learning",
    tech: ["Java"],
    github: "https://github.com/BoyKa74/learn-java-tek4",
    year: 2025
  },

  // ================================================================
  // PRIVATE — LIVE CLIENT & COMPANY PRODUCTS (featured)
  // ================================================================
  {
    name: "Lumionix",
    description: "Marketing website for Lumionix — smart camera accessories brand (KOMET, Lamda, Aura RGB).",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Lumionix/lumionix-web",
    demo: "https://lumionix.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "NairaFix",
    description: "Live dollar-to-naira rate tracker (Aboki + CBN rates) — production client site.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/BoyKa74/Job_Upwork_Nairafixng",
    demo: "https://nairafixng.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "PayeCheck",
    description: "Nigeria PAYE tax calculator updated for the 2025 Tax Act — production client site.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    demo: "https://naijapaye.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "CorperCheck",
    description: "NYSC allowance calculator comparing all 36 states + FCT — production client site.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    demo: "https://corpercheck.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "WAEC GPA Converter",
    description: "WASSCE / WAEC / NECO to US 4.0 GPA converter for college applications.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    demo: "https://waecgpa.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "Gluva Health",
    description: "Marketing site for a CGM-guided metabolic health platform for self-funded employers.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_Gluva",
    demo: "https://www.gluvahealth.com/",
    featured: true,
    isPrivate: true,
    year: 2025
  },
  {
    name: "Self Fund Platforms",
    description: "Marketing site for a health plan procurement platform.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_SelfFund",
    demo: "https://www.selffund.com/",
    featured: true,
    isPrivate: true,
    year: 2025
  },
  {
    name: "Pickett Umizaj, PLLC",
    description: "Website for a US personal-injury, mass tort & class action law firm.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Resend"],
    github: "https://github.com/pickettumizaj/Website",
    demo: "https://www.pickettumizaj.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "Ahavah Care at Home",
    description: "Website for a US in-home senior care provider — Next.js monorepo.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/AhavahCareHome/Website",
    demo: "https://ahavahcarehome.com/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "100nout.by",
    description: "E-commerce frontend for a Belarusian electronics store, built from Figma.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Shop",
    demo: "https://100nout.by/",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "ShinesBudget — Frontend",
    description: "Next.js web app for the ShinesBudget financial planning platform.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Shinesbudget/ShinesBudgetV4Mongo_Frontend",
    demo: "https://shines-budget-v4-mongo-frontend.vercel.app",
    featured: true,
    isPrivate: true,
    year: 2026
  },
  {
    name: "Roadmaps.gg",
    description: "Platform to create and share business/product roadmaps, gather feedback and beta testers.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/appy-eth/Roadmapsgg",
    demo: "https://roadmaps.gg",
    featured: true,
    isPrivate: true,
    year: 2025
  },
  {
    name: "Vlux Restaurant Management",
    description: "Full restaurant management system — tables, menu, orders and reports, with a NestJS backend.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "NestJS", "TypeScript"],
    github: "https://github.com/VluxAI/Vlux_Job_Restaurant_Management",
    demo: "https://vlux-job-restaurant-management.vercel.app",
    featured: true,
    isPrivate: true,
    year: 2026
  },

  // ================================================================
  // PRIVATE — WEB (client work)
  // ================================================================
  {
    name: "Truenorth Collections",
    description: "Official website for a premium watch brand — deployed as a static site on Vercel.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/TruenorthCollections",
    demo: "https://truenorth-collections.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Primal Queen",
    description: "Brand website for Primal Queen.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Primalqueen",
    demo: "https://job-primalqueen.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Amor Intima",
    description: "E-commerce website for the Amor Intima brand.",
    platform: "web",
    audience: "client",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/BoyKa74/Job_AMOR_INTIMA",
    demo: "https://job-amor-intima.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Chicken Web — Cùng Điêu Nga",
    description: "Website for a chicken restaurant chain — home, news and account pages.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "jQuery"],
    github: "https://github.com/BoyKa74/Job_Chicken_Web",
    demo: "https://job-chicken-web.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Gulfsoft Technologies",
    description: "Corporate website with about, services, products and news pages.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Technologies",
    demo: "https://job-technologies.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "MaiTruyen Model House",
    description: "Showcase website for Mai Truyen model houses.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/MaiTruyen_Model_House",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Auraboniswill.ch",
    description: "Swiss client website rebuilt as a static site.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Auraboniswill.ch",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Health Insight Journal",
    description: "Landing page for a neuropathy pain relief product.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Page2",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Sidney Franklin",
    description: "Actor portfolio website with bio, reels, resume and contact form.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Sidney_Franklin",
    demo: "https://job-upwork-sidney-franklin.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Everli",
    description: "Landing page for Everli — a \"living legacy\" creator platform.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Everli",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Moreishi",
    description: "Corporate website for Moreishi.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_Moreishi",
    demo: "https://job-upwork-moreishi.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Town",
    description: "Community forum web app.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_Town",
    demo: "https://job-upwork-town.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Gates AG",
    description: "Corporate website for Gates AG.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_gates-ag-redblue",
    demo: "https://job-upwork-gates-ag-redblue.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Brain.org",
    description: "Landing page for Brain.org with motion design.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/BoyKa74/Job_Upwork_brain_org",
    demo: "https://job-upwork-brain-org.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Midyat Heritage",
    description: "Heritage website with 3D scenes built with React Three Fiber.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React Three Fiber", "GSAP"],
    github: "https://github.com/BoyKa74/Job_Upwork_MidYat",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Wealth Planning AG",
    description: "Corporate website with a Flask contact API that sends e-mail via SMTP.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "Flask"],
    github: "https://github.com/BoyKa74/Job_Upwork_Weather_Planning_Ag",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Qadri Group",
    description: "Production website merging two prototypes for the Qadri Group.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Prototype",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Techvibz Academy",
    description: "Landing page for Techvibz Academy.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_Homepage",
    demo: "https://job-upwork-homepage.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Saint-Tran Subscription",
    description: "Subscription landing page rebuilt from a Figma design.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_subscription",
    isPrivate: true,
    year: 2025
  },
  {
    name: "WRAPS REDEFINED CRM",
    description: "CRM dashboard for a vehicle wrap business.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_WRAPS_REDEFINED_CRM",
    demo: "https://web-five-mauve-cgr8zfppb4.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "RUSH 5OUR",
    description: "Six homepage mockups implemented as one animated, responsive page.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "GSAP", "TypeScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_6mockup",
    demo: "https://rush5our.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Mutogen",
    description: "Live broadcast + multiplayer Canvas room MVP.",
    platform: "web",
    audience: "client",
    tech: ["JavaScript", "Canvas", "WebSockets"],
    github: "https://github.com/BoyKa74/Job_Upwork_Multiplayer",
    demo: "https://multiplayer-sand.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Vsnew",
    description: "vsNEW — EV & hybrid battery health report website.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/vsnew.vercel",
    demo: "https://vsnew-vercel.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "QR Profile",
    description: "QR-space profile platform — product summary and UI screens.",
    platform: "web",
    audience: "client",
    tech: ["TypeScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_QR_Profile",
    isPrivate: true,
    year: 2026
  },
  {
    name: "CleanBook",
    description: "CleanBook landing page built with React, Vite and Tailwind.",
    platform: "web",
    audience: "client",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_CleanBook",
    isPrivate: true,
    year: 2026
  },
  {
    name: "iZeno Website Clone",
    description: "Frontend clone of izeno.com with an automated content scraping pipeline.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_iZeno",
    demo: "https://job-upwork-i-zeno.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Newsroom Clone",
    description: "News website clone with a scraped content pipeline.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_News_Clone",
    demo: "https://job-upwork-news-clone.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "RentDrive",
    description: "Landing page for a car rental service.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_Car_Rental_Listing",
    demo: "https://job-upwork-car-rental-listing.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "School Template",
    description: "School website template with community, learning and values sections.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_School_Template",
    demo: "https://job-upwork-school-template.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Single-Page App",
    description: "Single-page site with contact API integration and a promo slider.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React"],
    github: "https://github.com/BoyKa74/Job_Upwork_Single_Page",
    demo: "https://job-upwork-single-page.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "3-Page Marketing Site",
    description: "Three-page marketing site (evolution, living languages).",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_3pgaes",
    demo: "https://job-upwork-3pgaes.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "8-Page Static Site",
    description: "Multi-page static site and e-mail template set.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_8Pages",
    demo: "https://job-upwork-8-pages.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "YList",
    description: "Curated list platform (art, eat, archives pages).",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_YList",
    demo: "https://job-upwork-y-list-yt9q.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Menu Web",
    description: "Restaurant menu website.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Menu_Web",
    demo: "https://job-upwork-menu-web.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "DeepTrench Card Mockups",
    description: "Interactive mockup collection for the DeepTrench card platform.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Mocup",
    demo: "https://job-mocup.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Canvas Smart Embed",
    description: "Canvas-based video slideshow with autoplay embed.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "JavaScript", "Canvas"],
    github: "https://github.com/BoyKa74/Job_Embed_Autoplay",
    demo: "https://job-embed-autoplay.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Pablo",
    description: "Client web app built with React, Vite and shadcn/ui.",
    platform: "web",
    audience: "client",
    tech: ["React", "Vite", "shadcn/ui"],
    github: "https://github.com/BoyKa74/Job_Pablo",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Job Vibes",
    description: "Task management app with a modern UI.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/Job_Vibes",
    demo: "https://job-vibes-ruddy.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "QuickCampaigns",
    description: "Landing page for the QuickCampaigns product.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "React"],
    github: "https://github.com/BoyKa74/Job_beta_campaigns",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Drive Smarter",
    description: "Website for the Drive Smarter driving assistant app.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Drive_Smarter",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Obituary Platform",
    description: "Obituary publishing platform built with Next.js.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Obituary",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Academy",
    description: "Academy platform website with Stripe integration.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "JavaScript", "Stripe"],
    github: "https://github.com/BoyKa74/Job_Academy",
    demo: "https://job-academy-five.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Order Management System",
    description: "React CRUD app for managing orders with a mock API.",
    platform: "web",
    audience: "client",
    tech: ["React", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Order_Management_System",
    demo: "https://job-order-management-system.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "OpsBoard",
    description: "Minimal ops dashboard with checklists, reminders, realtime messages and file uploads.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "Supabase", "shadcn/ui"],
    github: "https://github.com/BoyKa74/Job_Upwork_Mark_OpsBoard",
    demo: "https://job-upwork-mark-ops-board.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "BeenaPort",
    description: "Multi-tenant condominium management SaaS — frontend foundation built from Figma.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Beena_Port",
    demo: "https://job-upwork-beena-port-web.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "QiQo Folios",
    description: "Two-sided home-services marketplace for the Algarve — public site, customer & pro portals, admin.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_QiQo_Folios",
    demo: "https://job-upwork-qi-qo-folios-frontend.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "E-Commerce Platform",
    description: "Production-ready e-commerce monorepo — customer app + admin dashboard.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "NestJS", "Turborepo"],
    github: "https://github.com/BoyKa74/Job_Upwork_Mst_Alea_Begum",
    demo: "https://job-upwork-mst-alea-begum-web-user.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "TheEgg App",
    description: "Surrogacy self-management platform — web + API monorepo.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "Node.js"],
    github: "https://github.com/BoyKa74/Job_Upwork_Clone_Theegg.app",
    demo: "https://job-upwork-clone-theegg-app.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Task Manager",
    description: "Full-stack task manager monorepo (Turborepo, Next.js + NestJS).",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "NestJS", "Turborepo"],
    github: "https://github.com/BoyKa74/Job_Upwork_Task_Manager",
    demo: "https://job-upwork-task-manager-web.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Snooker Guru — Analytics Platform",
    description: "Data analytics platform for snooker — Next.js dashboard + NestJS API on Supabase.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "NestJS", "Supabase", "PostgreSQL"],
    github: "https://github.com/BoyKa74/Job_data_analytics_user",
    demo: "https://job-data-analytics-user.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Connected Room Platform",
    description: "Enterprise monorepo for connected room experiences — quiz games, karaoke, DMX lighting, realtime sync.",
    platform: "web",
    audience: "client",
    tech: ["TypeScript", "Next.js", "WebSockets"],
    github: "https://github.com/BoyKa74/Job_Upwork_Smile_World",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Heat Stress Manager",
    description: "Enterprise B2B SaaS for real-time heat stress monitoring at Oil & Gas sites in the GCC.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_Heat_Stress_Manager",
    demo: "https://job-upwork-heat-stress-manager.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Picaball Platform",
    description: "Competitive pickleball ecosystem — mobile, web, admin, backend and realtime infrastructure.",
    platform: "web",
    audience: "client",
    tech: ["TypeScript", "Next.js", "NestJS"],
    github: "https://github.com/BoyKa74/Job_Pickleball",
    demo: "https://job-pickleball-api.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "FollowText",
    description: "Marketing site for FollowText built with Astro and Tailwind.",
    platform: "web",
    audience: "client",
    tech: ["Astro", "Tailwind CSS"],
    github: "https://github.com/BoyKa74/Job_Upwork_followtext_astro",
    isPrivate: true,
    year: 2026
  },
  {
    name: "ProjectFlow",
    description: "Project management app built with Next.js, Base UI and Framer Motion.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/BoyKa74/Job_Upwork_Simple_app",
    demo: "https://job-upwork-simple-app.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "SaaS Analytics Dashboard",
    description: "Figma SaaS analytics dashboard converted into a clean static HTML page.",
    platform: "web",
    audience: "client",
    tech: ["HTML", "SCSS", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_Upwork_demo_DashBorad_SCSS",
    demo: "https://job-upwork-demo-dash-borad-scss.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Lumionix — UI Fixes",
    description: "UI fixes and checkout tweaks for the Lumionix storefront.",
    platform: "web",
    audience: "client",
    tech: ["Next.js", "JavaScript"],
    github: "https://github.com/BoyKa74/Job_fix_UI_Lumionix",
    isPrivate: true,
    year: 2025
  },

  // ================================================================
  // PRIVATE — WEB (company / team products)
  // ================================================================
  {
    name: "Lumionix Admin",
    description: "Admin dashboard for the Lumionix store — products, orders and content management.",
    platform: "web",
    audience: "enterprise",
    tech: ["React", "Vite", "TypeScript"],
    github: "https://github.com/Lumionix/lumionix-admin",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Lumionix Docs",
    description: "Product documentation site for Lumionix.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "Nextra", "MDX"],
    github: "https://github.com/Lumionix/lumionix-docs",
    isPrivate: true,
    year: 2026
  },
  {
    name: "ShinesBudget — Backend",
    description: "NestJS + MongoDB API powering the ShinesBudget platform.",
    platform: "web",
    audience: "enterprise",
    tech: ["NestJS", "MongoDB", "TypeScript"],
    github: "https://github.com/Shinesbudget/ShinesBudgetV4Mongo-Backend",
    isPrivate: true,
    year: 2026
  },
  {
    name: "VICHub",
    description: "Attendance and task management dashboard for startups — Next.js monorepo.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/VICHub",
    demo: "https://vtabs-company-web.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "VNV Tech Website",
    description: "Company website for VNV Tech / VTABS.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript", "React Hook Form"],
    github: "https://github.com/BoyKa74/Company_VTABS",
    isPrivate: true,
    year: 2025
  },
  {
    name: "WTABS Personal Life",
    description: "Personal life management app — NestJS backend + Next.js frontend.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "NestJS", "TypeScript"],
    github: "https://github.com/BoyKa74/WTABS_Personal_Life",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Good World",
    description: "Gamified social platform where users earn XP by completing real-life good actions.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/WTABS_GOOD_WORLD",
    isPrivate: true,
    year: 2026
  },
  {
    name: "HolidayCode",
    description: "Marketplace for holiday greeting source code (8/3, 20/11, Valentine...) — Next.js monorepo + NestJS API.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "NestJS", "TypeScript"],
    github: "https://github.com/BoyKa74/WTABS_HolidayCode",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Accindi",
    description: "Marketplace offers app built from a Figma design.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/WTABS_Accindi",
    demo: "https://wtabs-accindi.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Perfectice Web UI 3.0",
    description: "Web UI 3.0 for the Perfectice assessment platform.",
    platform: "web",
    audience: "enterprise",
    tech: ["Angular", "TypeScript"],
    github: "https://github.com/HighScoresAI/hsweb3",
    isPrivate: true,
    year: 2026
  },
  {
    name: "VenTrust",
    description: "Vietnam's trust verification & transaction reputation network.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/BoyKa74/Ven_Verify",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Vlux Restaurant — Ordering App",
    description: "Online ordering app for Vlux restaurant (Next.js + Prisma).",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "Prisma", "TypeScript"],
    github: "https://github.com/VluxAI/Vlux_Job_Restaurant_User",
    demo: "https://vlux-job-restaurant-user.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Five Star Local",
    description: "Local business growth platform built with Next.js.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/appy-eth/Five-Star-Local",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Pump Mags",
    description: "Platform for creating and monetising online magazines (Next.js + Supabase + TipTap + Anthropic).",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "Supabase", "TipTap", "AI"],
    github: "https://github.com/appy-eth/Pump-Mags-V3",
    isPrivate: true,
    year: 2025
  },
  {
    name: "AllCodeCheats",
    description: "Platform for code cheat sheets built with React, Vite and shadcn/ui.",
    platform: "web",
    audience: "enterprise",
    tech: ["React", "Vite", "shadcn/ui"],
    github: "https://github.com/appy-eth/all-code-cheats",
    isPrivate: true,
    year: 2025
  },
  {
    name: "ChessHD",
    description: "Chess platform built with React, Vite and TypeScript.",
    platform: "web",
    audience: "enterprise",
    tech: ["React", "Vite", "TypeScript"],
    github: "https://github.com/appy-2/chesshd",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Numbers Hero",
    description: "Interactive numbers feature for the Appy platform.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/appy-eth/numbers-hero",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Five Star Service Widget",
    description: "Exit-intent testimonial widget for Five Star Local.",
    platform: "web",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/appy-eth/five-star-service",
    demo: "https://v0-exit-intent-testimonial-widget.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "AlgoBattle",
    description: "Real-time competitive coding platform — React/Vite frontend with CodeMirror, admin panel and NestJS backend.",
    platform: "web",
    audience: "enterprise",
    tech: ["React", "Vite", "NestJS", "WebSockets"],
    github: "https://github.com/AnhBoHelloTeam/AlgoBettle_FE",
    demo: "https://algo-bettle-fe.vercel.app",
    team: true,
    isPrivate: true,
    year: 2026
  },

  // ================================================================
  // PRIVATE — AI
  // ================================================================
  {
    name: "VTABS SociBot AI",
    description: "AI-personalized news platform — Next.js web, admin panel, Python backend and Flutter mobile app.",
    platform: "ai",
    audience: "enterprise",
    tech: ["Next.js", "Python", "Flutter", "AI"],
    github: "https://github.com/WTABS/socialAI-FE",
    team: true,
    isPrivate: true,
    year: 2025
  },
  {
    name: "AI Directory Platform",
    description: "Monorepo for discovering and reviewing AI tools (Futurepedia-style), focused on AI music, video, voice and automation.",
    platform: "ai",
    audience: "enterprise",
    tech: ["Next.js", "TypeScript", "AI"],
    github: "https://github.com/BoyKa74/WTABS_WEB_AI",
    isPrivate: true,
    year: 2026
  },
  {
    name: "RAG Demo Dashboard",
    description: "MVP dashboard for retrieval-augmented generation (RAG) search over structured assets using Supabase and Next.js.",
    platform: "ai",
    audience: "personal",
    tech: ["Next.js", "Supabase", "RAG"],
    github: "https://github.com/BoyKa74/RAG-Demo-Dashboard",
    demo: "https://rag-demo-dashboard.vercel.app",
    isPrivate: true,
    year: 2025
  },

  // ================================================================
  // PRIVATE — MOBILE APP
  // ================================================================
  {
    name: "Last Night App",
    description: "Flutter nightlife social app with events and venue discovery (Supabase + Cloudflare R2).",
    platform: "mobile",
    audience: "enterprise",
    tech: ["Flutter", "Dart", "Supabase"],
    github: "https://github.com/appy-eth/last-night-app",
    demo: "https://last-night-app.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Dating App",
    description: "Flutter MVP dating app — sign up, profiles and matching by shared interests.",
    platform: "mobile",
    audience: "client",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/BoyKa74/Job_app_Dating",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Project X",
    description: "Flutter app — team course project.",
    platform: "mobile",
    audience: "academic",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/NguyenQuyHoang/Flutter2_Project_x_v1",
    team: true,
    isPrivate: true,
    year: 2025
  },

  // ================================================================
  // PRIVATE — ACADEMIC (web)
  // ================================================================
  {
    name: "TOEIC Studio",
    description: "TOEIC practice platform monorepo — Next.js web, Expo mobile, NestJS API, PostgreSQL/Prisma.",
    platform: "web",
    audience: "academic",
    tech: ["Next.js", "Expo", "NestJS", "PostgreSQL", "Prisma"],
    github: "https://github.com/BoyKa74/UDA_CDR_Study_TOEIC",
    demo: "https://uda-cdr-study-toeic-user.vercel.app",
    isPrivate: true,
    year: 2026
  },
  {
    name: "RenderStore",
    description: "E-commerce app built with Node.js, Express and PostgreSQL — cloud computing course project.",
    platform: "web",
    audience: "academic",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/BoyKa74/UDA_Cloud_Computing_KTHP",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Fire Hydrant Management — API & Web",
    description: "Backend API and web app for the fire hydrant management research project (NCKH).",
    platform: "web",
    audience: "academic",
    tech: ["Node.js", "Express", "React", "GIS"],
    github: "https://github.com/NCKH-GIS/BackendFhdrantApiV2",
    team: true,
    isPrivate: true,
    year: 2025
  },

  // ================================================================
  // PRIVATE — OTHER
  // ================================================================
  {
    name: "Security & Auth Module",
    description: "Security and authentication module — Java practice.",
    platform: "other",
    audience: "enterprise",
    tech: ["Java", "Spring"],
    github: "https://github.com/BigTech2/SecutiryAndAuth",
    team: true,
    isPrivate: true,
    year: 2025
  },
  {
    name: "CRUD — H2 Database",
    description: "CRUD application with an H2 database.",
    platform: "other",
    audience: "enterprise",
    tech: ["Java", "Spring", "H2"],
    github: "https://github.com/BigTech2/crud",
    team: true,
    isPrivate: true,
    year: 2025
  },

  // ================================================================
  // PRIVATE — PERSONAL
  // ================================================================
  {
    name: "CallTranslate",
    description: "Call translation app prototype.",
    platform: "web",
    audience: "personal",
    tech: ["JavaScript"],
    github: "https://github.com/BoyKa74/CallTranslate",
    isPrivate: true,
    year: 2026
  },
  {
    name: "Happy Birthday",
    description: "Interactive 50th birthday website with envelope, gift box, cake and fireworks animations.",
    platform: "web",
    audience: "personal",
    tech: ["HTML", "JavaScript", "Canvas"],
    github: "https://github.com/BoyKa74/Happy_Birthday",
    demo: "https://happy-birthday-nine-xi.vercel.app",
    isPrivate: true,
    year: 2025
  },
  {
    name: "Trung Thu 2025",
    description: "Interactive Mid-Autumn Festival page — lanterns, full moon, chú Cuội and Hằng Nga.",
    platform: "web",
    audience: "personal",
    tech: ["HTML", "JavaScript", "Canvas"],
    github: "https://github.com/BoyKa74/Funject_TrungThu_YaLyHua",
    demo: "https://funject-trung-thu-ya-ly-hua.vercel.app",
    isPrivate: true,
    year: 2025
  }
];
