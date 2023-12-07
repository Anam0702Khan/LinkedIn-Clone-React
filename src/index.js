import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Register from "./authentication/register/Register";
import Feed from "./feed/Feed";
import { Login } from "@mui/icons-material";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";
import Allroutes from "./routes/Allroutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    {/* <Allroutes/> */}
      <App />
      <ToastContainer />
    </Provider>
   </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

