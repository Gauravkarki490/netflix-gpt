import {  signOut } from "firebase/auth";
import { auth } from "./firebase";
  const signOutNetflixGpt = async ()=>{
    return signOut(auth).then(() => {
        // Sign-out successful.
        return {'success':'Sign Out successful'}
      }).catch((error) => {
        // An error happened.
        return {'error':error}
      });
}

export default signOutNetflixGpt;
