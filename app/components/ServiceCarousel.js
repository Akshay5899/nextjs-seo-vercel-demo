"use client";

import { useState, useEffect } from "react";

const services = [
  {
    title: "Web Development",
    copy:
      "Responsive websites, web apps, and SaaS platforms built with modern frameworks and scalable infrastructure.",
  },
  {
    title: "UI/UX Design",
    copy:
      "User research, interaction design, and polished interfaces that drive engagement and conversions.",
  },
  {
    title: "Cloud Services",
    copy: "Cloud architecture, automation, and managed infrastructure designed for reliability and growth.",
  },
  {
    title: "Mobile App Development",
    copy:
      "Native and cross-platform mobile apps built for performance, usability, and customer retention.",
  },
  {
    title: "AI Development",
    copy: "Intelligent automation, machine learning, and data-driven features that make software smarter.",
  },
  {
    title: "Software Development",
    copy:
      "Custom backend systems, APIs, integrations, and product engineering that aligns with your business goals.",
  },
];

export default function ServiceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const slideCount = Math.max(1, services.length - visibleCount + 1);

  useEffect(() => {
    if (currentSlide > slideCount - 1) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slideCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= slideCount - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const prev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const next = () => {
    setCurrentSlide((prev) => (prev >= slideCount - 1 ? 0 : prev + 1));
  };

  const translate = -(100 / visibleCount) * currentSlide;

  return (
    <div className="w-full">
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(${translate}%)` }}>
          {services.map((item) => (
            <div key={item.title} className="carousel-item">
              <div className="card">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-3">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous service"
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/15"
          >
            ‹
          </button>
          <button
            aria-label="Next service"
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/15"
          >
            ›
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-accent" : "bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
