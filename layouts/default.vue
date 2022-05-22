<template>
  <div>
    <Header />
    <div class="body-container">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.body-container {
  background-color: #e8e8e8;
}
</style>
