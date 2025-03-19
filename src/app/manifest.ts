import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Critics' Critic",
    short_name: "Critics' Critic",
    description: "Analyze movie critics' reviews, track their biases, and understand trends in film criticism.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#B63923",
    icons: [
      {
        src: "/icon?size=192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
