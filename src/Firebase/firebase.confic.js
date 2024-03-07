// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-tYxiLAsCPNZNkZwwMVnFG3hPOgrWHy4",
  authDomain: "healthcare-pathology.firebaseapp.com",
  projectId: "healthcare-pathology",
  storageBucket: "healthcare-pathology.appspot.com",
  messagingSenderId: "570785102832",
  appId: "1:570785102832:web:d4dc3f05868fe887b4fb35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;