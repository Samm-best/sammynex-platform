import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { navy: "#0B1220", electric: "#3B82F6", violet: "#8B5CF6", paper: "#F8FAFC" }, boxShadow: { glow: "0 0 50px rgba(59,130,246,.18)" } } },
  plugins: [],
};
export default config;
