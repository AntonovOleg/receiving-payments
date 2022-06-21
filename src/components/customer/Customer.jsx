import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../store/actions/actions";
import DialogEdit from "./DialogEdit";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Customer = ({
  id,
  name,
  address,
  paymentMethod,
  cardNumber,
  cardExpire,
  cardCVV,
}) => {
  const [isEditDialog, setIsEditDialog] = useState(false);
  const dispatch = useDispatch();
  const deleteCurrentCustomer = () => {
    dispatch(deleteCustomer(id));
  };

  return (
    <Card
      variant="outlined"
      sx={{
        width: "300px",
        m: '5px'
      }}
    >
      <CardContent>
        <Radio />

        <MonetizationOn />

        <Typography>{name}</Typography>
        <Typography>{address}</Typography>
        <Typography>Account No.: 32134649846</Typography>
        <Typography>Issuring bank: {paymentMethod}</Typography>

        <Button onClick={() => setIsEditDialog(true)}>Edit</Button>
        <Button onClick={deleteCurrentCustomer}>Delete</Button>
      </CardContent>
      <DialogEdit
        isEditDialog={isEditDialog}
        setIsEditDialog={setIsEditDialog}
        id={id}
        name={name}
        address={address}
        paymentMethod={paymentMethod}
        cardNumber={cardNumber}
        cardExpire={cardExpire}
        cardCVV={cardCVV}
      />
    </Card>
  );
};

export default Customer;
