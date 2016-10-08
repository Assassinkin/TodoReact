import firebase from 'firebase';
var config = {
   apiKey: "AIzaSyBZ1RI50FjbfOQGo7c4LNA5zo5IJRQTwoU",
   authDomain: "psy-todo-app.firebaseapp.com",
   databaseURL: "https://psy-todo-app.firebaseio.com",
   storageBucket: "psy-todo-app.appspot.com",
   messagingSenderId: "254990026562"
 };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
 app: {
   name: 'Todo App',
   version: '0.1.0'
 },
 isRunning: true,
 user: {
   name: 'Psy',
   age: 23
 }
});


var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
  console.log('new todo added', snapshot.key, snapshot.val());
});
todosRef.push({
  text: 'play some league'
});
todosRef.push({
  text: 'play some league2'
});

// var noteRef = firebaseRef.child('notes');
// noteRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key,snapshot.val());
// });
// noteRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key,snapshot.val());
// });
// noteRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key,snapshot.val());
// });
// var newNoteRef = noteRef.push({
//   text: 'go to school'
// });
// console.log('Todo id ', newNoteRef.key);



//
// firebaseRef.child('user').on('value', (snapshot)=>{
//   console.log('user ref chnaged',snapshot.val());
// });
// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'something else'});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database',snapshot.key, snapshot.val());
// }, (e) =>{
//   console.log('unable to fetch object');
// });
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
// firebaseRef.on('value',logData );
// firebaseRef.off();
// firebaseRef.update({
//   isRunning: false
// });
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'todo app v2'
// });

// firebaseRef.child('app').update({
//   name: 'todo app v3'
// }).then(() => {
//   console.log('update successful');
// }, (e) =>{
//   console.log('update failed');
// });
// firebaseRef.update({
//   'app/name': 'todo app v4',
//   'user/name': 'el psy'
// });

// firebaseRef.child('app').update({
//   name: 'todo app v5'
// });
// firebaseRef.child('user').update({
//   name: 'ridha hh'
// });
// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();
