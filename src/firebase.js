import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC74tc0_lLoLp-GBRUxOPqT567j_P4qi7Y",
  authDomain: "to-do-react-app-f0b6e.firebaseapp.com",
  databaseURL: "https://to-do-react-app-f0b6e-default-rtdb.firebaseio.com",
  projectId: "to-do-react-app-f0b6e",
  storageBucket: "to-do-react-app-f0b6e.appspot.com",
  messagingSenderId: "229778995253",
  appId: "1:229778995253:web:7890483c73c6d6b806d97c",
  measurementId: "G-EMDGXZEBTS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
