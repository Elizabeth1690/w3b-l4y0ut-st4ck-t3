import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: "rgba(103, 107, 179, 1)",
        darkb: "rgba(39,44,113,255)",
        purpleg: "#8285b4",
      },
    },
  },
  plugins: [],
} satisfies Config;
