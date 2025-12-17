import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYSlsCpya0lq1XTCZbg3uKRWezjgJGrDw",
    authDomain: "driveway-33dd7.firebaseapp.com",
    databaseURL: "https://driveway-33dd7-default-rtdb.firebaseio.com",
    projectId: "driveway-33dd7",
    storageBucket: "driveway-33dd7.firebasestorage.app",
    messagingSenderId: "774495628670",
    appId: "1:774495628670:web:9f060969e992697957172f",
    measurementId: "G-N3PXP5VM39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
export const auth = getAuth(app);
