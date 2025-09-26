// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.negofit.org";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Exemple : bloquer une page admin si tu veux
      // {
      //   userAgent: "*",
      //   disallow: "/admin",
      // },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
