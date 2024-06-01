import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Template Full Name",
    short_name: "Template",
    description: "Template description",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icons/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/logo-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    scope: "/",
    lang: "en-US",
    categories: ["utilities", "productivity"],
    screenshots: [
      {
        src: "/screenshots/screenshot1.png",
        sizes: "640x480",
        type: "image/png",
      },
      {
        src: "/screenshots/screenshot2.png",
        sizes: "640x480",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Open Home",
        short_name: "Home",
        description: "Shortcut to open the home page",
        url: "/",
        icons: [{ src: "/icons/home.png", sizes: "192x192", type: "image/png" }],
      },
      {
        name: "Open Settings",
        short_name: "Settings",
        description: "Shortcut to open the settings page",
        url: "/settings",
        icons: [{ src: "/icons/settings.png", sizes: "192x192", type: "image/png" }],
      },
    ],
  };
}
