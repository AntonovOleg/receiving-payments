import { Box, Button, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MODE_BALANCE,
  MODE_PAYPAL,
  MODE_VISA,
} from "../../constants/payMethods";
import {
  changeCurrentPayMethod,
  changeStep,
} from "../../store/actions/actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [radio, setRadio] = useState(MODE_PAYPAL);

  const toCustomer = () => {
    dispatch(changeStep(0));
  };

  const setPayMode = (mode) => {
    dispatch(changeCurrentPayMethod(mode));
  };

  const radioHandler = (val) => {
    setRadio(val);
    setPayMode(val);
  };

  return (
    <Box>
      <Typography>Payment selection</Typography>

      <Box sx={{
        textAlign: 'left',
      }}>
        <RadioGroup
          onChange={(e) => radioHandler(e.target.value)}
          value={radio}
        >
          <Box
            sx={{
              backgroundColor: "#ddd",
              m: "5px",
            }}
          >
            <Radio value={MODE_PAYPAL} />
            PayPal
          </Box>

          <Box
            sx={{
              backgroundColor: "#ddd",
              m: "5px",
            }}
          >
            <Radio value={MODE_VISA} />
            VISA
          </Box>

          <Box
            sx={{
              backgroundColor: "#ddd",
              m: "5px",
            }}
          >
            <Radio value={MODE_BALANCE} />
            Balance
          </Box>
        </RadioGroup>
      </Box>

      <Box
        sx={{
          m: "5px",
        }}
      >
        <Button onClick={() => toCustomer()}>
          <ArrowBackIcon />
          Return to customer select
        </Button>
        <Button variant="outlined" disabled>
          Complete order
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
