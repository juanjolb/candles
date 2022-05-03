<template>
  <div class="text-center">
    <img src="~/assets/media/candle.gif" alt="candle waving" width="120" />
    <p >
      Encendida por: <br/>
      <b>{{ propCandle.iniciales }}</b>
    </p>
    <p class="countdown">Se apaga en: <span :class="{red: countdown.isActive}">{{ countdown.time }}</span></p>
  </div>
</template>

<script setup>
import { countdownTimer } from "~~/composables/countdown";
import dayjs from "dayjs"

const props = defineProps(["propCandle"]);
const timeOff = dayjs(props.propCandle.fecha).add(1, 'day').subtract(1, 'hour');

let countdown = reactive({
    time: '00:00:00',
    isActive: false,
});

const getFirstTime = () => {
    const initTime = dayjs();
    const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
    const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
    countdown.time = dayjs(time).format('HH:mm:ss');
    if (diffTime < 0) {
       countdown.time = 'Apagada';
       countdown.isActive = true;
    }
}

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
