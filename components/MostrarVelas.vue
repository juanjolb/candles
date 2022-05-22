<template>
  <div class="container-lg pt-5">
    <div class="row">
      <div class="col-side col-md-3 mb-5 text-center order-md-2">
        <div class="info-container p-3">
          <div class="d-block py-2 my-4 block total-lit">
            Total velas encendidas: {{ store.totalCandles }}
          </div>
          <div class="d-block py-2 my-4 block current-lit">
            Velas iluminadas: {{ store.totalLighted }}
          </div>
          <p class="mb-3">
            <NuxtLink
              to="/encender-vela/"
              class="text-white"
              style="text-decoration: none"
              ><b>ENCENDER VELA <MdiCandle style="margin-top: -5px" /> </b>
              <hr
            /></NuxtLink>
          </p>
        </div>
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
import MdiCandle from "~icons/mdi/candle";

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
.container-lg {
  min-height: 80vh;
}
hr {
  color: white;
  opacity: 1;
  width: 180px;
  height: 2px;
  margin: 5px auto 0px auto;
}
.block {
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.56);
  font-size: 14px;
}
.block.total-lit {
  background-color: white;
}
.block.current-lit {
  background-color: #0b0b0b85;
  color: white !important;
}
.info-container {
  border-radius: 5px;

  background-color: #d3172e;
}
</style>
