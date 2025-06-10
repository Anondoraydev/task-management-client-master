// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBBAP14gbBiB-hORTxa3Md-gTV-xo3CZdA",
  authDomain: "task-management-c506c.firebaseapp.com",
  projectId: "task-management-c506c",
  storageBucket: "task-management-c506c.appspot.com",
  messagingSenderId: "747055700065",
  appId: "1:747055700065:web:a761df1d9809267d5ef220",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
