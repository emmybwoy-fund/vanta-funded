import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCzWSWtoSWljrA3R3_LOJ13Qs1uVfwNprw",
    authDomain: "vanta-funded.firebaseapp.com",
    projectId: "vanta-funded",
    storageBucket: "vanta-funded.firebasestorage.app",
    messagingSenderId: "231093135997",
    appId: "1:231093135997:web:d04c032a3eda5b7e151f14"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Authentication
const auth = getAuth(app);


// Google provider
const googleProvider = new GoogleAuthProvider();


// Export Firebase functions
export {
    auth,
    googleProvider,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
};