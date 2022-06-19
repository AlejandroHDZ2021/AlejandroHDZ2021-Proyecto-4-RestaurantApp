import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import env from 'react-dotenv'

const firebaseConfig = {
  apiKey: env.APY_KEY_FIREBASE,
  authDomain: "fb-restaurant-1ec78.firebaseapp.com",
  projectId: "fb-restaurant-1ec78",
  storageBucket: "fb-restaurant-1ec78.appspot.com",
  messagingSenderId: "620711523632",
  appId: "1:620711523632:web:2d4c10c45309d4256944f5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }


