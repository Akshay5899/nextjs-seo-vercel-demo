export const metadata = {
  title: {
    default: "Nexvora Tech",
    template: "%s | Nexvora Tech",
  },
  description: "Modern Web Development Company",
  keywords: ["Next.js", "SEO", "React"],
  metadataBase: new URL("https://example.com"),

  openGraph: {
    title: "Nexvora Tech",
    description: "Modern Web Solutions",
    url: "https://example.com",
    siteName: "Nexvora Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
