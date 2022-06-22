import "./App.css";
import Main from "./components/Main";
import BasketForm from "./components/basket/BasketForm";
import { Box } from "@mui/material";
import StepperComponent from "./components/Stepper";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Container>
        <StepperComponent />
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <Main />
          </Box>

          <Box>
            <BasketForm />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
