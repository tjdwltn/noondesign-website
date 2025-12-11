import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        background: "#FFFFFF",
        accent: {
          light: "#F4F4F4",
          DEFAULT: "#E5E5E5",
        },
        highlight: "#FF564A",
      },
      maxWidth: {
        container: "1400px",
      },
      spacing: {
        sectionDesktop: "100px",
        sectionTablet: "60px",
        sectionMobile: "40px",
      },
      letterSpacing: {
        tightMinus: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;




