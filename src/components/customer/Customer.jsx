import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  Menu,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../store/actions/actions";
import DialogEdit from "./dialogs/DialogEdit";
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
        m: "5px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              mt: "50px",
            }}
          >
            <Radio value={id} />
          </Box>

          <Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Box>
                <MonetizationOn sx={{
                  fontSize: 'extra-large'
                }} />
              </Box>

              <Box>
                <Typography>{name}</Typography>
                <Typography sx={{
                  color: 'gray'
                }}>{address}</Typography>
              </Box>
            </Box>

            <Typography>Account No.: 32134649846</Typography>
            <Typography>Issuring bank: {paymentMethod}</Typography>

            <Button onClick={() => setIsEditDialog(true)}>Edit</Button>
            <Button onClick={deleteCurrentCustomer}>Delete</Button>
          </Box>
        </Box>
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
