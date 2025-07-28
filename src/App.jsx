import "./App.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AuthProtector from "./protectRoter/AuthProtector";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/user/userSlice";
import UsersData from "./pages/usersData";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  if (jwt) dispatch(setUser({ auth: true, token: jwt }));

  return (
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={
            <AuthProtector>
              <UsersData />
            </AuthProtector>
          }
        />

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
