import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../redux/user/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // if (user) navigate("/", { replace: true });
  }, []);
  async function LoginHandle() {
    const data = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const res = await data.json();
    if (res.success === false) {
      setError(res.message);
    } else {
      setError("");
      localStorage.setItem("jwt", res.token);
      dispatch(setUser({ auth: true, token: res.token }));
      navigate("/", { replace: true });
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
          setEmail(e.target.value);
        }}
        value={email}
      />
      <TextField
        type="password"
        placeholder="password"
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
        value={password}
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
