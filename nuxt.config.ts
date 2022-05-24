import { defineNuxtConfig } from "nuxt3";
import Icons from "unplugin-icons/vite";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      Icons({
        autoInstall: true,
      }),
    ],
  },
  head: {},
  css: ["~/assets/styles/main.scss"],
  buildModules: ["@pinia/nuxt"],
});
