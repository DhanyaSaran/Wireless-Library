import firebase from 'firebase'


var firebaseConfig = {
     apiKey: "AIzaSyAMtOPQc2zmVDT_1CLsYvWTXiFV7E9uXnA",
    authDomain: "willy-124da.firebaseapp.com",
    databaseURL: "https://willy-124da.firebaseio.com",
    projectId: "willy-124da",
    storageBucket: "willy-124da.appspot.com",
    messagingSenderId: "363040491816",
    appId: "1:363040491816:web:38480b0eab72ed6b86281d"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}

  export default firebase.firestore();

