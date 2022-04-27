import { defineStore } from "pinia";
import { db } from "~/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export const useStore = defineStore("db", {
  state: () => ({
    candles: [],
  }),
  //ADD CANDLE
  actions: {
    async addCandle(candle) {
      try {
        await addDoc(collection(db, "velas"), candle);
      } catch (e) {
        console.log(e);
      }
    },
    //GET CANDLE
    async getCandlesIndex() {
      try {
        const q = query(
          collection(db, "velas"),
          orderBy("fecha", "desc"),
          limit(8)
        );
        const allCandles = await getDocs(q);
        allCandles.forEach((doc) => {
          this.candles.push(doc);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
});
