import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "xufeiran's Blog",
      description: "A blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "xufeiran's Blog",
      description: "A blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
