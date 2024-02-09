import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

// function to logout
export const handleLogout = async (e) => {
  e.preventDefault();

  try {
    await signOut(auth);
    localStorage.clear();
    sessionStorage.clear();
  } catch (e) {
    console.log(e);
  }
};
