import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../../../store/actions/actions";

const DialogAdd = ({ dialogIsOpen, setDialogIsOpen }) => {
  const dispatch = useDispatch();
  const id = Math.random();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpire, setCardExpire] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const save = () => {
    dispatch(addCustomer(id, name, address,paymentMethod,cardNumber,cardExpire,cardCVV));
    clear();
    setDialogIsOpen(false);
  }

  const cancel = () => {
    clear();
    setDialogIsOpen(false);
  }

  const clear = () => {
    setName('');
    setAddress('');
    setPaymentMethod('');
    setCardNumber('');
    setCardExpire('');
    setCardCVV('');
  }

  return (
    <Dialog open={dialogIsOpen} onClose={() => setDialogIsOpen(false)}>
      <DialogTitle>Add Customer Account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor in cididunt ut labore et dolore magna aliqua
        </DialogContentText>

        <Box>
          <TextField label="Name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Box>
        <Box>
          <TextField label="Address" variant="standard" value={address} onChange={(e)=>setAddress(e.target.value)} />
        </Box>

        <Select label="Payment method" value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
          <MenuItem value='creditCard'>Credit Card</MenuItem>
          <MenuItem value='paypal'>PayPal</MenuItem>
        </Select>

        <DialogContentText>
          Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.
        </DialogContentText>

        <Box>
          <TextField label="Card number" variant="standard" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
          <TextField label="Expire date" variant="standard" value={cardExpire} onChange={(e)=>setCardExpire(e.target.value)} />
          <TextField label="CVV code" variant="standard" value={cardCVV} onChange={(e)=>setCardCVV(e.target.value)} />
        </Box>

      </DialogContent>

      <Box sx={{
        m: '5px'
      }}>
        <Button onClick={()=>cancel()}>Cancel</Button>
        <Button onClick={()=>save()}>Save</Button>
      </Box>

    </Dialog>
  );
};

export default DialogAdd;
