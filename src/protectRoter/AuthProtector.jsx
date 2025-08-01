import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SideBar from "../components/sideBar";
import { Box } from "@mui/material";

const AuthProtector = ({ children }) => {
  const { auth } = useSelector((state) => state.user);
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        width: "100%",
        justifyContent: "space-between",
        boxSizing: "border-box",
        height: "100vh",
      }}
    >
      <SideBar />
      {children}
    </Box>
  );
};

export default AuthProtector;
