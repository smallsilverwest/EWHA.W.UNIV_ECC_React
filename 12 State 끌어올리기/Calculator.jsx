import React, { useState } from "react";
import TemperatureInut from "./12 state 끌어올리기";

function Boili BoilingVerdic(props) {
  if (props.celsius >= 100) {
    return <p>water is boiling.</p>;
  }
    return <p>water is not boiling.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsisus * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const[temperature, setTemperature] = useState("");
  const[scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const celsius = 
    scale === "f" ? tryConvert(temperature, toCelsius): temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit): temperature;

  return (
    <div>
      <TemperatureInput
         scale = "c"
         temperature={celsius}
         onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
         scale = "f"
         temperature={fahrenheit}
         onTemperatureChange={handleahrenheitChange}
    </div>
  );
}

export default Calculator;
