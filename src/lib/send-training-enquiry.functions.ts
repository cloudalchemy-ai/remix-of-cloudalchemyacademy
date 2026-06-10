import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(255),
  area: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type TrainingEnquiryInput = z.input<typeof enquirySchema>;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const sendTrainingEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("Email service is not configured.");
    }

    const subject = `Training enquiry — ${data.company || data.name}`;
    const lines = [
      `Name: ${data.name}`,
      `Company: ${data.company || "—"}`,
      `Email: ${data.email}`,
      `Area of interest: ${data.area || "—"}`,
      "",
      "Message:",
      data.message || "(no message provided)",
    ];
    const text = lines.join("\n");
    const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a;line-height:1.6;">
        <h2 style="margin:0 0 16px;">New training enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "—")}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Area of interest:</strong> ${escapeHtml(data.area || "—")}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;background:#f1f5f9;padding:12px;border-radius:8px;font-family:inherit;">${escapeHtml(
          data.message || "(no message provided)",
        )}</pre>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Cloud Alchemy <noreply@contact.cloudalchemy.uk>",
        to: ["contact@cloudalchemy.uk"],
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("Resend send failed", res.status, body);
      throw new Error("Failed to send enquiry. Please try again or email contact@cloudalchemy.uk.");
    }

    return { ok: true as const };
  });
