import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chakkrit Jongkraijak — Portfolio",
    short_name: "Chakkrit Jk",
    description:
      "Portfolio of Chakkrit Jongkraijak, full-stack web developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f6f4",
    theme_color: "#f6f6f4",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
