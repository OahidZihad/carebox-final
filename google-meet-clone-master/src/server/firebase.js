import firebase from "firebase";

var firebaseConfig = {
  /// Debashish bhai
  // apiKey: "AIzaSyDWQEpnnLjqa0aWhNNvUiGqST3qTrCi13o", // Add API Key
  // databaseURL:"https://carebox-doctor-live-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL


  ////zihad
  apiKey: "AIzaSyC7bisZl1MAji4eWzk8RTohr9QhmIBha-4",  // Add API Key
  databaseURL:"https://online-doctor-bf05f-default-rtdb.firebaseio.com/" // Add databaseURL

  ///nayeem bhaia
  // apiKey: "AIzaSyCYrGxvIrCJvLzaR6pNDzymKbM3Au0KBTg", // Add API Key
  // databaseURL:"https://rtc-doctor-portal-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC7bisZl1MAji4eWzk8RTohr9QhmIBha-4",
//   authDomain: "online-doctor-bf05f.firebaseapp.com",
//   databaseURL: "https://online-doctor-bf05f-default-rtdb.firebaseio.com",
//   projectId: "online-doctor-bf05f",
//   storageBucket: "online-doctor-bf05f.appspot.com",
//   messagingSenderId: "132164590455",
//   appId: "1:132164590455:web:ad402a32a83af1e6275f72"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);








export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
