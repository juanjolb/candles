<template>
  <div>
    <img src="~/assets/media/candle.gif" alt="candle waving" width="120" />
    <p>
      Encendida por: <b>{{ propCandle.iniciales }}</b>
    </p>
    <p class="countdown">Se apaga en: {{ date.toDateString() }}</p>
  </div>
</template>

<script setup>
import { countdownTimer } from "~/composables/countdown";
import { useStore } from "~/stores/db";

const props = defineProps(["propCandle"]);
const time = Date.now() - props.propCandle.apagar;
const store = useStore();
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
