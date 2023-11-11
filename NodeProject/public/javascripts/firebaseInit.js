  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAUN4AeQKiviheuyFs7tRwiuGtjRJ1z7lo",
    authDomain: "bookproject-8cf8c.firebaseapp.com",
    projectId: "bookproject-8cf8c",
    storageBucket: "bookproject-8cf8c.appspot.com",
    messagingSenderId: "393997904944",
    appId: "1:393997904944:web:179805a166da31f1cd91f5",
    measurementId: "G-7BNKM2Q5CH"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);