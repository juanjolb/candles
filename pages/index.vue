<template>
  <div>
    <div class="container-fluid main-banner">
      <video id="video" data-start="0" autoplay muted loop>
        <source src="../assets/media/vid-candle-cdm2.mp4" type="video/mp4" />
      </video>
      <TextBanner />
    </div>

    <div>
      <IndexCandles />
      <ExplicacionVela />
      <ExplicacionDonaciones />
    </div>
  </div>
</template>

<style lang="scss" scoped>
video {
  width: 100%;
  height: 800px;
  object-fit: cover;
}
.container-fluid {
  padding: 0;
  position: relative;
}
</style>
