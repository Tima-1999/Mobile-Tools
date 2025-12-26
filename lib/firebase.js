import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9VcOHh0JT9QbxWDVGBbZgEUv_lMPaFbc",
  authDomain: "mobiletools-59969.firebaseapp.com",
  projectId: "mobiletools-59969",
  storageBucket: "mobiletools-59969.firebasestorage.app",
  messagingSenderId: "23535111426",
  appId: "1:23535111426:web:ca037e9ff2a88b1dbec61b"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
