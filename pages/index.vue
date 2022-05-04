<template>
  <div>
    <div class="banner-container">
      <video id="video" data-start="0" autoplay muted loop>
        <source src="../assets/media/candle.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="body-container">
      <IndexCandles />
      <ExplicacionVela />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-container {
  background-color: #040900;
}
.body-container {
  background-color: #e8e8e8;
}
</style>
