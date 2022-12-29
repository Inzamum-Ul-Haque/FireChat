// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDtBLYHVPjHOGwdEDr3YGT-glGYDvjoBc",
  authDomain: "firechat-24b94.firebaseapp.com",
  projectId: "firechat-24b94",
  storageBucket: "firechat-24b94.appspot.com",
  messagingSenderId: "706886435178",
  appId: "1:706886435178:web:eaa730a1887e22fe74a513",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
