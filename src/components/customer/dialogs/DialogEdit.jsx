import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch } from "react-redux";
import { editCustomer } from "../../../store/actions/actions";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string("Enter the name").required("Required"),
  address: yup.string("Enter address").required("Required"),
  paymentMethod: yup.string().required("Required"),
  cardNumber: yup
    .number("Enter card number")
    .typeError("Only numbers")
    .required("Required"),
  cardExpire: yup.string("Enter the card expire date").required("Required"),
  cardCVV: yup
    .number("Enter the CVV code")
    .typeError("Numeric only")
    .required("Required"),
});

const DialogEdit = ({
  isEditDialog,
  setIsEditDialog,
  id,
  name,
  address,
  paymentMethod,
  cardNumber,
  cardExpire,
  cardCVV,
}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: name,
      address: address,
      paymentMethod: paymentMethod,
      cardNumber: cardNumber,
      cardExpire: cardExpire,
      cardCVV: cardCVV,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(editCustomer({id, ...values}));
      setIsEditDialog(false);
    },
  });

  const cancel = () => {
    setIsEditDialog(false);
  };

  return (
    <Dialog open={isEditDialog} onClose={() => setIsEditDialog(false)}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Edit Customer Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor in cididunt ut labore et dolore magna aliqua
          </DialogContentText>

          <Box>
            <TextField
              label="Name"
              name="name"
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{
                m: "5px",
              }}
            />
          </Box>
          <Box>
            <TextField
              label="Address"
              name="address"
              variant="standard"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              sx={{
                m: "5px",
              }}
            />
          </Box>

          <FormControl
            sx={{
              mt: "10px",
            }}
            variant="standard"
          >
            <InputLabel id="paymentLabel">Payment Method</InputLabel>
            <Select
              label="Payment method"
              labelId="paymentLabel"
              name="paymentMethod"
              value={formik.values.paymentMethod}
              onChange={formik.handleChange}
              sx={{
                width: "200px",
                my: "10px",
              }}
            >
              <MenuItem value="creditCard">Credit Card</MenuItem>
              <MenuItem value="paypal">PayPal</MenuItem>
            </Select>
          </FormControl>

          <DialogContentText>
            Safe money transfer using your bank account. Visa, Maestro,
            Discover, American Express.
          </DialogContentText>

          <Box>
            <TextField
              label="Card number"
              variant="standard"
              name="cardNumber"
              id="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
              }
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
              sx={{
                m: "5px",
              }}
            />
            <TextField
              label="Expire date"
              variant="standard"
              name="cardExpire"
              value={formik.values.cardExpire}
              onChange={formik.handleChange}
              error={
                formik.touched.cardExpire && Boolean(formik.errors.cardExpire)
              }
              helperText={formik.touched.cardExpire && formik.errors.cardExpire}
              sx={{
                mx: "10px",
                width: "100px",
                mt: "5px",
              }}
            />
            <TextField
              label="CVV code"
              variant="standard"
              name="cardCVV"
              value={formik.values.cardCVV}
              onChange={formik.handleChange}
              error={formik.touched.cardCVV && Boolean(formik.errors.cardCVV)}
              helperText={formik.touched.cardCVV && formik.errors.cardCVV}
              sx={{
                width: "100px",
                mt: "5px",
              }}
            />
          </Box>
        </DialogContent>

        <Box
          sx={{
            m: "5px",
          }}
        >
          <Grid
            container
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={cancel}>Cancel</Button>
            <Button type="submit">Save</Button>
          </Grid>
        </Box>
      </form>
    </Dialog>
  );
};

export default DialogEdit;
