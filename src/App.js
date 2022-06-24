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
  const step = useSelector((state) => state.stepperReducer);

  const addHandler = () => {
    dispatch(changeDialogState(true));
  };

  return (
    <div className="App">
      <Container>
        <StepperComponent />
        <Grid container justifyContent="space-between" sx={{}}>
          <Grid
            sx={{
              flexGrow: "3",
            }}
          >
            <Main addHandler={addHandler} />
          </Grid>

          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {step === 0 && (
              <Grid item className="btn-add">
                <Fab onClick={addHandler} color="primary">
                  <AddIcon />
                </Fab>
              </Grid>
            )}
          </Grid>

          <Grid
            item
            className="basket-wrapper"
            sx={{
              flexGrow: "1",
            }}
          >
            <BasketForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
