"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import AppsShowcase from "@/components/sections/apps-showcase";
import AboutSection from "@/components/sections/about";
import "./home.css";
import { usePerfProfile } from "@/hooks/use-perf-profile";

function MainPage() {
  const { disable3D, ready } = usePerfProfile();
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main id="main-content" data-no-scene={ready && disable3D} className={cn("home-page bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <AppsShowcase />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
