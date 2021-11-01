// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0HHwNCN47Kfr0XFmxKg1On3tlnYWK2m4",
  authDomain: "robinm5stacktest1.firebaseapp.com",
  databaseURL: "https://robinm5stacktest1-default-rtdb.firebaseio.com",
  projectId: "robinm5stacktest1",
  storageBucket: "robinm5stacktest1.appspot.com",
  messagingSenderId: "630906961493",
  appId: "1:630906961493:web:ac75ac1e5fe722b4f35edc",
  measurementId: "G-9W6T9ER4S0"
};

// Initialize Firebase
// let app;
// if (app.length===0){
//     app = initializeApp(firebaseConfig);
// } else {
//     app=app();
// }
const firebaseApp = initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
console.log('firebaseApp : ', firebaseApp);
export {auth};