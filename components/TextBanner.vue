<template>
  <div class="video-text position-absolute">
    <h1 class="mb-4 text-center">Enciende una vela</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda neque
      magni odit deserunt hic suscipit, eligendi tenetur fugiat sint perferendis
      blanditiis inventore repellendus culpa ut earum animi corporis laborum!
      Suscipit.
    </p>
    <p class="mb-5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda neque
      magni odit deserunt hic suscipit.
    </p>
    <NuxtLink to="/encender-vela" class="btn btn-outline-light d-block py-3">
      ENCENDER VELA <MdiCandle style="font-size: 18px; margin-top: -3px" />
    </NuxtLink>
  </div>
</template>

<script setup>
import MdiCandle from "~icons/mdi/candle";
</script>

<style scoped>
.video-text {
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 620px;
}
h1,
p {
  color: white;
}
p {
  font-size: 17px;
  text-align: justify;
}
button {
  font-size: 17px;
}
</style>
