<template>
  <div>
    <div
      class="main-banner container-fluid p-0 d-flex justify-content-center align-items-center"
    >
      <video id="video" class="w-100" data-start="0" autoplay muted loop>
        <source src="../assets/media/candle.mp4" type="video/mp4" />
      </video>
      <TextBanner />
    </div>

    <div class="body-container p-4">
      <IndexCandles />
      <ExplicacionVela />
      <ExplicacionDonaciones />
    </div>
  </div>
</template>

<style lang="scss" scoped>
video {
  height: 600px;
  transform: translate(-25%);
}
.main-banner {
  background-color: #040900;
}
.body-container {
  background-color: #e8e8e8;
}
</style>
