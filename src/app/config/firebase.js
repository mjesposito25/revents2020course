import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDemY0lGyFVusvxp5fS477rUV7aDWL3KkY",
  authDomain: "reventscourse-f0c39.firebaseapp.com",
  projectId: "reventscourse-f0c39",
  storageBucket: "reventscourse-f0c39.appspot.com",
  messagingSenderId: "45280135509",
  appId: "1:45280135509:web:21ed6fa3aa9fc3193ec7dc",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;