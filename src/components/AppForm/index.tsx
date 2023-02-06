import { ChangeEvent, useState } from "react";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";
import { getNthFobonacciNumber } from "../../helpers";
import { useWebWorker } from "../../hooks";
import { FormWrapper } from "./styles";

function AppForm() {
  const [value, setValue] = useState("");
  const [fibNumber, setFibNumber] = useState<null | number>(null);
  const { result, error, run } = useWebWorker(getNthFobonacciNumber);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const calculateNthFibNumberWithWorker = () => {
    run(+value);
  };

  const calculateNthFibNumberWithoutWorker = () => {
    setFibNumber(getNthFobonacciNumber(+value));
  };

  return (
    <Box>
      <FormWrapper>
        <TextField
          value={value}
          label="Enter a number"
          variant="standard"
          onChange={handleInputChange}
        />

        <ButtonGroup>
          <Button
            variant="outlined"
            onClick={calculateNthFibNumberWithoutWorker}
          >
            Calculate
          </Button>

          <Button variant="outlined" onClick={calculateNthFibNumberWithWorker}>
            Calculate with WebWorker
          </Button>
        </ButtonGroup>
      </FormWrapper>

      <Box>
        {error ? <Alert severity="error">{error}</Alert> : null}
        {result ? (
          <Alert severity="success">{`Worker result: ${result}`}</Alert>
        ) : null}
        {fibNumber ? (
          <Alert severity="success">{`Helper result: ${fibNumber}`}</Alert>
        ) : null}
      </Box>
    </Box>
  );
}

export default AppForm;
