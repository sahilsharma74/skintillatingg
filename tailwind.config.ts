import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F5F5DC",        // Warm Cream
          secondary: "#657A6A",      // Sage Green
          lightSage: "#AEB9A9",      // Light Sage
          deepForest: "#1C3329",     // Deep Forest Green
          deepGreenText: "#17251E",  // Deep Green Text
          surface: "#F5F5DC",        // Warm Cream Surface
          surfaceHover: "#F1E5CC",   // Soft Cream Hover
          canvas: "#1C3329",         // Deep Forest Background
          section: "#657A6A",        // Sage Section Background
        },
        sage: {
          DEFAULT: "#657A6A",
          light: "#AEB9A9",
          deep: "#1C3329",
          border: "rgba(101, 122, 106, 0.3)",
          borderStrong: "rgba(101, 122, 106, 0.6)",
        },
        "deep-forest": "#1C3329",
        "sage-green": "#657A6A",
        "light-sage": "#AEB9A9",
        "warm-cream": "#F5F5DC",
        "deep-green": "#17251E",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        unit: "8px",
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        "section-gap": "160px",
        "container-max": "1440px",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
