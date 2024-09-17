// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf65AAnBglIOLquRZo559XS3EiwcsRd20",
  authDomain: "beatsalchemy-33e50.firebaseapp.com",
  projectId: "beatsalchemy-33e50",
  storageBucket: "beatsalchemy-33e50.appspot.com",
  messagingSenderId: "201044998810",
  appId: "1:201044998810:web:abbfaa6b202fe6dc08fd23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
