import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDpddMqm6BSAYhvtgDm2gu18N0uoE0v6bU",
  authDomain: "clonetiktok-c843e.firebaseapp.com",
  projectId: "clonetiktok-c843e",
  storageBucket: "clonetiktok-c843e.appspot.com",
  messagingSenderId: "451737025890",
  appId: "1:451737025890:web:e6f02594cbc54ec086003b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;