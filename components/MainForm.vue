<template>
  <div class="d-flex justify-content-center">
    <form @submit.prevent="handleSubmit">
      <div class="form-floating mb-3">
        <input
          v-model.trim="candle.nombre"
          type="text"
          class="form-control"
          id="floatingInput"
          aria-describedby="nameHelp"
          placeholder="Nombre"
        />
        <label for="floatingInput" class="form-label">Nombre completo</label>
        <div id="nameHelp" class="form-text">
          * Solo se mostrarán las iniciales.
        </div>
      </div>
      <div class="form-floating mb-3">
        <textarea
          v-model.trim="candle.intencion"
          class="form-control"
          id="floatingTextArea"
          aria-describedby="textareaHelp"
          placeholder="Intención de oración"
        />
        <label for="floatingTextArea" class="form-label"
          >Intención de oración</label
        >
        <div class="form-check mt-2">
          <input
            v-model="candle.publica"
            class="form-check-input"
            type="checkbox"
            value="true"
            id="flexCheckChecked"
          />
          <label class="form-label form-text" for="flexCheckChecked">
            Hacer pública su intención, será visible para todos.
          </label>
        </div>
      </div>
      <div class="form-floating mb-3">
        <select
          v-model="candle.ofrenda"
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selectedv value="0">Realizar una ofrenda</option>
          <option value="1">3€</option>
          <option value="2">5€</option>
          <option value="3">7€</option>
          <option value="4">10€</option>
          <option value="5">Ofrenda libre</option>
        </select>
        <label for="floatingSelect">Ofrenda</label>
      </div>
      <div class="form-floating mb-3" :style="{ display: hide }">
        <input
          v-model.trim="candle.ofrendaLibre"
          type="number"
          class="form-control"
          id="floatingNumber"
          placeholder="Cantidad"
        />
        <label for="floatingNumber" class="form-label">Cantidad</label>
      </div>
      <button
        :disabled="disable"
        type="submit"
        class="btn py-3 mt-2 w-100 bg-primary"
      >
        Encender
      </button>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/db";

//Data
const candle = reactive({
  nombre: "",
  intencion: "",
  publica: false,
  isActive: true,
  ofrenda: 0,
  ofrendaLibre: 0,
  fecha: "",
  iniciales: "",
  splitted: [],
});

//Computed
const hide = computed(() => {
  return candle.ofrenda == 5 ? "block" : "none";
});

const disable = computed(() => {
  if (candle.nombre.length && candle.intencion.length && candle.ofrenda != 0) {
    if (candle.ofrenda == 5 && !candle.ofrendaLibre.length) {
      return true;
    }
    return false;
  }
  return true;
});

//Methods
const resetCandle = () => {
  candle.nombre = "";
  candle.intencion = "";
  candle.publica = false;
  candle.isActive = true;
  candle.ofrenda = 0;
  candle.ofrendaLibre = 0;
  candle.fecha = "";
  candle.iniciales = "";
  candle.splitted = [];
  return candle;
};

const handleSubmit = async () => {
  const store = useStore();
  try {
    candle.fecha = Date.now();
    candle.splitted = candle.nombre.split(" ");
    candle.splitted.some((inicial, index) => {
      if (index >= 4) {
        return true;
      }
      candle.iniciales += inicial.charAt(0).toUpperCase() + ". ";
    });
    store.addCandle(candle);
    await store.$reset();
    await resetCandle();
  } catch (e) {
    console.log(e);
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 600px;
  padding: 0% 5%;
  .form-floating textarea {
    height: 120px;
  }
  .form-text {
    color: var(--bs-gray-500);
  }

  .btn {
    border: 1px solid white;
    color: white;
    font-weight: bold;
  }
  .btn:hover {
    background-color: slategray;
  }
}
</style>
