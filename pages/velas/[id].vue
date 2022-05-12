<template>
  <div class="background-candle">
    <div class="container py-5">
      <h1 class="text-center text-white">Gracias por encender una vela</h1>
      <hr />
      <div class="bg-white d-block mx-auto img-candle">
        <img
          v-show="candle.isActive"
          class=""
          src="~/assets/media/candle.gif"
          alt="candle waving"
          width="120"
        />
        <img
          v-show="!candle.isActive"
          class=""
          src="~/assets/media/candle.gif"
          alt="candle waving"
          width="120"
        />
      </div>
      <h4 class="text-center text-white py-4">
        Encendida por: {{ candle.iniciales }}
      </h4>
      <blockquote
        v-show="candle.publica"
        class="blockquote italic text-center text-white"
      >
        <i>"{{ candle.intencion }}"</i>
      </blockquote>
      <p class="text-center text-white py-3">
        <span v-show="candle.isActive" class="countdown"
          ><i>Tiempo restante: <br />{{ countdown }}</i></span
        >
        <span v-show="!candle.isActive" class="countdown px-5"
          ><i>{{ countdown }}</i></span
        >
      </p>
      <button
        v-show="isUpdated != true"
        :class="{ disabled: !candle.isActive || candle.timeUpdated || blocked }"
        class="btn mx-auto btn-outline-light py-3"
        @click="addTime(interval, timer)"
      >
        MANTENER ENCENDIDA
      </button>
      <p class="text-white text-center py-3">
        <i>Info-icon: Mantener encendida durante 4 horas más.</i>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

const store = useStore();
const route = useRoute();
const id = route.params.id;
const candle = ref(store.singleCandle);
const countdown = ref("00:00:00");
const blocked = ref(false);
const isUpdated = ref(false);
const interval = ref(null);

const addTime = async (interval, timer) => {
  await store.addTime(id, candle.value.timeOff);
  clearInterval(interval);
  blocked.value = true;
  isUpdated.value = store.singleCandle.timeUpdated;
};

const timer = (timeOff) => {
  const initTime = dayjs();
  const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
  const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
  const dia = dayjs.duration(time).days();
  dia > 0
    ? (countdown.value = dia + " día " + dayjs(time).format("HH:mm:ss"))
    : (countdown.value = dayjs(time).format("HH:mm:ss"));
  if (diffTime < 0) {
    countdown.value = "Apagada";
    clearInterval(interval);
  }
};

onMounted(async () => {
  await store.getSingleCandle(id);
  candle.value = store.singleCandle;
  isUpdated.value = candle.value.timeUpdated;
  store.getCandleTime(
    countdown,
    candle.value.isActive,
    id,
    candle.value.timeOff
  );
  watchEffect(() => {
    interval.value = setInterval(timer, 1000, candle.value.timeOff);
  });
});
</script>

<style lang="scss" scoped>
.background-candle {
  background-image: url("~/assets/media/bg-candle-lighted.webp");
}
hr {
  width: 200px;
  color: white;
  margin: 30px auto 20px auto;
  border-bottom: 3px solid;
}
.countdown {
  padding: 6px 30px;
  background-color: #d3172e;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
}
.img-candle {
  max-width: 120px;
  border-radius: 20px;
}
.btn {
  display: block;
}
</style>
