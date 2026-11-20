import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/FirebaseConfig";

// Get all buyers
export const getAllBuyers = async () => {
  try {
    const q = query(
      collection(db, "users"),
      where("role", "==", "buyer")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching buyers:", error);
    throw error;
  }
};

// Get buyer by ID
export const getBuyerById = async (buyerId) => {
  try {
    const docRef = doc(db, "users", buyerId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error fetching buyer:", error);
    throw error;
  }
};

// Update buyer
export const updateBuyer = async (buyerId, data) => {
  try {
    const docRef = doc(db, "users", buyerId);

    await updateDoc(docRef, data);

    return true;
  } catch (error) {
    console.error("Error updating buyer:", error);
    throw error;
  }
};

// Delete buyer
export const deleteBuyer = async (buyerId) => {
  try {
    await deleteDoc(doc(db, "users", buyerId));

    return true;
  } catch (error) {
    console.error("Error deleting buyer:", error);
    throw error;
  }
};