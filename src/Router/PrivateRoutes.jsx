import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { User, loading } = useContext(AuthContext);
  const loaction = useLocation();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (User) {
    return children;
  }
  return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;
};

export default PrivateRoutes;
