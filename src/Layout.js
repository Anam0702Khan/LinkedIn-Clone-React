import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widget from "./widget/Widget";
import Login from "./authentication/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser, loginUser } from "./slices/UserSlice";
import Register from "./authentication/register/Register";
import { auth } from "./Firebase";

function Layout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      if (userAuth) {
        dispatch(
          loginUser({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);
  return (
    <>
      {!user ? (
        <Register />
      ) : (
        <div className="app-wrapper">
        <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
