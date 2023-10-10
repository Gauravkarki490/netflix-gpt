import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from "./firebase"

export const signUpNetflixGpt =async  (email,password)=>{
   return  createUserWithEmailAndPassword(auth, email,password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      return {'user':user}
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      

      return {'error':`${errorCode} - ${errorMessage}`}
    });
}

export const signInNetflixGpt =(email,password)=>{
  return signInWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return {'user':user}
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {'error':`${errorCode} - ${errorMessage}`}
  });
}

export const   updateProfileNetflixGpt = async(username)=>{


return updateProfile(auth.currentUser, {
  displayName: username, photoURL: ""
}).then(() => {
  // Profile updated!
  // ...
  return {"sucess":"profile update"}
}).catch((error) => {
  // An error occurred
  // ...
  return {"error":error}
});
}