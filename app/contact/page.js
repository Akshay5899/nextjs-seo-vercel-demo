export const metadata = {
  title: "Contact Nexvora Tech",
  description:
    "Contact Nexvora Tech for web development, UI/UX design, cloud services, mobile app development, AI solutions, and software engineering.",
};

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <h1 className="section-title">Contact Nexvora Tech</h1>
        <p className="section-copy">
          Reach out to build your next digital product. Nexvora Tech offers web development, UI/UX design, cloud services, mobile apps, AI development, and software engineering.
        </p>
      </section>

      <section className="section contact-section">
        <div className="contact-grid">
          <div className="contact-panel">
            <h2>Send us a message</h2>
            <p className="section-copy">
              Tell us about your project and we’ll get back to you with a proposal and timeline.
            </p>

            <ContactForm />
          </div>

          <div className="contact-panel">
            <h2>Our location</h2>
            <div className="map-frame-wrapper">
              <iframe
                className="map-frame"
                title="Nexvora Tech office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.006853757539!2d73.82782687574805!3d18.55932868737985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0d8de9097f9%3A0x1b71bdc0f23f0bfe!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div className="grid grid-2 contact-details-grid">
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
                  <a href="mailto:akshaykhot5899@gmail.com">akshaykhot5899@gmail.com</a>
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
          </div>
        </div>
      </section>
    </main>
  );
}
