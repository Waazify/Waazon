import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD766TO6rvhnHm-svenWZsRcbDlvgGE5DE",
  authDomain: "waazon-bc6f5.firebaseapp.com",
  projectId: "waazon-bc6f5",
  storageBucket: "waazon-bc6f5.appspot.com",
  messagingSenderId: "134486992728",
  appId: "1:134486992728:web:e88e6995b8f8ada7c3672d",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
