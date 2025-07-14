// config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEdeN5nZWBw2zluQn52LFfWcVD1CwKvRI",
  authDomain: "bd-demon-store.firebaseapp.com",
  projectId: "bd-demon-store",
  storageBucket: "bd-demon-store.firebasestorage.app",
  messagingSenderId: "771405752750",
  appId: "1:771405752750:web:dc26d8417e20f317bcc03f"
};

const app = initializeApp(firebaseConfig);

export { app };
