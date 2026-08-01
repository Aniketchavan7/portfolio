import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Py</span>,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">C++</span>,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Fl</span>,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Re</span>,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">LC</span>,
  },
  talib: {
    title: "TA-Lib",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">TA</span>,
  },
  restapi: {
    title: "REST APIs",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">API</span>,
  },
  llm: {
    title: "LLMs",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">LLM</span>,
  },
  oop: {
    title: "OOP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">OOP</span>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">H5</span>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">CSS</span>,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JS</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "spring-money",
    category: "Gen AI / Industry",
    title: "Spring Money — Multi-Agent System",
    src: "/assets/projects-screenshots/spring-money.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.langchain,
        PROJECT_SKILLS.llm,
        PROJECT_SKILLS.restapi,
        PROJECT_SKILLS.flask,
      ],
    },
    live: "https://spring.money",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-agent content automation & research engine for Spring Money.
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered a multi-agent content-automation system handling research, drafting, review, and publishing workflows end-to-end at Spring Money (Pune).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Contributions</TypographyH3>
          <p className="font-mono mb-2">
            • Built workflow orchestration using Python, LangGraph, LangChain, and ChromaDB.<br />
            • Developed retrieval pipelines combining web search, scraping, and vector-based grounding for content generation.<br />
            • Built backend APIs and integrated with live subscription-based application workflows.
          </p>
        </div>
      );
    },
  },
  {
    id: "duramet-tech",
    category: "Client Project",
    title: "Duramet Technologies",
    src: "/assets/projects-screenshots/duramet-tech.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [PROJECT_SKILLS.restapi],
    },
    live: "https://www.duramettechnologies.com/",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Official industrial website for Duramet Technologies.
          </TypographyP>
          <TypographyP className="font-mono">
            Designed, developed, and deployed the official corporate web platform for Duramet Technologies, featuring product showcases, company background, and inquiry forms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Custom responsive design engineered for industrial equipment presentation.<br />
            • High-performance loading speed with SEO optimization for search visibility.<br />
            • Interactive product details and lead-generation contact workflows.
          </p>
        </div>
      );
    },
  },
  {
    id: "rangoli-website",
    category: "Client Project",
    title: "Akanksha Creations — Rangoli Platform",
    src: "/assets/projects-screenshots/rangoli-website.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
      ],
      backend: [],
    },
    live: "https://akankshacreationssite.netlify.app/",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Educational & artwork platform for Akanksha Creations Rangoli Classes.
          </TypographyP>
          <TypographyP className="font-mono">
            Built an elegant web platform for Local Rangoli Art Classes (Akanksha Creations) showcasing traditional and modern rangoli art courses, student galleries, and class enrollments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <p className="font-mono mb-2">
            • Vibrant image gallery showcasing artwork and workshop moments.<br />
            • Course curriculum breakdown and class schedule details.<br />
            • Deployed on Netlify with seamless multi-device responsiveness.
          </p>
        </div>
      );
    },
  },
  {
    id: "aspire-ai",
    category: "AI Chatbot",
    title: "Aspire AI — Career Guidance Chatbot",
    src: "/assets/projects-screenshots/aspire-ai.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.llm,
        PROJECT_SKILLS.restapi,
        PROJECT_SKILLS.python,
      ],
    },
    live: "#",
    github: "https://github.com/Aniketchavan7",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A domain-specific chatbot for career guidance powered by LLMs.
          </TypographyP>
          <TypographyP className="font-mono">
            Built a career guidance chatbot backend using Flask with LLM-based
            response generation and structured API endpoints. Designed backend
            logic for user queries, personalized recommendations, and
            conversational state handling.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            Domain-specific chatbot with personalized career recommendations,
            LLM-powered response generation, structured REST API endpoints, and
            conversational state management. Published a research paper based on
            this project in IJIRE (International Journal of Innovative Research
            in Engineering).
          </p>
        </div>
      );
    },
  },
  {
    id: "fno-trading-bot",
    category: "Trading Automation",
    title: "Automated F&O Trading Strategy Bot",
    src: "/assets/projects-screenshots/fno-trading-bot.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.talib,
      ],
    },
    live: "#",
    github: "https://github.com/Aniketchavan7",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Python automation system for Indian market F&O strategy execution.
          </TypographyP>
          <TypographyP className="font-mono">
            Built a Python automation system for Indian market F&O strategy
            execution using EMA- and RSI-driven trade logic. Implemented
            technical indicator processing, trade-signal generation, and
            stop-loss based risk management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Technical Details</TypographyH3>
          <p className="font-mono mb-2">
            Uses TA-Lib for technical indicator computation (EMA, RSI),
            automated trade signal generation based on crossover strategies,
            built-in stop-loss and risk management logic, and integration with
            TradingView for market data analysis.
          </p>
        </div>
      );
    },
  },
  {
    id: "ds-library",
    category: "C++ Library",
    title: "Generic Data Structures Library",
    src: "/assets/projects-screenshots/ds-library.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.cpp, PROJECT_SKILLS.oop],
    },
    live: "#",
    github: "https://github.com/Aniketchavan7",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A reusable, template-based data structures library in C++.
          </TypographyP>
          <TypographyP className="font-mono">
            Developed a reusable library implementing linked lists, stacks, and
            queues with generic, template-based support. Applied encapsulation
            and abstraction principles to build modular data structures usable
            across data types.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Design Principles</TypographyH3>
          <p className="font-mono mb-2">
            Built with C++ templates for type-generic support, OOP principles
            like encapsulation and abstraction for clean APIs, modular
            architecture supporting linked lists, stacks, queues, and designed
            for reusability across different data types and applications.
          </p>
        </div>
      );
    },
  },
];

export default projects;
