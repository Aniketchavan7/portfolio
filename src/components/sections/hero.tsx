import Link from "next/link";
import { ArrowRight, File } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { config } from "@/data/config";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="hero" className="home-hero" aria-labelledby="hero-name">
      <div className="home-hero-copy">
        <p className="home-role">Software Developer · AI &amp; Data Science</p>
        <h1 id="hero-name">Aniket<br />Chavan<span>.</span></h1>
        <p className="home-introduction">I build web apps and AI tools that solve everyday problems.</p>
        <div className="home-hero-actions">
          <Link href="/apps" className={cn(buttonVariants({ size: "lg" }), "gap-2")}>
            Explore Apps <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/Aniket_Chavan_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}>
            <File size={18} aria-hidden="true" /> Resume<span className="sr-only"> (PDF, opens in a new tab)</span>
          </Link>
        </div>
        <nav className="home-social-links" aria-label="Contact and profiles">
          <Link href="#contact">Hire Me</Link>
          <a href={config.social.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={config.social.codolio} target="_blank" rel="noopener noreferrer">Codolio<span className="sr-only"> (opens in a new tab)</span></a>
        </nav>
      </div>
    </section>
  );
}
