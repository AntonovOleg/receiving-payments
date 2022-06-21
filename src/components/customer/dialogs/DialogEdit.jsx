import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCustomer } from "../../../store/actions/actions";

const DialogEdit = ({ isEditDialog, setIsEditDialog, id, name, address, paymentMethod, cardNumber, cardExpire, cardCVV }) => {
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
    setIsEditDialog(false);
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
          />
        </Box>
        <Box>
          <TextField
            label="Address"
            variant="standard"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </Box>

        <Select
          label="Payment method"
          value={newPaymentMethod}
          onChange={(e) => setNewPaymentMethod(e.target.value)}
        >
          <MenuItem value="creditCard">Credit Card</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
        </Select>

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
          />
          <TextField
            label="Expire date"
            variant="standard"
            value={newCardExpire}
            onChange={(e) => setNewCardExpire(e.target.value)}
          />
          <TextField
            label="CVV code"
            variant="standard"
            value={newCardCVV}
            onChange={(e) => setNewCardCVV(e.target.value)}
          />
        </Box>
      </DialogContent>

      <Box sx={{
        m: '5px'
      }}>
        <Button onClick={() => cancel()}>Cancel</Button>
        <Button onClick={() => save()}>Save</Button>
      </Box>
    </Dialog>
  );
};

export default DialogEdit;
