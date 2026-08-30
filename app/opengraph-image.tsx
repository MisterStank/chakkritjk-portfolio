import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chakkrit Jongkraijak — Full-stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0b",
          color: "#ededef",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#34d399",
          }}
        >
          Computer Engineering · Thailand
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, marginTop: 24 }}>
          Chakkrit Jongkraijak
        </div>
        <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 12 }}>
          Full-stack Web Developer
        </div>
        <div style={{ fontSize: 26, color: "#71717a", marginTop: 40 }}>
          React · Next.js · TypeScript
        </div>
      </div>
    ),
    { ...size }
  );
}
