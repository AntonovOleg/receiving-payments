import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Radio,
  Typography,
} from "@mui/material";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../store/actions/actions";
import DialogEdit from "./dialogs/DialogEdit";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

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
  const [isMenu, setMenu] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const dispatch = useDispatch();
  const deleteCurrentCustomer = () => {
    dispatch(deleteCustomer(id));
  };

  const handleMenu = (e) => {
    setMenu(true);
    setAnchor(e.target);
  };

  const editHandler = () => {
    setIsEditDialog(true);
    setMenu(false);
  };

  return (
    <Grid item xs={12} md={6} lg={4}>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <MonetizationOn
                    sx={{
                      fontSize: "extra-large",
                    }}
                  />
                </Box>

                <Box>
                  <Typography>{name}</Typography>
                  <Typography
                    sx={{
                      color: "gray",
                    }}
                  >
                    {address}
                  </Typography>
                </Box>
              </Box>

              <Typography>Acc. No.: 32134649846</Typography>
              <Typography>Issuring bank: {paymentMethod}</Typography>
            </Box>

            <Box>
              <IconButton onClick={(e) => handleMenu(e)}>
                <MoreVert />
              </IconButton>
            </Box>

            <Menu
              open={isMenu}
              onClose={() => setMenu(false)}
              anchorEl={anchor}
            >
              <MenuItem onClick={() => editHandler()}>
                <CheckIcon />
                Edit
              </MenuItem>
              <MenuItem onClick={deleteCurrentCustomer}>
                <CloseIcon />
                Delete
              </MenuItem>
            </Menu>
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
    </Grid>
  );
};

export default Customer;
