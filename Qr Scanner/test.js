// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9dXRih-NuqFhigSL_XFAgmOhEsl-pVzg",
  authDomain: "vc-test-9c002.firebaseapp.com",
  projectId: "vc-test-9c002",
  storageBucket: "vc-test-9c002.appspot.com",
  messagingSenderId: "34778081823",
  appId: "1:34778081823:web:7241eea271a3d500c1c32a",
  measurementId: "G-KMR8K6P46E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

//End FireBase
