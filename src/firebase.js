import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyA8tUHaUT_slcYta4e2rdMvSwmcGGloRSs',
  authDomain: 'tiktok-clone-d2b35.firebaseapp.com',
  databaseURL: 'https://tiktok-clone-d2b35.firebaseio.com',
  projectId: 'tiktok-clone-d2b35',
  storageBucket: 'tiktok-clone-d2b35.appspot.com',
  messagingSenderId: '61097454273',
  appId: '1:61097454273:web:91167532e281f0d412c240',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
