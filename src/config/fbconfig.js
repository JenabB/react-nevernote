import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD3fAnVs4UMLA3k4hW1kCN2psao1r9o9_I',
  authDomain: 'react-nevernote.firebaseapp.com',
  databaseURL: 'https://react-nevernote-default-rtdb.firebaseio.com',
  projectId: 'react-nevernote',
  storageBucket: 'react-nevernote.appspot.com',
  messagingSenderId: '434978151281',
  appId: '1:434978151281:web:58ea18d3dc023a294a34d0',
  measurementId: 'G-FENTJLLERY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
