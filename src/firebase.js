import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAqV0uYaG_6MkCAUukJm8I10ZQsreSGzBo",
  authDomain: "linkedin-clone-377c7.firebaseapp.com",
  projectId: "linkedin-clone-377c7",
  storageBucket: "linkedin-clone-377c7.appspot.com",
  messagingSenderId: "735099619657",
  appId: "1:735099619657:web:f833d61ebcd169f16cf298"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };