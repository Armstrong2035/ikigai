// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

// // Function to handle Google Sign-In
// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     // The signed-in user info
//     const user = result.user;
//     console.log("User signed in: ", user);
//   } catch (error) {
//     console.error("Error during sign-in: ", error);
//   }
// };

// // Call signInWithGoogle when needed
// // signInWithGoogle();
