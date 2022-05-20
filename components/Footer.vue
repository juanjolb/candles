<template>
  <div class="footer">
    <div class="container-xl text-center">
      <div class="row pt-4">
        <div class="col-md mb-3">
          <button class="btn btn-outline-light d-block mx-auto">
            Página principal <MdiWeb style="margin-top: -3px" />
          </button>
          <button class="btn btn-outline-custom d-block mx-auto">
            Entradas <FaTicket style="margin-top: -3px" />
          </button>
        </div>
        <div class="col-md mb-3">
          <p><IcBaselineLocalPhone style="margin-top: -3px" /> 971 71 31 33</p>
          <p>
            <CilLocationPin style="margin-top: -3px" /> Plaza de la Almoina S/N
            <br />
            07001 Palma de Mallorca <br />
            Islas Baleares. España
          </p>
        </div>
        <div class="col-md mb-3">
          <p style="social-media"><b>Síguenos en redes</b></p>
          <p>@catedralmca</p>
        </div>
        <div class="col-md mb-3">
          <img
            src="https://catedraldemallorca.org/wp-content/uploads/2021/08/Logotipo_Catedral_negativo.png"
            width="240"
          />
        </div>
      </div>
      <hr />
      <div class="row">
        <p class="copyright">
          © 2022 Cabildo Catedral de Mallorca. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import FaTicket from "~icons/fa/ticket";
import MdiWeb from "~icons/mdi/web";
import IcBaselineLocalPhone from "~icons/ic/baseline-local-phone";
import CilLocationPin from "~icons/cil/location-pin";
</script>

<style lang="scss" scoped>
hr {
  margin: -10px auto 10px auto;
  color: white;
  height: 3px;
  max-width: 600px;
  opacity: 0.5;
}
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
.footer {
  background-color: #d3172e;
  color: white;
}
.copyright {
  font-size: 14px;
}
.social-media {
  font-size: 16px;
}
</style>
