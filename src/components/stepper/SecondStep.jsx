import { Form, Formik } from "formik";
import FormikTextField from "../FormikTextField";
import * as Yup from "yup";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/features/formSlice";

export default function SecondStep({ activeStep, handleBack, handleNext }) {
    const dispatch = useDispatch();

    const schema = Yup.object({
        city: Yup.string().required("city is required"),
        street: Yup.string().required("street is required"),
        zipCode: Yup.number("zipCode must be a number").required(
            "Zip Code is required",
        ),
    });
    const handleSubmit = (values) => {
        dispatch(setValue(values));
        handleNext();
    };

    return (
        <Formik
            initialValues={{
                street: "",
                city: "",
                zipCode: "",
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            <Form>
                <FormikTextField label={"Street"} name={"street"} />
                <FormikTextField label={"City"} name={"city"} />
                <FormikTextField label={"ZipCode"} name={"zipCode"} type="number" />
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
