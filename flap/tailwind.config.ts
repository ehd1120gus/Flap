import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          border: "hsl(var(--primary-border))",
          focus: {
            DEFAULT: "hsl(var(--primary-focus))",
            foreground: "hsl(var(--primary-focus-foreground))",
            border: "hsl(var(--primary-focus-border))",
          },
          hover: {
            DEFAULT: "hsl(var(--primary-hover))",
            foreground: "hsl(var(--primary-hover-foreground))",
            border: "hsl(var(--primary-hover-border))",
          },
          pressed: {
            DEFAULT: "hsl(var(--primary-pressed))",
            foreground: "hsl(var(--primary-pressed-foreground))",
            border: "hsl(var(--primary-pressed-border))",
          },
          disabled: {
            DEFAULT: "hsl(var(--primary-disabled))",
            foreground: "hsl(var(--primary-disabled-foreground))",
            border: "hsl(var(--primary-disabled-border))",
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          border: "hsl(var(--secondary-border))",
          focus: {
            DEFAULT: "hsl(var(--secondary-focus))",
            foreground: "hsl(var(--secondary-focus-foreground))",
            border: "hsl(var(--secondary-focus-border))",
          },
          hover: {
            DEFAULT: "hsl(var(--secondary-hover))",
            foreground: "hsl(var(--secondary-hover-foreground))",
            border: "hsl(var(--secondary-hover-border))",
          },
          pressed: {
            DEFAULT: "hsl(var(--secondary-pressed))",
            foreground: "hsl(var(--secondary-pressed-foreground))",
            border: "hsl(var(--secondary-pressed-border))",
          },
          disabled: {
            DEFAULT: "hsl(var(--secondary-disabled))",
            foreground: "hsl(var(--secondary-disabled-foreground))",
            border: "hsl(var(--secondary-disabled-border))",
          },
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
          border: "hsl(var(--danger-border))",
          focus: {
            DEFAULT: "hsl(var(--danger-focus))",
            foreground: "hsl(var(--danger-focus-foreground))",
            border: "hsl(var(--danger-focus-border))",
          },
          hover: {
            DEFAULT: "hsl(var(--danger-hover))",
            foreground: "hsl(var(--danger-hover-foreground))",
            border: "hsl(var(--danger-hover-border))",
          },
          pressed: {
            DEFAULT: "hsl(var(--danger-pressed))",
            foreground: "hsl(var(--danger-pressed-foreground))",
            border: "hsl(var(--danger-pressed-border))",
          },
          disabled: {
            DEFAULT: "hsl(var(--danger-disabled))",
            foreground: "hsl(var(--danger-disabled-foreground))",
            border: "hsl(var(--danger-disabled-border))",
          },
        },
        invisible: {
          DEFAULT: "hsla(var(--invisible))",
          foreground: "hsla(var(--invisible-foreground))",
          border: "hsla(var(--invisible-border))",
          focus: {
            DEFAULT: "hsla(var(--invisible-focus))",
            foreground: "hsla(var(--invisible-focus-foreground))",
            border: "hsla(var(--invisible-focus-border))",
          },
          hover: {
            DEFAULT: "hsla(var(--invisible-hover))",
            foreground: "hsla(var(--invisible-hover-foreground))",
            border: "hsla(var(--invisible-hover-border))",
          },
          pressed: {
            DEFAULT: "hsla(var(--invisible-pressed))",
            foreground: "hsla(var(--invisible-pressed-foreground))",
            border: "hsla(var(--invisible-pressed-border))",
          },
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
