// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


export const firebaseConfig = {
  apiKey: "AIzaSyCvB4PKwnsZFsXxnkHxdmK7WKhh-hlL5lg",
  authDomain: "final-year-project-c65f3.firebaseapp.com",
  databaseURL: "https://final-year-project-c65f3-default-rtdb.firebaseio.com",
  projectId: "final-year-project-c65f3",
  storageBucket: "final-year-project-c65f3.appspot.com",
  messagingSenderId: "702037637251",
  appId: "1:702037637251:web:144df576e5825b9e16c3b6",
  measurementId: "G-6HGXCZGMS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




