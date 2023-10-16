import signOutNetflixGpt from "../utils/signOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { useEffect, useState } from "react";
import {
  NETFLIX_GPT_LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constant";
import lang from "../utils/languageConstant";
import { useLocation } from "react-router-dom";
import { changeLanguage } from "../utils/store/configSlice";

const Header = () => {
  const menus = [
    { name: "HOME" },
    { name: "DESTINATION" },
    { name: "CREW" },
    { name: "TECHNOLOGY" },
  ];
  let [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lcoation = useLocation();
  const User = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
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

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

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
          <div className="m-auto">
            {/* <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguage}
              value={langKey}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select> */}
          </div>

          <div className="p-4 flex">
            <img
              src={open ? USER_AVATAR : USER_AVATAR}
              className="md:hidden  fixed right-5 cursor-pointer z-20 top-6 w-8 h-8 m-4"
              onClick={() => setopen(!open)}
            />
            {/* <img src="./src/assets/logo.svg" alt="logo" className="w-10 ml-7" /> */}
            <div
              className={` p-4   md:flex md:flex-row  top-[13%] md:top-0 md:static fixed  ease-linear h-screen  md:w-auto md:h-auto  z-10 md:bg-transparent bg-black bg-opacity-50 ${
                !open ? " right-[-100%]" : "right-0 w-screen  "
              }`}
            >
              <select
              className="p-2 m-2 bg-gray-900 text-white rounded-md"
              onChange={handleLanguage}
              value={langKey}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
              <button
                className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg hover:opacity-80 block"
                onClick={handleGptSearchBtn}
              >
                {lcoation.pathname === "/gptSearch"
                  ? lang[langKey].browseBtn
                  : lang[langKey].gptSearchBtn}
              </button>
              {!open && <img className="w-8 h-8 m-4 " src={USER_AVATAR} alt="userIcon" />}
              <button
                className="font-bold text-white rounded-lg px-4 hover:bg-gray-400 py-2  m-2"
                onClick={handleSignOut}
              >
                {lang[langKey].signOut}
              </button>
            </div>

            {/*  */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
