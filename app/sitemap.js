export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://nextjs-seo-vercel-demo.vercel.app/",
      lastModified: now,
    },
    {
      url: "https://nextjs-seo-vercel-demo.vercel.app/about",
      lastModified: now,
    },
    {
      url: "https://nextjs-seo-vercel-demo.vercel.app/services",
      lastModified: now,
    },
    {
      url: "https://nextjs-seo-vercel-demo.vercel.app/contact",
      lastModified: now,
    },
  ];
}
