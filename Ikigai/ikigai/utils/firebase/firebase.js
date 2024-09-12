// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";

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
// const analytics = getAnalytics(firebaseApp);

// Initialize Firebase Auth
const auth = getAuth();
const provider = new GoogleAuthProvider();


// firebaseUtils.js




// initialize firestore
const db = getFirestore(firebaseApp);

//sync firestore with store

export const initFirestoreSync = (userId, setStateFn) => {
  const userDocRef = doc(db, "users", userId);

  // Initial fetch
  getDoc(userDocRef).then((docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      setStateFn(data);
    }
  });

  // Real-time sync
  return onSnapshot(userDocRef, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      setStateFn(data);
    }
  });
};

//update firestore with new data

export const updateFirestore = async (userId, state) => {
  const userDocRef = doc(db, "users", userId);
  try {
    await setDoc(userDocRef, {
      buckets: state.buckets,
      activities: state.activities,
      tasks: state.tasks,
      relationships: state.relationships,
      checkedTasks: state.checkedTasks,
    }, { merge: true });
  } catch (error) {
    console.error("Error updating Firestore:", error);
    // You might want to add some user-facing error handling here
  }
};