import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1' : "url(/public/Back1.png)",
      },
      colors: {
        "orange": "#F68E2F",
        "item" : "#1B1613",
      }
    },
  },
  plugins: [],
};
export default config;
