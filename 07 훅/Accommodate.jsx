import React, { useState, useEffect } from "react';
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomdate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("=======================");
    console.log("useEffect() is called.");
    console.log('isFull: ${isFull}');
  }));

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log('Current count value: ${count}');
  }, [count]);

  return (
    <div style = {{ padding: 16}}>
      <p>{'total ${count} numbers can included.'}</p>

      <button onClick = {increasedCount} disabled = {isFull}>
        enter
      </button>
      <button onClick = {decreaseCount}>exit</button>

      {isFull && <p style = {{ color: "red" }}>The garden is full</p>
    </div>
  );
}

export default Accommodate;      
