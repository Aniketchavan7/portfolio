import type { Metadata } from "next";

export function appMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const image = `${path}/opengraph-image`;
  return {
    metadataBase: new URL("https://aniketchavan.in"),
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `https://aniketchavan.in${path}`,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
