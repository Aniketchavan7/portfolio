export const noSpoti = {
  webUrl: "https://no-spoti.vercel.app/app/",
  downloadUrl: "https://no-spoti.vercel.app/No-Spoti.apk",
  repository: "https://github.com/Aniketchavan7/No-Spoti",
};

export const winterArc = {
  name: "Winter Arc",
  webUrl: "https://winter-arc-iota-tawny.vercel.app",
  downloadUrl:
    "https://winter-arc-iota-tawny.vercel.app/downloads/Winter-Arc-v1.0.2.apk",
  version: "1.0.2",
  sha256: "43F409C9D1B7646E1215519F5490D81DDF728EA9DCFE41CAE48B6B9F4AB5860C",
};

export const claimEngine = {
  name: "Insurance Claim Engine",
  webUrl: "https://aniketnew7-claim-decision-engine.hf.space/",
  repository: "https://github.com/Aniketchavan7/claim-decision-engine",
};

export const apps = [
  {
    slug: "nospoti",
    name: "NoSpoti",
    category: "Music & shared listening",
    description:
      "Find your next favourite, build your library, and listen together in a Jam. An ad-free, open-source music app for Android and the web.",
    platform: "Web & Android · Open source",
    href: "/apps/nospoti",
    action: "Explore NoSpoti",
    external: false,
  },
  {
    slug: "winterarc",
    name: winterArc.name,
    category: "Personal growth",
    description:
      "Turn a long-term goal into a daily practice. Plan your day, keep your commitments, and follow your progress.",
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
