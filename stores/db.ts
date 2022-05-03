import { defineStore } from "pinia";
import { db } from "~/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  endBefore,
  limitToLast,
} from "firebase/firestore";

export const useStore = defineStore("db", {
  state: () => ({
    candles: [],
    totalCandles: 0,
    paginacion: {
      pagina: 0,
      totalPaginas: 0,
      limit: 8,
      lastVisible: 0,
      firstVisible: 0,
    },
  }),
  actions: {
    //ADD CANDLE
    async addCandle(candle) {
      try {
        await addDoc(collection(db, "velas"), candle);
      } catch (e) {
        console.log(e);
      }
    },
    //GET CANDLES INDEX
    async getCandlesIndex() {
      try {
        const q = query(
          collection(db, "velas"),
          orderBy("fecha", "desc"),
          limit(8)
        );
        const candlesIndex = await getDocs(q);
        candlesIndex.forEach((doc) => {
          this.candles.push(doc);
        });
      } catch (e) {
        console.log(e);
      }
    },
    //GET TOTAL NUMBER OF CANDLES
    async obtenerTotalDocumentos() {
      const q = query(collection(db, "velas"));
      const candles = await getDocs(q);
      this.totalCandles = candles.docs.length;
      this.paginacion.totalPaginas = Math.ceil(
        this.totalCandles / this.paginacion.limit
      );
      this.paginacion.totalPaginas--;
    },

    //GET CANDLES
    async getCandles() {
      try {
        const q = query(
          collection(db, "velas"),
          orderBy("fecha", "desc"),
          limit(this.paginacion.limit)
        );
        const candlesData = await getDocs(q);
        this.paginacion.lastVisible =
          candlesData.docs[candlesData.docs.length - 1];
        this.paginacion.firstVisible = candlesData.docs[0];
        candlesData.forEach((doc) => {
          this.candles.push(doc);
        });
        this.paginacion.pagina = 0;
      } catch (e) {
        console.log(e);
      }
    },
    //BTN NEXT CANDLES
    async nextCandles() {
      try {
        const q = query(
          collection(db, "velas"),
          orderBy("fecha", "desc"),
          startAfter(this.paginacion.lastVisible),
          limit(this.paginacion.limit)
        );
        const candlesData = await getDocs(q);
        this.paginacion.lastVisible =
          candlesData.docs[candlesData.docs.length - 1];
        this.paginacion.firstVisible = candlesData.docs[0];
        this.candles.length = 0;
        candlesData.forEach((doc) => {
          this.candles.push(doc);
        });
        this.paginacion.pagina++;
      } catch (e) {
        console.log(e);
      }
    },
    //BTN BACK CANDLES
    async backCandles() {
      try {
        const q = query(
          collection(db, "velas"),
          orderBy("fecha", "desc"),
          limitToLast(this.paginacion.limit + 1),
          endBefore(this.paginacion.firstVisible)
        );
        const candlesData = await getDocs(q);
        this.paginacion.lastVisible =
          candlesData.docs[candlesData.docs.length - 1];
        this.paginacion.firstVisible = candlesData.docs[0];
        this.candles.length = 0;
        candlesData.forEach((doc) => {
          this.candles.push(doc);
        });
        this.paginacion.pagina--;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
