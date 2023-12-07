// import "../styles/App.css";
import { useEffect } from "react";
import Register from "./authentication/register/Register";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widget from "./widget/Widget";
import Login from "./authentication/login/Login";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser, loginUser } from "./slices/UserSlice";
import { auth } from "./Firebase";
import Authentication from "./authentication/Authentication";
import Allroutes from "./routes/Allroutes";
import Layout from "./Layout";

function App() {
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
  
  return <div className="app-wrapper">
      <>{user ? <Allroutes /> : <Authentication />}</>
      
  </div>;
  
}

export default App;

