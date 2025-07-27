import "./App.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AuthProtector from "./protectRoter/AuthProtector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./GlobalStateSlice/user/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) dispatch(setUser({ auth: true, token: jwt }));
  }, []);
  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <AuthProtector>
              <DashBoard />
            </AuthProtector>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
