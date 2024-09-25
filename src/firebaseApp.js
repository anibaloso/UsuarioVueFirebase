// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVjCPuxI-wRR3JoIfPDzcoZNggVBlkm8I",
  authDomain: "ejercicio-crud-2a60b.firebaseapp.com",
  projectId: "ejercicio-crud-2a60b",
  storageBucket: "ejercicio-crud-2a60b.appspot.com",
  messagingSenderId: "54940199199",
  appId: "1:54940199199:web:be53695458df1c0503282a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $db =getFirestore(app) 
export { $db }