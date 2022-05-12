import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAJfo29O2TB8xhL0xR6UgggHbLOa5vws9k",
  authDomain: "indian1-f25c2.firebaseapp.com",
  projectId: "indian1-f25c2",
  storageBucket: "indian1-f25c2.appspot.com",
  messagingSenderId: "829461594084",
  appId: "1:829461594084:web:77446a18e9f9f6951f91f1",
  measurementId: "G-QVZK881SD6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)