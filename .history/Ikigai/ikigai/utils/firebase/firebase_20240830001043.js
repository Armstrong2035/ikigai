// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAFhOfnJvIZqdL0kNP0AOisafJH3YV7x3A",
  authDomain: "ikigai-f7308.firebaseapp.com",
  projectId: "ikigai-f7308",
  storageBucket: "ikigai-f7308.appspot.com",
  messagingSenderId: "965312700520",
  appId: "1:965312700520:web:24d2d8cbb7b86e21a8dbdd",
  measurementId: "G-D96NDPH4D3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
