
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyD4EbtpfdRukyNzf9bYbIGkAGpTT6AX4aI",
    authDomain: "restaurent-cd5da.firebaseapp.com",
    projectId: "restaurent-cd5da",
    storageBucket: "restaurent-cd5da.appspot.com",
    messagingSenderId: "158773476099",
    appId: "1:158773476099:web:6554b5b44f2309ab26c736"
};



const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();



const submit = document.getElementById('Sign-up');

submit.addEventListener('click', e => {

    let email = document.getElementById('usermail').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // sign-up
            const user = userCredential.user;
            localStorage.setItem('user', user);
            window.location.assign("./index.html");



        })
        .catch((error) => {

            //error
            const errorcode = error.code;
            const errormessage = error.message;

            alert(errormessage);



        });
});




