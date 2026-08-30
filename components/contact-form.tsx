"use client";

import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function ContactForm() {
  return (
    <form
      className="mt-8 flex w-full flex-col gap-4"
      action={async (formData) => {
        const { error } = await sendEmail(formData);
        if (error) {
          toast.error(error);
          return;
        }
        toast.success("Message sent — thanks, I'll get back to you soon.");
        (document.getElementById("contact-form") as HTMLFormElement)?.reset();
      }}
      id="contact-form"
    >
      <input
        type="email"
        name="senderEmail"
        required
        maxLength={500}
        placeholder="your@email.com"
        className="h-12 rounded-lg border border-border bg-surface px-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent"
      />
      <textarea
        name="message"
        required
        maxLength={5000}
        placeholder="Your message..."
        rows={6}
        className="resize-none rounded-lg border border-border bg-surface p-4 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent"
      />
      <SubmitBtn />
    </form>
  );
}
