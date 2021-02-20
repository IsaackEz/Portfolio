// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBFJQLzEz0X6AdSn-x7__k8G7A9ZixzYuU",
    authDomain: "portfolio-isaackez.firebaseapp.com",
    projectId: "portfolio-isaackez",
    storageBucket: "portfolio-isaackez.appspot.com",
    messagingSenderId: "1061464298321",
    appId: "1:1061464298321:web:aa968873719ac304107970",
    measurementId: "G-NE578CYEQ5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();