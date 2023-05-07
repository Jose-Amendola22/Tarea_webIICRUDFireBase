// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVQWI373mPe2YboJBI3jmwv3k3YI0k27o",
  authDomain: "proyecto-firebase-a23ed.firebaseapp.com",
  projectId: "proyecto-firebase-a23ed",
  storageBucket: "proyecto-firebase-a23ed.appspot.com",
  messagingSenderId: "855538215855",
  appId: "1:855538215855:web:08e91bf4db9ed7166a1d5a",
  measurementId: "G-M13T35ZC15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);