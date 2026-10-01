import { socialImage } from "@/components/apps/social-image";
export const alt = "Winter Arc — Keep a promise. Change your everyday.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage({
    label: "WINTER ARC / WEB + ANDROID",
    headline: "Keep a promise. Change your everyday.",
    accent: "#d98771",
    background: "#171816",
    color: "#eeeee5",
  });
}
