// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS8cBuct4CtvInCG-hh6FLbU6pKUsgxqw",
  authDomain: "carpishop-f21a7.firebaseapp.com",
  projectId: "carpishop-f21a7",
  storageBucket: "carpishop-f21a7.appspot.com",
  messagingSenderId: "849043901870",
  appId: "1:849043901870:web:56a1bcd4fd4adddfc48c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);