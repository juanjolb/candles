<template>
  <div class="text-center">
    <h3 class="text-primary"><b>Colaborar</b></h3>
    <p class="py-2">Donar para ayudar a realizar el proyecto</p>
  </div>
  <form>
    <div
      class="btn-group mb-4 d-block text-center"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="quantity"
        value="5"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-primary" for="btnradio1">5 €</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="quantity"
        value="10"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio2">10 €</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="quantity"
        value="20"
        id="btnradio3"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio3">20 €</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="quantity"
        value="50"
        id="btnradio4"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio4">50 €</label>
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="quantity"
        value="choose"
        id="btnradio5"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio5">Libre</label>
      <div
        class="input-group my-3 mx-auto"
        v-show="chooseDonation"
        style="width: 240px"
      >
        <input type="number" class="form-control" v-model="quantityChosen" />
        <span class="input-group-text">€</span>
      </div>
    </div>
    <div class="form-group px-3 mb-3">
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Nombre"
      />
    </div>
    <div class="form-group px-3 mb-3">
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Apellidos"
      />
    </div>
    <div class="form-group px-3 mb-3">
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email"
      />
    </div>
    <div class="form-check mx-3 mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        He leído y acepto la <a href="#">política de privacidad</a>
      </label>
    </div>
    <button type="submit" class="btn btn-primary mx-auto d-block px-5">
      Realizar donación <BxsDonateHeart style="margin-top: -5px" />
    </button>
  </form>
  <p class="fiscal-info">
    <IcOutlineInfo style="font-size: 16px; margin-top: -3px" />
    Si deseas recibir un certificado de tu donación para desgravación fiscal,
    por favor envíanos la referencia de la donación y tus datos fiscales
    (Nombre, Apellidos, NIF, Domicilio, Email) a
    contabilidad@catedraldesantiago.es
  </p>
</template>

<script setup>
import BxsDonateHeart from "~icons/bxs/donate-heart";
import IcOutlineInfo from "~icons/ic/outline-info";
const quantity = ref(5);
const quantityChosen = ref(0);

//COMPUTED
const chooseDonation = computed(() => {
  return quantity.value === "choose" ? true : false;
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px;
}
.input-group-text {
  display: block;
  text-align: center;
  width: 80px;
  background-color: #d3172e;
  font-weight: bold;
  color: white;
}
.form-group .form-control {
  padding: 12px;
}
.fiscal-info {
  padding: 20px 10px 0px 10px;
  font-size: 13px;
}
</style>
