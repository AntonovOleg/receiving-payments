import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCustomer } from "../../../store/actions/actions";

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
  const [newName, setNewName] = useState(name);
  const [newAddress, setNewAddress] = useState(address);
  const [newPaymentMethod, setNewPaymentMethod] = useState(paymentMethod);
  const [newCardNumber, setNewCardNumber] = useState(cardNumber);
  const [newCardExpire, setNewCardExpire] = useState(cardExpire);
  const [newCardCVV, setNewCardCVV] = useState(cardCVV);
  const dispatch = useDispatch();

  const cancel = () => {
    setIsEditDialog(false);
  };

  const save = () => {
    if (vaildate()) {
      dispatch(
        editCustomer(
          id,
          newName,
          newAddress,
          newPaymentMethod,
          newCardNumber,
          newCardExpire,
          newCardCVV
        )
      );
    } else {
      //надо откатить, иначе при повторном нажатии edit
      // будут неправильные значения
      setNewName(name);
      setNewAddress(address);
      setNewPaymentMethod(paymentMethod);
      setNewCardNumber(cardNumber);
      setNewCardExpire(cardExpire);
      setNewCardCVV(cardCVV);
    }
    setIsEditDialog(false);
  };

  const vaildate = () => {
    if (newName === "") return false;
    if (newAddress === "") return false;
    if (newPaymentMethod === "") return false;
    if (newCardNumber === "") return false;
    if (newCardExpire === "") return false;
    if (newCardCVV === "") return false;
    return true;
  };

  return (
    <Dialog open={isEditDialog} onClose={() => setIsEditDialog(false)}>
      <DialogTitle>Edit Customer Account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor in cididunt ut labore et dolore magna aliqua
        </DialogContentText>

        <Box>
          <TextField
            label="Name"
            variant="standard"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            sx={{
              m: '5px'
            }}
          />
        </Box>
        <Box>
          <TextField
            label="Address"
            variant="standard"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            sx={{
              m: '5px'
            }}
          />
        </Box>

        <FormControl
          sx={{
            mt: "10px",
          }}
          variant='standard'
        >
          <InputLabel id="paymentLabel">Payment Method</InputLabel>
          <Select
            label="Payment method"
            labelId="paymentLabel"
            value={newPaymentMethod}
            onChange={(e) => setNewPaymentMethod(e.target.value)}
            sx={{
              width: "200px",
              m: '5px'
            }}
          >
            <MenuItem value="creditCard">Credit Card</MenuItem>
            <MenuItem value="paypal">PayPal</MenuItem>
          </Select>
        </FormControl>

        <DialogContentText>
          Safe money transfer using your bank account. Visa, Maestro, Discover,
          American Express.
        </DialogContentText>

        <Box>
          <TextField
            label="Card number"
            variant="standard"
            value={newCardNumber}
            onChange={(e) => setNewCardNumber(e.target.value)}
            sx={{
              m: '5px'
            }}
          />
          <TextField
            label="Expire date"
            variant="standard"
            value={newCardExpire}
            onChange={(e) => setNewCardExpire(e.target.value)}
            sx={{
              mx: "10px",
              width: "100px",
              mt: '5px'
            }}
          />
          <TextField
            label="CVV code"
            variant="standard"
            value={newCardCVV}
            onChange={(e) => setNewCardCVV(e.target.value)}
            sx={{
              width: "100px",
              m: '5px'
            }}
          />
        </Box>
      </DialogContent>

      <Box
        sx={{
          m: "5px",
        }}
      >
        <Box
          sx={{
            justifyContent: "flex-end",
            display: "flex",
          }}
        >
          <Button onClick={() => cancel()}>Cancel</Button>
          <Button onClick={() => save()}>Save</Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DialogEdit;
