import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore , collection ,addDoc ,setDoc} from"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
const firebaseConfig = {
    apiKey: "AIzaSyD4EbtpfdRukyNzf9bYbIGkAGpTT6AX4aI",
    authDomain: "restaurent-cd5da.firebaseapp.com",
    projectId: "restaurent-cd5da",
    storageBucket: "restaurent-cd5da.appspot.com",
    messagingSenderId: "158773476099",
    appId: "1:158773476099:web:6554b5b44f2309ab26c736"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const submit = document.getElementById('submit');
const day = document.getElementById('Day');
const time = document.getElementById('Time');
const fullname = document.getElementById('fullname');
const phonenumber = document.getElementById('phonenum');
const nop = document.getElementById('nop');









// add doc




 async function AddDocument_AutoId(){


    let ref = collection(db,"dbs");


    if(day === "" || time === ""|| fullname ==="" || phonenumber==="" || nop ===""){

        alert("Your input is empty")

    }
   

    const docRef =  await addDoc(ref, { 

        Day :day,
        Time :time,
        username : fullname,
        mobileNum:phonenumber,
        Nop:nop


    })  .then(()=> 
          alert('successfully book your table')

    )
      
    window.location.assign("./index.html");


      console.log("Document written with ID: ", docRef.id);

     

    
   
    
}


submit.addEventListener('click',()=>{

    AddDocument_AutoId();
    
})


