import "./App.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AuthProtector from "./protectRoter/AuthProtector";
import { useDispatch } from "react-redux";
import UsersData from "./pages/usersData";
import { setUser } from "./redux/features/users/userSlice";

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
