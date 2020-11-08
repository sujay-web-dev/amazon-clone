import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvW54AyYe2eiXlNbu4L1iyfGChZAUM3Ao",
    authDomain: "sujayzon.firebaseapp.com",
    databaseURL: "https://sujayzon.firebaseio.com",
    projectId: "sujayzon",
    storageBucket: "sujayzon.appspot.com",
    messagingSenderId: "197974129484",
    appId: "1:197974129484:web:5d2643f99c6953132dede9",
    measurementId: "G-W5X41WTJJZ"
});

const auth = firebase.auth();

export { auth };