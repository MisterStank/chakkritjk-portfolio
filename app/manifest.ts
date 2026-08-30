import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chakkrit Jongkraijak — Portfolio",
    short_name: "Chakkrit Jk",
    description:
      "Portfolio of Chakkrit Jongkraijak, full-stack web developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
