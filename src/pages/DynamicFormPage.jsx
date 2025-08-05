import { Box, Button, Container } from "@mui/material";
import DynamicForm from "../components/DynamicForm";
import { useState } from "react";

const DynamicFormPage = () => {
  const [genId, setGenId] = useState([1]);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {genId.map((e) => (
          <DynamicForm key={e} setGenId={setGenId} id={e} />
        ))}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              let lastId = genId[genId.length - 1];
              setGenId((prev) => [...prev, ++lastId]);
            }}
          >
            Add
          </Button>
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DynamicFormPage;
