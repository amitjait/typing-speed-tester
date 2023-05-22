import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6aAvQNRtW2m7crCWIX6lcY3sG76ClSHc",
    authDomain: "typing-test-web.firebaseapp.com",
    projectId: "typing-test-web",
    storageBucket: "typing-test-web.appspot.com",
    messagingSenderId: "400475671531",
    appId: "1:400475671531:web:7cd699d2ad4fc88aca27ae",
    measurementId: "G-VNSY69KDEX"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db  = firebaseApp.firestore();

  export {auth, db};
