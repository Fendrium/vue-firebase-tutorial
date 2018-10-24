import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAJU3U9r2YXbx1oVQc-UPDeuk8_5KMkJkU',
  authDomain: 'ninja-smoothies-88d7d.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-88d7d.firebaseio.com',
  projectId: 'ninja-smoothies-88d7d',
  storageBucket: 'ninja-smoothies-88d7d.appspot.com',
  messagingSenderId: '170489551843'
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();
