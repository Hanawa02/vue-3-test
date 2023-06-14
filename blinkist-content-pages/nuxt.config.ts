import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["web-component-library/dist/style.css"]

  imports: {
    transform: {
      // https://github.com/nuxt/nuxt/issues/18823#issuecomment-1419704343
      exclude: [/web-component-library/],
    },
  },
});
