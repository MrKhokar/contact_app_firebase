import  firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCbbz1MtS80K3LBogxLHomaDBteNiJtAEk",
  authDomain: "crud-with-firebase-bc7d2.firebaseapp.com",
  databaseURL:
    "https://crud-with-firebase-bc7d2-default-rtdb.firebaseio.com",
  projectId: "crud-with-firebase-bc7d2",
  storageBucket: "crud-with-firebase-bc7d2.appspot.com",
  messagingSenderId: "54033554324",
  appId: "1:54033554324:web:c47d0241ff879cf8634d81",
};
// Initialize Firebase
// var fireDb = firebase.initializeApp(firebaseConfig);

export default firebase
  .initializeApp(firebaseConfig)
  .database()
  .ref();
