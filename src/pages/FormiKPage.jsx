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
import InputFileUpload from "../components/FileUpload";
import { useDispatch } from "react-redux";
import { uploadThunk } from "../redux/features/uploadSlice";
export default function FormiKPage() {
    const [addedData, setAddedDate] = useState([]);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const submitHandler = (values) => {
        const formData = new FormData();

        for (let [key, value] of Object.entries(values)) {
            if (key == "files") {
                formData.append("files", value[0]);
                formData.append("files", value[1]);
                continue;
            }
            formData.append(key, value);
        }
        dispatch(uploadThunk(formData));
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
                overflowY: "auto",
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
                        files: "",
                    }}
                    validationSchema={formikFormSchema}
                    onSubmit={submitHandler}
                >
                    <Form encType="multipart/form-data">
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
                        <InputFileUpload name={"files"} />
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </Paper>
        </Box>
    );
}
