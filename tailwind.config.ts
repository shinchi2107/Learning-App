import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'gray70': '#70767f',
        'primary': '#2c8fff'
      },
    },
  },
  plugins: [],
};
export default config;
