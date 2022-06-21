import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MODE_BALANCE, MODE_PAYPAL, MODE_VISA } from "../../constants/payMethods";
import { changeCurrentPayMethod, changeStep } from "../../store/actions/actions";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [radio, setRadio] = useState(useSelector(state=>state.payMethodReducer));

  const toCustomer = () => {
    dispatch(changeStep(0));
  };

  const setPayMode = (mode) => {
    dispatch(changeCurrentPayMethod(mode))
  }

  const paypalHandler = () => {
    setPayMode(MODE_PAYPAL);
    setRadio(MODE_PAYPAL);
  }

  const visaHandler = () => {
    setPayMode(MODE_VISA);
    setRadio(MODE_VISA);
  }

  const balanceHandler = () => {
    setPayMode(MODE_BALANCE);
    setRadio(MODE_BALANCE);
  }

  return (
    <Box>
      <Typography>Payment selection</Typography>

      <RadioGroup>
        <Box
          sx={{
            backgroundColor: "#ddd",
            m: "5px",
          }}
        >
          <Radio onClick={()=>paypalHandler()} checked={radio===MODE_PAYPAL} />
          PayPal
        </Box>

        <Box
          sx={{
            backgroundColor: "#ddd",
            m: "5px",
          }}
        >
          <Radio onClick={()=>visaHandler()} checked={radio===MODE_VISA} />
          VISA
        </Box>

        <Box
          sx={{
            backgroundColor: "#ddd",
            m: "5px",
          }}
        >
          <Radio onClick={()=>balanceHandler()} checked={radio===MODE_BALANCE}  />
          Balance
        </Box>
      </RadioGroup>

      <Box>
        <Button onClick={() => toCustomer()}>Return to customer select</Button>
        <Button disabled>Complete order</Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
