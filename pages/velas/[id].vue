<template>
  <div class="background-candle">
    <div class="container py-5">
      <h1 class="text-center text-white">Gracias por encender una vela</h1>
      <hr />

      <h4 class="text-center text-white py-3">
        Encendida por: {{ candle.iniciales }}
      </h4>
      <blockquote
        v-show="candle.publica"
        class="blockquote italic text-center text-white py-3"
      >
        <i>{{ candle.intencion }}</i>
      </blockquote>
      <div class="d-block mx-auto img-candle pb-3">
        <img
          v-show="candle.isActive"
          class=""
          src="~/assets/media/candle.webp"
          alt="candle waving"
          width="120"
        />
        <img
          v-show="!candle.isActive"
          class=""
          src="~/assets/media/candle4.gif"
          alt="candle waving"
          width="120"
        />
      </div>
      <p class="text-center text-white">
        Vela encendida día:
        {{ dayjs(candle.fecha).format("DD/MM/YYYY") }}
      </p>
      <p class="text-center text-white py-2">
        <span v-show="candle.isActive" class="countdown"
          ><i>Tiempo restante: <br />{{ countdown }}</i></span
        >
        <span v-show="!candle.isActive" class="countdown px-5"
          ><i
            >{{ countdown }}
            <br />
            {{ timeOff }}
          </i></span
        >
      </p>
      <button
        v-show="!isUpdated"
        :class="{ disabled: !candle.isActive || candle.timeUpdated || blocked }"
        class="btn mx-auto btn-outline-light py-3"
        @click="addTime(interval, timer)"
      >
        MANTENER ENCENDIDA
        <MdiClockTimeTwoOutline style="font-size: 14px; margin-top: -3px" />
      </button>
      <p v-show="!isUpdated" class="text-white text-center py-3">
        <i
          ><MdiInformationOutline style="font-size: 14px; margin-top: -3px" />
          Se mantendrá encendida durante 4 horas más.</i
        >
      </p>
      <h5 v-show="isUpdated" class="text-white text-center py-4">
        Esta vela se mantendrá encendida 4 horas más, gracias.
      </h5>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import MdiClockTimeTwoOutline from "~icons/mdi/clock-time-two-outline";
import MdiInformationOutline from "~icons/mdi/information-outline";
dayjs.extend(duration);

const store = useStore();
const route = useRoute();
const id = route.params.id;
const candle = ref(store.singleCandle);
const countdown = ref("00:00:00");
const blocked = ref(false);
const isUpdated = ref(false);
const interval = ref(null);
const timeOff = ref(null);

const addTime = async (interval) => {
  await store.addTime(id, candle.value.timeOff);
  await store.getSingleCandle(id);
  clearInterval(interval);
  candle.value = store.singleCandle;
  isUpdated.value = store.singleCandle.timeUpdated;
};

const timer = (timeOff) => {
  const initTime = dayjs();
  const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
  const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
  const dia = dayjs.duration(time).days();
  dia > 0
    ? (countdown.value = dia + " día " + dayjs(time).format("HH:mm:ss [hrs.]"))
    : (countdown.value = dayjs(time).format("HH:mm:ss [hrs.]"));
  if (diffTime < 0) {
    countdown.value = "Apagada";
    clearInterval(interval);
  }
};

onMounted(async () => {
  await store.getSingleCandle(id);
  candle.value = store.singleCandle;
  isUpdated.value = candle.value.timeUpdated;
  timeOff.value = dayjs(candle.value.timeOff).format("DD/MM/YYYY HH:mm");
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
  min-height: 80vh;
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
  font-size: 14px;
  display: block;
}
</style>
