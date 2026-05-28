"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setError(data.error || "Could not send enquiry.");
        return;
      }

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Could not send enquiry. Please try again.");
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="contact-input"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="contact-input"
            placeholder="you@example.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="contact-textarea"
            placeholder="Tell us about your project"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>

      {status === "success" && <p className="contact-success">Your enquiry was sent successfully.</p>}
      {status === "error" && <p className="contact-error">{error}</p>}
    </>
  );
}
