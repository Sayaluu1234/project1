import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

// Register User
export const registerUser = async (
  name,
  email,
  password
) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  // Update display name
  await updateProfile(userCredential.user, {
    displayName: name,
  });

  return userCredential.user;
};

// Login User
export const loginUser = async (
  email,
  password
) => {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
};

// Logout User
export const logoutUser = async () => {
  await signOut(auth);
};

// Get Current User
export const getCurrentUser = () => {
  return auth.currentUser;
};