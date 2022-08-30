import * as firebase from "firebase/app";
import * as projectAuth from "firebase/auth"
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzasdasdasdasdas",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""

};
firebase.initializeApp(firebaseConfig);

// const projectAuth = firebase.auth();
// const projectFirestore = firebase.firestore();

const timestamp = firestore.serverTimestamp();
export { projectAuth, firestore, timestamp };

