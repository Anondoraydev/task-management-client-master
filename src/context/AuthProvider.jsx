import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../config/firebase.config";
// import axios from "axios";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLoginUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLoginUser = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email;
      // const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);

      // if (currentUser) {

      //     axios.post("https://tour-sport-server.vercel.app/jwt", loggedUser, { withCredentials: true })
      //         .then(() => { });
      // } else {

      //     axios.post("https://tour-sport-server.vercel.app/logOut", loggedUser, { withCredentials: true })
      //         .then(() => { });
      // }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInformation = {
    user,
    loading,
    registerUser,
    loginUser,
    googleLoginUser,
    githubLoginUser,
    logOut,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
