// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from  'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCubYL3tDekiCOmfqXDPxBN1GL3buTiPj8",
  authDomain: "clone-3543f.firebaseapp.com",
  projectId: "clone-3543f",
  storageBucket: "clone-3543f.appspot.com",
  messagingSenderId: "179463464643",
  appId: "1:179463464643:web:a7afbc89f049d2249da476",
  measurementId: "G-CB459C7P01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.db;
const auth = getAuth(app)

export {db,auth}