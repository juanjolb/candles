<template>
  <div>
    <div class="container-fluid text-center">
      <div class="row py-4">
        <div class="col-md">
          <button class="btn btn-outline-light d-block mx-auto">
            Página principal
          </button>
          <button class="btn btn-outline-custom d-block mx-auto">
            Entradas
          </button>
        </div>
        <div class="col-md">Column</div>
        <div class="col-md">Column</div>
      </div>
      <div class="row">
        <p class="copyright">
          © 2022 Cabildo Catedral de Mallorca. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
button {
  width: 240px;
}
.btn-outline-custom {
  background-color: white;
  border: 1px solid black;
  margin-top: 15px;
}
.btn-outline-custom:hover {
  background-color: #c8c8c8;
  color: #d3172e;
}
.container-fluid {
  background-color: #d3172e;
  color: white;
}
.copyright {
  font-size: 14px;
}
</style>
