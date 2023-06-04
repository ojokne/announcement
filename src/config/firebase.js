// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7ij6_spenYTnZLzKAqJIR8xCIK6i-a4",
  authDomain: "announcement-5cef0.firebaseapp.com",
  projectId: "announcement-5cef0",
  storageBucket: "announcement-5cef0.appspot.com",
  messagingSenderId: "978497257981",
  appId: "1:978497257981:web:e9b145f7cb0b29279b5994",
  measurementId: "G-F1WVFBYH3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
