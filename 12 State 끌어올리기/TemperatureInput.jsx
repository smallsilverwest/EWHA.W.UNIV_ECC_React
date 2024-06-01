const scaleName = {
  c: "celsius",
  f: "fahrenheit",
};

function TemperatureInput(props) {
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>
          put temperature(scale:{scaleNames[props.sclae]}):</legend>
    </fieldset>
  );
}

export default TemperatureInput;
