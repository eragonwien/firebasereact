import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyCnaEAdxfh-ORMFTQ8z_-lfuBVnCP96Z1Q',
  authDomain: 'reactheroes.firebaseapp.com',
  databaseURL: 'https://reactheroes.firebaseio.com',
  projectId: 'reactheroes',
  storageBucket: 'reactheroes.appspot.com',
  messagingSenderId: '318533948206'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);  
}

const auth = firebase.auth();

const storage = firebase.storage();

export {
  auth,
  firebase,
  storage
};