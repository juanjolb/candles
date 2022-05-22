<template>
  <div class="donation-project">
    <div class="row mt-5">
      <div class="col-md-7">
        <div class="project d-flex align-items-end">
          <div class="project-text p-5 text-white">
            <h3 class="text-justify">Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              nisi, doloribus ex est tempore impedit veniam esse blanditiis,
              corporis porro delectus! Dolorum fuga possimus minus velit fugit
              sapiente pariatur alias!
            </p>
          </div>
        </div>
        <div class="objective py-4">
          <div class="row text-center">
            <div class="col-6 border-end border-primary">
              <p><b>Actual: 532 €</b></p>
            </div>
            <div class="col-6">
              <p><b>Objetivo: 3.000 €</b></p>
            </div>
          </div>
        </div>
        <div class="progress">
          <!-- Repair aria-valuenow -->
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
            :style="{ width: progress + '%' }"
            role="progressbar"
            aria-valuemin="0"
            :aria-valuenow="{ progress }"
            aria-valuemax="100"
          >
            {{ progress + "%" }}
          </div>
        </div>
      </div>
      <div class="col-md-4 bg-white mx-auto py-3">
        <DonationForm />
      </div>
    </div>
  </div>
</template>

<script setup>
const progress = ref(32);
</script>

<style lang="scss" scoped>
.progress {
  background-color: white;
  height: 32px;
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
  font-size: 22px;
}
</style>
