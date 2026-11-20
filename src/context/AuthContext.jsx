import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/FirebaseConfig";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("demo_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  // Register
  const register = async (email, password) => {
    try {
      if (auth && auth.app && auth.app.options && auth.app.options.apiKey && auth.app.options.apiKey !== "your_firebase_api_key_here" && auth.app.options.apiKey !== "AIzaSyApFkt_8pnL8DixLHfTuoa779fNan-bvec") {
        return await createUserWithEmailAndPassword(auth, email, password);
      } else {
        console.warn("Firebase API key missing or invalid placeholder. Using local session.");
      }
    } catch (e) {
      console.warn("Firebase auth failed, using local session", e);
    }
    const mockUser = { uid: "user-" + Date.now(), email, role: "buyer" };
    setCurrentUser(mockUser);
    localStorage.setItem("demo_user", JSON.stringify(mockUser));
    return { user: mockUser };
  };

  // Login
  const login = async (email, password) => {
    try {
      if (auth && auth.app && auth.app.options && auth.app.options.apiKey && auth.app.options.apiKey !== "your_firebase_api_key_here" && auth.app.options.apiKey !== "AIzaSyApFkt_8pnL8DixLHfTuoa779fNan-bvec") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
      } else {
        console.warn("Firebase API key missing or invalid placeholder. Using local session.");
      }
    } catch (e) {
      console.warn("Firebase auth failed, using local session", e);
      throw e;
    }
    const mockUser = { uid: "user-" + Date.now(), email, role: "buyer" };
    setCurrentUser(mockUser);
    localStorage.setItem("demo_user", JSON.stringify(mockUser));
    return { user: mockUser };
  };

  // Logout
  const logout = async () => {
    try {
      if (auth && auth.app && auth.app.options && auth.app.options.apiKey && auth.app.options.apiKey !== "your_firebase_api_key_here" && auth.app.options.apiKey !== "AIzaSyApFkt_8pnL8DixLHfTuoa779fNan-bvec") {
        await signOut(auth);
      }
    } catch (e) {
      console.warn("Firebase signout error", e);
    }
    setCurrentUser(null);
    localStorage.removeItem("demo_user");
  };

  useEffect(() => {
    if (!auth || !auth.app || !auth.app.options || !auth.app.options.apiKey || auth.app.options.apiKey === "your_firebase_api_key_here" || auth.app.options.apiKey === "AIzaSyApFkt_8pnL8DixLHfTuoa779fNan-bvec") {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setCurrentUser({ ...user, ...userDoc.data() });
          } else {
            setCurrentUser(user);
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          setCurrentUser(user);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;