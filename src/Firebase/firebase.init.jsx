// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6TAJYlDjyw2fCKlRGfX4Bhp3uJPV5nEY",
  authDomain: "react-firebase-authinteg-81421.firebaseapp.com",
  projectId: "react-firebase-authinteg-81421",
  storageBucket: "react-firebase-authinteg-81421.firebasestorage.app",
  messagingSenderId: "794154295547",
  appId: "1:794154295547:web:20056e1a3980b36b4ad05e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)