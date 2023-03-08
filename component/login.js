import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyD4EbtpfdRukyNzf9bYbIGkAGpTT6AX4aI",
  authDomain: "restaurent-cd5da.firebaseapp.com",
  projectId: "restaurent-cd5da",
  storageBucket: "restaurent-cd5da.appspot.com",
  messagingSenderId: "158773476099",
  appId: "1:158773476099:web:6554b5b44f2309ab26c736",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const signIn = document.getElementById("log-in");


signIn.addEventListener("click", (event) => {
  let email = document.getElementById("usermail").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location.assign("./index.html");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});
