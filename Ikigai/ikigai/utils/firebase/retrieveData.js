import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default async function getSubcollectionData(userId, subcollectionName) {
  const subcollectionRef = collection(db, `users/${userId}/${subcollectionName}`);

  try {
    const querySnapshot = await getDocs(subcollectionRef);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.error(`Error getting ${subcollectionName} documents:`, error);
    return [];
  }
}

export async function getUserData(userId) {
  const buckets = await getSubcollectionData(userId, "buckets");
  const activities = await getSubcollectionData(userId, "activities");
  const tasks = await getSubcollectionData(userId, "tasks");
  const relationships = await getSubcollectionData(userId, "relationships");

  return { buckets, activities, tasks, relationships };
}

