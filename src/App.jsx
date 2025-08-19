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
import DraggablePage from "./pages/DraggablePage";
import LibDraggable from "./pages/LibDraggable";
import ProductSystem from "./pages/ProductSystem";
import CartSystem from "./pages/CartSystem";
import Purchased from "./pages/Purchased";
import ReactWindow from "./pages/ReactWindow";
import StepperPage from "./pages/StepperPage";

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
                <Route
                    path="scratchDragable"
                    element={
                        <AuthProtector>
                            <DraggablePage />
                        </AuthProtector>
                    }
                />
                <Route
                    path="products"
                    element={
                        <AuthProtector>
                            <ProductSystem />
                        </AuthProtector>
                    }
                />
                <Route
                    path="cart"
                    element={
                        <AuthProtector>
                            <CartSystem />
                        </AuthProtector>
                    }
                />
                <Route
                    path="purchased"
                    element={
                        <AuthProtector>
                            <Purchased />
                        </AuthProtector>
                    }
                />

                <Route
                    path="dragable"
                    element={
                        <AuthProtector>
                            <LibDraggable />
                        </AuthProtector>
                    }
                />
                <Route
                    path="stepper"
                    element={
                        <AuthProtector>
                            <StepperPage />
                        </AuthProtector>
                    }
                />

                <Route path="/react-window" element={<ReactWindow />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default App;
