import React, { useState } from "react";
import { useWebWorker } from "./hooks";

function App() {
  const [value, setValue] = useState(null);
  const { result, error, run } = useWebWorker((k: number) => k + 1);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
