// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLvUOUMXDRj1b80UDpKIZv1hTif41gd30",
    authDomain: "task-4a0a2.firebaseapp.com",
    projectId: "task-4a0a2",
    storageBucket: "task-4a0a2.appspot.com",
    messagingSenderId: "834872069974",
    appId: "1:834872069974:web:07fe16ac691542d9a250f7"
}




// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)