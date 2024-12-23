import type { Config } from "tailwindcss";
import daisyui from "daisyui";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Define custom fonts
        geistSans: ["var(--font-geist-sans)", ...fontFamily.sans],
        rubik: ["var(--font-rubik)", ...fontFamily.sans],
        geistMono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      dropShadow: {
        "11xl": "0px 0px 35px #581c87",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
