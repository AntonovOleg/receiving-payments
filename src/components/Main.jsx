import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import CustomerForm from "./customer/CustomerForm";
import PaymentForm from "./payment/PaymentForm";
import StepperComponent from "./Stepper";

const Main = () => {
  const step = useSelector((state) => state.stepperReducer);
  return (
    <Container>
      <StepperComponent />
      {step === 0 ? <CustomerForm /> : <PaymentForm />}
    </Container>
  );
};

export default Main;
