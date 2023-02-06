import { Container, Typography } from "@mui/material";
import AppForm from "./components/AppForm";

function App() {
  return (
    <Container>
      <Typography component="h2">Calculate Fibonacci Number</Typography>
      <AppForm />
    </Container>
  );
}

export default App;
