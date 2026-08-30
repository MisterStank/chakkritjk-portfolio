"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import { contact } from "@/lib/data";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Please enter a valid email address." };
  }
  if (!validateString(message, 5000)) {
    return { error: "Please enter a message (under 5000 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: "Email is not configured. Please email me directly." };
  }

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;background:#f4f4f5;padding:24px;color:#18181b">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:32px">
        <h1 style="font-size:18px;margin:0 0 16px">New message from your portfolio</h1>
        <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
        <hr style="border:none;border-top:1px solid #e4e4e7;margin:24px 0" />
        <p style="font-size:13px;color:#52525b;margin:0">Reply to: ${escapeHtml(senderEmail)}</p>
      </div>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: contact.email,
        reply_to: senderEmail,
        subject: "New message from your portfolio",
        text: `${message}\n\nFrom: ${senderEmail}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return { error: `Could not send message (${res.status}). ${detail}` };
    }

    return { data: await res.json() };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
