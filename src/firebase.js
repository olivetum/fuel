import firebase from "firebase/compat";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCUtDxhovH9Hr1V-qZHmnrXKIWvqd2KB2w",
  authDomain: "fuelfactor-fdd66.firebaseapp.com",
  projectId: "fuelfactor-fdd66",
  storageBucket: "fuelfactor-fdd66.appspot.com",
  messagingSenderId: "43696861783",
  appId: "1:43696861783:web:58d9d0708f965bf3b66912",
  measurementId: "G-ZWW6TCQEDX"
};

const app = !firebase.apps.length ? initializeApp(config) : firebase.app();
export const db = getFirestore(app);


// await addDoc(collection(db, 'stations'), {
//   name: "Tokyo",
// });


