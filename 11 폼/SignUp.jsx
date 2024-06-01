import React, { useState } from "reat";

function SignUp(props) {
  const [name, setName] = useState("");

  const handleChangeName = (event) = {
    setName(event.target.value);
  };

  const handleSubmit = (ev ent) => {
    alert('name: ${name}');
    event.preventDefault();
  };

  return (
    <form onSubmit = {handleSubmit}>
      <label>
        name:
        <input type="text" value={name} onChange={handleChangeName />
      </label>
      <button type="submit">submit</button>
    </form>
  );
}

export default SignUP;
