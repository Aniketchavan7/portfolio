import { socialImage } from "@/components/apps/social-image";
export const alt = "Claim Decision Engine — A reason you can trace.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage({
    label: "CLAIM DECISION ENGINE",
    headline: "Behind every decision. A reason you can trace.",
    accent: "#285ba3",
    background: "#f5f7fa",
    color: "#17283d",
  });
}
