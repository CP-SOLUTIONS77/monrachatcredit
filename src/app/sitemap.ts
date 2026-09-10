import type { MetadataRoute } from "next";

const ROUTES = [
  "",
  "/comment-ca-marche",
  "/rachat-immobilier",
  "/rachat-conso",
  "/simulateur",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://monrachatcredit.fr";
  return ROUTES.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
