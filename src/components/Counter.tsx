import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  const increment = () => setcount((prev) => prev + 1);
  return <button onClick={increment}>{count}</button>;
};
