import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import FirstStep from "../components/stepper/FirstStep";
import SecondStep from "../components/stepper/SecondStep";
import ThirdStep from "../components/stepper/ThirdStep";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const steps = [" Personal Info", "Address", "Review & Submit"];
export default function StepperPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(false);

    const closeHandle = () => setOpen(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box
            sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
        >
            <Typography textAlign={"center"} variant="h4">
                Stepper Form
            </Typography>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    {activeStep === 0 && (
                        <FirstStep
                            activeStep={activeStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 1 && (
                        <SecondStep
                            activeStep={activeStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                        />
                    )}
                    {activeStep === 2 && (
                        <ThirdStep
                            activeStep={activeStep}
                            handleBack={handleBack}
                            handleNext={handleNext}
                            setOpen={setOpen}
                        />
                    )}
                </React.Fragment>
            )}
            <Snackbar open={open} autoHideDuration={1600} onClose={closeHandle}>
                <Alert
                    onClose={closeHandle}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Submitted Successfully
                </Alert>
            </Snackbar>
        </Box>
    );
}
