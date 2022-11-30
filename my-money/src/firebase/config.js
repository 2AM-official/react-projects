import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAzwdKqF8ZRudt6FQCc9b3Ir4DgrAj5j5o",
    authDomain: "mymoney-b3faf.firebaseapp.com",
    projectId: "mymoney-b3faf",
    storageBucket: "mymoney-b3faf.appspot.com",
    messagingSenderId: "209645322611",
    appId: "1:209645322611:web:5b7952b4cf12c78634c506"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()

export { projectFirestore }