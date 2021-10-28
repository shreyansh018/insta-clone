import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwSubBcZ6h7LL8rW5IMwDf-lqarK-LisQ",
  authDomain: "insta-clone-c5e1c.firebaseapp.com",
  projectId: "insta-clone-c5e1c",
  storageBucket: "insta-clone-c5e1c.appspot.com",
  messagingSenderId: "58795945555",
  appId: "1:58795945555:web:d76fd18a2ae90fef3ea0a6",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
