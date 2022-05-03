<template>
    <div>
        <div class="container-lg mt-5">
            <div class="row">
                <div v-for="candle of store.candles" :key="candle.id" class="col-md-3">
                    <Vela :propCandle="candle.data()" />
                </div>
            </div>
            <div class="row">
                <nav aria-label="navigation">
                    <ul class="pagination justify-content-center py-5">
                        <li class="page-item" :class="{disabled: activeBack}">
                        <a class="page-link" href="#" @click.prevent="store.backCandles()">Anterior</a>
                        </li>
                        <li class="page-item" :class="{disabled: activeNext}">
                        <a class="page-link" href="#" @click.prevent="store.nextCandles()">Siguiente</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="row">
                <p>Total de velas: {{ store.totalCandles }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '~/stores/db.ts'

const store = useStore();

const activeBack = computed(() => {
     return store.paginacion.pagina == 0 ? true : false
})

const activeNext = computed(()=>{
    return store.paginacion.pagina >= store.paginacion.totalPaginas ? true : false
})

onBeforeMount(async() => {
    store.$reset();
    await store.obtenerTotalDocumentos()
    await store.getCandles();
})


</script>