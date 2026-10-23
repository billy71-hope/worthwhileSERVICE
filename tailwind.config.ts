import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Worthwhile SERVICES Palette
        black: "#0A0A0A",
        "black-light": "#1A1A1A",
        yellow: "#FFB400",
        "yellow-dark": "#E6A300",
        "yellow-light": "#FFC733",
        white: "#FFFFFF",
        "gray-900": "#0A0A0A",
        "gray-800": "#1A1A1A",
        "gray-700": "#2A2A2A",
        "gray-600": "#3A3A3A",
        "gray-500": "#6B6B6B",
        "gray-400": "#999999",
        "gray-300": "#CCCCCC",
        "gray-200": "#E5E5E5",
        "gray-100": "#F5F5F5",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 0.825rem + 0.25vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.925rem + 0.375vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1.025rem + 0.5vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 1.25rem + 1.25vw, 2rem)",
        "fluid-3xl": "clamp(1.875rem, 1.5rem + 1.875vw, 2.75rem)",
        "fluid-4xl": "clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)",
        "fluid-5xl": "clamp(3rem, 2.25rem + 3.75vw, 5rem)",
        "fluid-6xl": "clamp(3.75rem, 2.75rem + 5vw, 6.5rem)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-yellow": "0 0 40px rgba(255, 180, 0, 0.3), 0 0 80px rgba(255, 180, 0, 0.15)",
        "glow-yellow-lg": "0 0 60px rgba(255, 180, 0, 0.4), 0 0 120px rgba(255, 180, 0, 0.2)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-lg": "0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        "premium": "0 4px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 180, 0, 0.1)",
        "premium-hover": "0 12px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 180, 0, 0.3), 0 0 60px rgba(255, 180, 0, 0.15)",
      },
      backdropBlur: {
        "glass": "20px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(ellipse at center, rgba(255, 180, 0, 0.08) 0%, transparent 70%)",
        "grid-pattern": "linear-gradient(rgba(255,180,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,180,0,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      transitionDuration: {
        "base": "300ms",
        "slow": "500ms",
      },
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;