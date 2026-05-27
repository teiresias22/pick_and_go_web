import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#B39DDB",
          onPrimary: "#FFFFFF",
          primaryContainer: "#EDE7F6",
          onPrimaryContainer: "#4A3B6B",
          secondary: "#CE93D8",
          secondaryContainer: "#F3E5F5",
          tertiary: "#80CBC4",
          tertiaryContainer: "#E0F2F1",
          surface: "#FDF8FF",
          surfaceHighest: "#ECE8F0",
          onSurface: "#1C1B20",
          outline: "#CBC4D2",
          warning: "#FFCC80",
          info: "#90CAF9",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 8px 24px rgba(74, 59, 107, 0.08)",
        soft: "0 2px 12px rgba(74, 59, 107, 0.06)",
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
