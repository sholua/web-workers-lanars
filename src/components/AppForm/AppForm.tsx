import { ChangeEvent, useState } from "react";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { FormWrapper } from "./styles";

interface FormProps {
  calculate: (n: number) => void;
  calculateWithWorker: (n: number) => void;
}

function AppForm({ calculate, calculateWithWorker }: FormProps) {
  const [value, setValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormWrapper>
      <TextField
        value={value}
        label="Enter a number"
        variant="standard"
        onChange={handleInputChange}
      />

      <ButtonGroup>
        <Button variant="outlined" onClick={() => calculate(+value)}>
          Calculate
        </Button>

        <Button variant="outlined" onClick={() => calculateWithWorker(+value)}>
          Calculate with WebWorker
        </Button>
      </ButtonGroup>
    </FormWrapper>
  );
}

export default AppForm;
