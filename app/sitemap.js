import { SITE } from "@/lib/site";
import { serviceSlugs, conditionSlugs } from "@/lib/content";

export default function sitemap() {
  const base = SITE.url;
  const staticRoutes = ["", "/contact", "/blog"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const services = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const conditions = conditionSlugs.map((slug) => ({
    url: `${base}/conditions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...services, ...conditions];
}
