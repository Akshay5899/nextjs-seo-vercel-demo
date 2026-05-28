export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nextjs-seo-vercel-demo.vercel.app/sitemap.xml",
  };
}
