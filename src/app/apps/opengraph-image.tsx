import { socialImage } from "@/components/apps/social-image";
export const alt =
  "Apps by Aniket Chavan — Winter Arc, RentalGO, Insurance Claim Engine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage({
    label: "ANIKET CHAVAN / APPS",
    headline: "Winter Arc. RentalGO. Insurance Claim Engine.",
    accent: "#94a3b8",
    background: "#020817",
    color: "#f8fafc",
  });
}
