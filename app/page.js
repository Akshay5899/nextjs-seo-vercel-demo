import Image from "next/image";

export default function HomePage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Nexvora Tech</h1>

      <Image
        src="/og-image.jpg"
        alt="Nexvora Tech"
        width={1200}
        height={600}
        priority
      />

      <h2>SEO Optimized Next.js Project</h2>

      <p>
        This demo project includes SEO setup, sitemap,
        robots.txt, metadata API, and Vercel deployment support.
      </p>
    </main>
  );
}
