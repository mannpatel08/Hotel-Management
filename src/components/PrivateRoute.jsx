import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const isAuth = localStorage.getItem("user");

  return isAuth ? children : <Navigate to="/" />;

};

export default PrivateRoute;