import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 0 1px rgba(0, 255, 229, 0.12), 0 0 30px rgba(0, 255, 229, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(0, 255, 229, 0.16) 0, rgba(0, 255, 229, 0) 1px), linear-gradient(rgba(0, 255, 229, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 229, 0.05) 1px, transparent 1px)",
        aurora: "linear-gradient(135deg, rgba(0, 255, 229, 0.25), rgba(61, 214, 255, 0.08), rgba(10, 6, 34, 0.12))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.86" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
