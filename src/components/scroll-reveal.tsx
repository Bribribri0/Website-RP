"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const armReveal = () => {
      document.body.classList.add("reveal-ready");

      targets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("is-visible");
        }
        observer.observe(element);
      });
    };

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        armReveal();
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
