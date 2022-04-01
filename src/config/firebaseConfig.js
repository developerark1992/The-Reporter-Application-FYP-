// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBx1H9YFkWi908F2YQ8JSYgf6-8ZV_u4SM",
    authDomain: "pm-citizen-portal.firebaseapp.com",
    databaseURL: "https://pm-citizen-portal.firebaseio.com",
    projectId: "pm-citizen-portal",
    storageBucket: "pm-citizen-portal.appspot.com",
    messagingSenderId: "414898851060"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;