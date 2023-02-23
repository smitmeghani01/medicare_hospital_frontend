// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCqx5Fmv21exf5UNsEriBwFlfBA7maM3K4",
  authDomain: "hospitalmanagement-f9cb8.firebaseapp.com",
  projectId: "hospitalmanagement-f9cb8",
  storageBucket: "hospitalmanagement-f9cb8.appspot.com",
  messagingSenderId: "487467859810",
  appId: "1:487467859810:web:7a1af029b4db9df69df63b",
  measurementId: "G-FMFZ8L8L7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)

