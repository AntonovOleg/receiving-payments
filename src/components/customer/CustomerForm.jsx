import { Button, Fab, Grid, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import DialogAdd from "./dialogs/DialogAdd";
import AddIcon from "@mui/icons-material/Add";
import { changeStep } from "../../store/actions/actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { STEP2 } from "../../constants/steps";

const CustomerForm = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const customers = useSelector((state) => state.customerReducer);
  const dispatch = useDispatch();

  const toPayment = () => {
    dispatch(changeStep(STEP2));
  };

  return (
    <Box
      sx={{
        mr: "3px",
      }}
    >
      <Box>
        <Typography variant='h5'>Customer Account</Typography>
        <Grid container>
          <Box sx={{
            display: 'flex',
          }}>
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
            {customers && customers.length > 0 ? null : (
              <Typography sx={{ color: "gray" }}>
                <i>No customers. Add a new customer account</i>
              </Typography>
            )}
          </RadioGroup>
          </Box>

        </Grid>
        <Fab onClick={() => setDialogIsOpen(true)} color="primary">
          <AddIcon />
        </Fab>

        <DialogAdd
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
        />
      </Box>

      <Box sx={{ my: "5px" }}>
        <Button disabled>
          <ArrowBackIcon />
          Return to shop
        </Button>
        <Button variant="contained" onClick={() => toPayment()}>
          Continue to payment
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerForm;
