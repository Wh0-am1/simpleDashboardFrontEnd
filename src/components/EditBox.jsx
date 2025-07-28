import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export default function EditBox({
  edit,
  setEdit,
  userName,
  setUserName,
  designation,
  setDesignation,
  department,
  setDepartment,
  setPhone,
  phone,
}) {
  function submitHandle() {
    setEdit(false);
  }
  return (
    <Dialog
      open={edit}
      onClose={() => setEdit(false)}
      slotProps={{
        paper: {
          elevation: 6,
          sx: {
            display: "flex",
            flexDirection: "column",
            p: 3,
            gap: 2,
            borderRadius: "30px",
          },
        },
      }}
    >
      <Typography variant="h3">Edit</Typography>
      <TextField
        label="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Designation"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
      />
      <TextField
        label="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Button variant="contained" onClick={submitHandle}>
        submit
      </Button>
    </Dialog>
  );
}
