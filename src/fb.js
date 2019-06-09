import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCev-NgoT2OB8qGkUDy_KjaAFP8avW8o74",
    authDomain: "todo-ninja-8f1a5.firebaseapp.com",
    databaseURL: "https://todo-ninja-8f1a5.firebaseio.com",
    projectId: "todo-ninja-8f1a5",
    storageBucket: "todo-ninja-8f1a5.appspot.com",
    messagingSenderId: "585234639071",
    appId: "1:585234639071:web:997b892a19743bc7"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;