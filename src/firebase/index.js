import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj9R3OwWglP-tTh5pw0afgYTHlM_bPVUM",
  authDomain: "react-blogs-e919f.firebaseapp.com",
  projectId: "react-blogs-e919f",
  storageBucket: "react-blogs-e919f.appspot.com",
  messagingSenderId: "860353054538",
  appId: "1:860353054538:web:a06eaad5874c52e544a3b3",
};

const app = initializeApp(firebaseConfig);

//Connections
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
