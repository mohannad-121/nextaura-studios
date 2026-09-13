import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nextaurastudios.com";

  const staticRoutes = ["", "/about", "/contact", "/start-project"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/start-project" ? 0.9 : 0.8,
  }));

  return staticRoutes;
}
