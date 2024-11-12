import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js'
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc,getDocs ,doc, setDoc,updateDoc,serverTimestamp , arrayUnion, arrayRemove ,deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"


const firebaseConfig = {
    apiKey: "AIzaSyCtAHLHfBG8Bf_dZRWMYvXyRZIMrf4TfDI",
    authDomain: "profix-pk-92be0.firebaseapp.com",
    projectId: "profix-pk-92be0",
    storageBucket: "profix-pk-92be0.firebasestorage.app",
    messagingSenderId: "603153257563",
    appId: "1:603153257563:web:59bd34d302dd3957bb9b7e",
    measurementId: "G-X0PHXGW7TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth,getAuth, provider, initializeApp, app,db, firebaseConfig , createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged, sendEmailVerification, signOut,signInWithPopup,getFirestore, collection, addDoc,getDocs ,doc, setDoc,updateDoc,serverTimestamp , arrayUnion, arrayRemove ,deleteDoc, GoogleAuthProvider }