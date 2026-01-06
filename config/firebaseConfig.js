// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh2CfMY67YUePCIlVOebU7KoguRmMEBHI",
  authDomain: "dine-time-20770.firebaseapp.com",
  projectId: "dine-time-20770",
  storageBucket: "dine-time-20770.firebasestorage.app",
  messagingSenderId: "119319031404",
  appId: "1:119319031404:web:26eeb0c62ff65adba1f249",
  measurementId: "G-Z3DFV6J7Y1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);