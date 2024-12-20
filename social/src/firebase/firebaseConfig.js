
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaC1HZ3QgKgnfh6siXHNGroaIeFVcyP0A",
  authDomain: "socialmedia-12bf4.firebaseapp.com",
  projectId: "socialmedia-12bf4",
  storageBucket: "socialmedia-12bf4.firebasestorage.app",
  messagingSenderId: "891735477862",
  appId: "1:891735477862:web:21edc3765556945e3fe7a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;