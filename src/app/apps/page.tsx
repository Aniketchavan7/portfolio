import "./apps.css";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileCheck2,
  Headphones, Network, TrainFront,
} from "lucide-react";
import { ArcMark } from "@/components/apps/arc-mark";
import repositories from "@/data/public-repositories.json";
import { apps } from "@/data/apps";
import { appMetadata } from "@/lib/app-metadata";

export const metadata = appMetadata(
  "Apps | Aniket Chavan",
  "Explore NoSpoti, Winter Arc, System Design Illustrated, RailPulse, and public GitHub projects. Discover the apps, download for Android, or launch an app online.",
  "/apps",
);

export default function AppsPage() {
  return (
    <main id="main-content" className="apps-directory">
      <div className="apps-container">
        <nav className="apps-nav" aria-label="App directory navigation">
          <Link href="/">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <span>ANIKET CHAVAN / APPS</span>
        </nav>
        <header className="apps-intro">
          <span className="apps-eyebrow">THE COLLECTION</span>
          <h1>Apps and projects</h1>
          <p>Explore featured work or browse the <a href="#repositories"><u>GitHub repository directory</u></a>.</p>
        </header>
        <div className="apps-section-label">
          <h2>Explore the apps</h2>
          <span>{String(apps.length).padStart(2, "0")} APPS</span>
        </div>
        <div className="apps-grid">
          {apps.map((app, index) => (
            <article className={`directory-card ${app.slug}`} key={app.slug}>
              <div className="directory-art" aria-hidden="true">
                <span className="directory-index">0{index + 1}</span>
                {app.slug === "nospoti" ? (
                  <Headphones strokeWidth={1.3} />
                ) : app.slug === "winterarc" ? (
                  <ArcMark />
                ) : app.slug === "railpulse" ? (<TrainFront />) : app.slug === "system-design" ? (<Network />) : app.slug === "rentalgo" ? (
                  <Building2 strokeWidth={1.3} />
                ) : (
                  <FileCheck2 strokeWidth={1.3} />
                )}
                <span className="directory-art-caption">
                  {app.platform}
                </span>
              </div>
              <div className="directory-card-body">
                <span className="apps-eyebrow">{app.category}</span>
                <h3>{app.name}</h3>
                <p>{app.description}</p>
                <span className="directory-platform">{app.platform}</span>
                {app.external ? (
                  <a
                    className="directory-action"
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {app.action}
                    <ArrowUpRight size={18} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link className="directory-action" href={app.href}>
                    {app.action}
                    <ArrowRight size={18} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
        <section id="repositories" className="repo-directory">
          <div className="apps-section-label"><h2>GitHub repositories</h2><span>{repositories.length} PUBLIC</span></div>
          {[false, true].map(fork => {
            const entries = repositories.filter(repo => repo.fork === fork);
            return <details key={String(fork)} open={!fork}>
              <summary>{fork ? "Forks" : "Projects"} ({entries.length})</summary>
              <ul>{entries.map(repo => (
                <li key={repo.name}><a href={`https://github.com/Aniketchavan7/${repo.name}`}>{repo.name}</a>
                <p>{repo.description || repo.language || "View repository on GitHub."}</p></li>
              ))}</ul>
            </details>;
          })}
        </section>
        <footer className="apps-footer">
          <span>Personal projects & collaborative work.</span>
          <Link href="/">
            Back to the portfolio <ArrowUpRight size={15} />
          </Link>
        </footer>
      </div>
    </main>
  );
}
