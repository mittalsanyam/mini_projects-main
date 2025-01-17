import { initializeApp } from "firebase/app"
import { Firestore, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0TBdeDUyqe8uxCc6w4F38xpsX1Z0V8e8",
    authDomain: "practice-vue-firebase-sites.firebaseapp.com",
    projectId: "practice-vue-firebase-sites",
    storageBucket: "practice-vue-firebase-sites.firebasestorage.app",
    messagingSenderId: "479566916330",
    appId: "1:479566916330:web:1eb1c80ea2e4a7bcb34593"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = getFirestore()

export { projectFirestore }