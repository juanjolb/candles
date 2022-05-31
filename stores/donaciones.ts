import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "~/firebaseConfig";

export const useStoreDonaciones = defineStore("donaciones", {
    actions: {
        async addDonation(obj){
            try {
             await addDoc(collection(db, "donaciones"), obj)
            }
            catch (e){
                console.log(e)
            }
        }
    }
});
