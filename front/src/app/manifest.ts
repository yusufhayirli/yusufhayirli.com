import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yusuf Hayırlı - Full-Stack Software Engineer",
    short_name: "Yusuf Hayırlı",
    description:
      "Full-stack software engineer building commerce products, web platforms and durable delivery systems.",
    start_url: "/",
    display: "browser",
    background_color: "#f3eadb",
    theme_color: "#0a857f",
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
