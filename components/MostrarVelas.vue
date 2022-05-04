<template>
  <div>
    <div class="container-lg mt-5">
      <div class="row">
        <div class="col-side col-md-3 text-center pt-3 order-md-2">
          <p>Total velas encendidas: {{ store.totalCandles }}</p>
        </div>
        <div class="col-md-9 order-md-1">
          <div class="row">
            <div
              v-for="candle of store.candles"
              :key="candle.id"
              class="col-md-4 col-6"
            >
              <Vela :propCandle="candle.data()" />
            </div>
          </div>
        </div>
        <div class="order-md-3">
          <nav aria-label="navigation">
            <ul class="pagination justify-content-center py-5">
              <li class="page-item" :class="{ disabled: activeBack }">
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="store.backCandles()"
                  >Anterior</a
                >
              </li>
              <p>
                {{ store.paginacion.pagina }} de
                {{ store.paginacion.totalPaginas }}
              </p>
              <li class="page-item" :class="{ disabled: activeNext }">
                <a
                  class="page-link"
                  href="#"
                  @click.prevent="store.nextCandles()"
                  >Siguiente</a
                >
              </li>
            </ul>
          </nav>
        </div>
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
  return store.paginacion.pagina >= store.paginacion.totalPaginas
    ? true
    : false;
});

onBeforeMount(async () => {
  store.$reset();
  await store.obtenerTotalDocumentos();
  await store.getCandles();
});
</script>

<style lang="scss" scoped>
.col-side {
  background-color: #f8f8f8;
}
</style>
