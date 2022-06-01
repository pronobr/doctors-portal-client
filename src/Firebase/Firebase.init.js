// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9jMlBzglNHKyqFDCd1GMHBvNsl1Nwo6U",
  authDomain: "doctor-portal-43e13.firebaseapp.com",
  projectId: "doctor-portal-43e13",
  storageBucket: "doctor-portal-43e13.appspot.com",
  messagingSenderId: "547692674748",
  appId: "1:547692674748:web:40aa7a349a4b32701cdab9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;