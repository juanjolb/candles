<template>
  <div class="text-center">
    <img src="~/assets/media/candle.gif" alt="candle waving" width="120" />
    <p>
      Encendida por: <br />
      <b>{{ candle.iniciales }}</b>
    </p>
    <p class="countdown">
      Se apaga en:
      <span :class="{ red: !isActive }">{{ countdown }}</span>
    </p>
  </div>
</template>

<script setup>
import { countdownTimer } from "~~/composables/countdown";
import { useStore } from "~/stores/db.ts";
import dayjs from "dayjs";

const props = defineProps(["propCandle"]);
const candle = props.propCandle.data();
const store = useStore();
const id = props.propCandle.id;
const timeOff = dayjs(candle.fecha).add(1, "day").subtract(1, "hour");

let countdown = ref("00:00:00");
let isActive = ref(candle.isActive);

const getFirstTime = () => {
  const initTime = dayjs();
  const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
  const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
  countdown.value = dayjs(time).format("HH:mm:ss");
  if (diffTime < 0) {
    countdown.value = "Apagada";
    if (candle.isActive === true) {
      store.isNotActive(id);
      store.totalLighted--;
    }
  }
};

onMounted(() => {
  getFirstTime();
  countdown = countdownTimer(timeOff, countdown);
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
.red {
  color: #d3172e;
}
</style>
