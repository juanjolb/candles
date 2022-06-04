<template>
  <div>
    <Header />
    <div class="body-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          // src: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
          src: "/_nuxt/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.body-container {
  background-color: #e8e8e8;
  min-height: 80vh;
}
</style>
