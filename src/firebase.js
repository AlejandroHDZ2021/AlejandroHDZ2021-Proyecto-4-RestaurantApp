import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHGBTK9dmtJWLzOQ9qR6WTBAZTYs_D7yw",
    authDomain: "fb-crud-react-37876.firebaseapp.com",
    projectId: "fb-crud-react-37876",
    storageBucket: "fb-crud-react-37876.appspot.com",
    messagingSenderId: "223059222053",
    appId: "1:223059222053:web:e896584b31da2cf0f929cc"
  };

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);

export { db }