import { Form, Formik } from "formik";
import FormikTextField from "../FormikTextField";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/features/formSlice";

export default function FirstStep({ activeStep, handleBack, handleNext }) {
    const dispatch = useDispatch();
    const schema = Yup.object({
        name: Yup.string().required("name is required"),
        email: Yup.string().required("email is required").email("Invalid email"),
    });

    const handleSubmit = (values) => {
        dispatch(setValue(values));
        handleNext();
    };

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form>
                <FormikTextField label={"Full Name"} name={"name"} />
                <FormikTextField label={"Email"} name={"email"} />
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button type="submit">Next</Button>
                </Box>
            </Form>
        </Formik>
    );
}
