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
.bg-gray {
  background-color: #e1e1e1;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 1px lightgray;
}
</style>
