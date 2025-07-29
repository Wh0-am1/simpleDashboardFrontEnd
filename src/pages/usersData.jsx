import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { rows } from "../jsonData/userDetail";
import {
    Autocomplete,
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import EditBox from "../components/EditBox";

export default function UsersData() {
    const navigate = useNavigate();

    const [edit, setEdit] = useState(false);
    const [userName, setUserName] = useState("");
    const [designation, setDesignation] = useState("");
    const [department, setDepartment] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [create, setCreate] = useState(false);

    const [row, setRow] = useState(rows);
    const [data, setData] = useState();

    //generate options
    const options = [...new Set(rows.map((e) => e.department))].map((dep) => {
        return { label: dep };
    });

    //data grid skelton
    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "userName", headerName: "First name", width: 130 },
        { field: "designation", headerName: "Designation", width: 130 },
        { field: "department", headerName: "Department", width: 130 },
        {
            field: "phone",
            headerName: "Phone",
            width: 100,
        },
        {
            width: 400,
            height: 100,
            field: "Action",
            renderCell: ({ row }) => (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            setCreate(false);
                            setUserName(row.userName);
                            setDesignation(row.designation);
                            setDepartment(row.department);
                            setPhone(row.phone);
                            setEdit(true);
                            setId(row.id);
                        }}
                    >
                        <Icon icon="material-symbols:edit" width="24" height="24" />
                    </Box>
                    <Box
                        color={"red"}
                        onClick={() => {
                            setRow((prev) => prev.filter((e) => row.id != e.id));
                        }}
                    >
                        <Button variant="contained" color="secondary">
                            Delete
                        </Button>
                    </Box>
                </Box>
            ),
        },
    ];
    const paginationModel = { page: 0, pageSize: 5 };
    return (
        <Box
            sx={{
                height: "100vh",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                p: 1,
                gap: 1,
            }}
        >
            <EditBox
                create={create}
                id={id}
                setRows={setRow}
                rows={row}
                edit={edit}
                setEdit={setEdit}
                userName={userName}
                setUserName={setUserName}
                designation={designation}
                setDesignation={setDesignation}
                department={department}
                setDepartment={setDepartment}
                setPhone={setPhone}
                phone={phone}
            />
            <Box>
                <Box
                    sx={{
                        position: "absolute",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <Icon icon="material-symbols:home-rounded" width="24" height="24" />
                </Box>
                <Typography variant="h3" fontWeight={"bolder"} textAlign={"center"}>
                    User Detials
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Autocomplete
                    disablePortal
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField {...params} label="Filter Department" />
                    )}
                    onChange={(e, opt) => setData(opt)}
                />
                <Box
                    sx={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        setCreate(true);
                        setEdit(true);
                        setDepartment("");
                        setDesignation("");
                        setPhone("");
                        setUserName("");
                    }}
                >
                    <Button variant="contained" color="primary">
                        Create
                    </Button>
                </Box>
            </Box>
            <Paper sx={{ width: "100%", height: "100%" }}>
                <DataGrid
                    rows={data ? rows.filter((e) => e.department === data.label) : row}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>
        </Box>
    );
}
