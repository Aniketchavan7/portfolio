"use client";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  ResponsiveDialog, ResponsiveDialogContent, ResponsiveDialogTrigger,
  ResponsiveDialogTitle, ResponsiveDialogClose,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

function sourceLabel(project: Project) {
  return project.github && /^https:\/\/github\.com\/[^/]+\/?$/.test(project.github) ? "GitHub profile" : "Source";
}

function ProjectLinks({ project }: { project: Project }) {
  return <>
    {project.live && project.live !== "#" && <a className="inline-flex items-center gap-2" href={project.live} target="_blank" rel="noopener noreferrer">
      {project.id === "spring-money" ? "Company website" : "Live Demo"} <ArrowUpRight size={14} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>}
    {project.github && project.github !== "#" && <a className="inline-flex items-center gap-2" href={project.github} target="_blank" rel="noopener noreferrer">
      {sourceLabel(project)} <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
    </a>}
  </>;
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto px-5 py-12 md:py-20">
      <SectionHeader id="projects" title="Projects" desc="Client websites, AI systems, and the engineering behind them." className="relative z-10" />
      <div className="home-project-grid relative z-10">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const technologies = [...project.skills.frontend, ...project.skills.backend];
  return (
    <article className="home-project-card" aria-labelledby={`project-${project.id}`}>
      <ResponsiveDialog>
        {project.preview ? (
          <figure>
            <div className="home-project-preview">
              <Image src={project.preview.src} alt={`${project.title}: ${project.preview.caption}`} fill sizes="(max-width: 767px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            </div>
            <figcaption className="px-6 py-2 text-xs text-muted-foreground border-b">{project.preview.caption}</figcaption>
          </figure>
        ) : (
          <div className="home-project-preview home-project-technical">
            <strong>{project.category}</strong>
            <p>{technologies.map((skill) => skill.title).join(" / ")}</p>
          </div>
        )}
        <div className="home-project-body">
          <span className="home-project-category">{project.category}</span>
          <h3 id={`project-${project.id}`}>{project.title}</h3>
          <p className="home-project-description">{project.summary}</p>
          <p className="home-project-role"><strong>My contribution</strong>{project.contribution}</p>
          <div className="home-project-actions">
            <ProjectLinks project={project} />
            <ResponsiveDialogTrigger aria-label={`Read details about ${project.title}`}>
              Details <ArrowRight size={14} aria-hidden="true" />
            </ResponsiveDialogTrigger>
          </div>
        </div>
        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          <div className="shrink-0 border-b bg-background px-6 py-6 pr-12">
            <ResponsiveDialogTitle className="font-display text-xl md:text-2xl font-bold leading-relaxed">{project.title}</ResponsiveDialogTitle>
            <div className="flex flex-wrap items-center gap-5 mt-4 text-sm underline underline-offset-4"><ProjectLinks project={project} /></div>
          </div>
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-6 py-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                {project.skills.frontend.length > 0 && <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground">Frontend</span><FloatingDock items={project.skills.frontend} />
                </div>}
                {project.skills.backend.length > 0 && <div className="flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground">Backend</span><FloatingDock items={project.skills.backend} />
                </div>}
              </div>
              {project.content}
              <ResponsiveDialogClose className="mt-6 min-h-11 border rounded-md px-4 text-sm">Close project</ResponsiveDialogClose>
            </div>
          </ScrollArea>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </article>
  );
}
