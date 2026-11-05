// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ducquang2.github.io",
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
});
