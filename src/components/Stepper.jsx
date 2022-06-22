import { Step, StepLabel, Stepper } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const StepperComponent = () => {
  const activeStep = useSelector((state) => state.stepperReducer);

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        <Step key="customerStep">
          <StepLabel>01 Select Customer</StepLabel>
        </Step>

        <Step ket="payStep">
          <StepLabel>02 Select Pay Method</StepLabel>
        </Step>
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
