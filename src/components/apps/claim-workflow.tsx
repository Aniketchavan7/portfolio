"use client";
import { useState } from "react";
import {
  FileSearch,
  Search,
  Scale,
  FileCheck2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const stages = [
  {
    name: "Case analysis",
    icon: FileSearch,
    headline: "First, understand the case.",
    text: "Extract the claim facts and identify what needs investigating. The case analysis agent frames questions without drawing policy conclusions.",
    tags: ["Claim facts", "Investigation questions"],
  },
  {
    name: "Policy evidence",
    icon: Search,
    headline: "Find the relevant fine print.",
    text: "Search the indexed policy with semantic and keyword retrieval. Rerank the results across coverage, waiting periods, exclusions, and hospital definitions.",
    tags: ["Hybrid retrieval", "Policy clauses"],
  },
  {
    name: "Coverage review",
    icon: Scale,
    headline: "Bring facts and evidence together.",
    text: "Compare claim facts with retrieved policy clauses. Identify applicable coverage, exclusions, waiting periods, and category limits.",
    tags: ["Coverage & exclusions", "Applicable limits"],
  },
  {
    name: "Decision",
    icon: FileCheck2,
    headline: "Make the reasoning inspectable.",
    text: "Combine the findings into a structured result with supporting citations and an evidence-based confidence breakdown.",
    tags: ["Structured output", "Citations & confidence"],
  },
  {
    name: "Validation",
    icon: ShieldCheck,
    headline: "Check the evidence. Then check again.",
    text: "Verify that key findings are supported by cited policy text. Unsupported findings trigger a retry; unresolved evidence gaps lead to NEEDS_REVIEW.",
    tags: ["Evidence checks", "Review when uncertain"],
  },
];

export function ClaimWorkflow() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <div className="claim-workflow">
      <div
        className="workflow-tabs"
        role="tablist"
        aria-label="Claim analysis stages"
      >
        {stages.map((item, index) => (
          <button
            type="button"
            key={item.name}
            id={`stage-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls="stage-panel"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(e) => {
              let next = index;
              if (e.key === "ArrowRight") next = (index + 1) % stages.length;
              else if (e.key === "ArrowLeft")
                next = (index - 1 + stages.length) % stages.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = stages.length - 1;
              else return;
              e.preventDefault();
              setActive(next);
              document.getElementById(`stage-${next}`)?.focus();
            }}
          >
            <span>0{index + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
      <div
        className="workflow-panel"
        id="stage-panel"
        role="tabpanel"
        aria-labelledby={`stage-${active}`}
        tabIndex={0}
      >
        <div className="workflow-visual" aria-hidden="true">
          <div>
            <stage.icon size={54} strokeWidth={1.2} />
          </div>
          <span>AGENT 0{active + 1}</span>
          <ArrowRight size={25} />
        </div>
        <div>
          <span className="eyebrow">
            HOW IT WORKS / {String(active + 1).padStart(2, "0")}
          </span>
          <h3>{stage.headline}</h3>
          <p>{stage.text}</p>
          <div className="workflow-tags">
            {stage.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="workflow-caption">
        Interactive workflow guide · Open the live app to analyze a case
      </div>
    </div>
  );
}
