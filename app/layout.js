import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: {
    default: "Nexvora Tech",
    template: "%s | Nexvora Tech",
  },
  description:
    "Nexvora Tech delivers web development, UI/UX design, cloud services, mobile app development, AI development, and software engineering for modern businesses.",
  metadataBase: new URL("https://nexvoratech.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Header />
          {children}
          <footer className="footer">
            <div>
              <strong>Nexvora Tech</strong>
              <small>Web Development • UI/UX Design • Mobile Apps • AI • Cloud Services</small>
            </div>
            <div>
              <small>Pune, Maharashtra</small>
              <small>
                <a href="tel:+917709504893">+91 7709 504 893</a> •{' '}
                <a href="mailto:sales@nexvoratech.com">sales@nexvoratech.com</a>
              </small>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
