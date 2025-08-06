import { Box, Button, Container } from "@mui/material";
import DynamicForm from "../components/DynamicForm";
import { useState } from "react";
import CustomDialogue from "../components/CustomDialogue";
import { FieldArray, Form, Formik } from "formik";
import { DynamicFormSchema } from "../validation/validation.DaynmicForm";

const DynamicFormPage = () => {
  const [addedData, setAddedData] = useState([]);
  const [open, setOpen] = useState(false);

  const SubmitHandler = (value) => {
    setAddedData(
      Object.entries(value?.people ?? {})
        .map((v) => v[1])
        .map((e) => [e.name, e.age]),
    );
    setOpen(true);
  };

  return (
    <Container>
      {<CustomDialogue open={open} setOpen={setOpen} Data={addedData} />}
      <Formik
        initialValues={{
          people: [
            {
              name: "",
              age: "",
            },
          ],
        }}
        validationSchema={DynamicFormSchema}
        onSubmit={SubmitHandler}
      >
        {({ values }) => (
          <Form>
            <FieldArray name="people">
              {({ remove, push }) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {values.people.map((e, index) => (
                    <DynamicForm
                      key={index}
                      name={`people.${index}.name`}
                      age={`people.${index}.age`}
                      id={index}
                      remove={remove}
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
                        push({ name: "", age: "" });
                      }}
                    >
                      Add
                    </Button>
                    <Button type={"submit"} variant="contained">
                      Submit
                    </Button>
                  </Box>
                </Box>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default DynamicFormPage;
