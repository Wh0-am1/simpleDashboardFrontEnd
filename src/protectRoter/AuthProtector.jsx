import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProtector = ({ children }) => {
  const user = useSelector((state) => state.user);
  console.log(user);
  if (!user.auth) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default AuthProtector;
