import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { getSumOfNumberSequence } from "../../helpers";
import { useWebWorker } from "../../hooks";
import AppForm from "../AppForm/AppForm";
import Info from "../Info/Info";

function SumOfNumbers() {
  const [fibNumber, setFibNumber] = useState<null | number>(null);
  const { result, error, run } = useWebWorker(getSumOfNumberSequence);

  const getSumWithWorker = (value: number) => {
    if (value && value > 0) {
      run(value);
    }
  };

  const getSum = (value: number) => {
    if (value && value > 0) {
      setFibNumber(null);
      setFibNumber(getSumOfNumberSequence(value));
    }
  };

  return (
    <Box>
      <Typography component="h2">
        Calculate a sum of a number sequence
      </Typography>
      <AppForm calculate={getSum} calculateWithWorker={getSumWithWorker} />
      <Info error={error} workerResult={result} helperResult={fibNumber} />
    </Box>
  );
}

export default SumOfNumbers;
