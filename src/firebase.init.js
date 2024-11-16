// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAG9mhW_jLmVM7fRfw1ksplJVx6tyGpF8",
  authDomain: "auth-module-3-5d299.firebaseapp.com",
  projectId: "auth-module-3-5d299",
  storageBucket: "auth-module-3-5d299.firebasestorage.app",
  messagingSenderId: "708681172294",
  appId: "1:708681172294:web:a861ba6114b06b02da1147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);