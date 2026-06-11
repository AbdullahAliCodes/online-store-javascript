import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK62daAjjrShcIbcst3zuCKvh0Ii0Q3kg",
  authDomain: "urbanthreadsstore-db265.firebaseapp.com",
  projectId: "urbanthreadsstore-db265",
  storageBucket: "urbanthreadsstore-db265.firebasestorage.app",
  messagingSenderId: "685476620860",
  appId: "1:685476620860:web:70d4b3638fb84eaf31f139",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);
// auth services
export const auth = getAuth();
