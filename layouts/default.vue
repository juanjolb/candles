<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss">
.bg-gray {
  margin: 0% 3%;
  background-color: #e1e1e1;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 5px lightgray;
}
</style>
