import React from "react";
import isUserLoggedIn from "./SignInPage/IsUserLoggedIn";

const PrivateRoute = ({ children}) => {
    if (isUserLoggedIn()) {
      return children
    }
    window.location.href = "../"
  };

export default PrivateRoute;