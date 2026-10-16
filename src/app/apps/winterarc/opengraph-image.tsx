import { socialImage } from "@/components/apps/social-image";
export const alt = "Winter Arc — Plan the day. Keep the promise.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage({
    label: "WINTER ARC / WEB + ANDROID",
    headline: "Plan the day. Keep the promise.",
    accent: "#3fb950",
    background: "#0d1117",
    color: "#f0f6fc",
  });
}
