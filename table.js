import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore , collection, addDoc,getDocs ,getDoc,doc} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyD4EbtpfdRukyNzf9bYbIGkAGpTT6AX4aI",
  authDomain: "restaurent-cd5da.firebaseapp.com",
  projectId: "restaurent-cd5da",
  storageBucket: "restaurent-cd5da.appspot.com",
  messagingSenderId: "158773476099",
  appId: "1:158773476099:web:6554b5b44f2309ab26c736",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const bookTable = document.querySelector("#submit");


bookTable.addEventListener('click', submit);



async function submit(){

 let usermail = document.querySelector("#username");
 let username = document.querySelector("#usermail");
 let  time = document.querySelector("#time");
 let date = document.querySelector("#date");
 let nop = document.querySelector("#nop");
 let phonenum = document.querySelector("#phone");

    let ref = collection(db,"dbs");
    const docref = await addDoc(
        ref ,{

            username : username.value,
            usermail:usermail.value,
            time :time.value,
            date :date.value,
            nop:nop.value,
            phonenumber:phonenum.value

        }
    ).then(()=>{

        alert("Successfully Book Your Table")
    }).catch((err)=>{

        alert("error!")
    })

    console.log(docref.id);

}




