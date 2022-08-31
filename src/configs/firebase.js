import * as firebase from "firebase/app";
import * as projectAuth from "firebase/auth"
import * as Firestore from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs9Sr-zNkD7moR5dh1FK7Vn8_DXlPa4sI",
  authDomain: "imoney-fd9c6.firebaseapp.com",
  projectId: "imoney-fd9c6",
  storageBucket: "imoney-fd9c6.appspot.com",
  messagingSenderId: "1049042816504",
  appId: "1:1049042816504:web:27330d65bd3cbce3a29a0d",
  measurementId: "G-F6GWELS2TE"
};
firebase.initializeApp(firebaseConfig);

// const projectAuth = firebase.auth();
// const projectFirestore = firebase.firestore();

const timestamp = Firestore.serverTimestamp();
export {projectAuth, Firestore, timestamp};
