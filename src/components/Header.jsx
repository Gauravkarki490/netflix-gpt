
import signOutNetflixGpt from "../utils/signOut";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_GPT_LOGO, USER_AVATAR } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((store) => store.user);
  const handleSignOut = async () => {
    const response = await signOutNetflixGpt();
    if (response.error) {
      alert(response.error);
      navigate("/error");
    }
  };

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        console.log(uid, email, displayName);
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse')
      } else {
        // User is signed out
       
        dispatch(removeUser(null));
        navigate('/')
      }
    });
    return unsubscribe
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between`}>
  <img
    className="w-40 h-20"
    src={NETFLIX_GPT_LOGO}
    alt="Logo"
  />
  {User && (
    <div className="p-4 flex">
      <img
        className="w-8 h-8 m-4"
        src={USER_AVATAR}
        alt="userIcon"
      />
      <button
        className="font-bold text-white rounded-lg"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  )}
</div>
  );
};

export default Header;
