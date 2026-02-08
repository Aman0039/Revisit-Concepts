 type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDaZ6-J8LomnM0dYyJbg3fX_Ydk4BrDy3w",
    authDomain: "authorization-testing-1.firebaseapp.com",
    databaseURL: "https://authorization-testing-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "authorization-testing-1",
    storageBucket: "authorization-testing-1.firebasestorage.app",
    messagingSenderId: "491460258866",
    appId: "1:491460258866:web:10aa1b4724393ab8ab602b",
    measurementId: "G-7BZPY2FWJ4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);