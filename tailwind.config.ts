import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        groundedtheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#111827",
          secondary: "#d1d5db",
          accent: "#10b981",
        },
      },
    ],
  },
} satisfies Config;
