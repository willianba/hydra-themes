// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind({ applyBaseStyles: false }), react()],

  server: {
    port: 80,
  },

  adapter: node({
    mode: "standalone",
  }),
});
