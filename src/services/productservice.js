import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const paymentsCollection = collection(db, "payments");

// Create Payment
export const createPayment = async (paymentData) => {
  try {
    const docRef = await addDoc(paymentsCollection, {
      ...paymentData,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error creating payment:", error);
    throw error;
  }
};

// Get All Payments
export const getAllPayments = async () => {
  try {
    const snapshot = await getDocs(paymentsCollection);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching payments:", error);
    throw error;
  }
};

// Get Payment By ID
export const getPaymentById = async (paymentId) => {
  try {
    const docRef = doc(db, "payments", paymentId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error fetching payment:", error);
    throw error;
  }
};

// Get Payments By Buyer
export const getPaymentsByBuyer = async (buyerId) => {
  try {
    const q = query(
      paymentsCollection,
      where("buyerId", "==", buyerId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching buyer payments:", error);
    throw error;
  }
};

// Update Payment
export const updatePayment = async (paymentId, updatedData) => {
  try {
    const docRef = doc(db, "payments", paymentId);

    await updateDoc(docRef, updatedData);

    return true;
  } catch (error) {
    console.error("Error updating payment:", error);
    throw error;
  }
};

// Delete Payment
export const deletePayment = async (paymentId) => {
  try {
    await deleteDoc(doc(db, "payments", paymentId));

    return true;
  } catch (error) {
    console.error("Error deleting payment:", error);
    throw error;
  }
};