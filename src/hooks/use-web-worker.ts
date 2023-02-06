import { useState } from "react";

const workerHandler = (fn: (n: number) => number) => {
  onmessage = (event) => {
    postMessage(fn(event.data));
  };
};

export const useWebWorker = (fn: (a: any) => any) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const run = (value: number) => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
    );

    worker.onmessage = (event) => {
      setResult(event.data);
      worker.terminate();
    };

    worker.onerror = (error) => {
      setError(error.message);
      worker.terminate();
    };

    worker.postMessage(value);
  };

  return {
    result,
    error,
    run,
  };
};