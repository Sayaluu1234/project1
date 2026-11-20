import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const ordersCollection = collection(db, "orders");

// Create Order
export const createOrder = async (orderData) => {
  try {
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Get All Orders
export const getAllOrders = async () => {
  try {
    const snapshot = await getDocs(ordersCollection);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// Get Order By ID
export const getOrderById = async (orderId) => {
  try {
    const docRef = doc(db, "orders", orderId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

// Get Orders By Buyer
export const getOrdersByBuyer = async (buyerId) => {
  try {
    const q = query(
      ordersCollection,
      where("buyerId", "==", buyerId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching buyer orders:", error);
    throw error;
  }
};

// Get Orders By Farmer
export const getOrdersByFarmer = async (farmerId) => {
  try {
    const q = query(
      ordersCollection,
      where("farmerId", "==", farmerId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
  } catch (error) {
    console.error("Error fetching farmer orders:", error);
    throw error;
  }
};

// Update Order
export const updateOrder = async (orderId, updatedData) => {
  try {
    const docRef = doc(db, "orders", orderId);

    await updateDoc(docRef, updatedData);

    return true;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
};

// Delete Order
export const deleteOrder = async (orderId) => {
  try {
    await deleteDoc(doc(db, "orders", orderId));

    return true;
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
};