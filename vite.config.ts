// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
    },
  },
  plugins: [
    {
      name: "rolldown-to-rollup-adapter",
      enforce: "post",
      configEnvironment(_name, config) {
        if (config.build?.rolldownOptions && !config.build?.rollupOptions?.input) {
          config.build.rollupOptions = {
            ...config.build.rollupOptions,
            ...config.build.rolldownOptions,
          };
        }
      },
    },
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
