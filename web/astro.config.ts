import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://groundedtutor.online",
    outDir: "../../docs",
    compressHTML: true,

    integrations: [mdx(), sitemap(), icon()],

    vite: {
        plugins: [tailwindcss()],
    },
    env: {
        schema: {
            PUBLIC_SITE_NAME: envField.string({ context: "client", access: "public" }),
            PUBLIC_SITE_PHONE: envField.string({ context: "client", access: "public" }),
            PUBLIC_BOOKING_EMAIL: envField.string({ context: "client", access: "public" }),
            PUBLIC_CONTACT_EMAIL: envField.string({ context: "client", access: "public" }),
        },
    },
});
