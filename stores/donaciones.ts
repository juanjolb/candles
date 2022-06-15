import { addDoc, collection, doc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "~/firebaseConfig";

export const useStoreDonaciones = defineStore("donaciones", {
    state: () => ({
        limitedDonatorsArray: [],
        allDonatorsArray: [],
    }),
    actions: {
        async addDonation(obj){
            try {
                await addDoc(collection(db, "donaciones"), obj)
            }
            catch (e){
                console.log(e)
            }
        },
        async getDonation(order){
            try{
                const donations = collection(db, "donaciones");
                const q = query(donations, where("order", "==", order))
                const querySnapshot = await getDocs(q);
                if (querySnapshot.docs.length == 1){
                    return querySnapshot.docs[0]
                } else {
                    console.log('documento duplicado o no se encuentra el documento')
                }
            }
            catch (e){
                console.log(e);
            }
        },
        async updatePaymentDonation(id, data){
            try {
                const donation = doc(db, "donaciones", id);
                await updateDoc(donation, data);
            }
            catch (e){
                console.log(e)
            }
        },
        async getLimitedDonators(projectId) {
            try {
                const donations = collection(db, "donaciones");
                const q = query(
                    donations, 
                    where("projectId", "==", projectId),
                    orderBy("date", "desc"),
                    limit(5)
                )
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                     if ( doc.data().anonymous !== true ) { this.limitedDonatorsArray.push(doc) }
                })
            }
            catch (e){
                console.log(e);
            }
        },
        async getAllDonators(projectId) {
            try {
                const donations = collection(db, "donaciones");
                const q = query(
                    donations, 
                    where("projectId", "==", projectId),
                    orderBy("date", "desc"),
                )
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    if ( doc.data().anonymous !== true ) { this.allDonatorsArray.push(doc) }
                })
            }
            catch (e){
                console.log(e);
            }
        }
    }
});
