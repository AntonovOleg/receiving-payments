import { useSelector } from "react-redux";
import CustomerForm from "./customer/CustomerForm";
import PaymentForm from "./payment/PaymentForm";

const Main = ({addHandler}) => {
  const step = useSelector((state) => state.stepperReducer);
  return <>{step === 0 ? <CustomerForm addHandler={addHandler} /> : <PaymentForm />}</>;
};

export default Main;
