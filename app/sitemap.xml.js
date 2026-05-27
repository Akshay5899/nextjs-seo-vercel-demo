export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://nexvoratech.com",
      lastModified: now,
    },
    {
      url: "https://nexvoratech.com/about",
      lastModified: now,
    },
    {
      url: "https://nexvoratech.com/services",
      lastModified: now,
    },
    {
      url: "https://nexvoratech.com/contact",
      lastModified: now,
    },
  ];
}
