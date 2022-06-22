import "./App.css";
import Main from "./components/Main";
import BasketForm from "./components/basket/BasketForm";
import { Box, Grid } from "@mui/material";
import StepperComponent from "./components/Stepper";
import { Container } from "@mui/system";
import './styles/styles.css'

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

          <Box className='basket-wrapper' sx={{
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
