import React, { Component } from "react";

class SignIn extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Mail Address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
  };
  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}

export default SignIn;
