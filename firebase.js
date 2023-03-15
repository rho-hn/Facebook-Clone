import firebase from 'firebase/compat/app'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyDlzLPz1kfNuvtv5qHsbNi8eXL4yM6E4Bo",
    authDomain: "facebook-clone-yt-e77bc.firebaseapp.com",
    projectId: "facebook-clone-yt-e77bc",
    storageBucket: "facebook-clone-yt-e77bc.appspot.com",
    messagingSenderId: "50030264841",
    appId: "1:50030264841:web:fb711ffeebfaa218ed2ed8"
  };

  const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app
  const db = getFirestore(app);

  const storage = getStorage(app);

  export {db,storage}