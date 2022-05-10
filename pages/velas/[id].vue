<template>
  <div>
    <p>{{ candle.intencion }}</p>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db";

const store = useStore();
const route = useRoute();
const id = route.params.id;
const candle = reactive({
  nombre: "",
  intencion: "",
  publica: false,
  isActive: true,
  ofrenda: 0,
  ofrendaLibre: 0,
  fecha: "",
  iniciales: "",
  splitted: [],
});

const setCandle = (data) => {
  candle.nombre = data.nombre;
  candle.intencion = data.intencion;
  candle.publica = data.publica;
  candle.isActive = data.isActive;
  candle.ofrenda = data.ofrenda;
  candle.ofrendaLibre = data.ofrendaLibre;
  candle.fecha = data.fecha;
  candle.iniciales = data.iniciales;
  candle.splitted = data.splitted;
};

onBeforeMount(async () => {
  const data = await store.getSingleCandle(id);
  setCandle(data);
});
</script>

<style lang="scss" scoped></style>
