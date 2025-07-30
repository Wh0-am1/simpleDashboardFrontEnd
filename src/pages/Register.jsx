import React from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/users/userSlice";
import { signAPI } from "../api/signAPI";

export default function Register() {
  const [Error, setError] = useState("");
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function registerHandle() {
    const res = await signAPI("/register", inputs);
    if (res.success === false) {
      setError(res.message);
    } else {
      setError("");
      localStorage.setItem("jwt", res.token);
      dispatch(setUser({ auth: true, token: res.token }));
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
            setInputs({ ...inputs, name: e.target.value });
          }}
          value={inputs.name}
        />
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
