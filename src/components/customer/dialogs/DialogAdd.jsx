import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const save = () => {
    if (vaildate()) {
      dispatch(
        addCustomer(
          id,
          name,
          address,
          paymentMethod,
          cardNumber,
          cardExpire,
          cardCVV
        )
      );
    }
    clear();
    setDialogIsOpen(false);
  };

  const vaildate = () => {
    if (name === "") return false;
    if (address === "") return false;
    if (paymentMethod === "") return false;
    if (cardNumber === "") return false;
    if (cardExpire === "") return false;
    if (cardCVV === "") return false;
    return true;
  };

  const cancel = () => {
    clear();
    setDialogIsOpen(false);
  };

  const clear = () => {
    setName("");
    setAddress("");
    setPaymentMethod("paypal");
    setCardNumber("");
    setCardExpire("");
    setCardCVV("");
  };

  //for debugging
  const test = () => {
    setName("Mishel");
    setAddress("New York");
    setPaymentMethod("paypal");
    setCardNumber("5468422214578540");
    setCardExpire("07/23");
    setCardCVV("701");
  };

  return (
    <Dialog open={dialogIsOpen} onClose={() => setDialogIsOpen(false)}>
      <DialogTitle>Add Customer Account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor in cididunt ut labore et dolore magna aliqua
        </DialogContentText>

        <Box>
          <TextField
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            sx={{
              m: '5px'
            }}
          />
        </Box>
        <Box>
          <TextField
            label="Address"
            variant="standard"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{
              m: '5px'
            }}
          />
        </Box>

        <FormControl
          sx={{
            mt: "10px",
            m: '5px'
          }}
          variant='standard'
        >
          <InputLabel id="paymentLabel">Payment Method</InputLabel>
          <Select
            label="Payment method"
            labelId="paymentLabel"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
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
          Safe money transfer using your bank account. Visa, Maestro, Discover,
          American Express.
        </DialogContentText>

        <Box>
          <TextField
            label="Card number"
            variant="standard"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            sx={{
              m: '5px'
            }}
          />

          <TextField
            label="Expire date"
            variant="standard"
            value={cardExpire}
            onChange={(e) => setCardExpire(e.target.value)}
            sx={{
              mx: "10px",
              width: "100px",
              mt: '5px'
            }}
          />
          <TextField
            label="CVV code"
            variant="standard"
            value={cardCVV}
            onChange={(e) => setCardCVV(e.target.value)}
            sx={{
              width: "100px",
              mt: '5px'
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
            display: "flex"
          }}
        >
          <Button onClick={() => test()}>Test</Button>
          <Button onClick={() => cancel()}>Cancel</Button>
          <Button onClick={() => save()}>Save</Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DialogAdd;
