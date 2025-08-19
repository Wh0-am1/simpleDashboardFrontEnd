import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import LabelAndData from "../LabelAndData";

export default function ThirdStep({
    activeStep,
    handleBack,
    handleNext,
    setOpen,
}) {
    const state = useSelector((state) => state.stepper);
    const finishHandle = () => {
        setOpen(true);
        handleNext();
    };
    return (
        <Box>
            <Typography mb={1}>Review</Typography>
            <Card>
                <CardContent>
                    <LabelAndData label={"Full Name"} value={state.name} />
                    <LabelAndData label={"Email"} value={state.email} />
                    <LabelAndData label={"City"} value={state.city} />
                    <LabelAndData label={"Street"} value={state.street} />
                    <LabelAndData label={"Zip Code"} value={state.zipCode} />
                </CardContent>
            </Card>
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
                <Button onClick={finishHandle}>Finish</Button>
            </Box>
        </Box>
    );
}
