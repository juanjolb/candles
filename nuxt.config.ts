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
  css: ["~/assets/styles/main.scss"],
  script: [
    {
      src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
  ],
  buildModules: ["@pinia/nuxt"],
});
