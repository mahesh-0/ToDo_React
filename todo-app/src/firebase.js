import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgE81St3vJ2A1lohfBp5wcOEci889SHVs",
    authDomain: "todo-fad01.firebaseapp.com",
    projectId: "todo-fad01",
    storageBucket: "todo-fad01.appspot.com",
    messagingSenderId: "750788573817",
    appId: "1:750788573817:web:1bb7e6f374eadd6e2532a8",
    measurementId: "G-R7YWWWMZ7N"
  };

  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };