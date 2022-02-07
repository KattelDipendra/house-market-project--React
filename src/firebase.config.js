
import { initializeApp } from 'firebase/app';
import {getFirestore} from  'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB7MqBXI3lgWgTkdUtpR80Ai8KAfHkVTts",
  authDomain: "real-estate-app-41a3a.firebaseapp.com",
  projectId: "real-estate-app-41a3a",
  storageBucket: "real-estate-app-41a3a.appspot.com",
  messagingSenderId: "11268321713",
  appId: "1:11268321713:web:f55bfd3cdac41b7bcf4d90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore()