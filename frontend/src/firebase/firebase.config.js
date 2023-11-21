// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqUqSpqt8YNs7cQl2Poy-IXtv3CtoRmVc",
  authDomain: "inventory-managment-83329.firebaseapp.com",
  projectId: "inventory-managment-83329",
  storageBucket: "inventory-managment-83329.appspot.com",
  messagingSenderId: "773719683422",
  appId: "1:773719683422:web:3754ece4e2e051291e9fcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;