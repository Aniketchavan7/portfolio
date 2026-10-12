import "./winterarc.css";
import { appMetadata } from "@/lib/app-metadata";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Check,
  Globe,
  Smartphone,
  Target,
  CalendarDays,
  Clock3,
  Grid3X3,
} from "lucide-react";
import { winterArc } from "@/data/apps";
import { ArcMark } from "@/components/apps/arc-mark";
import { WinterPreview } from "@/components/apps/winter-preview";

export const metadata = appMetadata(
  "Winter Arc — Daily Tasks & Must Do | Aniket Chavan",
  "Build a timed daily roadmap, finish Must Do routines and goals on time, and grow a clear contribution history. Open Winter Arc on the web or download it for Android.",
  "/apps/winterarc",
);

const features = [
  {
    icon: Target,
    title: "Your day, built by you.",
    text: "Create one-time, daily, or weekday tasks yourself. Add notes, choose the start time, and set the deadline.",
  },
  {
    icon: Clock3,
    title: "Time windows that matter.",
    text: "A task stays locked until its start time. Finish inside the window for an on-time result, or complete it late without rewriting the record.",
  },
  {
    icon: CalendarDays,
    title: "Routines become Must Do.",
    text: "Track a daily routine or a specific goal such as LeetCode Daily directly from the same roadmap—on desktop, mobile, or keyboard.",
  },
  {
    icon: Grid3X3,
    title: "One promise. One clear record.",
    text: "See your overall daily contribution and a separate binary heatmap for every tracked routine. Only an on-time finish fills the block.",
  },
];

export default function WinterArcPage() {
  return (
    <main id="main-content" className="studio-page winter-page">
      <div className="product-subnav studio-container">
        <Link href="/apps">← All apps</Link>
        <span>
          <ArcMark /> Winter Arc
        </span>
        <a href="#download">
          Get the app <Download size={14} />
        </a>
      </div>
      <section className="studio-container winter-hero">
        <div className="winter-brand">
          <ArcMark />
          <span>WINTER ARC</span>
        </div>
        <span className="eyebrow">SCHEDULE · COMPLETE · CONTRIBUTE</span>
        <h1>
          Plan the day.
          <br />
          <em>Keep the promise.</em>
        </h1>
        <p>
          Build a roadmap with real time windows.
          <br className="desktop-break" /> Finish what matters on time and keep
          the evidence.
        </p>
        <div className="product-actions">
          <a className="studio-button button-terra" href="#download">
            Get Winter Arc <Download size={17} />
          </a>
          <a
            className="text-link"
            href={winterArc.webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open web app <ArrowUpRight size={17} />
          </a>
        </div>
        <span className="product-platform-note">
          For Android and your browser.
        </span>
        <div className="winter-showcase">
          <span className="showcase-side">
            MAKE A PROMISE.
            <br />
            KEEP IT TODAY.
          </span>
          <WinterPreview interactive />
          <span className="showcase-side right">
            A FRESH PAGE.
            <br />A FRESH START.
          </span>
        </div>
      </section>
      <section className="winter-statement studio-container">
        <span className="eyebrow">BUILT AROUND REAL LIFE</span>
        <h2>
          You don’t need to do everything.
          <br />
          <em>Just the next right thing.</em>
        </h2>
        <p>
          Winter Arc gives every routine and goal a place in today&apos;s schedule,
          then records whether you kept the promise while it still counted.
        </p>
      </section>
      <section className="studio-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              THE ROADMAP. THE WINDOW. THE RECORD.
            </span>
            <h2>
              Build your
              <br />
              <em>daily system.</em>
            </h2>
          </div>
        </div>
        <div className="product-features">
          {features.map((feature, i) => (
            <article key={feature.title}>
              <div className="feature-icon">
                <feature.icon size={25} />
                <span>0{i + 1}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="how-section">
        <div className="studio-container how-grid">
          <div>
            <span className="eyebrow">FROM PLAN TO PROOF</span>
            <h2>
              Your first day,
              <br />
              <em>in three steps.</em>
            </h2>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Create your roadmap.</h3>
                <p>
                  Add each task manually, choose when it becomes available, and
                  set the deadline that makes it count.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Choose what is Must Do.</h3>
                <p>
                  Track a daily routine or specific goal from the same task.
                  There is no second checklist to maintain.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Finish inside the window.</h3>
                <p>
                  On-time work fills the overall contribution grid and that
                  task&apos;s own heatmap. Late work stays honestly late.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
      <section
        id="download"
        className="studio-container section-space download-section"
      >
        <ArcMark />
        <span className="eyebrow">YOUR NEXT SMALL STEP</span>
        <h2>
          Your arc.
          <br />
          <em>Starts today.</em>
        </h2>
        <p>On your phone. In your browser. Ready when you are.</p>
        <div className="download-grid">
          <article>
            <Smartphone size={27} />
            <h3>Take it with you.</h3>
            <p>Install Winter Arc on your Android phone.</p>
            <a
              className="studio-button button-terra"
              href={winterArc.downloadUrl}
            >
              Download for Android <Download size={17} />
            </a>
            <span className="download-meta">
              APK · v{winterArc.version} · Android 7.0+
            </span>
            <details>
              <summary>How to install the APK</summary>
              <ol>
                <li>Download the APK on your Android phone.</li>
                <li>
                  Open the file and allow installation from your browser when
                  Android asks.
                </li>
                <li>Install Winter Arc, then create an account or sign in.</li>
              </ol>
            </details>
          </article>
          <article>
            <Globe size={27} />
            <h3>Open a fresh tab.</h3>
            <p>The full experience, right in your browser.</p>
            <a
              className="studio-button button-outline"
              href={winterArc.webUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch web app <ArrowUpRight size={17} />
            </a>
            <span className="download-meta">
              Desktop, tablet & mobile browsers
            </span>
            <span className="browser-note">
              <Check size={15} /> No download needed
            </span>
          </article>
        </div>
      </section>
      <section className="studio-container faq-section">
        <div>
          <span className="eyebrow">A FEW THINGS TO KNOW</span>
          <h2>
            Before you <em>begin.</em>
          </h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Does Winter Arc work offline?</summary>
            <p>
              An internet connection is required. Winter Arc currently does not
              support offline use.
            </p>
          </details>
          <details>
            <summary>Does my progress sync between devices?</summary>
            <p>
              Yes. Daily Tasks, completion results, Must Do periods, and
              contribution history sync securely through your account.
            </p>
          </details>
          <details>
            <summary>Can I use it on an iPhone?</summary>
            <p>
              Yes, through the web app in your browser. The downloadable app is
              currently for Android.
            </p>
          </details>
          <details>
            <summary>Do I need an account?</summary>
            <p>
              Yes. Sign up with your email and complete the confirmation step to
              open your private roadmap and sync it between devices.
            </p>
          </details>
          <details>
            <summary>What happens if I miss a deadline?</summary>
            <p>
              You can still complete the task until that daily occurrence
              closes. It is permanently recorded as late and does not fill the
              Must Do contribution block.
            </p>
          </details>
        </div>
      </section>
      <div className="studio-container product-signoff">
        <span>Designed & built by Aniket Chavan.</span>
        <Link href="/" className="text-link">
          Back to the portfolio <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
