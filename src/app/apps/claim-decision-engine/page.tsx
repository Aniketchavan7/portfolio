import "./claim.css";
import { appMetadata } from "@/lib/app-metadata";
import Link from "next/link";
import {
  ArrowUpRight,
  FileCheck2,
  Search,
  Quote,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { claimEngine } from "@/data/apps";
import { ClaimWorkflow } from "@/components/apps/claim-workflow";

export const metadata = appMetadata(
  "Claim Decision Engine — Policy-backed reasoning | Aniket Chavan",
  "Explore a five-agent claim analysis system with hybrid policy retrieval, cited evidence, and validation. Try the live demo on Hugging Face.",
  "/apps/claim-decision-engine",
);

export default function ClaimPage() {
  return (
    <main id="main-content" className="studio-page claim-page">
      <div className="product-subnav studio-container">
        <Link href="/apps">← All apps</Link>
        <span>
          <FileCheck2 /> Claim Decision Engine
        </span>
        <a href={claimEngine.webUrl} target="_blank" rel="noopener noreferrer">
          Try Claim Engine <ArrowUpRight size={14} />
        </a>
      </div>
      <section className="studio-container claim-hero">
        <span className="claim-brand">
          <FileCheck2 size={24} /> CLAIM DECISION ENGINE
        </span>
        <h1>
          Behind every decision.
          <br />
          <em>A reason you can trace.</em>
        </h1>
        <p>
          Health-insurance claim analysis, grounded in the policy.
          <br className="desktop-break" /> Five specialist agents. Cited
          evidence. Reasoning you can inspect.
        </p>
        <div className="product-actions">
          <a
            className="studio-button button-blue"
            href={claimEngine.webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Claim Engine <ArrowUpRight size={17} />
          </a>
          <a href="#workflow" className="text-link">
            See how it works <ArrowRight size={17} />
          </a>
        </div>
        <span className="product-platform-note">
          Interactive demo · Streamlit interface · Hosted on Hugging Face
        </span>
        <div className="claim-overview">
          <div className="claim-document">
            <span className="eyebrow">
              <FileCheck2 size={15} /> THE SOURCE OF TRUTH
            </span>
            <h3>
              The policy.
              <br />
              At the center.
            </h3>
            <div className="document-lines" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="document-footer">
              Coverage / Exclusions / Waiting periods
            </span>
          </div>
          <div className="claim-connector" aria-hidden="true">
            <ArrowRight />
          </div>
          <div className="claim-result">
            <span className="eyebrow">A STRUCTURED RESULT</span>
            <div>
              <Quote size={19} />
              <span>Supporting policy citations</span>
              <CheckMark />
            </div>
            <div>
              <Search size={19} />
              <span>Evidence confidence breakdown</span>
              <CheckMark />
            </div>
            <div>
              <ShieldCheck size={19} />
              <span>Validation & review status</span>
              <CheckMark />
            </div>
            <p>Follow the evidence from the policy to the finding.</p>
          </div>
        </div>
        <span className="overview-caption">
          Workflow illustration · No claim is being processed
        </span>
      </section>
      <section className="studio-container claim-statement">
        <span className="eyebrow">BUILT FOR EXPLAINABILITY</span>
        <h2>
          The conclusion matters.
          <br />
          <em>So does how you got there.</em>
        </h2>
        <p>
          The engine uses the indexed policy as its source of truth. It
          retrieves relevant clauses, examines coverage and exclusions, and
          checks whether the findings are actually supported.
        </p>
      </section>
      <section id="workflow" className="studio-container section-space">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              FIVE SPECIALISTS. ONE CONNECTED WORKFLOW.
            </span>
            <h2>
              From case to <em>clarity.</em>
            </h2>
          </div>
        </div>
        <ClaimWorkflow />
      </section>
      <section className="claim-details-section">
        <div className="studio-container claim-detail-grid">
          <article>
            <Search />
            <h3>Find the right evidence.</h3>
            <p>
              Semantic search and keyword retrieval work together, followed by
              reranking, to surface the policy clauses that matter to the case.
            </p>
          </article>
          <article>
            <Quote />
            <h3>Inspect the reasoning.</h3>
            <p>
              Explore the agent trace, citation inspector, and confidence
              breakdown in the live interface.
            </p>
          </article>
          <article>
            <ShieldCheck />
            <h3>Know when to review.</h3>
            <p>
              The validation stage checks claim-to-evidence support. Missing or
              unresolved evidence can return a needs-review result.
            </p>
          </article>
        </div>
      </section>
      <section className="studio-container claim-launch">
        <span className="eyebrow">EXPLORE THE LIVE DEMO</span>
        <h2>
          See the evidence.
          <br />
          <em>Understand the decision.</em>
        </h2>
        <p>
          Start with a preloaded test case, upload a JSON case, or paste one
          into the interface. Then follow the analysis.
        </p>
        <a
          className="studio-button button-blue"
          href={claimEngine.webUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Claim Engine <ArrowUpRight size={18} />
        </a>
        <a
          className="text-link"
          href={claimEngine.repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore the source <ArrowUpRight size={17} />
        </a>
      </section>
      <section className="studio-container faq-section">
        <div>
          <span className="eyebrow">A CLOSER LOOK</span>
          <h2>
            Good questions.
            <br />
            <em>Clear answers.</em>
          </h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What can I try in the demo?</summary>
            <p>
              Select a preloaded case, upload a JSON case, or paste one
              manually. The app displays the analysis, agent trace, supporting
              citations, and confidence breakdown.
            </p>
          </details>
          <details>
            <summary>Which policy does it analyze against?</summary>
            <p>
              The repository indexes policy UNIHLIP18004V011718. Results depend
              on that policy and the case facts supplied; this is not a tool for
              comparing every insurance policy.
            </p>
          </details>
          <details>
            <summary>What does NEEDS_REVIEW mean?</summary>
            <p>
              The engine cannot support a reliable conclusion from the available
              evidence. It flags the case for review instead of forcing a
              coverage decision.
            </p>
          </details>
          <details>
            <summary>Is this a final insurance determination?</summary>
            <p>
              This is a technical demonstration of policy-grounded analysis. Its
              output does not replace an insurer’s claim determination or
              professional review.
            </p>
          </details>
          <details>
            <summary>Why might the Hugging Face app take time to open?</summary>
            <p>
              A hosted Space may need to wake up or load its models. The Hugging
              Face page shows its current runtime status.
            </p>
          </details>
        </div>
      </section>
      <div className="studio-container product-signoff">
        <span>
          Built by Aniket Chavan · Python / LangGraph / FastAPI / Streamlit
        </span>
        <Link href="/apps" className="text-link">
          Explore all apps <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
function CheckMark() {
  return (
    <span className="result-check" aria-hidden="true">
      ✓
    </span>
  );
}
