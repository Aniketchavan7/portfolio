import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, FileCheck2 } from "lucide-react";
import { apps } from "@/data/apps";
import { ArcMark } from "../apps/arc-mark";

export default function AppsShowcase() {
  return (
    <section id="my-apps" className="home-apps home-content" aria-labelledby="home-apps-title">
      <h2 id="home-apps-title">My Apps</h2>
      <p className="home-section-intro">Tools you can use today. Explore an app, try it online, or take it with you.</p>
      <div className="home-app-list">
        {apps.map((app) => (
          <Link key={app.slug} href={app.href} className="home-app-row"
            {...(app.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            <span className="home-app-icon" aria-hidden="true">
              {app.slug === "winterarc" ? <ArcMark /> : app.slug === "rentalgo" ? <Building2 /> : <FileCheck2 />}
            </span>
            <div className="home-app-summary">
              <h3>{app.name}</h3>
              <p>{app.description}</p>
            </div>
            <span className="home-app-action">{app.action} {app.external ? <ArrowUpRight size={18} /> : <ArrowRight size={18} />}</span>
            {app.external && <span className="sr-only"> (opens in a new tab)</span>}
          </Link>
        ))}
      </div>
      <Link href="/apps" className="home-text-link">View all apps <ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  );
}
