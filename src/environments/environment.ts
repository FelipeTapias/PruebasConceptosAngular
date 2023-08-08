// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcLdhcR8wxhRD8sI3Q7SJ-TjykSADhs9s",
  authDomain: "pruebaconcepto-d5b04.firebaseapp.com",
  projectId: "pruebaconcepto-d5b04",
  storageBucket: "pruebaconcepto-d5b04.appspot.com",
  messagingSenderId: "898139757045",
  appId: "1:898139757045:web:720f4d5a6023c131bfe8bc",
  measurementId: "G-Q4LLK3NP06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false
};



