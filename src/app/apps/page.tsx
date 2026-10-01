import "./apps.css";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  FileCheck2,
} from "lucide-react";
import { ArcMark } from "@/components/apps/arc-mark";
import { apps } from "@/data/apps";
import { appMetadata } from "@/lib/app-metadata";

export const metadata = appMetadata(
  "Apps | Aniket Chavan",
  "Explore Winter Arc, RentalGO, and Insurance Claim Engine. Learn about the apps, download Winter Arc for Android, or launch an app online.",
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
          <h1>
            Apps, ready
            <br />
            for your <em>everyday.</em>
          </h1>
          <p>
            Explore what I’m building. Find a daily practice, a place to stay,
            or a clearer way to understand a claim.
          </p>
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
                {app.slug === "winterarc" ? (
                  <ArcMark />
                ) : app.slug === "rentalgo" ? (
                  <Building2 strokeWidth={1.3} />
                ) : (
                  <FileCheck2 strokeWidth={1.3} />
                )}
                <span className="directory-art-caption">
                  {app.slug === "winterarc"
                    ? "A LITTLE, EVERY DAY."
                    : app.slug === "rentalgo"
                      ? "FIND YOUR NEXT PLACE."
                      : "FOLLOW THE EVIDENCE."}
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
