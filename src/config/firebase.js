// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                  // Replace with your API key
  authDomain: "YOUR_AUTH_DOMAIN",          // Replace with your Auth Domain
  databaseURL: "YOUR_DATABASE_URL",        // Replace with your Database URL
  projectId: "YOUR_PROJECT_ID",            // Replace with your Project ID
  storageBucket: "YOUR_STORAGE_BUCKET",    // Replace with your Storage Bucket
  messagingSenderId: "YOUR_SENDER_ID",       // Replace with your Messaging Sender ID
  appId: "YOUR_APP_ID"                     // Replace with your App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Realtime Database and get a reference to the service
const database = getDatabase(app);

// Export the Firebase app, auth, and database for use in your project
export { app, auth, database };
