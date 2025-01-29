import type { Config } from "tailwindcss";

type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

// Define the type for all the base colors (gray, red, yellow, etc.)
type FallbackColors = Record<string, ColorShades>;

const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "zinc",
];

// Define the shade mapping for light to dark mode
const shadeMapping: Record<string, string> = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const fallbackColors: FallbackColors = {
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  yellow: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
};

const withOpacityValue = (variable: string, fallback: string) => {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}, ${hexToRgb(fallback)}), ${opacityValue})`;
    }
    return `rgb(var(${variable}, ${hexToRgb(fallback)}))`;
  };
};

const hexToRgb = (hex: string): string => {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
};

// Define a function to generate light mode shades
const generateLightShades = (color: keyof FallbackColors) => ({
  50: withOpacityValue(`--${color}-50`, fallbackColors[color]["50"]),
  100: withOpacityValue(`--${color}-100`, fallbackColors[color]["100"]),
  200: withOpacityValue(`--${color}-200`, fallbackColors[color]["200"]),
  300: withOpacityValue(`--${color}-300`, fallbackColors[color]["300"]),
  400: withOpacityValue(`--${color}-400`, fallbackColors[color]["400"]),
  500: withOpacityValue(`--${color}-500`, fallbackColors[color]["500"]),
  600: withOpacityValue(`--${color}-600`, fallbackColors[color]["600"]),
  700: withOpacityValue(`--${color}-700`, fallbackColors[color]["700"]),
  800: withOpacityValue(`--${color}-800`, fallbackColors[color]["800"]),
  900: withOpacityValue(`--${color}-900`, fallbackColors[color]["900"]),
});

// Define a function to generate dark mode shades using the shade mapping
const generateDarkShades = (color: keyof FallbackColors) => ({
  50: `var(--${color}-${shadeMapping["50"]}, ${fallbackColors[color]["900"]})`,
  100: `var(--${color}-${shadeMapping["100"]}, ${fallbackColors[color]["800"]})`,
  200: `var(--${color}-${shadeMapping["200"]}, ${fallbackColors[color]["700"]})`,
  300: `var(--${color}-${shadeMapping["300"]}, ${fallbackColors[color]["600"]})`,
  400: `var(--${color}-${shadeMapping["400"]}, ${fallbackColors[color]["500"]})`,
  500: `var(--${color}-${shadeMapping["500"]}, ${fallbackColors[color]["400"]})`,
  600: `var(--${color}-${shadeMapping["600"]}, ${fallbackColors[color]["300"]})`,
  700: `var(--${color}-${shadeMapping["700"]}, ${fallbackColors[color]["200"]})`,
  800: `var(--${color}-${shadeMapping["800"]}, ${fallbackColors[color]["100"]})`,
  900: `var(--${color}-${shadeMapping["900"]}, ${fallbackColors[color]["50"]})`,
});

// Create a shade mapping for each base color
const lightModeColors = baseColors.reduce(
  (acc: Record<string, any>, color: string) => {
    acc[color] = generateLightShades(color);
    return acc;
  },
  {}
);

const darkModeColors = baseColors.reduce(
  (acc: Record<string, any>, color: string) => {
    acc[color] = generateDarkShades(color);
    return acc;
  },
  {}
);

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...lightModeColors,
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
