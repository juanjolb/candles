<template>
  <div class="text-center">
    <h3 class="text-primary"><b>Colaborar</b></h3>
    <p class="py-2">Donar para ayudar a realizar el proyecto</p>
  </div>
  <form @submit.prevent="donate">
    <div
      class="btn-group mb-4 d-block text-center"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="donation.quantity"
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
        v-model="donation.quantity"
        value="10"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio2">10 €</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="donation.quantity"
        value="20"
        id="btnradio3"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio3">20 €</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="donation.quantity"
        value="50"
        id="btnradio4"
        autocomplete="off"
      />
      <label class="btn btn-outline-primary" for="btnradio4">50 €</label>
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        v-model="donation.quantity"
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
        <input
          type="number"
          min="1"
          max="3000"
          class="form-control"
          v-model="donation.quantityChosen"
        />
        <span class="input-group-text">€</span>
      </div>
    </div>
    <div class="form-group px-3 mb-3">
      <input
        type="text"
        v-model="donation.name"
        class="form-control"
        placeholder="Nombre"
      />
    </div>
    <div class="form-group px-3 mb-3">
      <input
        type="text"
        v-model="donation.surname"
        class="form-control"
        placeholder="Apellidos"
      />
    </div>
    <div class="form-group px-3 mb-3">
      <input
        type="text"
        v-model="donation.email"
        class="form-control"
        placeholder="Email"
        title="Three letter country code"
      />
    </div>
    <div class="form-check mx-3 mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="donation.policy"
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        He leído y acepto la <a href="#">política de privacidad</a>
      </label>
    </div>
    <div :v-show="v$.$errors.length">
      <div class="input-errors" v-for="error of v$.$errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <button
      type="submit"
      :disabled="disableButton"
      class="btn btn-primary mx-auto d-block px-5"
    >
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
import { useStoreProyectos } from "~/stores/proyectos";
import { useStoreDonaciones } from "~/stores/donaciones";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import dayjs from "dayjs";

//DATA
const storeProyectos = useStoreProyectos();
const storeDonaciones = useStoreDonaciones();
const redsys = reactive({});
const props = defineProps(["projectId"]);
const id = props.projectId;
const donation = reactive({
  projectId: id,
  quantity: 5,
  quantityChosen: null,
  name: "",
  surname: "",
  email: "",
  policy: null,
});

//COMPUTED
const chooseDonation = computed(() => {
  return donation.quantity === "choose" ? true : false;
});

const disableButton = computed(() => {
  if (
    donation.name.length &&
    donation.surname.length &&
    donation.email.length &&
    donation.policy === true
  ) {
    return false;
  } else {
    return true;
  }
});

const validate = computed(() => ({
  name: {
    required,
  },
  surname: {
    required,
  },
  policy: {
    required,
  },
  email: {
    required,
    email: helpers.withMessage("Introduzca un mail correcto", email),
  },
}));

const checkAmount = () => {
  const amount = donation.quantity;
  if (amount === "choose") {
    amount = donation.quantityChosen;
  }
  return amount;
};

const v$ = useVuelidate(validate, donation);

const redsysCall = async (data) => {
  $fetch("https://sis-t.redsys.es:25443/sis/realizarPago", {
    method: "POST",
    redirect: "follow",
  });
};

//ACTIONS
const donate = async () => {
  const isValid = await v$.value.$validate();
  if (isValid) {
    try {
      const amount = checkAmount();
      const redsys = await $fetch("/api/redsys", { method: "POST" });
      await redsysCall(redsys);
    } catch (e) {
      console.log(e);
    }
  }
};
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
.input-errors {
  padding: 0px 20px 20px 20px;
  color: #d3172e;
  font-weight: 500;
  text-align: center;
}
</style>
