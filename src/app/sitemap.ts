import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { VILLES } from "@/lib/villes";

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
  const pages = [...ROUTES, "/blog"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
  const villes = ["/rachat-de-credit", ...VILLES.map((v) => `/rachat-de-credit/${v.slug}`)].map(
    (route) => ({ url: `${base}${route}`, lastModified: new Date() }),
  );
  const articles = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...pages, ...villes, ...articles];
}
