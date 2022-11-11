import React, {createContext} from "react";

import isUserLoggedIn from "./IsUserLoggedIn";

const UserContext = createContext({
    loggedIn: false,
    setLoggedIn: () => {}
})

// const UserContext = createContext()


export default UserContext;