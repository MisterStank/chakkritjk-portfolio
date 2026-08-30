"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { contact } from "@/lib/data";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Please enter a valid email address." };
  }
  if (!validateString(message, 5000)) {
    return { error: "Please enter a message (under 5000 characters)." };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: contact.email,
      subject: "New message from your portfolio",
      reply_to: senderEmail,
      text: `${message}\n\nFrom: ${senderEmail}`,
      react: React.createElement(ContactEmail, { message, senderEmail }),
    });
    return { data };
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
}
