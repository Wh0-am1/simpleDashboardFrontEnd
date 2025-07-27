import "./App.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AuthProtector from "./protectRoter/AuthProtector";
import { useEffect } from "react";

function App() {
  // console.log("helo");
  useEffect(() => {
    console.log("keri");

    return () => {
      console.log("erangi");
    };
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
