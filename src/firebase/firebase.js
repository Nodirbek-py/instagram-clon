import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAnbMruC-uF2WaYEoEE5jT_dVcYpy_GwN0",
    authDomain: "instagram-clone-3eef2.firebaseapp.com",
    projectId: "instagram-clone-3eef2",
    storageBucket: "instagram-clone-3eef2.appspot.com",
    messagingSenderId: "940400193429",
    appId: "1:940400193429:web:650055e1fd1b519926909c"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export {db, auth, storage, firebaseapp}