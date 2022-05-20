<template>
  <div>
    <video id="video" data-start="0" autoplay muted loop>
      <source src="../assets/media/vid-candle-cdm.mp4" type="video/mp4" />
    </video>
    <MainForm />
  </div>
</template>

<style lang="scss" scoped>
video {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  margin-bottom: -6px;
}
</style>
