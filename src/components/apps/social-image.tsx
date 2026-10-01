import { ImageResponse } from "next/og";

export function socialImage({
  label,
  headline,
  accent,
  background,
  color,
}: {
  label: string;
  headline: string;
  accent: string;
  background: string;
  color: string;
}) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "70px 80px",
        background,
        color,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>{label}</span>
        <span style={{ color: accent }}>BY ANIKET CHAVAN</span>
      </div>
      <div
        style={{
          fontSize: 86,
          lineHeight: 1.05,
          letterSpacing: -4,
          maxWidth: 1000,
        }}
      >
        {headline}
      </div>
      <div
        style={{
          display: "flex",
          borderTop: `1px solid ${accent}`,
          paddingTop: 25,
          fontSize: 20,
          color: accent,
        }}
      >
        Thoughtful apps. Practical software.
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
