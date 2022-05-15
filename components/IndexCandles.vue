<template>
  <div class="container text-center pt-5">
    <h2 class="mb-5">ÚLTIMAS VELAS</h2>
    <div class="row">
      <div
        v-for="candle of store.candles"
        :key="candle.id"
        class="col-md-3 mb-5"
      >
        <Vela :propCandle="candle"></Vela>
      </div>
    </div>
  </div>
  <div class="container text-center my-5">
    <NuxtLink to="/velas" class="btn btn-outline-dark p-3"
      >VER TODAS LAS VELAS</NuxtLink
    >
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db";

const store = useStore();

onBeforeMount(async () => {
  store.$reset();
  await store.getCandlesIndex();
});
</script>

<style lang="scss" scoped></style>
