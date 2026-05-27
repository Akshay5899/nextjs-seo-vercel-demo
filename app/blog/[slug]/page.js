async function getPost(slug) {
  return {
    title: `Blog ${slug}`,
    description: `SEO description for ${slug}`,
  };
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPage({ params }) {
  return (
    <main style={{ padding: "40px" }}>
      <h1>{params.slug}</h1>
    </main>
  );
}
