import "./App.css";
import Main from "./components/Main";
import BasketForm from "./components/basket/BasketForm";
import { Box, Fab, Grid } from "@mui/material";
import StepperComponent from "./components/Stepper";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { changeDialogState } from "./store/actions/actions";

function App() {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(changeDialogState(true));
  };

  return (
    <div className="App">
      <Container>
        <StepperComponent />
        <Grid
          container
          justifyContent="space-between"
        >
          <Box
            sx={{
              flexGrow: "3",
            }}
          >
            <Main addHandler={addHandler} />
          </Box>

          <Grid
            container
            sx={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {useSelector((state) => state.stepperReducer) === 0 && (
              <Box className="btn-add">
                <Fab onClick={addHandler} color="primary">
                  <AddIcon />
                </Fab>
              </Box>
            )}
          </Grid>

          <Box
            className="basket-wrapper"
            sx={{
              flexGrow: "1",
            }}
          >
            <BasketForm />
          </Box>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
