import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { careArticles } from "@/content/care-articles";
import { site } from "@/lib/site";

const staticPaths = [
  "",
  "/about",
  "/about/dr-barbaro",
  "/about/staff",
  "/about/massage",
  "/services",
  "/new-patient",
  "/new-patient/what-to-expect",
  "/new-patient/first-visit",
  "/new-patient/forms",
  "/new-patient/payment",
  "/new-patient/tour",
  "/care",
  "/testimonials",
  "/gallery",
  "/blog",
  "/contact",
  "/special-offer",
  "/spine-simulator",
  "/appointment",
  "/community",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
  for (const p of blogPosts) {
    entries.push({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const a of careArticles) {
    entries.push({
      url: `${base}/care/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }
  return entries;
}
