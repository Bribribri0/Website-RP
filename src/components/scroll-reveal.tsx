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
    let armed = false;

    const armReveal = () => {
      if (armed) {
        return;
      }
      armed = true;
      document.body.classList.add("reveal-ready");

      targets.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
          element.classList.add("is-visible");
        }
        observer.observe(element);
      });
    };

    const armOnNextFrame = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          armReveal();
        });
      });
    };

    window.addEventListener("scroll", armOnNextFrame, { once: true, passive: true });
    window.addEventListener("touchstart", armOnNextFrame, { once: true, passive: true });
    window.addEventListener("keydown", armOnNextFrame, { once: true });

    return () => {
      window.removeEventListener("scroll", armOnNextFrame);
      window.removeEventListener("touchstart", armOnNextFrame);
      window.removeEventListener("keydown", armOnNextFrame);
      observer.disconnect();
    };
  }, []);

  return null;
}
