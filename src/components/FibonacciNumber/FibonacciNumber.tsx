import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { getNthFobonacciNumber } from "../../helpers";
import { useWebWorker } from "../../hooks";
import AppForm from "../AppForm/AppForm";
import Info from "../Info/Info";

function FibonacciNumber() {
  const [fibNumber, setFibNumber] = useState<null | number>(null);
  const { result, error, run } = useWebWorker(getNthFobonacciNumber);

  const calculateNthFibNumberWithWorker = (value: number) => {
    if (value && value > 0) {
      run(value);
    }
  };

  const calculateNthFibNumber = (value: number) => {
    if (value && value > 0) {
      setFibNumber(null);
      setFibNumber(getNthFobonacciNumber(value));
    }
  };

  return (
    <Box>
      <Typography component="h2">Calculate Fibonacci Number</Typography>
      <AppForm
        calculate={calculateNthFibNumber}
        calculateWithWorker={calculateNthFibNumberWithWorker}
      />
      <Info error={error} workerResult={result} helperResult={fibNumber} />
    </Box>
  );
}

export default FibonacciNumber;
