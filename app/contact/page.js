export const metadata = {
  title: "Contact Nexvora Tech",
  description:
    "Contact Nexvora Tech for web development, UI/UX design, cloud services, mobile app development, AI solutions, and software engineering.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <h1 className="section-title">Contact Nexvora Tech</h1>
        <p className="section-copy">
          Reach out to build your next digital product. Nexvora Tech offers web development, UI/UX design, cloud services, mobile apps, AI development, and software engineering.
        </p>

        <div className="grid grid-2">
          <div className="contact-card">
            <h3>Office</h3>
            <p>Pune, Maharashtra</p>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <p>
              <a href="tel:+917709504893">+91 7709 504 893</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Email</h3>
            <p>
              <a href="mailto:sales@nexvoratech.com">sales@nexvoratech.com</a>
            </p>
          </div>
          <div className="contact-card">
            <h3>Quick Links</h3>
            <p>
              <a href="/">Home</a>
              <br />
              <a href="/about">About</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
