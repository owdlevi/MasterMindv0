// src/db.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_MMIND_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_MMIND_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_MMIND_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_MMIND_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_MMIND_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MMIND_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MMIND_FIREBASE_APP_ID
}

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)

// export const db = firebase.firestore()
export default () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
}

// export const db = firebase.firestore()
// import firebase from 'firebase/app'
// import 'firebase/firestore'

export const loadFirestore = () => {
  try {
    firebase.initializeApp(firebaseConfig)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
  return firebase
}
