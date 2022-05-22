<template>
  <a :href="link">
    <div class="text-center">
      <img
        v-show="isActive"
        src="~/assets/media/candle.gif"
        alt="candle waving"
        width="120"
        class="mb-3 rounded-circle"
      />
      <img
        v-show="!isActive"
        src="~/assets/media/candle-blow-out-loopless.gif"
        alt="candle waving"
        width="120"
        class="mb-3 rounded-circle"
      />
      <p>
        Encendida por: <br />
        <b>{{ candle.iniciales }}</b>
      </p>
      <p class="countdown">
        <span class="d-block pb-2">Se apaga en: <br /></span>
        <span :class="{ red: !isActive }">{{ countdown }}</span>
      </p>
    </div>
  </a>
</template>

<script setup>
import { countdownTimer } from "~~/composables/countdown";
import { useStore } from "~/stores/db.ts";
import dayjs from "dayjs";

const props = defineProps(["propCandle"]);
const candle = props.propCandle.data();
const store = useStore();
const id = props.propCandle.id;
const link = "velas/" + id;
const timeOff = dayjs(candle.timeOff);

let countdown = ref("00:00:00");
let isActive = ref(candle.isActive);

onMounted(() => {
  store.getCandleTime(countdown, candle.isActive, id, timeOff);
  isActive = candle.isActive;
  countdown = countdownTimer(timeOff, countdown);
});
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
}
.countdown {
  font-style: italic;
  font-size: 14px;
}
.red {
  color: #d3172e;
}
a {
  color: unset;
  text-decoration: unset;
}
</style>
