<template>
  <div class="container-lg pt-5">
    <div class="row">
      <div class="col-side col-md-3 my-3 pt-3 text-center order-md-2">
        <p>Total velas encendidas: {{ store.totalCandles }}</p>
        <p>Velas iluminadas: {{ store.totalLighted }}</p>
      </div>
      <div class="col-md-9 order-md-1">
        <div class="row">
          <div
            v-for="candle of store.candles"
            :key="candle.id"
            class="col-md-4 col-6 pb-5"
          >
            <Vela :propCandle="candle" />
          </div>
        </div>
      </div>
      <div class="order-md-3">
        <nav aria-label="navigation">
          <ul class="pagination justify-content-center pb-5">
            <li class="page-item" :class="{ disabled: activeBack }">
              <a class="page-link" href="#" @click.prevent="store.backCandles()"
                >Anterior</a
              >
            </li>
            <p class="px-3 py-2">
              {{ store.paginacion.pagina }} de
              {{ store.paginacion.totalPaginas + 1 }}
            </p>
            <li class="page-item" :class="{ disabled: activeNext }">
              <a class="page-link" href="#" @click.prevent="store.nextCandles()"
                >Siguiente</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db.ts";

const store = useStore();

const activeBack = computed(() => {
  return store.paginacion.pagina <= 1 ? true : false;
});

const activeNext = computed(() => {
  return store.paginacion.pagina >= store.paginacion.totalPaginas + 1
    ? true
    : false;
});

onBeforeMount(async () => {
  store.$reset();
  await store.getDataCandles();
  await store.getCandles();
});
</script>

<style lang="scss" scoped>
.col-side {
  background-color: #f8f8f8;
}
</style>
