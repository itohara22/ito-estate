// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-cv.firebaseapp.com",
  projectId: "mern-cv",
  storageBucket: "mern-cv.appspot.com",
  messagingSenderId: "104719675669",
  appId: "1:104719675669:web:35884b49fdee24de7cf91c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
