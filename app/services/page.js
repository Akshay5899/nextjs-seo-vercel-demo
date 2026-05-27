export const metadata = {
  title: "Services | Nexvora Tech",
  description:
    "Nexvora Tech services include web development, UI/UX design, cloud services, mobile app development, AI development, and software engineering.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <h1 className="section-title">Services</h1>
        <p className="section-copy">
          Nexvora Tech delivers full-service digital engineering across web, mobile, design, cloud, AI, and software.
          Our solutions are built to scale, perform, and help teams move faster.
        </p>

        <div className="grid grid-2">
          <div className="card">
            <h3>Web Development</h3>
            <p>
              End-to-end website and web application development using modern frameworks, responsive design, and cloud deployment.
            </p>
          </div>
          <div className="card">
            <h3>UI/UX Design</h3>
            <p>
              User research, wireframes, prototypes, and polished interfaces that turn visitors into customers.
            </p>
          </div>
          <div className="card">
            <h3>Cloud Services</h3>
            <p>
              Cloud architecture, infrastructure automation, and managed services for secure, scalable digital platforms.
            </p>
          </div>
          <div className="card">
            <h3>Mobile App Development</h3>
            <p>
              Cross-platform and native mobile apps built for performance, usability, and seamless user engagement.
            </p>
          </div>
          <div className="card">
            <h3>AI Development</h3>
            <p>
              AI strategy, data-driven automation, machine learning models, and intelligent software experiences.
            </p>
          </div>
          <div className="card">
            <h3>Software Development</h3>
            <p>
              Custom software engineering, API design, system integration, and product delivery that aligns with your business goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
