import { socialImage } from "@/components/apps/social-image";
export const alt = "NoSpoti — Find your song. Share the moment.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return socialImage({ label: "NOSPOTI / WEB + ANDROID", headline: "Find your song. Share the moment.", accent: "#ddfe52", background: "#10110f", color: "#eeeee5" });
}
