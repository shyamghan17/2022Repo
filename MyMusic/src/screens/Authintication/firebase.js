
import {initializeApp} from 'firebase/app'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0GrAYC5twqF5kkiAOf4BtiG2xktveLgw",
  authDomain: "musicapp-1e0cd.firebaseapp.com",
  projectId: "musicapp-1e0cd",
  storageBucket: "musicapp-1e0cd.appspot.com",
  messagingSenderId: "919727678600",
  appId: "1:919727678600:web:f81ef395f8b7bba4f76b3d",
  measurementId: "G-9ME2Z027XT"
};
// onAuthStateChanged(auth, (user) => {
//     if (user) {
      
//       const uid = user.uid;
    
//     } else {
//      console.log('hello world ')
        
//     }
//   });

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
