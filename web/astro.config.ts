import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://groundedtutor.online",
    outDir: "../../docs",
    compressHTML: true,

    integrations: [mdx(), sitemap(), icon()],

    vite: {
        plugins: [tailwindcss()],
    },
});
