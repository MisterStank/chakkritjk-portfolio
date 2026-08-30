import React from "react";

type ContactEmailProps = {
  message: string;
  senderEmail: string;
};

/**
 * Plain React element rendered by Resend server-side.
 * Kept dependency-free on purpose so the contact action has no heavy imports.
 */
export default function ContactEmail({
  message,
  senderEmail,
}: ContactEmailProps) {
  return (
    <div
      style={{
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
        background: "#f4f4f5",
        padding: "24px",
        color: "#18181b",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "12px",
          padding: "32px",
        }}
      >
        <h1 style={{ fontSize: "18px", margin: "0 0 16px" }}>
          New message from your portfolio
        </h1>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6, margin: 0 }}>
          {message}
        </p>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e4e4e7",
            margin: "24px 0",
          }}
        />
        <p style={{ fontSize: "13px", color: "#52525b", margin: 0 }}>
          Reply to: {senderEmail}
        </p>
      </div>
    </div>
  );
}
