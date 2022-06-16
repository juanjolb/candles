import { defineNuxtConfig } from "nuxt3";
import Icons from "unplugin-icons/vite";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    redsysKey: process.env.KEY_REDSYS,
    redsysKeyTest: process.env.KEY_REDSYS_TEST,
    signatureKey: process.env.KEY_SIGNATURE,
    firebaseKey: process.env.KEY_FIREBASE
  },
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
