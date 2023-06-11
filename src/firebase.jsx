import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbYKtMiz0finqitb8mcjKymm4o5DeHjvA",
  authDomain: "microproyecto2-b1555.firebaseapp.com",
  projectId: "microproyecto2-b1555",
  storageBucket: "microproyecto2-b1555.appspot.com",
  messagingSenderId: "83774112630",
  appId: "1:83774112630:web:db7c022969a207a79c3057",
  measurementId: "G-ZTZ9232VMW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
export const db = getFirestore(app);
export const store = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select-account"});
