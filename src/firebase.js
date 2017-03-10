import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBV-lARkZpV-yqwphLwJtAD4Vh2_V1CBAU",
  authDomain: "chat-with-friends-af4a0.firebaseapp.com",
  databaseURL: "https://chat-with-friends-af4a0.firebaseio.com",
  storageBucket: "chat-with-friends-af4a0.appspot.com",
  messagingSenderId: "364948018970"
};

firebase.initializeApp(config);

export default firebase;

// Export an instance of the database instead
export const database = firebase.database();