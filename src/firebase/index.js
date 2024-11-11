// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN6djjhtrivuttXARl7FvEzKx46gbQVLI",
  authDomain: "to-do-71751.firebaseapp.com",
  projectId: "to-do-71751",
  storageBucket: "to-do-71751.firebasestorage.app",
  messagingSenderId: "722413805918",
  appId: "1:722413805918:web:158128962d94f296546fcf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

const db = getFirestore();
export { db };
