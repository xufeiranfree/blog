import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [
    ['meta', { name: 'google-site-verification', content: 'q2k6tX5Cr-G8xLqj8gd6y1d972NEjmmAqC-LTYPdTcs' }],
    ['script', {async: 'async', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4703735193930324', crossorigin: 'anonymous'}]
  ],
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
