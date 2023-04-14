

// cd 1-todolist  , cd  start , cd task ,npm i ,npm start


//create firebase project in website





//1 create firebase.js

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore" // for database 

// const firebaseConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTHDOMAIN,
//   projectId: YOUR_PROJECTID,
//   storageBucket: YOUR_STORAGEBUCKET,
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
//   appId: YOUR_APPID
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)