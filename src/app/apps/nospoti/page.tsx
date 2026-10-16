import { Plus_Jakarta_Sans } from "next/font/google";
import { appMetadata } from "@/lib/app-metadata";
import { LandingExperience } from "./LandingExperience";
import "./landing.utilities.css";
import "./nospoti.css";
import markup from "./landing.generated.json";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
export const metadata = appMetadata(
  "NoSpoti — Ad-free music, together | Aniket Chavan",
  "Discover NoSpoti for Android and the web. Search music, save playlists, view available lyrics, and listen together in a Jam. Explore the app and its experimental MCP work.",
  "/apps/nospoti",
);

// Build-time, trusted project markup. No user content or third-party scripts.

export default function NoSpotiPage() {
  return (
    <main id="main-content" className={`nospoti-landing ${font.className}`}>
      <div id="top" />
      <LandingExperience markup={markup} />
    </main>
  );
}
