import { doc, getDoc, updateDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "~/firebaseConfig";

export const useStoreProyectos = defineStore("proyectos", {

    state: () => ({
        project: {
            nombre: "",
            recaudado: 0,
            objetivo: 0,
            loading: true
        }
    }),
    actions: {
        async getProjectData(id) {
           try {
                const docRef = doc(db, "proyectos", id )
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.project = docSnap.data();
                    this.project.loading = false;
                }
           } catch (e) {
               console.log(e);
           }
        },
        async updateProjectDonation(id, donation) {
            try {
                console.log(donation);
                const docRef = doc(db, "proyectos", id );
                const docSnap = await getDoc(docRef);
                const value = docSnap.data().recaudado
                const newValue = parseInt(value) + parseInt(donation);
                await updateDoc(docRef, {
                    recaudado: newValue
                });
            } catch (e) {
                console.log(e);
            }
        }
    },
    getters: {
        calcPorcentaje(state) {
            return Math.ceil(state.project.recaudado * 100 / state.project.objetivo)      
        } 
    }
});
