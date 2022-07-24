import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoute, setSignedIn, resetApp } from "../../appSlice";
import { userLogOut } from "../../userSlice";

const Navigation = () => {
  const isSignedIn = useSelector((state) => state.app.isSignedIn);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setRoute("signout"));
    dispatch(setSignedIn(false));
    dispatch(userLogOut());
    dispatch(resetApp());
  };

  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => handleSignOut()}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => dispatch(setRoute("signin"))}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => dispatch(setRoute("register"))}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
