import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {} from "react-router-dom";

const AuthProtector = ({ children }) => {
  const { auth } = useSelector((state) => state.user);
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default AuthProtector;
