import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyAWmInu5OO1jVBzMW8YAUCeE33hiHK24HQ',
  authDomain: 'hello-d885d.firebaseapp.com',
  databaseURL: 'https://hello-d885d.firebaseio.com',
  projectId: 'hello-d885d',
  storageBucket: 'hello-d885d.appspot.com',
  messagingSenderId: '853833141899'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);  
}

const auth = firebase.auth();

export {
  auth
};