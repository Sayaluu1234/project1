import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY || "AIzaSyApFkt_8pnL8DixLHfTuoa779fNan-bvec",
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || "farmers-63d34.firebaseapp.com",
  projectId: import.meta.env.VITE_PROJECT_ID || "farmers-63d34",
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET || "farmers-63d34.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID || "417669371448",
  appId: import.meta.env.VITE_APP_ID || "1:417669371448:web:350e7aebeec017627078cd",
  measurementId: import.meta.env.VITE_MEASUREMENT_ID || "G-EHC2KG51XB"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;