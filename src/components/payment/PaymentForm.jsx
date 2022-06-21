import { Box, Button, Radio, RadioGroup, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeStep } from "../../store/actions/actions";

const PaymentForm = () => {
  const dispatch = useDispatch();

  const toCustomer = () => {
    dispatch(changeStep(0));
  }

  return (
    <Box>
      <Typography>Payment selection</Typography>

      

      <RadioGroup>
        <Box sx={{
          backgroundColor: '#ddd',
          m: '5px'
        }}>
          <Radio>
            
          </Radio>
          PayPal
        </Box>

        <Box sx={{
          backgroundColor: '#ddd',
          m: '5px'
        }}>
          <Radio>
            
          </Radio>
          VISA
        </Box>

        <Box sx={{
          backgroundColor: '#ddd',
          m: '5px'
        }}>
          <Radio>
            
          </Radio>
          Balance
        </Box>
      </RadioGroup>


      <Box>
        <Button onClick={()=>toCustomer()}>Return to customer select</Button>
        <Button>Complete order</Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
