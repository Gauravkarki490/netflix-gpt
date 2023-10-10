import React from "react";
import signOutNetflixGpt from "../utils/signOut";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const User = useSelector((store) => store.user);
  const handleSignOut = async () => {
    const response = await signOutNetflixGpt();
    if (response.success) {
      navigate("/");
    }
    if (response.error) {
      alert(response.error);
      navigate("/error");
    }
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {User && (
        <div className="p-4 flex">
          <img
            className="w-8 h-8 m-4"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="userIcon"
          />
          <button
            className="font-bold text-white rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
