

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBjbu39kl3TDGAW8AuE0x3dB4Z6Sd-JeBA",
    authDomain: "mymoney-project-67cfb.firebaseapp.com",
    projectId: "mymoney-project-67cfb",
    storageBucket: "mymoney-project-67cfb.appspot.com",
    messagingSenderId: "435240921830",
    appId: "1:435240921830:web:82f7f951da5e48994da927"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }

  