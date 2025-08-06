import { Box, Button, Container } from "@mui/material";
import DynamicForm from "../components/DynamicForm";
import { useState } from "react";
import CustomDialogue from "../components/CustomDialogue";

const DynamicFormPage = () => {
  const [addedData, setAddedData] = useState({});
  const [open, setOpen] = useState(false);
  const [genId, setGenId] = useState([1]);

  const SubmitHandler = () => {
    setOpen(true);
  };

  return (
    <Container>
      {
        <CustomDialogue
          open={open}
          setOpen={setOpen}
          Data={Object.entries(addedData)
            .map(([key, value]) => Object.entries(value))
            .map((e) => [e[0][1], e[1][1]])}
        />
      }
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {genId.map((e) => (
          <DynamicForm
            key={e}
            setGenId={setGenId}
            id={e.toString()}
            setAddedData={setAddedData}
            addedData={addedData}
          />
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
          <Button variant="contained" onClick={SubmitHandler}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DynamicFormPage;
