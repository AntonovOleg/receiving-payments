import { Button, Fab, Grid, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import DialogAdd from "./dialogs/DialogAdd";
import AddIcon from "@mui/icons-material/Add";
import { changeStep } from "../../store/actions/actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { STEP2 } from "../../constants/index";

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
          <Fab onClick={addHandler} color="primary">
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
                  {...curr}
                />
              );
            })}
            {customers && customers.length === 0 && (
              <Typography sx={{ color: "gray" }}>
                <i>No customers. Add a new customer account</i>
              </Typography>
            )}
          </RadioGroup>
        </Grid>

        <DialogAdd />
      </Box>

      <Grid container sx={{ my: "5px",  justifyContent: "space-between" }}>
        <Button disabled>
          <ArrowBackIcon />
          Return to shop
        </Button>

        <Button variant="contained" onClick={toPayment}>
          Continue to payment
        </Button>
      </Grid>
    </Box>
  );
};

export default CustomerForm;
