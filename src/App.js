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
        <Box>

          <Grid container>

            <Grid item>
              <Main />
            </Grid>

            <Grid item>
              <BasketForm />
            </Grid>

          </Grid>
          
        </Box>
      </Container>
    </div>
  );
}

export default App;
