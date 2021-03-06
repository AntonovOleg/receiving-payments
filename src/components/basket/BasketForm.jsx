import { ConstructionOutlined } from "@mui/icons-material";
import { Badge, Card, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import {
  MODE_BALANCE,
  MODE_PAYPAL,
  MODE_VISA,
} from "../../constants";

const BasketForm = () => {
  const currentPayMethod = Number(useSelector((state) => state.payMethodReducer));
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
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          sx={{
            m: "5px",
          }}
        >
          <Typography variant="h5">Shopping Cart</Typography>
        </Grid>

        <Grid
          item
          sx={{
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
          <Grid container>
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
              <Typography sx={{ color: "gray" }}>$200.00</Typography>
            </Box>
          </Grid>
        </Card>

        <Card
          sx={{
            m: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid>
            <Box
              sx={{
                mt: "10px",
              }}
            >
              <img src="./logo192.png" height="50px" />
            </Box>
            <Box>
              <Typography>Bianca</Typography>
              <Typography sx={{ color: "gray" }}>
                Cristian Lamborgini
              </Typography>
              <Typography sx={{ color: "gray" }}>$200.00</Typography>
            </Box>
          </Grid>
        </Card>
      </Box>

      <Divider />

      {/* SUBTOTAL */}
      <Box sx={{ p: "2px" }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Typography>Subtotal:</Typography>
          <Typography>{subtotal.toFixed(2)}</Typography>
        </Grid>
      </Box>

      {/* Payment processing services 1% */}
      {currentPayMethod !== MODE_BALANCE && (
        <Box sx={{ p: "2px" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Typography>Payment processing services 1%:</Typography>
            <Typography>{pps.toFixed(2)}</Typography>
          </Grid>
        </Box>
      )}

      {/* VAT */}
      {currentPayMethod === MODE_PAYPAL && (
        <Box sx={{ p: "2px" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Typography>VAT 21%:</Typography>
            <Typography>{vat.toFixed(2)}</Typography>
          </Grid>
        </Box>
      )}

      <Divider />

      {/* TOTAL */}
      <Box sx={{ p: "2px" }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Typography>Total:</Typography>
          <Typography>{total.toFixed(2)}</Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default BasketForm;
