import "./App.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import AuthProtector from "./protectRoter/AuthProtector";
import { useDispatch } from "react-redux";
import UsersData from "./pages/usersData";
import { setUser } from "./redux/features/userSlice";
import FormiKPage from "./pages/FormiKPage";
import NotFound from "./pages/NotFound";
import Weather from "./pages/Weather";
import DynamicFormPage from "./pages/DynamicFormPage";

function App() {
  const dispatch = useDispatch();
  const cred = localStorage.getItem("cred");
  if (cred) dispatch(setUser({ auth: true, ...JSON.parse(cred) }));

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
          path="/dashboard"
          element={
            <AuthProtector>
              <DashBoard />
            </AuthProtector>
          }
        />
        <Route
          path="/formik"
          element={
            <AuthProtector>
              <FormiKPage />
            </AuthProtector>
          }
        />
        <Route
          path="/weather"
          element={
            <AuthProtector>
              <Weather />
            </AuthProtector>
          }
        />
        <Route
          path="dynamicForm"
          element={
            <AuthProtector>
              <DynamicFormPage />
            </AuthProtector>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
