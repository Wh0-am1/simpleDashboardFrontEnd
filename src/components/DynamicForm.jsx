import { Box, Button, TextField } from "@mui/material";

const DynamicForm = ({ id, setGenId, setAddedData, addedData }) => {
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <TextField
        label="name"
        onChange={(e) => {
          setAddedData((prev) => ({
            ...prev,
            [id]: { ...prev[id], name: e.target.value },
          }));
        }}
        value={addedData?.id?.name}
      />
      <TextField
        label="age"
        onChange={(e) => {
          setAddedData((prev) => ({
            ...prev,
            [id]: { ...prev[id], age: e.target.value },
          }));
        }}
        value={addedData?.id?.age}
      />
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
