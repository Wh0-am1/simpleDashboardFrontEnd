import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../GlobalStateSlice/user/userSlice";

export default function Register() {
  const [Error, setError] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function registerHandle() {
    const data = await fetch("http://localhost:3000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        email: Email,
        password: Password,
      }),
    });
    const res = await data.json();
    if (res.success === "false") {
      setError(res.message);
    } else {
      setError("");
      localStorage.setItem("jwt", res.token);
      dispatch(setUser({ id: res.id, email: Email, name: Name }));
      navigate("/", { replace: true });
    }
  }

  return (
    <Paper
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        p: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Register
        </Typography>
        {Error && (
          <Typography color="error" sx={{ textAlign: "center" }}>
            {Error}
          </Typography>
        )}

        <TextField
          type="text"
          placeholder="name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          value={Name}
        />
        <TextField
          type="text"
          placeholder="email"
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
          value={Email}
        />
        <TextField
          type="password"
          placeholder="password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
          value={Password}
        />
      </Box>
      <Button
        variant="contained"
        type="submit"
        sx={{ width: "100%" }}
        onClick={registerHandle}
      >
        create
      </Button>
      <Typography
        sx={{
          textAlign: "center",
        }}
      >
        Alread have an account ? <Link to="/login"> login</Link>
      </Typography>
    </Paper>
  );
}
