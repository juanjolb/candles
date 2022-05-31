<template>
  <div class="container">
    <div class="donations-text">
      <p class="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        molestiae ipsa a est fuga labore, repellat dolorem, dolores maxime alias
        veniam ipsum cum. Deleniti, nemo! Vero nostrum neque delectus
        necessitatibus.
      </p>
    </div>
    <h1 class="">Proyectos activos</h1>
    <Donacion1 />
    <div class="row text-center colab">
      <h1 class="py-5 text-primary"><b>Otras formas de colaborar</b></h1>
      <div class="col-md-6 border-end border-primary">
        <div class="w-75 mx-auto">
          <h2>Bizum</h2>
          <p>
            Si prefereixes fer una transferència bancària, pots fer-la al número
            de compte següent: ES63 2100 0810 2602 0082 3232. Si vols el
            certificat fiscal, envia'ns si us plau les teves dades personals a
            donatius@sagradafamilia.org
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="w-75 mx-auto">
          <h2>Transferencia</h2>
          <p>
            Pots fer el teu donatiu presencialment a les nostres oficines de
            dilluns a divendres de 9 a 13.30h. Ens trobaràs al carrer Sardenya,
            318 (Barcelona).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.donations-text {
  padding: 80px 0px 40px 0px;
}
.donations-text p {
  font-size: 28px;
}
.row.colab {
  padding: 30px 0px 100px 0px;
  font-size: 22px;
}
.container {
  min-height: 80vh;
}
</style>
