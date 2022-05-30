import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDQwyahxA8juzS5IufexzvNCNNiTUbzD3k",
  authDomain: "waaw-authentication.firebaseapp.com",
  projectId: "waaw-authentication",
  storageBucket: "waaw-authentication.appspot.com",
  messagingSenderId: "957406351903",
  appId: "1:957406351903:web:2128bff6674d29bcf7fb2a",
  measurementId: "G-QW295ZVJV4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app)