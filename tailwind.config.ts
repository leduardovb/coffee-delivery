import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/images/banner-background.svg')",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        "text-l": ["1.25rem", "130%"],
        "text-m": ["1rem", "130%"],
        "text-s": ["0.875rem", "130%"],
        "text-xs": ["0.75rem", "130%"],
        tag: ["0.625rem", "130%"],
        "button-g": ["0.875rem", "160%"],
        "button-m": ["0.75rem", "160%"],
        "title-xl": ["3rem", "130%"],
        "title-l": ["2rem", "130%"],
        "title-m": ["1.5rem", "130%"],
        "title-s": ["1.25rem", "130%"],
        "title-xs": ["1.125rem", "130%"],
      },
      backgroundColor: {
        yellow: {
          DEFAULT: "var(--yellow)",
          light: "var(--yellow-light)",
          dark: "var(--yellow-dark)",
        },
        purple: {
          DEFAULT: "var(--purple)",
          light: "var(--purple-light)",
          dark: "var(--purple-dark)",
        },
      },
      textColor: {
        yellow: {
          DEFAULT: "var(--yellow)",
          light: "var(--yellow-light)",
          dark: "var(--yellow-dark)",
        },
        purple: {
          DEFAULT: "var(--purple)",
          light: "var(--purple-light)",
          dark: "var(--purple-dark)",
        },
        base: {
          title: "var(--base-title)",
          subtitle: "var(--base-subtitle)",
          text: "var(--base-text)",
          label: "var(--base-label)",
          hover: "var(--base-hover)",
          button: "var(--base-button)",
          input: "var(--base-input)",
          card: "var(--base-card)",
          background: "var(--base-background)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
