<template>
  <div class="container text-center p-5">
    <h3 class="mb-3">DONACIONES</h3>
    <h3>
      <IconoirDonate
        style="color: #bf1515; font-size: 38px; margin-bottom: 20px"
      />
    </h3>
    <p class="donation-text mb-5">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
      molestiae ipsa a est fuga labore, repellat dolorem, dolores maxime alias
      veniam ipsum cum. Deleniti, nemo! Vero nostrum neque delectus
      necessitatibus.
    </p>
    <div class="row donation-row">
      <NuxtLink to="/donaciones/" class="col-md-4 link">
        <div class="project project1">
          <div class="shadow-bg p-3 d-flex align-items-end">
            <div class="project-text">
              <h3>Proyecto 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus, praesentium eius. Adipisci, sunt quisquam quidem
                ipsam quaerat praesentium in rem unde quam dolor non, soluta
                quas accusantium repellat, consequuntur facilis.
              </p>
            </div>
          </div>
        </div>
      </NuxtLink>
      <div class="col-md-4 link">
        <div class="project project2">
          <div class="shadow-bg p-3 d-flex align-items-end">
            <div class="project-text">
              <h3>Proyecto 2</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus, praesentium eius. Adipisci, sunt quisquam quidem
                ipsam quaerat praesentium in rem unde quam dolor non, soluta
                quas accusantium repellat, consequuntur facilis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 link">
        <div class="project project3">
          <div class="shadow-bg p-3 d-flex align-items-end">
            <div class="project-text">
              <h3>Proyecto 3</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus, praesentium eius. Adipisci, sunt quisquam quidem
                ipsam quaerat praesentium in rem unde quam dolor non, soluta
                quas accusantium repellat, consequuntur facilis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconoirDonate from "~icons/iconoir/donate";
</script>

<style lang="scss" scoped>
.donation-text {
  font-size: 24px;
}
.link {
  text-decoration: none;
}
.donation-row {
  padding: 5px 0px 60px 0px;
}
.donation-row > .col-md-4 {
  display: flex;
}
.project1 {
  background: url("https://catedraldemallorca.org/wp-content/uploads/2021/10/Visita_Catedral_de_Mallorca.jpg");
}
.project2 {
  background: url("https://catedraldemallorca.org/wp-content/uploads/2022/03/fiesta-de-la-luz-seu.jpg");
}
.project3 {
  background: url("https://catedraldemallorca.org/wp-content/uploads/2021/09/organo_corcentante.jpg");
}
.project:hover {
  -moz-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  -o-transform: scale(1.03);
  -ms-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);

  -webkit-transition: transform 0.4s ease-in-out;
  -moz-transition: transform 0.4s ease-in-out;
  -ms-transition: transform 0.4s ease-in-out;
}
.shadow-bg {
  min-height: 520px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.7) 75.46%
  );
}
.project-text {
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
.project-text h3 {
  color: white;
  padding-bottom: 15px;
}
</style>
