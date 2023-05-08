  import firebase from 'firebase/app';
  import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCGAQi5II-DrWlwrQ85lDTCJNMtCk5GRzA",
    authDomain: "react-hooks-blog-21208.firebaseapp.com",
    projectId: "react-hooks-blog-21208",
    storageBucket: "react-hooks-blog-21208.appspot.com",
    messagingSenderId: "757474358795",
    appId: "1:757474358795:web:740cb73524a242dfd3f90e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firebase=firebase.firestore();