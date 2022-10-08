import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from "@astrojs/react"; // import { astroAuthComponents } from "@astro-auth/ui";
// https://astro.build/config

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node(),
  integrations: [react(), tailwind()],
  experimental: {
    integrations: true
  }
});