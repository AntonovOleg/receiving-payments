import { Button, Fab, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import DialogAdd from "./DialogAdd";
import AddIcon from "@mui/icons-material/Add";
import { changeStep } from "../../store/actions/actions";

const CustomerForm = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const customers = useSelector((state) => state.customerReducer);
  const dispatch = useDispatch();

  const toPayment = () => {
    dispatch(changeStep(1));
  };

  return (
    <>
      <Box>
        <Typography>Customer Account</Typography>

        <Customer />
        <Customer />

        <RadioGroup>
          {customers.map((curr) => {
            return (
              <Customer
                key={curr.id}
                id={curr.id}
                name={curr.name}
                address={curr.address}
                paymentMethod={curr.paymentMethod}
                cardNumber={curr.cardNumber}
                cardExpire={curr.cardExpire}
                cardCVV={curr.cardCVV}
              />
            );
          })}
        </RadioGroup>

        <Fab>
          <AddIcon color="primary" onClick={() => setDialogIsOpen(true)} />
        </Fab>

        <DialogAdd
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
        />
      </Box>

      <Box>
        <Button>Return to shop</Button>
        <Button onClick={() => toPayment()}>Continue to payment</Button>
      </Box>
    </>
  );
};

export default CustomerForm;
