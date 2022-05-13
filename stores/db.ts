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
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import dayjs from "dayjs";

export const useStore = defineStore("db", {
  state: () => ({
    candles: [],
    singleCandle: {},
    totalCandles: 0,
    totalLighted: 0,
    paginacion: {
      pagina: 1,
      totalPaginas: 1,
      limit: 9,
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
    async getDataCandles() {
      const q = query(collection(db, "velas"));
      const candles = await getDocs(q);
      this.totalCandles = candles.size;
      this.paginacion.totalPaginas = Math.ceil(
        this.totalCandles / this.paginacion.limit
      );
      this.paginacion.totalPaginas--;
      candles.forEach((doc) => {
        if (doc.data().isActive === true) this.totalLighted++;
      });
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
        this.paginacion.pagina = 1;
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
    async isNotActive(id) {
      try {
        const candle = doc(db, "velas", id);
        await updateDoc(candle, {
          isActive: false,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async getSingleCandle(id) {
      try {
        const data = doc(db, "velas", id);
        const candle = await getDoc(data);
        this.singleCandle = candle.data();
        // return candle.data()
      } catch (e) {
        console.log(e);
      }
    },
    getCandleTime(countdown, isActive, id, timeOff){
      const initTime = dayjs();
      const diffTime = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
      const time = dayjs(timeOff).valueOf() - dayjs(initTime).valueOf();
      countdown.value = dayjs(time).format("HH:mm:ss");
      if (diffTime < 0) {
        countdown.value = "Apagada";
        if (isActive === true) {
          this.isNotActive(id);
          this.totalLighted--;
        }
      }
    },
    async addTime(id, timeOff){
      try { 
        const data = doc(db, "velas", id);
        const newTimeOff = dayjs(timeOff).add(4, "hour").valueOf();
        await updateDoc(data, {
          timeOff: newTimeOff,
          timeUpdated: true
        });
      }
      catch (e) {
        console.log(e);
      }
    },
}
});
