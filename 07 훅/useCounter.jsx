import React, { useState } from "react";

function unsCounter(intialValue) {
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setcount((count) => count +1);
  const decreaseCount = () => setcount((count) => Math.max(count -1, 0));

  return [count, increaseCount, decreaseCount];
}

export  default useCounter;
