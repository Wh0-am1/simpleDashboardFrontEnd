import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export default function EditBox({
    rows,
    setRows,
    create,
    id,
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
    function submitHandle(e) {
        e.preventDefault();
        if (!create)
            rows.forEach((item) => {
                if (item.id === id) {
                    item.userName = userName;
                    item.designation = designation;
                    item.department = department;
                    item.phone = phone;
                }
            });
        else if (userName || designation || department || phone) {
            let id = 0;
            rows.forEach((e) => {
                id = Math.max(id, e.id);
            });
            setRows([
                ...rows,
                {
                    id: id + 1,
                    userName,
                    designation,
                    department,
                    phone,
                },
            ]);
        }

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
            <Typography variant="h3">{create ? "Add User" : "Edit User"}</Typography>
            <form onSubmit={submitHandle}>
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

                <Button variant="contained" type="submit">
                    submit
                </Button>
            </form>
        </Dialog>
    );
}
