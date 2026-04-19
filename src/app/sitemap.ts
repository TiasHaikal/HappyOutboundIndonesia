import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://outboundlampung.com",
      priority: 1,
    },
    {
      url: "https://outboundlampung.com/#services",
      priority: 0.8,
    },
    {
      url: "https://outboundlampung.com/#contact",
      priority: 0.8,
    },
  ];
}
