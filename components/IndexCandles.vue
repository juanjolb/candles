<template>
  <div class="container pt-5 text-center">
    <h3>ÚLTIMAS VELAS</h3>
    <p class="py-3"><MdiCandle style="color: #bf1515; font-size: 34px" /></p>
    <div class="row">
      <div
        v-for="candle of store.candles"
        :key="candle.id"
        class="col-6 col-md-3 mb-5"
      >
        <Vela :propCandle="candle"></Vela>
      </div>
    </div>
  </div>
  <div class="container text-center">
    <NuxtLink to="/velas" class="btn btn-outline-dark p-3"
      >VER TODAS LAS VELAS</NuxtLink
    >
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db";
import MdiCandle from "~icons/mdi/candle";

const store = useStore();

onBeforeMount(async () => {
  store.$reset();
  await store.getCandlesIndex();
});
</script>

<style lang="scss" scoped></style>
