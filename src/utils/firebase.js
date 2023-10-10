// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXcaQs63kyYr3rqniLiYifqgMJZk-h9Ok",
  authDomain: "netflixgpt-24b83.firebaseapp.com",
  projectId: "netflixgpt-24b83",
  storageBucket: "netflixgpt-24b83.appspot.com",
  messagingSenderId: "700838458046",
  appId: "1:700838458046:web:4b2623b504dd4db128a4ef",
  measurementId: "G-9RP4DGLQL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()