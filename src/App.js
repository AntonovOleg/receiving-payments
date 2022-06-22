import "./App.css";
import Main from "./components/Main";
import BasketForm from "./components/basket/BasketForm";
import { Box, Grid } from "@mui/material";
import StepperComponent from "./components/Stepper";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Container>
        <StepperComponent />
        <Grid
          container
          justifyContent="space-between"
          sx={{
            display: "flex",
          }}
        >

          
          <Box sx={{
            flexGrow: '3',  
          }}>
            <Main />
          </Box>

          <Box sx={{
            flexGrow: '1'
          }}>
            <BasketForm />
          </Box>

        </Grid>
      </Container>
    </div>
  );
}

export default App;
