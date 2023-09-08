import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://groundedtutor.online",
  compressHTML: true,
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      logLevel: import.meta.env.DEV ? "debug" : "info",
    }),
    mdx(),
    sitemap(),
    preact({
      compat: true,
    }),
  ],
});
