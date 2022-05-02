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
    async getAllCandles(){
      try {
        const first = query(
          collection(db, "velas"),
          orderBy("fecha", "desc"),
          limit(12)
        )
        const documentSnapshots = await getDocs(first);
        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      }
      catch {

      }
    }
  },
});
