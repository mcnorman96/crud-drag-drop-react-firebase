import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

let firebaseConfig = {
  apiKey: "AIzaSyB4VwDKW0vXb_omUE7JdP6JfEkSzhJ4vjE",
  authDomain: "movieprototype.firebaseapp.com",
  databaseURL: "https://movieprototype.firebaseio.com",
  projectId: "movieprototype",
  storageBucket: "movieprototype.appspot.com",
  messagingSenderId: "496661360704",
  appId: "1:496661360704:web:199c913c73668ef51c6fa5"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
