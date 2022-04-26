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

const props = defineProps(["propCandle"]);
const time = props.propCandle.apagar - Date.now();
let countdown = ref(time);

onMounted(() => {
  countdown = countdownTimer(countdown);
});
</script>

<style lang="scss" scoped>
p {
  font-size: 18px;
}
.countdown {
  font-size: 12px;
}
</style>
