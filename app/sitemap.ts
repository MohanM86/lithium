import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { allRoutes } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return allRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.7,
  }));
}
