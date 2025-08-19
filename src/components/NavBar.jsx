import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";

export default function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Logout = () => {
        const isSure = confirm("Are you sure to Logout ?");
        if (isSure) {
            localStorage.removeItem("cred");
            dispatch(setUser({ auth: false, token: "", userName: "" }));
            navigate("/login");
        }
    };
    const Nav = [
        "dashboard",
        "formik",
        "weather",
        "users",
        "dynamicForm",
        "dragable",
        "products",
        "purchased",
        "stepper",
    ];
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                textTransform: "capitalize",
                alignItems: "center",
            }}
            className="NavBar"
        >
            {Nav.map((e, i) => (
                <Link to={`/${e}`} key={i}>
                    {e}
                </Link>
            ))}
            <Button variant="outlined" color="error" onClick={Logout}>
                Logout
            </Button>
        </Box>
    );
}
