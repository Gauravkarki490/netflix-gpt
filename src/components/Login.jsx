import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData, checkSignUpData } from "../utils/validate";
import {
  signUpNetflixGpt,
  signInNetflixGpt,
  updateProfileNetflixGpt,
} from "../utils/login";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { LOGIN_BG_IMAGE } from "../utils/constant";
const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const confirmPass = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = async () => {
    // validate the form Data

    let message = null;
    let response = null;
    if (isSignInForm) {

      message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if (message) return;
      response = await signInNetflixGpt(email.current.value, password.current.value);

    } else {

      message = checkSignUpData(
        name.current.value,
        email.current.value,
        password.current.value,
        confirmPass.current.value
      );
      setErrorMessage(message);

      if (message) return;

      response = await signUpNetflixGpt(email.current.value, password.current.value);

      if (!response.error) {
        const responseProfile = await updateProfileNetflixGpt(
          name.current.value
        );
        if (responseProfile.error) {
          setErrorMessage(responseProfile.error);
          return;
        }
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      }
    }

    if (response.error) {
      setErrorMessage(response.error);
      return;
    }

  };

  return (
    <div>
      <Header />
      <div
        className="absolute bg-fixed bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage:
            `url('${LOGIN_BG_IMAGE}')`,
        }}
      ></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-4 md:p-12 lg:p-16 bg-black w-full md:w-3/4 lg:w-2/5 xl:w-1/3 my-32 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-1 md:my-3 w-full bg-gray-500 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-1 md:my-3 w-full bg-gray-500 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-1 md:my-3 w-full bg-gray-500 rounded-lg"
        />
        {!isSignInForm && (
          <input
            ref={confirmPass}
            type="password"
            placeholder="Confirm Password"
            className="p-3 my-1 md:my-3 w-full bg-gray-500 rounded-lg"
          />
        )}
        <p className="text-red-600 font-bold py-2">{errorMessage}</p>
        <button
          className="p-3 my-3 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2 md:py-4 cursor-pointer inline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered. Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
