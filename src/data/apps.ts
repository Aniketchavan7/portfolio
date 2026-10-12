export const winterArc = {
  name: "Winter Arc",
  webUrl: "https://winter-arc-iota-tawny.vercel.app",
  downloadUrl:
    "https://winter-arc-iota-tawny.vercel.app/downloads/Winter-Arc-v2.0.0.apk",
  version: "2.0.0",
  sha256: "28450B3AC6283568F80194C4247C06302D590364B694E25E7FCDD6739B9492B4",
};

export const claimEngine = {
  name: "Insurance Claim Engine",
  webUrl: "https://aniketnew7-claim-decision-engine.hf.space/",
  repository: "https://github.com/Aniketchavan7/claim-decision-engine",
};

export const apps = [
  {
    slug: "winterarc",
    name: winterArc.name,
    category: "Daily accountability",
    description:
      "Build a timed daily roadmap, finish Must Do work on time, and keep a contribution record for every routine and goal.",
    platform: `Web & Android · v${winterArc.version}`,
    href: "/apps/winterarc",
    action: "Meet Winter Arc",
    external: false,
  },
  {
    slug: "rentalgo",
    name: "RentalGO",
    category: "Rental marketplace",
    description:
      "Explore flats, PGs, hotels, and homestays. Find your next place through the RentalGO marketplace.",
    platform: "Web · Team project",
    href: "https://www.rentalgo.in/",
    action: "Visit RentalGO",
    external: true,
  },
  {
    slug: "claim-decision-engine",
    name: claimEngine.name,
    category: "Applied AI",
    description:
      "Understand health-insurance claims with policy-backed evidence, cited reasoning, and a five-agent workflow.",
    platform: "Web · Hugging Face",
    href: "/apps/claim-decision-engine",
    action: "Explore Claim Engine",
    external: false,
  },
];
