import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Outlet } from "react-router-dom";
import { useStep } from "../../context/client/ClientProvider";

const steps = ["Personal Details", "Create an announcement", "Check out"];

const outer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "600px",
  margin: "0 auto",
};
const ClientWrapper = () => {
  const { step } = useStep();

  return (
    <Box style={outer}>
      <Box p={1} width="90%">
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Outlet />
      </Box>
    </Box>
  );
};

export default ClientWrapper;
