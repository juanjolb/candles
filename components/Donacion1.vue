<template>
  <div class="donation-project">
    <div class="row mt-5">
      <div class="col-lg-7 position-relative">
        <div class="layer" :class="{ blocked: projectStore.project.loading }">
          <div
            v-show="projectStore.project.loading"
            class="position-absolute top-50 start-50 translate-middle text-primary opacity-100"
          >
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="project d-flex align-items-end">
            <div class="project-text p-5 text-white">
              <h3 class="text-justify">Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti nisi, doloribus ex est tempore impedit veniam esse
                blanditiis, corporis porro delectus! Dolorum fuga possimus minus
                velit fugit sapiente pariatur alias!
              </p>
            </div>
          </div>
          <div class="objective py-3">
            <div class="row text-center">
              <div class="col-8">
                <div class="progress">
                  <!-- Repair aria-valuenow -->
                  <div
                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    :style="{
                      width: projectStore.calcPorcentaje + '%',
                    }"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {{ projectStore.calcPorcentaje + "%" }}
                  </div>
                </div>
              </div>
              <div class="col-4">
                <p>
                  <b>Objetivo: {{ projectStore.project.objetivo }} €</b>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Más información del proyecto
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat est deleniti soluta praesentium nihil expedita velit
                    vitae culpa! Quisquam amet ex nulla tenetur voluptates,
                    fugit incidunt assumenda praesentium quas repellendus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ea, rem? Dolorem repudiandae nemo minus repellendus fugit
                    error eius dicta, quo quos neque vel assumenda corrupti
                    animi voluptas doloremque. Omnis, ex!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ea, rem? Dolorem repudiandae nemo minus repellendus fugit
                    error eius dicta, quo quos neque vel assumenda corrupti
                    animi voluptas doloremque. Omnis, ex!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="py-3">Últimos donantes:</h5>
            <div class="col-md-8">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div
                    class="carousel-item"
                    v-for="(donator, index) in projectDonations.$state
                      .limitedDonatorsArray"
                    :key="index"
                    :class="{ active: isFirstElem(index) }"
                  >
                    <svg
                      class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                      width="800"
                      height="40"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#d3172e"></rect>
                      <text x="20%" y="50%" fill="white" dy=".3em">
                        {{ donator.data().name }} {{ donator.data().surname }}
                      </text>
                    </svg>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-primary bg-white mx-auto d-block py-2 px-4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="getAllDonators"
              >
                Listado de donantes
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Listado completo de donantes
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div
                          class="col-6 text-center"
                          v-for="donator in projectDonations.$state
                            .allDonatorsArray"
                          :key="donator.id"
                        >
                          <p>
                            {{ donator.data().name }}
                            {{ donator.data().surname }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 bg-white mx-auto py-3">
        <DonationForm :projectId="projectId" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStoreProyectos } from "~/stores/proyectos";
import { useStoreDonaciones } from "~/stores/donaciones";

const projectDonations = useStoreDonaciones();
const projectStore = useStoreProyectos();
const projectId = "N5G4MImR2nzFDm6Tm1hw";

//Actions
const isFirstElem = (index) => {
  return index === 0 ? true : false;
};

const getAllDonators = async () => {
  projectDonations.$reset();
  await projectDonations.getAllDonators(projectId);
  await projectDonations.getLimitedDonators(projectId);
};

//Cycle
onBeforeMount(async () => {
  await projectStore.getProjectData(projectId);
  await projectDonations.getLimitedDonators(projectId);
});
</script>

<style lang="scss" scoped>
.progress {
  background-color: white;
  height: 32px;
}
.blocked {
  opacity: 0.3;
  cursor: none;
}
.spinner-border {
  opacity: 1 !important;
  width: 5rem;
  height: 5rem;
}
.project {
  background-image: url("https://catedraldemallorca.org/wp-content/uploads/2021/09/organo_corcentante.jpg");
  min-height: 380px;

  .project-text {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 19.88%,
      rgba(0, 0, 0, 0.7) 75.46%
    );
  }
  h3 {
    color: white !important;
    padding-bottom: 20px;
  }
  p {
    font-size: 18px;
  }
}
.project:before {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(19.88%, rgba(0, 0, 0, 0)),
    color-stop(75.46%, rgba(0, 0, 0, 0.7))
  );
}
.objective {
  font-size: 20px;
}
.carousel-control-next-icon,
.carousel-control-prev-icon {
  height: 1rem;
  width: 1rem;
}
.btn.btn-outline-primary:hover {
  color: orangered;
}
@media (max-width: 1200px) {
  .col-lg-4 {
    margin: 20px !important;
    flex-shrink: 1 !important;
  }
}
</style>
