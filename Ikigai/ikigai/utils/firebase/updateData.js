import { db } from "./firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";

export async function updateUserData(userId, collectionName, data, itemId = null) {

    console.log(userId, collectionName, data, itemId)
  try {
    const userRef = doc(db, "users", userId);
    const subcollectionRef = collection(userRef, collectionName);

    if (itemId) {
      // Update existing document
      await setDoc(doc(subcollectionRef, itemId), data, { merge: true });
      console.log(`Updated ${collectionName} item with ID: ${itemId}`);
    } else {
      // Add new document
      const newDocRef = await addDoc(subcollectionRef, data);
      console.log(`Added new ${collectionName} item with ID: ${newDocRef.id}`);
    }

    return true;
  } catch (error) {
    console.error(`Error updating ${collectionName}:`, error);
    return false;
  }
}