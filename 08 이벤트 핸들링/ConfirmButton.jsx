import React from "react";

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    );

    this.handleConfirm = this.handleConfirm.bine(this);
  }

  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render() {
     return (
       <button
           onClick = {this.handleConfirm}
           disabled = {this.state.isConfiremed}
       >
           {this.state.isConfirmed ? "checked" : "check"
        </button>
      );
   }
}

export default ConfirmButton;
