// import React from "react";
// import { AuthContext } from "./AuthContext";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebase.init";

// const AuthProvider = ({ children }) => {


//   const createUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password)
//   }


//   const userInfo = {
//     createUser,
//     signIn
//   };

//   return <AuthContext value={userInfo}>{children}</AuthContext>;
// };

// export default AuthProvider;




import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

   


  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userInfo = {
    createUser,
    signIn,
    googleSignIn,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;


