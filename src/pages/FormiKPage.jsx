import React from "react";
import { Form, Formik } from "formik";
import { Box, Button, Paper, Typography } from "@mui/material";
import FormikTextField from "../components/FormikTextField";
import { formikFormSchema } from "../validation/validation.formikForm";
import FormikAutoComplete from "../components/FormikAutoComplete";
import FormikRadio from "../components/FormikRadio";
import FormikDatePicker from "../components/FormikDatePicker";
import CustomDialogue from "../components/CustomDialogue";
import { useState } from "react";
export default function FormiKPage() {
  const [addedData, setAddedDate] = useState([]);
  const [open, setOpen] = useState(false);
  const submitHandler = (values) => {
    setAddedDate(Object.entries(values));
    setOpen(true);
  };
  const options = [
    "BCA",
    "MCA",
    "CyberSecurity",
    "Mcom",
    "Bcom",
    "M.Sc Computer Science",
    "B.Sc Computer Science",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Box>
        <CustomDialogue open={open} setOpen={setOpen} Data={addedData} />
      </Box>
      <Paper
        elevation={6}
        sx={{
          p: 3,
          borderRadius: 5,
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Formik Form
        </Typography>
        <Formik
          initialValues={{
            email: "",
            userName: "",
            phone: "",
            address: "",
            education: "",
            dob: "",
            gender: "",
          }}
          validationSchema={formikFormSchema}
          onSubmit={submitHandler}
        >
          <Form>
            <FormikTextField label={"Email"} name="email" />
            <FormikTextField label={"userName"} name="userName" />
            <FormikTextField label={"Address"} name="address" />
            <FormikTextField label={"Phone"} name="phone" />
            <FormikAutoComplete
              options={options}
              label={"Education"}
              name="education"
            />
            <FormikDatePicker name="dob" label="DOB" />
            <FormikRadio
              name="gender"
              title={"Gender"}
              payload={[
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
              ]}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Box>
  );
}
