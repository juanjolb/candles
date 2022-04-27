<template>
  <div>
    <img src="~/assets/media/candle.gif" alt="candle waving" width="120" />
    <p>
      Encendida por: <b>{{ propCandle.iniciales }}</b>
    </p>
    <p class="countdown">Se apaga en: {{ countdown }}</p>
  </div>
</template>

<script setup>
import { countdownTimer } from "~/composables/countdown";
import dayjs from "dayjs"

const props = defineProps(["propCandle"]);
const initTime = dayjs();
const timeOff = dayjs(props.propCandle.fecha).add(1, 'day').subtract(1, 'hour');
let countdown = ref('00:00:00');

onMounted(() => {
  countdown = countdownTimer(initTime, timeOff, countdown);
});
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
}
.countdown {
  font-style: italic;
  font-size: 13px;
}
</style>
