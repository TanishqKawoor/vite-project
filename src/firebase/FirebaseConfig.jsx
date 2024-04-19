// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU0Q8ni9ePp238gzdLwkTRv1ygYShNi2s",
  authDomain: "myecom-e2f79.firebaseapp.com",
  projectId: "myecom-e2f79",
  storageBucket: "myecom-e2f79.appspot.com",
  messagingSenderId: "73788671833",
  appId: "1:73788671833:web:bca290bae229d1d7a66e48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }