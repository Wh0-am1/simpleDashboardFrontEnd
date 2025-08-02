import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../redux/features/users/userSlice";
import { signAPI } from "../api/signAPI";

export default function Login() {
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [Error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { auth } = useSelector((state) => state.user);

    useEffect(() => {
        if (auth) navigate("/dashboard", { replace: true });
    }, []);
    async function LoginHandle() {
        const res = await signAPI("/login", inputs);
        if (!res.success) {
            setError(res.message);
        } else {
            setError("");
            localStorage.setItem(
                "cred",
                JSON.stringify({ token: res.token, userName: res.name }),
            );
            dispatch(setUser({ auth: true, token: res.token, userName: res.name }));
            navigate("/dashboard", { replace: true });
        }
    }

    return (
        <Paper
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 300,
                p: 4,
                bgcolor: "background.paper",
                boxShadow: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <Typography variant="h2" textAlign="center">
                {" "}
                Login{" "}
            </Typography>
            {Error && (
                <Typography color="error" sx={{ textAlign: "center" }}>
                    {Error}
                </Typography>
            )}
            <TextField
                type="text"
                placeholder="email"
                onChange={(e) => {
                    e.preventDefault();
                    setInputs({ ...inputs, email: e.target.value });
                }}
                value={inputs.email}
            />
            <TextField
                type="password"
                placeholder="password"
                onChange={(e) => {
                    e.preventDefault();
                    setInputs({ ...inputs, password: e.target.value });
                }}
                value={inputs.password}
            />
            <Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: "100%",
                    }}
                    onClick={LoginHandle}
                >
                    login
                </Button>
            </Box>
            <Typography
                sx={{
                    textAlign: "center",
                }}
            >
                Don't have an account ? <Link to="/register"> Register</Link>
            </Typography>
        </Paper>
    );
}
