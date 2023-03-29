import {initializeApp} from 'firebase/app'
import {getFirestore, Timestamp} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCPkFBQ12HNE4gDWE2gXwtmaP6yl4RuxWE",
    authDomain: "mybudget-28339.firebaseapp.com",
    projectId: "mybudget-28339",
    storageBucket: "mybudget-28339.appspot.com",
    messagingSenderId: "427543877455",
    appId: "1:427543877455:web:c1395e70a647509935973a"
  };

  //init firebase
  initializeApp(firebaseConfig)

  //init firesotre
  const db=getFirestore()

  //init firebase auth
  const auth = getAuth()

  //timestamp

  const timestamp = Timestamp
  
  export {db,auth, timestamp }