// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoll3CjLJfvU9XX7pb7x_5X0p2M58XmWc",
  authDomain: "th-assignment-2b1b9.firebaseapp.com",
  projectId: "th-assignment-2b1b9",
  storageBucket: "th-assignment-2b1b9.firebasestorage.app",
  messagingSenderId: "470072333958",
  appId: "1:470072333958:web:4bce82eb9972f22356a307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);