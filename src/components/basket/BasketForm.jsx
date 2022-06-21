import { Badge, Card, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  MODE_BALANCE,
  MODE_PAYPAL,
  MODE_VISA,
} from "../../constants/payMethods";

const BasketForm = () => {
  const currentPayMethod = useSelector((state) => state.payMethodReducer);

  const subtotal = 400;
  const pps = (subtotal / 100) * 1;
  const vat = (subtotal / 100) * 21;

  let total;

  switch (currentPayMethod) {
    case MODE_PAYPAL:
      total = subtotal + pps + vat;
      break;
    case MODE_VISA:
      total = subtotal + pps;
      break;
    case MODE_BALANCE:
      total = subtotal;
      break;
  }

  return (
    <Box
      sx={{
        mt: "10px",
        p: '10px',
        backgroundColor: "#eeeef4",
        width: '260px'
      }}
    >
      <Badge badgeContent={2} color='primary' sx={{
        p: '5px'
      }}>
        <Typography>Shopping Cart</Typography>
      </Badge>

      <Divider />

      <Box>
        <Card
          sx={{
            m: "10px",
          }}
        >
          <img src="./logo192.png" height="50px" />
          <Typography>Glitch</Typography>
          <Typography>Cristian Lamborgini</Typography>
          <Typography>$200.00</Typography>
        </Card>

        <Card
          sx={{
            m: "10px",
          }}
        >
          <img src="./logo192.png" height="50px" />
          <Typography>Bianca</Typography>
          <Typography>Cristian Lamborgini</Typography>
          <Typography>$200.00</Typography>
        </Card>
      </Box>

      <Divider />

      <Box>
        <Typography>Subtotal: {subtotal}</Typography>

        {currentPayMethod!==MODE_BALANCE&&<Typography>Payment processing services 1%: {pps}</Typography>}

        {currentPayMethod===MODE_PAYPAL&&<Typography>VAT 21%: {vat}</Typography>}

        <Divider />

        <Typography>Total: {total}</Typography>
      </Box>
    </Box>
  );
};

export default BasketForm;
