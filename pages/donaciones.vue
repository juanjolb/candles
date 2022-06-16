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

<script setup>
import { useStoreDonaciones } from "~/stores/donaciones";
import { useStoreProyectos } from "~/stores/proyectos";

const route = useRoute();
const storeDonations = useStoreDonaciones();
const storeProjects = useStoreProyectos();

//Actions
const checkResponse = async (response, donation) => {
  const redsysResCode = parseInt(response.Ds_Response);
  if (redsysResCode <= 99 || redsysResCode == 900) {
    donation.status = "paid";
    donation.authCode = response.Ds_AuthorisationCode;
    donation.redsysResponse = response.Ds_Response;
    storeDonations.$reset();
    storeProjects.$reset();
    await storeProjects.updateProjectDonation(
      donation.projectId,
      donation.totalAmount
    );
    await storeProjects.getProjectData(donation.projectId);
    await storeDonations.getLimitedDonators(donation.projectId);
  } else {
    donation.status = "error";
    donation.authCode = response.Ds_AuthorisationCode;
    donation.redsysResponse = response.Ds_Response;
  }
  return donation;
};
const decodeParams = async () => {
  //check if is returning for redsys
  if (route.query.Ds_MerchantParameters) {
    try {
      const params = route.query;
      const response = await $fetch("/api/decode", {
        method: "POST",
        body: {
          params: params,
        },
      });
      const donation = await storeDonations.getDonation(response.Ds_Order);
      const donationData = donation.data();
      if (donationData.status === "pending") {
        const donationId = donation.id;
        const newData = await checkResponse(response, donationData);
        await storeDonations.updatePaymentDonation(donationId, newData);
      } else {
        console.log("already updated");
      }
    } catch (e) {
      console.log(e);
    }
  }
};

onBeforeMount(() => {
  decodeParams();
});
</script>

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
