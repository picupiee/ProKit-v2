// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi1Ti7e7Dwc3PM2KYrA-B6u8oit1LCl88",
  authDomain: "prokit-2bc5c.firebaseapp.com",
  projectId: "prokit-2bc5c",
  storageBucket: "prokit-2bc5c.firebasestorage.app",
  messagingSenderId: "436684580127",
  appId: "1:436684580127:web:7091ec2e50e8aedad5bc2a",
  measurementId: "G-LW3346E9YN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
