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
  MessageCircle,
  ChartNoAxesCombined,
} from "lucide-react";
import { winterArc } from "@/data/apps";
import { ArcMark } from "@/components/apps/arc-mark";
import { WinterPreview } from "@/components/apps/winter-preview";

export const metadata = appMetadata(
  "Winter Arc — Build a daily practice | Aniket Chavan",
  "Turn your goal into a daily plan with Winter Arc. Track commitments, get AI-assisted coaching, and reflect on your progress. Open on the web or download for Android.",
  "/apps/winterarc",
);

const features = [
  {
    icon: Target,
    title: "Your ambition. A real plan.",
    text: "Choose a goal and target date. Build a plan around your routine, energy, and the time you actually have.",
  },
  {
    icon: CalendarDays,
    title: "A little structure. A lot of clarity.",
    text: "Turn the big picture into a daily schedule. Check off commitments, earn XP, and build consistency through challenges.",
  },
  {
    icon: MessageCircle,
    title: "Room for reflection.",
    text: "Talk with an AI coach about your plan and close the day with a reflection. Make tomorrow a little more intentional.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Small steps. Visible progress.",
    text: "Review your journal, challenge streaks, and progress history. Export your journal when you want to keep a copy.",
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
        <span className="eyebrow">A PRACTICE. A LITTLE, EVERY DAY.</span>
        <h1>
          Keep a promise.
          <br />
          <em>Change your everyday.</em>
        </h1>
        <p>
          Your goals deserve more than a someday.
          <br className="desktop-break" /> Meet the daily discipline app that
          helps you show up for them.
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
          A long-term goal can feel far away. Winter Arc brings it closer with a
          plan for today, a space to reflect, and a record of every small step.
        </p>
      </section>
      <section className="studio-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              THE PLAN. THE PRACTICE. THE PROGRESS.
            </span>
            <h2>
              Find your
              <br />
              <em>daily rhythm.</em>
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
            <span className="eyebrow">FROM INTENTION TO ACTION</span>
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
                <h3>Choose your direction.</h3>
                <p>
                  Create an account. Set a goal and tell Winter Arc about your
                  routine and available time.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Make a realistic plan.</h3>
                <p>
                  Build a personalized schedule with AI assistance, or begin
                  with the built-in starter plan.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Show up for today.</h3>
                <p>
                  Complete a task, check in on a challenge, and reflect. Return
                  tomorrow with a little more clarity.
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
              APK · v{winterArc.version} · Android 5.0+
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
              Your daily tasks, journal, XP, and challenge history stay in this
              browser or on this device, separately for each account. They do
              not sync between devices. Export your journal from the Progress
              screen before clearing browser data.
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
              set up your goal and daily plan.
            </p>
          </details>
          <details>
            <summary>What if AI planning is unavailable?</summary>
            <p>
              You can begin with the built-in starter schedule and manage your
              daily tasks. AI-assisted features need a working internet
              connection and provider availability.
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
