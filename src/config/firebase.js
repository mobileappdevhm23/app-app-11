// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "...",
  authDomain: "gedankensenf.firebaseapp.com",
  projectId: "gedankensenf",
  storageBucket: "gedankensenf.appspot.com",
  messagingSenderId: "349961378721",
  appId: "1:349961378721:web:477c797aaf5cd84c8289e0",
  measurementId: "G-73J7V1274P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);