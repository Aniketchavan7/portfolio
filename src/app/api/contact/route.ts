import { NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from "@/data/config";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [config.email],
      subject: `New Portfolio Inquiry from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #4f46e5; margin-top: 0;">New Message from Portfolio Website</h2>
          <p style="font-size: 15px; margin: 8px 0;"><strong>Sender Name:</strong> ${fullName}</p>
          <p style="font-size: 15px; margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #4f46e5;">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="font-size: 15px; font-weight: bold; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #4f46e5; border-radius: 4px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ message: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Failed to send email" }, { status: 500 });
  }
}
