export const metadata = {
  title: "About Nexvora Tech",
  description:
    "About Nexvora Tech: web development, UI/UX design, cloud services, mobile app development, AI development, and software engineering.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="section">
        <h1 className="section-title">About Nexvora Tech</h1>
        <p className="section-copy">
          Nexvora Tech is a full-service digital product studio that builds web, mobile, cloud, and AI solutions for modern businesses and startups.
        </p>
        <div className="grid grid-2">
          <div className="feature-card">
            <h3>Product Engineering</h3>
            <p>
              We create scalable software products, web applications, and cloud services that deliver real business value.
            </p>
          </div>
          <div className="feature-card">
            <h3>UX-Driven Design</h3>
            <p>
              We design intuitive interfaces, user journeys, and digital experiences that keep customers engaged and converting.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What We Do</h2>
        <div className="section-grid section-grid-2">
          <div>
            <h3>Web Development</h3>
            <p>
              Custom websites, e-commerce platforms, and SaaS applications built with modern frontend and backend technologies.
            </p>
          </div>
          <div>
            <h3>UI/UX Design</h3>
            <p>
              User research, visual design, interaction design, and brand-aligned interfaces for digital products.
            </p>
          </div>
          <div>
            <h3>Mobile App Development</h3>
            <p>
              Cross-platform and native mobile apps designed for performance, usability, and long-term product growth.
            </p>
          </div>
          <div>
            <h3>AI & Cloud Services</h3>
            <p>
              Intelligent automation, data-driven features, and cloud architecture support for reliable software delivery.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
