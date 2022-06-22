import { Badge, Card, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import {
  MODE_BALANCE,
  MODE_PAYPAL,
  MODE_VISA,
} from "../../constants/payMethods";

const BasketForm = () => {
  const currentPayMethod = useSelector((state) => state.payMethodReducer) * 1;

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
        p: "10px",
        backgroundColor: "#eeeef4",
        width: "300px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            m: "5px",
          }}
        >
          <Typography variant="h5">Shopping Cart</Typography>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            mr: "30px",
            mt: "15px",
          }}
        >
          <Badge
            badgeContent={2}
            color="primary"
            sx={{
              p: "5px",
            }}
          >
            <Box />
          </Badge>
        </Grid>
      </Grid>

      <Divider />

      <Box>
        <Card
          sx={{
            m: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                mt: "10px",
              }}
            >
              <img src="./logo192.png" height="50px" />
            </Box>
            <Box>
              <Typography>Glitch</Typography>
              <Typography sx={{ color: "gray" }}>
                Cristian Lamborgini
              </Typography>
              <Typography sx={{color: 'gray'}}>$200.00</Typography>
            </Box>
          </Box>
        </Card>

        <Card
          sx={{
            m: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                mt: "10px",
              }}
            >
              <img src="./logo192.png" height="50px" />
            </Box>
            <Box>
              <Typography>Bianca</Typography>
              <Typography sx={{color:'gray'}}>Cristian Lamborgini</Typography>
              <Typography sx={{color:'gray'}}>$200.00</Typography>
            </Box>
          </Box>
        </Card>
      </Box>

      <Divider />

      {/* SUBTOTAL */}
      <Box sx={{ p: "2px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Subtotal:</Typography>
          <Typography>{subtotal.toFixed(2)}</Typography>
        </Box>
      </Box>

      {/* Payment processing services 1% */}
      {currentPayMethod !== MODE_BALANCE && (
        <Box sx={{ p: "2px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Payment processing services 1%:</Typography>
            <Typography>{pps.toFixed(2)}</Typography>
          </Box>
        </Box>
      )}

      {/* VAT */}
      {currentPayMethod === MODE_PAYPAL && (
        <Box sx={{ p: "2px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>VAT 21%:</Typography>
            <Typography>{vat.toFixed(2)}</Typography>
          </Box>
        </Box>
      )}

      <Divider />

      {/* TOTAL */}
      <Box sx={{ p: "2px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total:</Typography>
          <Typography>{total.toFixed(2)}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketForm;
