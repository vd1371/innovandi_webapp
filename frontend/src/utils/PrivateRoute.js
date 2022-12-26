import {useSelector} from "react-redux";

const PrivateRoute = ({ children}) => {

  const isLoggedIn = useSelector (state => state.auth.isLoggedIn)
    
  if (isLoggedIn) {
      return children
    }
    window.location.href = "../"
  };

export default PrivateRoute;