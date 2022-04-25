// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaKzxKKPe0KDD_AmLSSBxtUKy0NybZ8lA",
  authDomain: "velas-catedral-de-mallorca.firebaseapp.com",
  projectId: "velas-catedral-de-mallorca",
  storageBucket: "velas-catedral-de-mallorca.appspot.com",
  messagingSenderId: "104567597965",
  appId: "1:104567597965:web:f56628f99b073de9c32bc4",
  measurementId: "G-THYGNV0BH1",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
