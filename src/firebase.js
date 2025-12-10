// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAFWYAngeByhZnPlemrmFqOPeoBz1TYAQ",
  authDomain: "axyy-9568a.firebaseapp.com",
  projectId: "axyy-9568a",
  storageBucket: "axyy-9568a.firebasestorage.app",
  messagingSenderId: "70917780326",
  appId: "1:70917780326:web:9387c9a63d3280475c0ea7",
  measurementId: "G-SXGP4PLSJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Auth service
export const auth = getAuth(app);