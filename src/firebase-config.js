import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC74tc0_lLoLp-GBRUxOPqT567j_P4qi7Y",
  authDomain: "to-do-react-app-f0b6e.firebaseapp.com",
  projectId: "to-do-react-app-f0b6e",
  storageBucket: "to-do-react-app-f0b6e.appspot.com",
  messagingSenderId: "229778995253",
  appId: "1:229778995253:web:7890483c73c6d6b806d97c",
  measurementId: "G-EMDGXZEBTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
