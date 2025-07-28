import { Icon } from "@iconify/react";
import { rows } from "../jsonData/userDetail";
import { Autocomplete, Box, Paper, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import EditBox from "../components/EditBox";

export default function UsersData() {
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");

  const [data, setData] = useState();

  //generate options
  const options = [...new Set(rows.map((e) => e.department))].map((dep) => {
    return { label: dep };
  });

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
      field: "Edit",
      renderCell: ({ row }) => (
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            setUserName(row.userName);
            setDesignation(row.designation);
            setDepartment(row.department);
            setPhone(row.phone);
            setEdit(true);
          }}
        >
          <Icon icon="material-symbols:edit" width="24" height="24" />
        </Box>
      ),
    },
  ];
  const paginationModel = { pphone: 0, pageSize: 5 };
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <EditBox
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
        <Typography variant="h3" textAlign={"center"}>
          User Detials
        </Typography>
      </Box>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Filter Department" />
        )}
        onChange={(e, opt) => setData(opt)}
      />
      <Paper sx={{ width: "100%", height: "100%" }}>
        <DataGrid
          rows={data ? rows.filter((e) => e.department === data.label) : rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pphoneSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </Box>
  );
}
