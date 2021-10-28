import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAn0uvnVzWDI_yYgYkbjrQcU74BZTAYk9s",
  authDomain: "instagram-clone-313de.firebaseapp.com",
  projectId: "instagram-clone-313de",
  storageBucket: "instagram-clone-313de.appspot.com",
  messagingSenderId: "305533584034",
  appId: "1:305533584034:web:e2efb64096e344f508cdfb",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
