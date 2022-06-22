import "./App.css";
import Main from "./components/Main";
import BasketForm from "./components/basket/BasketForm";
import { Box, Fab, Grid } from "@mui/material";
import StepperComponent from "./components/Stepper";
import { Container } from "@mui/system";
import './styles/styles.css';
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { changeDialogState } from "./store/actions/actions";

function App() {
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(changeDialogState(true))
  }

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
            <Main addHandler={addHandler} />
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>

            <Box className='btn-add'>
            <Fab onClick={() => addHandler()} color="primary">
              <AddIcon />
            </Fab>
            </Box>
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
