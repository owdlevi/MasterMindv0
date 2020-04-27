// src/db.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
