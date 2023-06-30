import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtAF84j-0hnGKILtSzEpTUTAFhjCJMphk",
  authDomain: "gedankensenf.firebaseapp.com",
  databaseURL: "https://gedankensenf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gedankensenf",
  storageBucket: "gedankensenf.appspot.com",
  messagingSenderId: "349961378721",
  appId: "1:349961378721:web:477c797aaf5cd84c8289e0",
  measurementId: "G-73J7V1274P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { db };
