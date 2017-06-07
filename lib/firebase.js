const firebase = require("firebase/app");
                 require("firebase/database")
                 require("firebase/storage")

const config = {
   apiKey: "AIzaSyDK2xAToZRBVOXkGoFnuQEdeIP_9SFXs2U",
   authDomain: "personal-site-523e2.firebaseapp.com",
   databaseURL: "https://personal-site-523e2.firebaseio.com",
   storageBucket: "personal-site-523e2.appspot.com",
   messagingSenderId: "240006480845"
 };
 firebase.initializeApp(config);

 const database = firebase.database();
 const storage = firebase.storage();
 export const gsRef = storage.refFromURL('gs://personal-site-523e2.appspot.com/');

 export const reference = firebase.database().ref('messages');

 export default firebase;
