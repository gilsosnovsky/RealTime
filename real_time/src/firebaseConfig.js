import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDNXB2K37xOKi7xCYph9UNqHeK-ePDLJ1I",
  authDomain: "realtime-8bad3.firebaseapp.com",
  databaseURL: "https://realtime-8bad3.firebaseio.com",
  projectId: "realtime-8bad3",
  storageBucket: "realtime-8bad3.appspot.com",
  messagingSenderId: "631882428402",
  appId: "1:631882428402:web:14ef98d0c383e9dad4c56b",
  measurementId: "G-BWRB8J9KND"
};

var fire = firebase.initializeApp(config);

export default fire;