// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCES4AVUctaR3anifMaUbFFFpiVt9pqaUI",
  authDomain: "linkedin-clone-4bb87.firebaseapp.com",
  projectId: "linkedin-clone-4bb87",
  storageBucket: "linkedin-clone-4bb87.appspot.com",
  messagingSenderId: "498440449885",
  appId: "1:498440449885:web:a76b8644d0a21b7e5682b4"
};

   const firebaseApp = firebase.initializeApp(firebaseConfig)
   export const auth = firebase.auth();
   export const firestore  = firebase.firestore();

   //  const app = initializeApp(firebaseConfig);
  // export const auth = getAuth() // const firestore = getFirestore(app)
  // export const db = getFirestore(); 




