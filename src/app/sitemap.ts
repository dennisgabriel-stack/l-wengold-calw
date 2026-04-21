import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://löwengold-calw.de";
  const routes = [
    "/",
    "/leistungen",
    "/ueber-uns",
    "/aktionstage",
    "/kontakt",
    "/wegbeschreibung",
    "/impressum",
    "/datenschutz",
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "/" ? "weekly" : "monthly",
    priority: r === "/" ? 1 : 0.6,
  }));
}
