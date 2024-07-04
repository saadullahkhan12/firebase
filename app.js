
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getAuth ,onAuthStateChanged  ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCXkniKthG95Jsvt-UfR2Y4DT4uhFZ9S9Y",
    authDomain: "ecommercemyweb.firebaseapp.com",
    projectId: "ecommercemyweb",
    storageBucket: "ecommercemyweb.appspot.com",
    messagingSenderId: "406837013072",
    appId: "1:406837013072:web:069aee407f494eee21ff55",
    measurementId: "G-W936WQR4SW"
  };


  const signup_email = document.getElementById("signup_email")
  const signup_password = document.getElementById("signup_password")
  const signup_btn = document.getElementById("signup_btn")
  signup_btn.addEventListener("click",createUserAccount)




  const signin_email = document.getElementById("signin_email")
  const signin_password = document.getElementById("signin_password")
  const signin_btn = document.getElementById("signin_btn")
  signin_btn.addEventListener("click",signin)



  
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  console.log(app)
  console.log(auth)

onAuthStateChanged(auth, (user) => {
    if (user) {
     
        console.log("user is login ")
      const uid = user.uid;
      // ...
    } else {
      // ...
      console.log("user is not login ")
    }
  });


  
  function createUserAccount() {
   // console.log("user email  ===>",signup_email.value)
     //  console.log("user password ====>",signup_password.value)
       
     }
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  function signin() {
  console.log("user email  ===>",signup_email.value)
      console.log("user password ====>",signup_password.value)
        
      }


