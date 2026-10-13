export type Course = {
  slug: string;
  title: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  description: string;
  outcomes: string[];
  modules: string[];
};

export const courses: Course[] = [
  {
    slug: "python-zero-to-advanced",
    title: "Python Programming: Zero to Advanced",
    category: "Programming",
    level: "Beginner → Advanced",
    format: "Self-paced + live",
    duration: "10 modules",
    description: "Build a strong Python foundation through practical exercises and projects.",
    outcomes: ["Write clean, readable Python from scratch", "Automate everyday tasks with scripts", "Work with files, APIs and data", "Ship small, real-world Python projects"],
    modules: ["Setting up & thinking like a programmer", "Variables, types and operators", "Control flow and loops", "Functions and modules", "Lists, dictionaries, sets & tuples", "Files and error handling", "Object-oriented Python", "Working with APIs and JSON", "Automation scripts", "Capstone project"],
  },
  {
    slug: "frontend-web-development",
    title: "Frontend Web Development",
    category: "Web Development",
    level: "Beginner → Advanced",
    format: "Self-paced + live",
    duration: "9 modules",
    description: "Learn to build responsive, accessible interfaces for the web.",
    outcomes: ["Structure pages with semantic HTML", "Design responsive layouts with modern CSS", "Add interactivity with JavaScript", "Build and deploy a portfolio site"],
    modules: ["How the web works", "Semantic HTML", "CSS fundamentals", "Flexbox & Grid layouts", "Responsive design", "JavaScript essentials", "DOM & events", "Intro to React", "Portfolio capstone & deployment"],
  },
  {
    slug: "sql-mysql",
    title: "SQL & MySQL Database Management",
    category: "Databases",
    level: "Beginner → Advanced",
    format: "Self-paced + live",
    duration: "8 modules",
    description: "Practice data modelling, queries, joins, and database design.",
    outcomes: ["Design relational schemas", "Write confident SELECT queries", "Join, group and aggregate data", "Keep data safe with constraints"],
    modules: ["What is a relational database?", "Installing MySQL & tools", "SELECT, WHERE & ORDER BY", "Joins in practice", "Grouping & aggregation", "Data modelling & normalisation", "Indexes, constraints & transactions", "Database project"],
  },
  {
    slug: "backend-nodejs",
    title: "Backend Development with Node.js",
    category: "Backend",
    level: "Beginner → Advanced",
    format: "Self-paced + live",
    duration: "8 modules",
    description: "Understand APIs, server logic, validation, and persistence.",
    outcomes: ["Build REST APIs with Node.js", "Validate and secure user input", "Connect apps to a database", "Deploy a backend service"],
    modules: ["Node.js runtime basics", "npm and project structure", "HTTP & routing", "Building REST APIs", "Validation & error handling", "Databases & persistence", "Authentication concepts", "Deployment project"],
  },
  {
    slug: "office-productivity",
    title: "Microsoft Office Productivity",
    category: "Productivity",
    level: "Beginner → Intermediate",
    format: "Self-paced + live",
    duration: "6 modules",
    description: "Improve everyday productivity with practical office workflows.",
    outcomes: ["Create professional documents", "Analyse data with spreadsheets", "Present ideas with clear slides", "Work faster with shortcuts"],
    modules: ["Word: documents that look professional", "Excel: formulas & functions", "Excel: charts & data analysis", "PowerPoint: clear presentations", "Email & collaboration workflows", "Productivity project"],
  },
];

export const projects = [
  { title: "Python Applications", status: "Practice & projects", text: "Small applications, automation experiments, and programming exercises.", tags: ["Python", "Automation", "CLI"] },
  { title: "Web Applications", status: "Portfolio category", text: "Responsive frontend experiences and full-stack application concepts.", tags: ["HTML/CSS", "JavaScript", "React"] },
  { title: "Database Systems", status: "Portfolio category", text: "Relational data modelling, SQL practice, and backend integration.", tags: ["SQL", "MySQL", "Data modelling"] },
];

export const services = [
  { title: "Website development", text: "Clean, responsive websites for individuals, brands and small businesses." },
  { title: "Frontend and backend development", text: "Interfaces and server logic that work together reliably." },
  { title: "Python programming and automation", text: "Scripts and tools that save time on repetitive work." },
  { title: "Database design and SQL support", text: "Well-structured data, clear queries and practical guidance." },
  { title: "Technical tutoring and training", text: "Patient, beginner-friendly lessons built around real practice." },
  { title: "Cloud / DevOps learning projects", text: "Hands-on experiments in deployment and delivery workflows." },
];

export const journey = [
  { label: "Now", title: "Computer Science at AE-FUNAI", text: "Building a strong foundation through coursework, practice and personal projects." },
  { label: "Building", title: "Python, Java, C++ & the web", text: "Turning concepts into working apps — from scripts to full-stack ideas." },
  { label: "Launching", title: "SammyNex Learn", text: "Creating practical learning paths so others can learn, build and grow too." },
  { label: "Next", title: "Cloud, DevOps & AI engineering", text: "Learning in public and growing toward modern engineering skills." },
];

export const contact = {
  email: "onwesamuelonwe1@gmail.com",
  whatsapp: "https://wa.me/2347031830569",
  github: "https://github.com/Samm-best",
  x: "https://x.com/sammybest2025",
};
