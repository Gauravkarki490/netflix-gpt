import signOutNetflixGpt from "../utils/signOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { NETFLIX_GPT_LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import lang from '../utils/languageConstant'
import { useLocation } from "react-router-dom";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lcoation = useLocation();
  const User = useSelector((store) => store.user);
  const langKey = useSelector(store=>store.config.lang)
  const handleSignOut = async () => {
    const response = await signOutNetflixGpt();
    if (response.error) {
      alert(response.error);
      navigate("/error");
    }
  };

  const handleGptSearchBtn = () => {
    lcoation.pathname === "/gptSearch"
      ? navigate("/browse")
      : navigate("/gptSearch");
  };

  const handleLanguage = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        console.log(uid, email, displayName);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (lcoation.pathname === "/") navigate("/browse");
      } else {
        dispatch(removeUser(null));
        navigate("/");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between`}
    >
      <img className="w-40 h-20" src={NETFLIX_GPT_LOGO} alt="Logo" />
      {User && (
        <div className="p-4 flex">
          <div className="m-auto" >
          <select className="p-2 m-2 bg-gray-900 text-white rounded-md" onChange={handleLanguage} value={langKey}>
            {SUPPORTED_LANGUAGES.map((lang)=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
          </select>
          </div>
          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg hover:opacity-80"
            onClick={handleGptSearchBtn}
          >
            {lcoation.pathname === "/gptSearch" ? lang[langKey].browseBtn : lang[langKey].gptSearchBtn}
          </button>
          <img className="w-8 h-8 m-4" src={USER_AVATAR} alt="userIcon" />
          <button
            className="font-bold text-white rounded-lg"
            onClick={handleSignOut}
          >
            {lang[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
