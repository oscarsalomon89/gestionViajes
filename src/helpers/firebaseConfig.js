import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyDmu9wnXxqULk_t5By4BnHTymeOqgf-o6M",
    authDomain: "gestionviajes-dc7aa.firebaseapp.com",
    databaseURL: "https://gestionviajes-dc7aa.firebaseio.com",
    projectId: "gestionviajes-dc7aa",
    storageBucket: "",
    messagingSenderId: "374292151668"
  };

  var app = firebase.initializeApp(config)

  export const db = app.database()