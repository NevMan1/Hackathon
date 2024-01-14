// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyC19_MpWdcLnCyktjcpN7O_R3eSYGIbvgo",
  authDomain: "vocabhub-6f20f.firebaseapp.com",
  projectId: "vocabhub-6f20f",
  storageBucket: "vocabhub-6f20f.appspot.com",
  messagingSenderId: "990325792011",
  appId: "1:990325792011:web:1315867b935ad9e3bf560e",
};

// Initialize Firebase
try{
  firebase.initializeApp(firebaseConfig);
}
catch(e){
  console.log(e);
}