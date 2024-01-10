
import { useEffect } from "react";
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
      // console.log(userAuth);
      if (userAuth) {
      const { email, uid } = userAuth.user || {};
        
        dispatch(
          loginUser({
            email,
            uid,
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


