import { Box, Alert } from "@mui/material";

interface InfoProps {
  error: String;
  workerResult: Number | null;
  helperResult: Number | null;
}

function Info({ error, workerResult, helperResult }: InfoProps) {
  return (
    <Box>
      {error ? <Alert severity="error">{error}</Alert> : null}
      {workerResult ? (
        <Alert severity="success">{`Worker result: ${workerResult}`}</Alert>
      ) : null}
      {helperResult ? (
        <Alert severity="success">{`Helper result: ${helperResult}`}</Alert>
      ) : null}
    </Box>
  );
}

export default Info;
