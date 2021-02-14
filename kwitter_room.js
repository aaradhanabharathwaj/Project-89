var firebaseConfig = {
    apiKey: "AIzaSyCo1ztMz4MeqavqWJWpid7ktiIxfkwFt4g",
    authDomain: "lets-chat-bc194.firebaseapp.com",
    projectId: "lets-chat-bc194",
    storageBucket: "lets-chat-bc194.appspot.com",
    messagingSenderId: "236611727114",
    appId: "1:236611727114:web:a200f5693b70d0d3ee94f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function logout(){
   localStorage.removeItem("user_name")
   localStorage.removeItem("Room")
 window.location="index.html"
    }