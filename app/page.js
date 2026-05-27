export const metadata = {
  title: "Nexvora Tech",
  description:
    "Nexvora Tech provides web development, UI/UX design, cloud services, mobile apps, AI development, and software engineering for modern brands.",
};

import ServiceCarousel from "./components/ServiceCarousel";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-subtitle">Digital Product Engineering</span>
          <h1 className="hero-title">
            Build modern digital experiences with web, mobile, AI, and cloud solutions
          </h1>
          <p className="hero-copy">
            Nexvora Tech helps startups and enterprises launch polished web apps, beautiful UX/UI, scalable cloud platforms, and intelligent AI-powered software.
          </p>
          <div className="hero-buttons">
            <a className="button" href="/contact">
              Get in Touch
            </a>
            <a className="secondary-button" href="/about">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <h3>Web, Cloud, Mobile & AI Development</h3>
          <p>
            Nexvora Tech delivers custom web development, user-centered UI/UX design, cloud infrastructure, mobile apps, and AI development that scales with your business.
          </p>
          <p>
            We help you launch reliable products, improve digital customer experiences, and automate growth with intelligent software.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-copy">
          Nexvora Tech offers web development, UI/UX design, cloud services, mobile app development, AI development, and software engineering for ambitious brands.
        </p>
        <ServiceCarousel />
      </section>
      <section className="section">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-copy">
          Nexvora Tech is a full-stack digital agency focused on modern product engineering and design. We build software solutions that look great, perform fast, and drive measurable results for clients across industries.
        </p>
        <div className="grid grid-3">
          <div className="card">
            <h3>Web Development</h3>
            <p>
              Responsive websites, web applications, and SaaS platforms built with modern frameworks and cloud-native deployment.
            </p>
          </div>
          <div className="card">
            <h3>UI/UX Design</h3>
            <p>
              Design systems, user journeys, interaction design, and polished interfaces that delight people and increase conversions.
            </p>
          </div>
          <div className="card">
            <h3>AI & Cloud Services</h3>
            <p>
              Intelligent automation, cloud architecture, and scalable backend services designed to support growth and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose Nexvora Tech?</h2>
        <div className="section-grid section-grid-3">
          <div className="feature-card">
            <h3>End-to-End Product Delivery</h3>
            <p>
              From discovery and design through development, testing, and launch, we deliver complete digital product experiences.
            </p>
          </div>
          <div className="feature-card">
            <h3>Modern Technology Stack</h3>
            <p>
              We use best-in-class tools for web, mobile, cloud, and AI development so your project is built for performance and scale.
            </p>
          </div>
          <div className="feature-card">
            <h3>Client-Centric Collaboration</h3>
            <p>
              We work closely with your team, communicate clearly, and keep projects moving with a focus on quality and speed.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Approach</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>1. Discover the Problem</h3>
            <p>We start by understanding your goals, audience, and business challenges.</p>
          </div>
          <div className="card">
            <h3>2. Design the Experience</h3>
            <p>We create intuitive UX, polished interfaces, and product flows that delight users.</p>
          </div>
          <div className="card">
            <h3>3. Build & Scale</h3>
            <p>We develop reliable software, deploy it to the cloud, and optimize for growth and performance.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-banner">
          <div>
            <h2>Ready to launch your next digital product?</h2>
            <p>
              Partner with Nexvora Tech for professional web, mobile, cloud, and AI development with an emphasis on user experience.
            </p>
          </div>
          <a className="button" href="/contact">
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
