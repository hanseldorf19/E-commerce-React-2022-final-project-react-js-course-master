// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyDtvHKO0spK629z_u43l3nEi4QNdj0d_Ks',
  authDomain: "la-mejor-horchata-cbf3e.firebaseapp.com",
  projectId: "la-mejor-horchata-cbf3e",
  storageBucket: "la-mejor-horchata-cbf3e.appspot.com",
  messagingSenderId: "456639774706",
  appId: "1:456639774706:web:de11149022f4a8b410356b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Crear Instancia de la base de datos

export const db = getFirestore(app);