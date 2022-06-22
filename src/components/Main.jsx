import { useSelector } from "react-redux";
import CustomerForm from "./customer/CustomerForm";
import PaymentForm from "./payment/PaymentForm";

const Main = () => {
  const step = useSelector((state) => state.stepperReducer);
  return <>{step === 0 ? <CustomerForm /> : <PaymentForm />}</>;
};

export default Main;
