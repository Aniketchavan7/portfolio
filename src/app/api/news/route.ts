import { NextResponse } from "next/server";
import digest from "@/content/news/latest.json";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ success: true, source: "verified-digest", ...digest });
}
