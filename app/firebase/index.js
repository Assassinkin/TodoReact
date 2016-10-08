import firebase from 'firebase';
try {
  var config = {
     apiKey: "AIzaSyBZ1RI50FjbfOQGo7c4LNA5zo5IJRQTwoU",
     authDomain: "psy-todo-app.firebaseapp.com",
     databaseURL: "https://psy-todo-app.firebaseio.com",
     storageBucket: "psy-todo-app.appspot.com",
     messagingSenderId: "254990026562"
   };
  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
