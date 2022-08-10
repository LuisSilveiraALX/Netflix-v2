import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDk6ruJk2A3X5E0CHhu0PlRnoxcDv1QrV8",
  authDomain: "react-netflix-clone-9b282.firebaseapp.com",
  projectId: "react-netflix-clone-9b282",
  storageBucket: "react-netflix-clone-9b282.appspot.com",
  messagingSenderId: "332170493164",
  appId: "1:332170493164:web:414030667e8d66d2db79c9",
  measurementId: "G-V8YWDH2PV9"
};



const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);