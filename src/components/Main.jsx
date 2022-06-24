import { useSelector } from "react-redux";
import { STEP1 } from "../constants/index";
import CustomerForm from "./customer/CustomerForm";
import PaymentForm from "./payment/PaymentForm";

const Main = ({ addHandler }) => {
  const step = useSelector((state) => state.stepperReducer);
  return (
    <>
      {step === STEP1 ? (
        <CustomerForm addHandler={addHandler} />
      ) : (
        <PaymentForm />
      )}
    </>
  );
};

export default Main;
