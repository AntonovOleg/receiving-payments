import { Button, Fab, Grid, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import DialogAdd from "./dialogs/DialogAdd";
import AddIcon from "@mui/icons-material/Add";
import { changeStep } from "../../store/actions/actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { STEP2 } from "../../constants/steps";

const CustomerForm = ({ addHandler }) => {
  const customers = useSelector((state) => state.customerReducer);
  const dispatch = useDispatch();

  const toPayment = () => {
    dispatch(changeStep(STEP2));
  };

  return (
    <Box
      sx={{
        mr: "3px",
        mt: '30px'
      }}
    >
      <Box>
        <Typography variant="h5">Customer Account</Typography>
        <Box className='btn-add-sec'>
          <Fab onClick={() => addHandler()} color="primary">
            <AddIcon />
          </Fab>
        </Box>
        <Grid container direction="column" sx={{
          minHeight: '200px'
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
        </Grid>

        <DialogAdd />
      </Box>

      <Box sx={{ my: "5px", display: "flex", justifyContent: "space-between" }}>
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
