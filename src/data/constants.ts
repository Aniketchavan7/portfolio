export enum SkillNames {
  JAVA = "java",
  PYTHON = "python",
  CPP = "cpp",
  C = "c",
  REACT = "react",
  FLASK = "flask",
  SPRINGBOOT = "springboot",
  LANGCHAIN = "langchain",
  GIT = "git",
  GITHUB = "github",
  SELENIUM = "selenium",
  HTML = "html",
  CSS = "css",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JAVA]: {
    id: 1,
    name: "java",
    label: "Java",
    shortDescription: "Turning coffee into NullPointerExceptions since 1995 ☕💣",
    color: "#e76f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 2,
    name: "python",
    label: "Python",
    shortDescription: "Executable pseudo-code & importing magic 🐍✨",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.CPP]: {
    id: 3,
    name: "cpp",
    label: "C++",
    shortDescription: "Manual memory leaks & 500-line template error traces 💻🔥",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.C]: {
    id: 4,
    name: "c",
    label: "C",
    shortDescription: "Segmentation fault (core dumped) 🔧💀",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "<div><div>Re-rendering 4,000 times</div></div> ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.FLASK]: {
    id: 6,
    name: "flask",
    label: "Flask",
    shortDescription: "5 lines of code, 50 microservice endpoints 🌶️",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  [SkillNames.SPRINGBOOT]: {
    id: 7,
    name: "springboot",
    label: "Spring Boot",
    shortDescription: "100 annotations & 50MB of RAM to print 'Hello World' 🍃🚀",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 8,
    name: "langchain",
    label: "LangChain",
    shortDescription: "Wrapping API calls in 14 layers of abstraction 🤖🔗",
    color: "#1c3c3c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.GIT]: {
    id: 9,
    name: "git",
    label: "Git",
    shortDescription: "git push --force and pray to production gods 🔄📦",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 10,
    name: "github",
    label: "GitHub",
    shortDescription: "Obsessively staring at little green contribution squares 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.SELENIUM]: {
    id: 11,
    name: "selenium",
    label: "Selenium",
    shortDescription: "Watching automated Chrome click buttons faster than a human 🌐🤖",
    color: "#43b02a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
  [SkillNames.HTML]: {
    id: 12,
    name: "html",
    label: "HTML",
    shortDescription: "Yes it is a programming language, don't @ me 🏗️",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 13,
    name: "css",
    label: "CSS",
    shortDescription: "Centering a <div> is the ultimate final boss 🎨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2024",
    endDate: "Feb 2025",
    title: "Gen AI Intern",
    company: "Spring Money, Pune",
    description: [
      "Built a multi-agent content-automation system handling research, drafting, review, and publishing workflows end to end.",
      "Implemented workflow orchestration using Python, LangGraph, LangChain, and ChromaDB.",
      "Developed retrieval pipelines combining web search, scraping, and vector-based grounding for content generation.",
      "Built backend APIs and contributed to live, subscription-based application workflows.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LANGCHAIN,
      SkillNames.FLASK,
      SkillNames.GIT,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "Present",
    title: "Freelance Website Developer",
    company: "Self-employed, Pune",
    description: [
      "Delivered client-focused website solutions with live deployments for business and educational platforms.",
      "Built websites for Duramet Technologies, Rhisome Advertising, and Local Rangoli Classes.",
      "Handled requirement gathering, implementation, and deployment for real-world client use cases.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.HTML,
      SkillNames.CSS,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
