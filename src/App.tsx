import { Button, Container, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { AppWrapper } from "./components/AppWrapper";
import FibonacciNumber from "./components/FibonacciNumber/FibonacciNumber";
import SumOfNumbers from "./components/SumOfNumbers/SumOfNumbers";

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

        <FibonacciNumber />

        <Divider sx={{ mt: 3, mb: 3 }} />

        <SumOfNumbers />
      </Container>
    </AppWrapper>
  );
}

export default App;
