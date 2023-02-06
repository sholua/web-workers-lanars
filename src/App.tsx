import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import AppForm from "./components/AppForm";
import { AppWrapper } from "./components/AppWrapper";

const yellowColor = "#FFEA20";
const blueColor = "#8DCBE6";

function App() {
  const [background, setBackground] = useState(yellowColor);

  const handleChangeBackground = () => {
    const newBackground = background === yellowColor ? blueColor : yellowColor;
    setBackground(newBackground);
  };

  return (
    <AppWrapper style={{ backgroundColor: background }}>
      <Container>
        <Button
          sx={{ mb: 3 }}
          variant="outlined"
          onClick={handleChangeBackground}
        >
          Change background
        </Button>
        <Typography component="h2">Calculate Fibonacci Number</Typography>
        <AppForm />
      </Container>
    </AppWrapper>
  );
}

export default App;
