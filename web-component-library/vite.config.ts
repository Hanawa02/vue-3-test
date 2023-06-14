import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    cssCodeSplit: false,
    lib: {
      // ...currentConfig,
      entry: {
        "web-component-library": resolve(__dirname, "src/main.ts"),
        "components/index": resolve(__dirname, "src/components/index.ts"),
      },
      name: "Web Component Library",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
