import { Box, Button, TextField } from "@mui/material";
import FormikTextField from "./FormikTextField";

const DynamicForm = ({ id, name, age, remove }) => {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <FormikTextField label={"name"} name={name} />
      <FormikTextField label={"age"} name={age} />
      <Button variant="contained" color="error" onClick={() => remove(id)}>
        Delete
      </Button>
    </Box>
  );
};

export default DynamicForm;
