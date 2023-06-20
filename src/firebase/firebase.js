// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOBYWBautv-hqsFKS4k0FltxGlQzDWQvc",
  authDomain: "tmdt-dc285.firebaseapp.com",
  projectId: "tmdt-dc285",
  storageBucket: "tmdt-dc285.appspot.com",
  messagingSenderId: "805884939307",
  appId: "1:805884939307:web:a256e017e7edcbcee36e6e",
  measurementId: "G-6VR6MVSZ0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
 
export {storage};