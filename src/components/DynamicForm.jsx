import { Box, Button, TextField } from "@mui/material";

const DynamicForm = ({ id, setGenId }) => {
  console.log(id);
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <TextField label="name" />
      <TextField label="age" />
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          setGenId((prev) => {
            return prev.filter((item) => item != id);
          });
        }}
      >
        Delete
      </Button>
    </Box>
  );
};

export default DynamicForm;
